import clsx from 'clsx';
import styles from './styles.module.css';
import React from "react";

type VersionItem = {
    title: string;
    description: React.JSX.Element;
};

const VersionList: VersionItem[] = [
    {
        title: '1.17',
        description: (
            <>
                Most mods will be skipped in this version.
            </>
        ),
    },
    {
        title: '1.18',
        description: (
            <>
                Many "bad" mods were dropped in this version.
            </>
        ),
    },
    {
        title: '1.19',
        description: (
            <>
                Nearly everything will be ported or transformed into new mods.
            </>
        ),
    },
    {
        title: '1.20',
        description: (
            <>
                No mods are planned to be dropped.
            </>
        ),
    },
    {
        title: '1.21',
        description: (
            <>
                The transition from Forge to NeoForge is causing delays.
            </>
        ),
    },
];

const Version: React.FC<VersionItem> = ({title, description}) => {
    return (
        <div className={clsx('col col--4', styles.zoomEffect)}>
            <a href={`/porting/version/${title}`} className={styles.noLinkStyle}>
                <div className="text--center">
                    <div className={styles.customTitle}>{title}</div>
                </div>
                <div className="text--center">
                    <p>{description}</p>
                </div>
            </a>
        </div>
    );
};

export default function McVersions(): React.JSX.Element {
    return (
        <section className={styles.versions}>
            <div className="container">
                <div className={clsx('row', styles.centeredRow)}>
                    {VersionList.map((props, idx) => (
                        <Version key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
