'use strict';

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./db/db.json');

/*

{
  count: 10,
  results: [
    {},
    {},
    {}
  ]
}
*/

//custom output

router.render = (req, res) => {
  res.json({
    count: res.local.data.length,
    results: res.locals.data
  });
};

server.use(middlewares);
server.use(router);
server.listen(3000, () => console.log('our server is up'));