const FastBootAppServer = require('fastboot-app-server');

const server = new FastBootAppServer({ distPath: 'dist', gzip: true });

server.start();
