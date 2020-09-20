// // // var a=10;
// // // var b=20;
// // // console.log(a+b);

// Using Function
// // function test(){
// //     console.log('Hello');
// // }

// // console.log(test());
//-- Make url--
var http = require('http');
http.createServer(function (req,res){
console.log(req);
res.write('hello from node js server');
res.end();
}).listen(5000)
