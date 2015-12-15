import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import {parse} from 'marked';

@inject(HttpClient)
export class Resources {
  heading = 'Learning Resources';

  constructor(http) {
    this.marked = parse;
    this.http = http;
  }

  activate(params, routeConfig, navigationInstruction) {
    return this.http.get('https://cdn.rawgit.com/riddla/awesome-aurelia/master/README.md')
      .then(response => {
        this.content = response.response;
        this.formattedContent = this.marked(this.content);
      });
  }
}
