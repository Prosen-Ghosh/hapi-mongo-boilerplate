'use strict'

import Glob from 'glob';
import { isArray } from 'util';
import Package from './../../../package.json';

export default {
    register: (server, options) => {
        const globOptions = {
          nodir: true,
          strict: true,
          cwd: options.cwd || process.cwd(),
          ignore: options.ignore
        }
    
        const optionRoute = isArray(options.routes) ? options.routes : [options.routes];
        optionRoute.forEach(pattern => {
          const files = Glob.sync(pattern, globOptions);
    
          files.forEach(file => {
            const route = require(globOptions.cwd + '/' + file);
            server.route(route.default || route);
          });
        });
    },
    pkg: Package
}