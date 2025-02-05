// productId를 어디서 받아오라고? 그럼 나도 어디선가 받아와야지 -> productId 받아오기 서버에서
function route(pathname, handle, response, productId) {
    console.log('pathname : ' + pathname);

    // 만약 있는 페이지면 reponse와 productId 던져줌
    if (typeof handle[pathname] == 'function') {
        handle[pathname](response, productId);
    } else {
        response.writeHead(404, {'Content-Type' : 'text/html'});
        response.write('Not Found');
        response.end();
    }
}

exports.route = route;