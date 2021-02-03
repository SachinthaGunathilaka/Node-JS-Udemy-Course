const http = require('http');
const fs = require('fs');

// When request is coming, the function inside the createServer() will be executed.
// It can be a anonymous func of arrow func.
const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    // process.exit(); (Terminate the server)

    const url = req.url;
    const method = req.method;
    if(url === "/"){
        res.setHeader('Content-Type' , 'text/html'); // tell browser that is a HTML code
        res.write('<html>');
        // when submit button is pressed, redirect to /message(It will carry all name, value attributes)
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form></body>');
        res.write('</html>');
        return res.end(); // Return is used to terminate function from here. (After res.end cannot write)
    }

    if(url === "/message" && method === "POST"){
        // Write to a file
        fs.writeFileSync('message.txt', "Dummy");
        res.statusCode = 302; // Set status code
        res.setHeader('Location', '/'); // Redirect to /
        return res.end();
    }



    res.setHeader('Content-Type' , 'text/html'); // tell browser that is a HTML code
    res.write('<html>');
    res.write('<head><title>My Page</title></head>');
    res.write('<body><h1>Hello</h1></body>');
    res.write('</html>');
    res.end(); // End
});

server.listen(3000);