const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Welcome</title></head>');
        res.write(
            '<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Create User</button></form></body>'
        );
        res.write('</html>');
        return res.end();
    }

    else if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', chunk => {
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            console.log(message);
            res.statusCode = 302;
            res.setHeader('Location', '/users');
            res.end();
        });
    }

    else if(url === '/users'){
        res.write('<html>');
        res.write('<head><title>Users</title></head>');
        res.write(
            '<body><ul><li>Sachintha</li><li>Supun</li><li>Shenal</li><li>Lakitha</li></ul></body>'
        );
        res.write('</html>');
        return res.end();
    }
};

module.exports = requestHandler;
