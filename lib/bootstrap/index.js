/* eslint-env node */
'use strict';

var Funnel = require('broccoli-funnel');
var mergeTrees = require('broccoli-merge-trees');
var fastbootTransform = require('fastboot-transform');

const BOOTSTRAP_LIBRARIES = [
    // 'alert',
    // 'button',
    'carousel',
    'collapse',
    'dropdown',
    'modal',
    // 'popover',
    // 'scrollspy',
    'tab',
    'tooltip',
    'util'
];

const REQUIRE_POPPER = true;

module.exports = {
    name: 'bootstrap',

    isDevelopingAddon() {
        return true;
    },

    // taken from: https://ember-fastboot.com/docs/addon-author-guide#third-party-dependencies

    included(app) {
        if ( REQUIRE_POPPER ) {
            app.import(`vendor/bootstrap/popper.min.js`);
        }
        BOOTSTRAP_LIBRARIES.forEach((library) => {
            app.import(`vendor/bootstrap/${library}.js`);
        });
    },

    treeForVendor(tree) {
        let bootstrapTree = fastbootTransform(new Funnel('node_modules/bootstrap/js/dist/', {
            files: BOOTSTRAP_LIBRARIES.map((library) => { return `${library}.js` }),
            destDir: 'bootstrap'
        }));
        if ( REQUIRE_POPPER ) {
            let popperTree = fastbootTransform(new Funnel('node_modules/popper.js/dist/umd/', {
                files: ['popper.min.js'],
                destDir: 'bootstrap'
            }));
            let libraryTree = mergeTrees([popperTree, bootstrapTree]);
            return tree ? mergeTrees([tree, libraryTree]) : libraryTree;
        }
        return tree ? mergeTrees([tree, bootstrapTree]) : libraryTree;
    }
};
