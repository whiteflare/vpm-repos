// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'whiteflare\’s vpm-repos',
  tagline: 'whiteflareの提供するツール類のVPMリポジトリです。',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://whiteflare.github.io',

  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/vpm-repos/',

  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'whiteflare', // Usually your GitHub org/user name.
  projectName: 'vpm-repos', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
//      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'whiteflare\’s vpm-repos',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            label: 'VCCに追加する',
            href: 'https://whiteflare.github.io/vpm-repos/addrepos.html',
          },
          {
            label: '説明書',
            to: '/docs/intro',
          },
        ],
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'UnlitWF Shader',
                to: '/docs/unlitwf',
              },
              {
                label: 'Flare\'s Avatar|World Tools',
                to: '/docs/tools',
              },
            ],
          },
          {
            title: 'Contact',
            items: [
              {
                label: 'X-Twitter',
                href: 'https://twitter.com/whiteflare',
              },
              {
                label: 'misskey.niri.la',
                href: 'https://misskey.niri.la/@whiteflare',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'VRChat Profile',
                href: 'https://vrchat.com/home/user/usr_31c73d9c-fc74-4291-9e84-fb44e4f90c6c',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/whiteflare',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} whiteflare. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
