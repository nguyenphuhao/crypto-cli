const cluster = require('cluster');
const http = require('http');
const os = require('os');
 
const numberOfCores = os.cpus().length;
 
if (cluster.isMaster) {
  console.log(`Master ${process.pid} started`);
  for (let i = 0; i < numberOfCores; i++) {
    cluster.fork();
  }
} else {
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end(`Process ${process.pid} says hello!`);
  }).listen(8000);
  console.log(`Worker ${process.pid} started`);
}