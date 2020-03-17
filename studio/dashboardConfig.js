export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5e70b031d9961702c84ec22d',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-5ji8ne4d',
                  apiId: 'ba4a2491-311e-43c8-b416-5907464dd0e7'
                },
                {
                  buildHookId: '5e70b031d05ac9189bab9eca',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-s4ut775j',
                  apiId: '48e74c17-0076-417c-8518-0b67834cac0d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/icraigshaw/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-s4ut775j.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
