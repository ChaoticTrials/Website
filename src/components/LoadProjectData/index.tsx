import React, { useEffect, useState } from 'react';

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

const CACHE_EXPIRATION_MS = 5 * 60 * 1000;
const DATA_CACHE_KEY = 'modMetaData';

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

const FetchModData: React.FC<FetchModDataProps> = ({ children }) => {
    const [data, setData] = useState<ProjectMetadata | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const cachedData = getCache(DATA_CACHE_KEY);
            if (cachedData) {
                setData(cachedData);
            } else {
                try {
                    const response = await fetch('https://raw.githubusercontent.com/ChaoticTrials/ModMeta/HEAD/data/projects.json');
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const jsonData: ProjectMetadata = await response.json();
                    setData(jsonData);
                    setCache(DATA_CACHE_KEY, jsonData);
                } catch (error) {
                    console.error('Fetch error:', error);
                }
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
