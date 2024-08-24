import React from 'react';
import ProjectBadges from '@site/src/components/LoadProjectBadges';
import DependencyTable from '@site/src/components/DependencyTable';

interface Props {
    slug: string;
}

const ProjectHeader: React.FC<Props> = ({slug}) => {
    return (
        <div>
            <ProjectBadges slug={slug}/>
            <DependencyTable slug={slug}/>
        </div>
    );
};

export default ProjectHeader;