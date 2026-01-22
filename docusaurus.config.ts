import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Terpa Solutions Developers',
  tagline:
    'Integra tus desarrollos a Terpa Solutions para acceder en tiempo real a la información de tus máquinas. Consulta su estado de conexión, ventas, métodos de pago, níveles de inventario, y más.',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://terpasolutions.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'terpa-solutions', // Usually your GitHub org/user name.
  projectName: 'terpa-developer-docs', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/terpa-solutions/terpa-developer-docs/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      logo: {
        alt: 'Terpa Solutions',
        src: 'img/logo-dark.svg',
        srcDark: 'img/logo-light.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentacion',
        },
        {
          href: 'https://app.terpasolutions.com/profile/api-keys',
          label: 'API Keys',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Descubre',
          items: [
            {label: 'Features', href: '#'},
            {label: 'Integrations', href: '#'},
            {label: 'Pricing', href: '#'},
            {label: 'About', href: '#'},
            {label: 'Contact', href: '#'},
            {label: 'Privacy policy', href: '#'},
          ],
        },
        {
          title: 'Docs',
          items: [
            {label: 'Introduccion', to: '/docs/intro'},
            {label: 'API Keys', href: 'https://app.terpasolutions.com/profile/api-keys'},
          ],
        },
        {
          title: 'Contacto',
          items: [
            {label: 'WhatsApp', href: 'https://wa.me/5218146940849'},
            {label: 'Email', href: 'mailto:ventas@terpasolutions.com'},
            {label: 'Instagram', href: 'https://www.instagram.com/terpasolutions/'},
            {label: 'LinkedIn', href: 'https://www.linkedin.com/company/terpasolutions/'},
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Terpa Solutions. Todos los derechos reservados.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
