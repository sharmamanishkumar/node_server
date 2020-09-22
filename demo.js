// // // var a=10;
// // // var b=20;
// // // console.log(a+b);

// // // Using Function
// // // // function test(){
// // // //     console.log('Hello');
// // // // }

// // // // console.log(test());
// // //-- Make url--

// // function multi(a, b) {
// //   return a * b;
// // }
// // console.log(multi(5, 10)); 

// // var http = require("http");
// // http.createServer(function (req, res) {
// //     console.log(req);
// //     res.write("hello from node js server");
// //     res.end();
// //   })
// //   .listen(5000);


// function sum(add){
// console.log(add(20,40));
// }
// sum(function(a,b){
//   return a+b
// })

//Table
function table(tbl){
  
  for(let i=1; i<11; i++)
  {
    table=tbl*i
   console.log(table);
}
}
console.log(table(8));