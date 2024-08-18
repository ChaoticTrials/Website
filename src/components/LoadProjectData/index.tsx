import React, { useEffect, useState } from 'react';

interface FetchModDataProps {
    children: (data: any) => React.ReactNode;
}

const FetchModData: React.FC<FetchModDataProps> = ({ children }) => {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://raw.githubusercontent.com/ChaoticTrials/ModMeta/HEAD/data/projects.json'); // todo find better location
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const jsonData = await response.json();
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
