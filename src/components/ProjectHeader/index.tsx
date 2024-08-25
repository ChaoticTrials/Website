import React from 'react';
import ProjectBadges from '@site/src/components/LoadProjectBadges';
import DependencyTable from '@site/src/components/DependencyTable';

interface Props {
    slug: string;
    mcVersion: string;
}

const ProjectHeader: React.FC<Props> = ({slug, mcVersion}) => {
    return (
        <div>
            <ProjectBadges slug={slug}/>
            <DependencyTable slug={slug} mcVersion={mcVersion || '1.16'}/>
        </div>
    );
};

export default ProjectHeader;