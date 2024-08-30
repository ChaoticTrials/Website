import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import ModTable from "@site/src/components/ModTable";

import styles from './index.module.css';
import React from "react";
import FetchModData, {ProjectMetadata} from "@site/src/components/LoadProjectData";

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <Heading as="h1" className="hero__title">
                    {siteConfig.title}
                </Heading>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="/docs/intro">
                        Discover all the mod wikis 📖
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home(): React.JSX.Element {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title="Overview"
            description="Chaotic Trials - Trial and Error, with a lot of error">
            <HomepageHeader/>
            <main>
                <FetchModData>
                    {(data) => <ModTable data={data as ProjectMetadata}/>}
                </FetchModData>
                {/*<HomepageFeatures />*/}
            </main>
        </Layout>
    );
}
