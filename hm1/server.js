const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => 
{
    if (request.url === '/json')
    {
        response.setHeader('Content-Type', 'application/json');
        response.write(`{ 'cat1': 'black', 'cat2': 'white' }`);
        return response.end();
    }

    else if (request.url === '/about')
    {
        response.setHeader('Content-type', 'text/html');
        const html = fs.readFileSync('./about.html');
        response.write(html);
        return response.end();
    }

    else if (request.url === '/index' || request.url === "/")
    {
        response.setHeader('Content-type', 'text/html');
        const html = fs.readFileSync('./index.html');
        response.write(html);
        return response.end();
    }

    else if (request.url === '/services')
    {
        response.setHeader('Content-type', 'text/html');
        const html = fs.readFileSync('./services.html');
        response.write(html);
        return response.end();
    }

    else if (request.url == '/put' && request.method === 'PUT')
    {
        return response.end('put');
    }

    else if (request.url == '/post' && request.method === 'POST')
    {
        return response.end('post');
    }

    else if (request.url == '/delete' && request.method === 'DELETE')
    {
        return response.end('delete');
    }

    else if (request.url == '/patch' && request.method === 'PATCH')
    {
        return response.end('patch');
    }

    else 
    {
        response.statusCode = 404;
        response.write("<h1>404. Not found</h1>");
        return response.end();
    }
});

server.listen(3000);
