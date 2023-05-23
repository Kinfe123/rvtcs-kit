export type SidebarItem = {
  title: string;
  slug?: string;
  children: Array<{
    title: string;
    slug: string;
    status?: string;
  }>;
};

export const SIDEBAR: Array<SidebarItem> = [
  {
    title: 'Getting Started',
    children: [
      {
        title: 'Overview',
        slug: '/docs',
      },
      {
        title: 'Other Details',
        slug: '/docs/detail',
      },
      {
        title: 'Deployment',
        slug: '/docs/deploy',
      },
    ],
  },
];
