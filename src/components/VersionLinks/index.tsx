import React, { useState, useEffect } from 'react';
import { useAllDocsData } from '@docusaurus/plugin-content-docs/client';
import { useActiveDocContext } from '@docusaurus/plugin-content-docs/client';

const VersionLinks = () => {
    const [availableVersions, setAvailableVersions] = useState([]);
    const allDocsData = useAllDocsData();
    const { activeVersion, activeDoc } = useActiveDocContext(undefined);

    useEffect(() => {
        if (!activeVersion || !activeDoc) return;

        const currentDocId = activeDoc.id;

        const versionsWithDoc = allDocsData["default"].versions
            .map(version => {
                const versionDocs = version.docs;
                const docExists = versionDocs.some(doc => doc.id === currentDocId);

                if (docExists) {
                    const docMetadata = versionDocs.find(doc => doc.id === currentDocId);
                    return {
                        version: version.label,
                        link: docMetadata.path,
                    };
                }

                return null;
            })
            .filter(Boolean)
            .sort((a, b) => {
                return a.version.localeCompare(b.version, undefined, { numeric: true });
            });

        setAvailableVersions(versionsWithDoc);
    }, [allDocsData, activeVersion, activeDoc]);

    if (availableVersions.length <= 1) {
        return null;
    }

    return (
        <div className="version-links">
            <table>
                <thead>
                <tr>
                    <th colSpan={availableVersions.length}>Available Versions</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    {availableVersions.map(({ version, link }) => (
                        <td key={version}>
                            <a href={link}>{version}</a>
                        </td>
                    ))}
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default VersionLinks;
