//import module
const http = require("http");
const fs = require("fs");

const userList = [{ name: "debug" }, { name: "tinu" }, { name: "sam" }];

//create server
const server = http.createServer((req, res) => {

  res.setHeader("Access-Control-Allow-Origin", "*")

    console.log(req.url);

    switch (req.url) {
        case "/":
            fs.readFile("file1.txt", "utf8", (err, data) => {
                if (err) throw err;
                res.writeHead(200, { "Content-Type": "text/plain" }); 
                res.write(data);
                res.end()
            });
            break; 

        case "/product":
            res.writeHead(200, { "Content-Type": "application/json" });
            res.write(JSON.stringify(userList));
            res.end();
            break;

        default:
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.write("Page Not Found");
            res.end();
            break;
    }
});

const PORT = 3005;
server.listen(PORT, () => {
    console.log(`Server started in ${PORT}`);
});
