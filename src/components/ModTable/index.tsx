import React, {useState} from 'react';
import styles from './styles.module.css';
import {ProjectMetadata} from "@site/src/components/LoadProjectData";

interface ModTableProps {
    data?: ProjectMetadata;
}

const ModTable: React.FC<ModTableProps> = ({data}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [showVersions, setShowVersions] = useState(false);

    if (!data) {
        return <div>Loading...</div>;
    }

    const {
        github: {base_url: githubBaseUrl, badge_url: githubBadgeUrl},
        curseforge: {base_url: cfBaseUrl, badge_url: cfBadgeUrl},
        modrinth: {base_url: mrBaseUrl, badge_url: mrBadgeUrl},
        projects,
    } = data;

    return (
        <div className={styles.tableDiv}>
            <div style={{float: 'left', display: 'flex', justifyContent: 'center'}}>
                <form onSubmit={(e) => e.preventDefault()}>
                    <input
                        id="mx-mods-table-search-input"
                        type="text"
                        className={styles.mxWikiInput}
                        placeholder="Search"
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </form>
            </div>
            <div className={styles.tableContainer}>
                <div className={styles.tableWrapper}>
                    <table className={styles.responsiveTable}>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>CurseForge</th>
                            <th>Modrinth</th>
                            <th>GitHub</th>
                            <th>Maintained</th>
                            <th
                                style={{cursor: 'pointer'}}
                                onClick={() => setShowVersions(!showVersions)}
                            >
                                    <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                        Show available versions
                                        <span style={{
                                            marginLeft: '0.5rem',
                                            transform: showVersions ? 'rotate(90deg)' : 'rotate(0deg)',
                                            transition: 'transform 0.3s',
                                        }}>
                                            ➤
                                        </span>
                                    </span>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {projects
                            .filter((project) =>
                                project.name.toLowerCase().includes(searchTerm.toLowerCase())
                            )
                            .map((project) => {
                                const cfUrl =
                                    typeof project.slug === 'string'
                                        ? `${cfBaseUrl}${project.slug}`
                                        : `${cfBaseUrl}${project.slug.cf}`;
                                const mrUrl =
                                    project.mr_id &&
                                    (typeof project.slug === 'string'
                                        ? `${mrBaseUrl}${project.slug}`
                                        : `${mrBaseUrl}${project.slug.mr}`);
                                const githubUrl = project.github
                                    ? `${githubBaseUrl}${project.github}`
                                    : undefined;
                                return (
                                    <tr key={project.name}>
                                        <td>
                                            <a
                                                href={
                                                    project.wiki_url ||
                                                    `docs/wiki/mods/${typeof project.slug === 'string' ? project.slug : project.slug.mr}`
                                                }
                                            >
                                                {project.name}
                                            </a>
                                        </td>
                                        <td>
                                            <a href={cfUrl}>
                                                <img
                                                    src={cfBadgeUrl.replace('{}', project.cf_id)}
                                                    alt={`CurseForge ${project.name}`}
                                                />
                                            </a>
                                        </td>
                                        <td>
                                            {mrUrl ? (
                                                <a href={mrUrl}>
                                                    <img
                                                        src={mrBadgeUrl.replace('{}', project.mr_id!)}
                                                        alt={`Modrinth ${project.name}`}
                                                    />
                                                </a>
                                            ) : (
                                                "Not available"
                                            )}
                                        </td>
                                        <td>
                                            {githubUrl ? (
                                                <a href={githubUrl}>
                                                    <img
                                                        src={githubBadgeUrl.replace('{}', project.github!)}
                                                        alt={`GitHub ${project.name}`}
                                                    />
                                                </a>
                                            ) : (
                                                "Not available"
                                            )}
                                        </td>
                                        <td>{project.maintained ? '✔️' : '❌'}</td>
                                        <td>
                                            {showVersions && (
                                                mrUrl ? (
                                                    <img
                                                        src={`https://badges.moddingx.org/modrinth/versions/${project.mr_id}?style=flat`}
                                                        alt={`Versions for ${project.name}`}
                                                    />
                                                ) : (
                                                    <img
                                                        src={`https://badges.moddingx.org/curseforge/versions/${project.cf_id}?style=flat`}
                                                        alt={`Versions for ${project.name}`}
                                                    />
                                                )
                                            )}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ModTable;