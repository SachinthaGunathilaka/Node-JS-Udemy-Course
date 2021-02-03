const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title><head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();
  }
  if (url === '/message' && method === 'POST') {
    const body = [];
    // event listener on data
    req.on('data', (chunk) => {  // this func will be executed when request data is coming (the data will come part by part(as a stream))
      console.log(chunk);
      body.push(chunk); // store all the request data into body
    });

    // event listener after data has come
    return req.on('end', () => { // return is used because inside function is asynchronous. (If not below part will be run)
      const parsedBody = Buffer.concat(body).toString(); // request data convert into buffer and then convert into string
      const message = parsedBody.split('=')[1]; // get message from it
      fs.writeFileSync('message.txt', message); // write to the file
      res.statusCode = 302; // set status code
      res.setHeader('Location', '/'); // redirect to /
      return res.end();
    });

  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title><head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');
  res.end();
});

server.listen(3000);
