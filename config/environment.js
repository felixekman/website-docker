/* eslint-env node */
'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'harmony-psa',
    environment,
    rootURL: '/',
    locationType: 'auto',
    contentful: {
        space: 'rwa8mjmc85rk',
        accessToken: '60f97f062eb80e5815eedf98f1ed0a08b1fcacb64c7a52c3f1ccff4f9603f7b8',
        previewAccessToken: '4ac02a8e17ffdc85152de2b0ef763124220cd129b060c71a3ef3874f52554e0e',
        usePreviewApi: false
    },
    showdown: {
        simpleLineBreaks: true
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.contentful.usePreviewApi = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    //   ENV.hotjar = {
    //       siteId: ''
    //   }
  }

  return ENV;
};
