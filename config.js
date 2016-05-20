System.config({
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "es7.decorators",
      "es7.classProperties"
    ]
  },
  paths: {
    "*": "dist/*",
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  bundles: {
    "app-build-84d02bd612.js": [
      "app.html!github:systemjs/plugin-text@0.0.3.js",
      "app.js",
      "blur-image.js",
      "child-router.html!github:systemjs/plugin-text@0.0.3.js",
      "child-router.js",
      "main.js",
      "nav-bar.html!github:systemjs/plugin-text@0.0.3.js",
      "pluginlist.html!github:systemjs/plugin-text@0.0.3.js",
      "pluginlist.js",
      "resources.html!github:systemjs/plugin-text@0.0.3.js",
      "resources.js",
      "welcome.html!github:systemjs/plugin-text@0.0.3.js",
      "welcome.js"
    ],
    "aurelia-74b0afde26.js": [
      "github:components/jquery@2.1.4.js",
      "github:components/jquery@2.1.4/jquery.js",
      "github:jspm/nodelibs-process@0.1.2.js",
      "github:jspm/nodelibs-process@0.1.2/index.js",
      "github:twbs/bootstrap@3.3.6.js",
      "github:twbs/bootstrap@3.3.6/css/bootstrap.css!github:systemjs/plugin-text@0.0.3.js",
      "github:twbs/bootstrap@3.3.6/js/bootstrap.js",
      "npm:aurelia-animator-css@1.0.0-beta.1.0.1.js",
      "npm:aurelia-animator-css@1.0.0-beta.1.0.1/aurelia-animator-css.js",
      "npm:aurelia-binding@1.0.0-beta.1.0.2.js",
      "npm:aurelia-binding@1.0.0-beta.1.0.2/aurelia-binding.js",
      "npm:aurelia-bootstrapper@1.0.0-beta.1.js",
      "npm:aurelia-bootstrapper@1.0.0-beta.1/aurelia-bootstrapper.js",
      "npm:aurelia-dependency-injection@1.0.0-beta.1.js",
      "npm:aurelia-dependency-injection@1.0.0-beta.1/aurelia-dependency-injection.js",
      "npm:aurelia-event-aggregator@1.0.0-beta.1.js",
      "npm:aurelia-event-aggregator@1.0.0-beta.1/aurelia-event-aggregator.js",
      "npm:aurelia-fetch-client@1.0.0-beta.1.0.1.js",
      "npm:aurelia-fetch-client@1.0.0-beta.1.0.1/aurelia-fetch-client.js",
      "npm:aurelia-framework@1.0.0-beta.1.0.3.js",
      "npm:aurelia-framework@1.0.0-beta.1.0.3/aurelia-framework.js",
      "npm:aurelia-history-browser@1.0.0-beta.1.0.1.js",
      "npm:aurelia-history-browser@1.0.0-beta.1.0.1/aurelia-history-browser.js",
      "npm:aurelia-history@1.0.0-beta.1.js",
      "npm:aurelia-history@1.0.0-beta.1/aurelia-history.js",
      "npm:aurelia-loader-default@1.0.0-beta.1.0.1.js",
      "npm:aurelia-loader-default@1.0.0-beta.1.0.1/aurelia-loader-default.js",
      "npm:aurelia-loader@1.0.0-beta.1.js",
      "npm:aurelia-loader@1.0.0-beta.1/aurelia-loader.js",
      "npm:aurelia-logging-console@1.0.0-beta.1.js",
      "npm:aurelia-logging-console@1.0.0-beta.1/aurelia-logging-console.js",
      "npm:aurelia-logging@1.0.0-beta.1.js",
      "npm:aurelia-logging@1.0.0-beta.1/aurelia-logging.js",
      "npm:aurelia-metadata@1.0.0-beta.1.js",
      "npm:aurelia-metadata@1.0.0-beta.1/aurelia-metadata.js",
      "npm:aurelia-pal-browser@1.0.0-beta.1.js",
      "npm:aurelia-pal-browser@1.0.0-beta.1/aurelia-pal-browser.js",
      "npm:aurelia-pal@1.0.0-beta.1.js",
      "npm:aurelia-pal@1.0.0-beta.1/aurelia-pal.js",
      "npm:aurelia-path@1.0.0-beta.1.js",
      "npm:aurelia-path@1.0.0-beta.1/aurelia-path.js",
      "npm:aurelia-route-recognizer@1.0.0-beta.1.js",
      "npm:aurelia-route-recognizer@1.0.0-beta.1/aurelia-route-recognizer.js",
      "npm:aurelia-router@1.0.0-beta.1.js",
      "npm:aurelia-router@1.0.0-beta.1/aurelia-router.js",
      "npm:aurelia-task-queue@1.0.0-beta.1.js",
      "npm:aurelia-task-queue@1.0.0-beta.1/aurelia-task-queue.js",
      "npm:aurelia-templating-binding@1.0.0-beta.1.0.1.js",
      "npm:aurelia-templating-binding@1.0.0-beta.1.0.1/aurelia-templating-binding.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.2.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.2/analyze-view-factory.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.2/array-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.2/aurelia-templating-resources.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.2/binding-mode-behaviors.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.2/binding-signaler.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.2/compile-spy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.2/compose.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.2/css-resource.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.2/debounce-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.2/dynamic-element.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.2/focus.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.2/html-sanitizer.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.2/if.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.2/map-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.2/null-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.2/number-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.2/repeat-strategy-locator.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.2/repeat-utilities.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.2/repeat.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.2/replaceable.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.2/sanitize-html.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.2/show.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.2/signal-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.2/throttle-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.2/update-trigger-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.2/view-spy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.2/with.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.0.2.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.0.2/aurelia-templating-router.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.0.2/route-href.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.0.2/route-loader.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.0.2/router-view.js",
      "npm:aurelia-templating@1.0.0-beta.1.0.1.js",
      "npm:aurelia-templating@1.0.0-beta.1.0.1/aurelia-templating.js",
      "npm:core-js@1.2.6.js",
      "npm:core-js@1.2.6/client/shim.min.js",
      "npm:process@0.11.2.js",
      "npm:process@0.11.2/browser.js"
    ]
  },

  map: {
    "aurelia-animator-css": "npm:aurelia-animator-css@1.0.0-beta.1.0.1",
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.0-beta.1",
    "aurelia-fetch-client": "npm:aurelia-fetch-client@1.0.0-beta.1.0.1",
    "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.0.3",
    "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0-beta.1.0.1",
    "aurelia-http-client": "npm:aurelia-http-client@1.0.0-beta.1",
    "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0-beta.1.0.1",
    "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-beta.1",
    "aurelia-router": "npm:aurelia-router@1.0.0-beta.1",
    "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0-beta.1.0.1",
    "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-beta.1.0.2",
    "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0-beta.1.0.2",
    "babel": "npm:babel-core@5.8.34",
    "babel-runtime": "npm:babel-runtime@5.8.34",
    "bootstrap": "github:twbs/bootstrap@3.3.6",
    "core-js": "npm:core-js@1.2.6",
    "fetch": "github:github/fetch@0.10.1",
    "font-awesome": "npm:font-awesome@4.5.0",
    "json-stringify-safe": "npm:json-stringify-safe@5.0.1",
    "marked": "npm:marked@0.3.5",
    "text": "github:systemjs/plugin-text@0.0.3",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:twbs/bootstrap@3.3.6": {
      "jquery": "github:components/jquery@2.1.4"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:aurelia-animator-css@1.0.0-beta.1.0.1": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.0.1"
    },
    "npm:aurelia-binding@1.0.0-beta.1.0.2": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-bootstrapper@1.0.0-beta.1": {
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1",
      "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.0.3",
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1",
      "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0-beta.1.0.1",
      "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0-beta.1.0.1",
      "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1",
      "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0-beta.1",
      "aurelia-router": "npm:aurelia-router@1.0.0-beta.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.0.1",
      "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0-beta.1.0.1",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-beta.1.0.2",
      "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0-beta.1.0.2",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-dependency-injection@1.0.0-beta.1": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-event-aggregator@1.0.0-beta.1": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1"
    },
    "npm:aurelia-fetch-client@1.0.0-beta.1.0.1": {
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-framework@1.0.0-beta.1.0.3": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.0.2",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.0.1",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-history-browser@1.0.0-beta.1.0.1": {
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-http-client@1.0.0-beta.1": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-loader-default@1.0.0-beta.1.0.1": {
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1"
    },
    "npm:aurelia-loader@1.0.0-beta.1": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1"
    },
    "npm:aurelia-logging-console@1.0.0-beta.1": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1"
    },
    "npm:aurelia-metadata@1.0.0-beta.1": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-pal-browser@1.0.0-beta.1": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1"
    },
    "npm:aurelia-route-recognizer@1.0.0-beta.1": {
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-router@1.0.0-beta.1": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1",
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1",
      "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.0.0-beta.1",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-task-queue@1.0.0-beta.1": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1"
    },
    "npm:aurelia-templating-binding@1.0.0-beta.1.0.1": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.0.2",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.0.1"
    },
    "npm:aurelia-templating-resources@1.0.0-beta.1.0.2": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.0.2",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.0.1",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-templating-router@1.0.0-beta.1.0.2": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1",
      "aurelia-router": "npm:aurelia-router@1.0.0-beta.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.0.1"
    },
    "npm:aurelia-templating@1.0.0-beta.1.0.1": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.0.2",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:babel-runtime@5.8.34": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-js@1.2.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:font-awesome@4.5.0": {
      "css": "github:systemjs/plugin-css@0.1.20"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
