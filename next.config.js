const projects = require('./constants').projects;
const press = require('./constants').press;
const langs = ['en', 'ru'];
module.exports = {
  exportTrailingSlash: true,
  exportPathMap: async function () {
    const paths = {
      '': { page: '' },
      '/about': { page: '/about' },
      '/inspiration': { page: '/inspiration' },
      '/contacts': { page: '/contacts' },
      '/press': { page: '/press' },
    };
    press.forEach(project => {
      paths[`/press/${project.id}`] = {
        page: '/press/[id]',
      };
    });
    projects.forEach(project => {
      paths[`/project/${project.id}`] = {
        page: '/project/[id]',
      };
    });
    const langPaths = {};
    for (const key in paths) {
      langs.forEach(lang => {
        langPaths[`/${lang}${key}`] = {
          page: `/[lang]${paths[key].page}`,
          query: { lang: lang },
        };
      });
    }
    return langPaths;
    //return paths;
  },
};
