export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'welcome'], name: 'welcome', moduleId: 'welcome', nav: true, title: 'Welcome' },
      { route: 'resources', name: 'resources', moduleId: 'resources', nav: true, title: 'Resources' },
      { route: 'pluginlist', name: 'pluginlist', moduleId: 'pluginlist', nav: true, title: 'Plugin List' }
    ]);

    this.router = router;
  }
}
