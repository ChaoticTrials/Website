import React, {useState} from 'react';
import './styles.module.css';
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
        wiki_url,
        github: {base_url: githubBaseUrl, badge_url: githubBadgeUrl},
        curseforge: {base_url: cfBaseUrl, badge_url: cfBadgeUrl},
        modrinth: {base_url: mrBaseUrl, badge_url: mrBadgeUrl},
        projects,
    } = data;

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem 0',
            minHeight: '100vh',
        }}>
            <div style={{float: 'left', display: 'flex', justifyContent: 'center'}}>
                <form onSubmit={(e) => e.preventDefault()}>
                    <input
                        id="mx-mods-table-search-input"
                        type="text"
                        className="mx-wiki-input"
                        placeholder="Search"
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{
                            width: '18.75rem',
                            padding: '0.5rem',
                            borderRadius: '2rem',
                            border: '0px',
                            backgroundColor: '#ebedf0'
                        }}
                    />
                </form>
            </div>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <table>
                    <thead>
                    <tr>
                        <th style={{textAlign: 'center'}}>Name</th>
                        <th style={{textAlign: 'center'}}>CurseForge</th>
                        <th style={{textAlign: 'center'}}>Modrinth</th>
                        <th style={{textAlign: 'center'}}>GitHub</th>
                        <th style={{textAlign: 'center'}}>Maintained</th>
                        <th
                            style={{textAlign: 'center', cursor: 'pointer'}}
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
                                                `docs/mods/${typeof project.slug === 'string' ? project.slug : project.slug.cf}`
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
                                    <td>
                                        {project.maintained ? '✔️' : '❌'}
                                    </td>

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
    );
};

export default ModTable;