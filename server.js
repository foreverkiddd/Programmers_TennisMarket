let http = require('http');
let url = require('url');

function start(route, handle) {
    function onRequest(request, response) {
        let pathname = url.parse(request.url).pathname;
        let queryData = url.parse(request.url, true).query;

        /* 자꾸 오류나서 검색 후 적용 */
        if (pathname === '/favicon.ico') {
            response.writeHead(200, { 'Content-Type': 'image/x-icon' });
            return response.end();
           }
        route(pathname, handle, response, queryData.productId);
    }
    
    http.createServer(onRequest).listen(8888);
}
 
exports.start = start;