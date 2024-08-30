import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

function getNextVersionName() {
    return '1.17';
}

const config: Config = {
    title: 'Chaotic Trials',
    tagline: 'Minecraft Mods created for Forge and NeoForge',
    favicon: 'img/favicon.ico',

    url: 'https://chaotictrials.de/',
    baseUrl: '/',

    organizationName: 'ChaoticTrials',
    projectName: 'Website',

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    plugins: [
        require.resolve('docusaurus-lunr-search'),
    ],

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                    editUrl: 'https://github.com/ChaoticTrials/Website/tree/main/',
                    versions: {
                        current: {
                            label: `${getNextVersionName()}`,
                        },
                    },
                },
                blog: {
                    showReadingTime: true,
                    feedOptions: {
                        type: ['rss', 'atom'],
                        xslt: true,
                    },
                    editUrl: 'https://github.com/ChaoticTrials/Website/tree/main/',
                    onInlineTags: 'warn',
                    onInlineAuthors: 'warn',
                    onUntruncatedBlogPosts: 'warn',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        image: 'img/social-card.png',
        navbar: {
            title: 'Chaotic Trials',
            logo: {
                alt: 'Chaotic Trials Logo',
                src: 'img/logoDark.svg',
                srcDark: 'img/logoLight.svg',
            },
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'tutorialSidebar',
                    position: 'left',
                    label: 'Wiki',
                },
                // {to: '/blog', label: 'Blog', position: 'left'},
                {
                    href: 'https://github.com/ChaoticTrials/Website',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Docs',
                    items: [
                        {
                            label: 'Wiki',
                            to: '/docs/intro',
                        },
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Discord',
                            href: 'https://discord.chaotictrials.de',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [
                        // {
                        //     label: 'Blog',
                        //     to: '/blog',
                        // },
                        {
                            label: 'Modrinth',
                            href: 'https://modrinth.com/user/MelanX',
                        },
                        {
                            label: 'CurseForge',
                            href: 'https://www.curseforge.com/members/melanx',
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/ChaoticTrials',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Chaotic Trials, Built with Docusaurus.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.nightOwl,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
