const http = require('http');
const fs = require('fs');

// 创建服务器并指定请求处理函数
const server = http.createServer((req, res) => {
    // 读取 HTML 文件内容
    fs.readFile('index.html', 'utf8', (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
            return;
        }

        // 设置 HTTP 头部
        res.writeHead(200, { 'Content-Type': 'text/html' });

        // 发送响应数据
        res.end(data);
    });
});

// 监听 3000 端口
const PORT = 80;
server.listen(PORT, () => {
    console.log(`Server running at http://172.21.79.58:${PORT}/`);
});