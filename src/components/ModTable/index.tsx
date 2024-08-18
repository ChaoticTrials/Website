import React, {useState} from 'react';
import './styles.module.css';

interface Project {
    name: string;
    slug: string | { cf: string; mr: string };
    cf_id: string;
    mr_id?: string;
    github?: string;
    maintained: boolean;
    wiki_url?: string;
    yt_video?: {
        type: string;
        id: string;
    };
}

interface ModTableProps {
    data: {
        wiki_url: string;
        github: {
            base_url: string;
            badge_url: string;
        };
        curseforge: {
            base_url: string;
            badge_url: string;
        };
        modrinth: {
            base_url: string;
            badge_url: string;
        };
        discord_invite: string;
        projects: Project[];
    };
}

const ModTable: React.FC<ModTableProps> = ({data}) => {
    const [searchTerm, setSearchTerm] = useState('');

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
                        style={{ width: '18.75rem', padding: '0.5rem' }}
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
                                    <td style={{textAlign: 'center'}}>
                                        <a
                                            href={
                                                project.wiki_url ||
                                                `${wiki_url}${typeof project.slug === 'string' ? project.slug : project.slug.cf}`
                                            }
                                        >
                                            {project.name}
                                        </a>
                                    </td>
                                    <td style={{textAlign: 'center'}}>
                                        <a href={cfUrl}>
                                            <img
                                                src={cfBadgeUrl.replace('{}', project.cf_id)}
                                                alt={`CurseForge ${project.name}`}
                                            />
                                        </a>
                                    </td>
                                    <td style={{textAlign: 'center'}}>
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
                                    <td style={{textAlign: 'center'}}>
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
                                    <td style={{textAlign: 'center'}}>
                                        {project.maintained ? '✔️' : '❌'}
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