/*
 * Prepare environment for unit tests.
 * This file is required by karma.conf.js and loads recursively all the .spec and framework files.
 */

import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

// Runtime environment config (`window.env`) is injected by `assets/env.js` in the
// browser but is absent under Karma; provide an empty object so environment files
// fall back to their defaults instead of throwing on property access.
(window as any)['env'] = (window as any)['env'] || {};

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
