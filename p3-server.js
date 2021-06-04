//import the built-in fs package, and assign the package to a constant variable called fs
const fs = require(`fs`)

//import the third-party fastify package, and assign the package to a constant variable called fastify.
const fastify = require("fastify")();
const hostname = '127.0.0.1';
const port = 8080;
const server = fastify(request, reply);
//Import the coinCount function from the p3-module.js code module file.
import {coinCount} from `p3-module.js`;
  coinCount(); 

//part 8
fastify.get("/", (request, reply) => {
    fs.readFile(`${__dirname}/index.html`, (err,data) => {
        if (err) {
            reply
            .code(500)
            .header("Content-Type", "text/html; charset=utf-8")
            .send("<h1>Error</h1>");  
        } else {
            console.log("QueryObject:", request.query);
            reply
            .code(200)
            .header("Content-Type", "text/html; charset=utf-8")
            .send("<h1>Coinage!</h1>");
        }
    })

    reply
      .code(200)
      .header("Content-Type", "text/html; charset=utf-8")
      .send("<h1>Coinage!</h1>");
  });

 
 server.listen(port, hostname), () => {
     console.log(`Server running at ${hostname}: ${port}`);
 }




  //part 9
fastify.get("/coin", (request, reply) => {
    const { denom = 0, count = 0 } = request.params;

    let response = parseInt(request.params);
    let coinValue = coinCount(...response);
    reply
        .code(200)
        .header("Content-Type", "application/json; charset=utf-8")
        .send(`<h2> Value of ${count} of ${denom} is ${coinValue}<h2><br/> <a href="/" >Home</a>`);
});