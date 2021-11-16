export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'sanity-cloudflare-events-demo-studio',
                  apiId: '50bf3220-ea57-4e34-9ea8-5830a08656f5'
                },
                {
                  buildHookId: '6193f70ec886bb4b0b92601a',
                  title: 'Events Website',
                  name: 'sanity-cloudflare-events-demo',
                  apiId: '97eef771-2cd4-4364-a45e-1eb4456c9acc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kapehe-ok/sanity-cloudflare-events-demo',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-cloudflare-events-demo.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
