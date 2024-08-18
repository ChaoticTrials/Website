import React from 'react';
import FetchModData, {ProjectMetadata} from "@site/src/components/LoadProjectData";

interface ProjectBadgesProps {
    slug: string | { cf: string; mr: string };
}

const ProjectBadges: React.FC<ProjectBadgesProps> = ({slug}) => {
    return (
        <FetchModData>
            {(data: ProjectMetadata) => {
                // Extract specific project based on slug
                const project = data.projects.find((project) =>
                    typeof project.slug === 'string'
                        ? project.slug === slug
                        : project.slug.cf === slug || project.slug.mr === slug
                );

                if (!project) {
                    return <div>Project not found.</div>;
                }

                const cfUrl =
                    typeof project.slug === 'string'
                        ? `${data.curseforge.base_url}${project.slug}`
                        : `${data.curseforge.base_url}${project.slug.cf}`;
                const mrUrl =
                    project.mr_id &&
                    (typeof project.slug === 'string'
                        ? `${data.modrinth.base_url}${project.slug}`
                        : `${data.modrinth.base_url}${project.slug.mr}`);
                const githubUrl =
                    project.github
                        ? `${data.github.base_url}${project.github}`
                        : undefined;

                return (
                    <div>
                        {mrUrl && (
                            <a href={mrUrl}>
                                <img style={{paddingRight: "0.25rem"}}
                                     src={data.modrinth.badge_url.replace('{}', project.mr_id!)}
                                     alt={`Modrinth ${project.name}`}
                                />
                            </a>
                        )}
                        {cfUrl && (
                            <a href={cfUrl}>
                                <img style={{paddingRight: "0.25rem"}}
                                     src={data.curseforge.badge_url.replace('{}', project.cf_id)}
                                     alt={`CurseForge ${project.name}`}
                                />
                            </a>
                        )}
                        {githubUrl && (
                            <a href={githubUrl}>
                                <img style={{paddingRight: "0.25rem"}}
                                     src={data.github.badge_url.replace('{}', project.github!)}
                                     alt={`GitHub ${project.name}`}
                                />
                            </a>
                        )}

                        {!project.maintained && (
                            <p><strong>{project.name}</strong> in no longer maintained.</p>
                        )}
                    </div>
                );
            }}
        </FetchModData>
    );
};

export default ProjectBadges;
