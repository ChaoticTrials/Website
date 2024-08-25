import * as React from 'react';

interface Props {
    slug: string;
    mcVersion: string;
}

interface Project {
    id: string;
    slug: string;
    name: string;
}

// Define a global constant for the headers
const HEADERS = {
    'User-Agent': 'GitHub@ChaoticTrials/Website'
};

const CACHE_EXPIRATION_MS = 5 * 60 * 1000;

const setCache = (key: string, data: any) => {
    const timestampedData = {
        timestamp: Date.now(),
        data
    };

    localStorage.setItem(key, JSON.stringify(timestampedData));
};

const getCache = (key: string) => {
    const cachedItem = localStorage.getItem(key);
    if (!cachedItem) return null;

    const { timestamp, data } = JSON.parse(cachedItem);
    if (Date.now() - timestamp > CACHE_EXPIRATION_MS) {
        localStorage.removeItem(key);
        return null;
    }

    return data;
};

const DependencyTable: React.FC<Props> = ({ slug, mcVersion }) => {
    const [projectData, setProjectData] = React.useState<any>(null);
    const [versionsData, setVersionsData] = React.useState<any>(null);
    const [uniqueProjectIds, setUniqueProjectIds] = React.useState<{ [key: string]: boolean }>({});
    const [projectsData, setProjectsData] = React.useState<Project[] | null>(null);

    React.useEffect(() => {
        const fetchProjectData = async () => {
            const cacheKey = `projectData_${slug}`;
            const cachedData = getCache(cacheKey);
            if (cachedData) {
                setProjectData(cachedData);
            } else {
                try {
                    const response = await fetch(`https://api.modrinth.com/v3/project/${slug}`, {
                        headers: HEADERS
                    });
                    const data = await response.json();
                    setProjectData(data);
                    setCache(cacheKey, data);
                } catch (error) {
                    console.error('Error fetching project data:', error);
                }
            }
        };

        fetchProjectData();
    }, [slug]);

    React.useEffect(() => {
        if (projectData && projectData.versions) {
            const fetchVersionsData = async () => {
                const cacheKey = `versionsData_${slug}`;
                const cachedData = getCache(cacheKey);
                if (cachedData) {
                    setVersionsData(cachedData);
                    setUniqueProjectIds(processVersions(cachedData, mcVersion));
                } else {
                    try {
                        const idsParam = JSON.stringify(projectData.versions);
                        const response = await fetch(`https://api.modrinth.com/v3/versions?ids=${idsParam}`, {
                            headers: HEADERS,
                        });

                        const versions = await response.json();
                        setVersionsData(versions);
                        setCache(cacheKey, versions);
                        setUniqueProjectIds(processVersions(versions, mcVersion));
                    } catch (error) {
                        console.error('Error fetching versions data:', error);
                    }
                }
            };
            fetchVersionsData();
        }
    }, [projectData, slug]);

    React.useEffect(() => {
        const projectIdsArray = Object.keys(uniqueProjectIds);
        if (projectIdsArray.length > 0) {
            const fetchProjectsData = async () => {
                const cacheKey = `projectsData_${JSON.stringify(projectIdsArray)}_${mcVersion}`;
                const cachedData = getCache(cacheKey);
                if (cachedData) {
                    setProjectsData(cachedData.sort((a: Project, b: Project) => a.name.localeCompare(b.name)));
                } else {
                    try {
                        const idsParam = JSON.stringify(projectIdsArray);
                        const response = await fetch(`https://api.modrinth.com/v3/projects?ids=${idsParam}`, {
                            headers: HEADERS
                        });
                        const data = await response.json();
                        setProjectsData(data.sort((a: Project, b: Project) => a.name.localeCompare(b.name)));
                        setCache(cacheKey, data);
                    } catch (error) {
                        console.error('Error fetching projects data:', error);
                    }
                }
            };

            fetchProjectsData();
        }
    }, [uniqueProjectIds]);

    const renderDependencies = (isRequired: boolean) => {
        return projectsData ?
            projectsData
                .filter(project => uniqueProjectIds[project.id] === isRequired)
                .map(project => (
                    <div key={project.id}>
                        <a href={`https://modrinth.com/mod/${project.slug}`}>{project.name}</a>
                    </div>
                ))
            : 'Loading...';
    };

    const hasRequiredDependencies = Object.values(uniqueProjectIds).includes(true);
    const hasOptionalDependencies = Object.values(uniqueProjectIds).includes(false);

    return (
        <div>
            {(hasRequiredDependencies || hasOptionalDependencies) && (
                <table>
                    <thead>
                    <tr>
                        {hasRequiredDependencies && <th>Required</th>}
                        {hasOptionalDependencies && <th>Optional</th>}
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        {hasRequiredDependencies && <td>{renderDependencies(true)}</td>}
                        {hasOptionalDependencies && <td>{renderDependencies(false)}</td>}
                    </tr>
                    </tbody>
                </table>
            )}
        </div>
    );
};

const processVersions = (versions: any[], mcVersion: string) => {
    const projectIds: { [key: string]: boolean } = {};
    versions.forEach((version: any) => {
        if (version.dependencies && version.game_versions && version.game_versions.some((gv: string) => gv.startsWith(mcVersion))) {
            version.dependencies.forEach((dependency: any) => {
                projectIds[dependency.project_id] = dependency.dependency_type === "required";
            });
        }
    });
    return projectIds;
};

export default DependencyTable;