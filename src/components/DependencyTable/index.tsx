import * as React from 'react';

interface Props {
    slug: string;
}

interface Project {
    id: string;
    slug: string;
    name: string;
}

const DependencyTable: React.FC<Props> = ({ slug }) => {
    const [projectData, setProjectData] = React.useState<any>(null);
    const [versionsData, setVersionsData] = React.useState<any>(null);
    const [uniqueProjectIds, setUniqueProjectIds] = React.useState<{ [key: string]: boolean }>({});
    const [projectsData, setProjectsData] = React.useState<Project[] | null>(null);

    React.useEffect(() => {
        const fetchProjectData = async () => {
            try {
                const response = await fetch(`https://api.modrinth.com/v3/project/${slug}`);
                const data = await response.json();
                setProjectData(data);
            } catch (error) {
                console.error('Error fetching project data:', error);
            }
        };

        fetchProjectData();
    }, [slug]);

    React.useEffect(() => {
        if (projectData && projectData.versions) {
            const fetchVersionsData = async () => {
                try {
                    const idsParam = JSON.stringify(projectData.versions);
                    const response = await fetch(`https://api.modrinth.com/v3/versions?ids=${idsParam}`);
                    const versions = await response.json();
                    setVersionsData(versions);

                    const projectIds: { [key: string]: boolean } = {};
                    versions.forEach((version: any) => {
                        if (version.dependencies) {
                            version.dependencies.forEach((dependency: any) => {
                                projectIds[dependency.project_id] = dependency.dependency_type === "required";
                            });
                        }
                    });
                    setUniqueProjectIds(projectIds);
                } catch (error) {
                    console.error('Error fetching versions data:', error);
                }
            };

            fetchVersionsData();
        }
    }, [projectData]);

    React.useEffect(() => {
        const projectIdsArray = Object.keys(uniqueProjectIds);
        if (projectIdsArray.length > 0) {
            const fetchProjectsData = async () => {
                try {
                    const idsParam = JSON.stringify(projectIdsArray);
                    const response = await fetch(`https://api.modrinth.com/v3/projects?ids=${idsParam}`);
                    const data = await response.json();
                    setProjectsData(data.sort((a: Project, b: Project) => a.name.localeCompare(b.name)));
                } catch (error) {
                    console.error('Error fetching projects data:', error);
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

export default DependencyTable;