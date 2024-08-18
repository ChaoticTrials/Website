import React, {useEffect, useState} from 'react';

export interface Project {
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

export interface ProjectMetadata {
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
}

interface FetchModDataProps {
    children: (data: ProjectMetadata) => React.ReactNode;
}

const FetchModData: React.FC<FetchModDataProps> = ({children}) => {
    const [data, setData] = useState<ProjectMetadata | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://raw.githubusercontent.com/ChaoticTrials/ModMeta/HEAD/data/projects.json'); // todo find better location
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const jsonData: ProjectMetadata = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {data ? children(data) : <p>Loading data...</p>}
        </div>
    );
};

export default FetchModData;