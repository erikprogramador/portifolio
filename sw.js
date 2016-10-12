importScripts('node_modules/sw-toolbox/sw-toolbox.js');

toolbox.options.debug = true;

toolbox.precache([
  '/',
  '/css/main.css',
  '/node_modules/jquery/dist/jquery.min.js',
  '/js/main.js',
  '/images/logo.svg',
  '/images/arrow.svg',
  '/images/chat-logo.svg'
]);

toolbox.router.get('/', toolbox.fastest);
toolbox.router.get('/^portifolio\//', toolbox.fastest);
toolbox.router.get('/(.*)', toolbox.fastest);
toolbox.router.get('/^https://fonts.googleapis.com\//(.*)', toolbox.fastest);
