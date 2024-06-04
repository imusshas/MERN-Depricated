import http from "http";
import fs from "fs/promises";
import url from "url";
import path from "path";

// const PORT = process.env.PORT;   // Error Can't find the .env file
const PORT = 8000;

// GET FILE PATH
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer(async (req, res) => {   // ASYNC has been added for AWAIT

  // console.log(req.url);
  // console.log(req.method);
  // console.log(req);

  // res.setHeader("Content-Type", "text/plain");
  // res.setHeader("Content-Type", "text/html");
  // res.statusCode = 404;


  // res.write("Hello World!");
  // res.end("Hello World!");
  // res.end("<h1>Hello World!</h1>`");

  // res.writeHead(500, { "Content-Type": "application/json" });
  // res.end(JSON.stringify({ message: "Servre Error" }));

  // CREATING A ROUTER
  // if (req.url === "/") {
  //   res.writeHead(200, { "Content-Type": "text/html" });
  //   res.end("<h1>HomePage!</h1>");
  // } else if (req.url === "/about") {
  //   res.writeHead(200, { "Content-Type": "text/html" });
  //   res.end("<h1>About</h1>");
  // } else {
  //   res.writeHead(404, { "Content-Type": "text/html" });
  //   res.end("<h1>Not Found</h1>");
  // }

  // try {
  //   //  CHECK IF GET REQUEST
  //   if (req.method === "GET") {

  //     if (req.url === "/") {
  //       res.writeHead(200, { "Content-Type": "text/html" });
  //       res.end("<h1>HomePage!</h1>");
  //     } else if (req.url === "/about") {
  //       res.writeHead(200, { "Content-Type": "text/html" });
  //       res.end("<h1>About</h1>");
  //     } else {
  //       res.writeHead(500, { "Content-Type": "text/plain" });
  //       res.end("Server Error");
  //     }

  //   } else {
  //     throw new Error("Method Not Allowed")
  //   }
  // } catch (error) {

  // }


  try {
    // LOAD A FILE
    if (req.method === "GET") {

      let filePath;

      if (req.url === "/") {
        filePath = path.join(__dirname, "public", "index.html");
      } else if (req.url === "/about") {
        filePath = path.join(__dirname, "public", "about.html");
      } else {
        throw new Error("404 Not Found");
      }

      const data = await fs.readFile(filePath);
      res.setHeader("Content-Type", "text/html");
      res.write(data);
      res.end();
    } else {
      throw new Error("Method Not Allowed");
    }
  } catch (error) {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end(`Server Error ${error}`);
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
