const mariadb = require('mysql');

const conn = mariadb.createConnection(
    {
        host: 'localhost',
        port: 3306,     // 도커로 mariadb 설치했을 때 사용
        user: 'root',
        password: 'root',
        // 여기까지는 데이터베이스에 접속하는 방법

        // Tennis 방에 입성
        database: 'Tennis'
    }
);

// 다른 파일에서 이용할 수 있게 exports
module.exports = conn;