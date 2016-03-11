import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import {parse} from 'marked';

@inject(HttpClient)
export class Resources {
  heading = 'Learning Resources';

  constructor(http) {
    this.marked = parse;
    this.http = http;
    this.plugins = [];
  }

  activate(params, routeConfig, navigationInstruction) {
    return this.http.get('https://cdn.rawgit.com/aurelia/registry/master/plugin-registry.json')
      .then(response => {
        this.pluginsRaw = JSON.parse(response.response).plugins;
        for (var key of Object.keys(this.pluginsRaw)) {
          let plugin = this.pluginsRaw[key];
          let url = 'https://api.github.com/repos/' + plugin.location + '?access_token=c0f3e86108889f523f8c3bc7e0d850d75f61feda';  
        //   this.http.get(url)
        //     .then(response => {
        //       let foo = plugin;
        //       let repoInformation = JSON.parse(response.response);
        //       foo.repoInformation = repoInformation;
        //       this.plugins.push(foo);
        //     });
        
            this.plugins.push(plugin);
        }
      });
  }
}
