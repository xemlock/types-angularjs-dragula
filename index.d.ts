// Type definitions for angularjs-dragula 2.0
// Project: https://github.com/bevacqua/angularjs-dragula
// Definitions by: xemlock <https://github.com/xemlock>

import * as ng from 'angular';
import * as d from 'dragula';

declare module 'angular' {
  namespace dragula {
    interface DragulaService {
      add(scope: ng.IScope, name: string, drake: d.Drake): Bag;
      find(scope: ng.IScope, name: string): Bag | undefined;
      destroy(scope: ng.IScope, name: string): void;
      handleModels(scope: ng.IScope, drake: d.Drake): void;
      options(scope: ng.IScope, name: string, options: d.DragulaOptions): void;
    }
    interface Bag {
      name: string;
      drake: d.Drake;
    }
  }
}

declare var _: (angular: ng.IAngularStatic) => string;
export = _;
