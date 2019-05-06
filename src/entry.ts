import './isomorphicRequest/index';

import request from '#request';

async function run() {
  const response = await request('GET', 'https://postman-echo.com/get?hello=request');
  console.log('response.statusCode:', response.statusCode);
  console.log('response:', response);
}

run();



