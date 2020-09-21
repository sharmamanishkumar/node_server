// var a=10;
// var b=20;
// console.log(a+b);

// Using Function
// // function test(){
// //     console.log('Hello');
// // }

// // console.log(test());
//-- Make url--

function multi(a, b) {
  return a * b;
}
console.log(multi(5, 10));

var http = require("http");
http
  .createServer(function (req, res) {
    console.log(req);
    res.write("hello from node js server");
    res.end();
  })
  .listen(5000);
  //add some new code.
  let arr = {
    232: {
      name: "John",
      age: 31,
      city: "New York",
      zone: ["1220", "test", "name"],
    },
    900: {
      name: "amna",
      age: 30,
      city: "sur55at",
      zone: ["1100", "teaa", "sshh"],
    },
    786: {
      name: "shara",
      age: 21,
      city: "bardoli",
      zone: ["1010", "tyu"],
    },
  };
  // console.log(JSON.parse(JSON.stringify(arr)));
  
  function updatearr(id, prop, value) {
    if (value === "") {
      delete arr[id][prop];
    } else if (prop === "zone") {
      arr[id][prop] = arr[id][prop] || [];
      arr[id][prop].push(value);
    } else {
      arr[id][prop] = value;
    }
    return arr;
  }
  //console.log(updatearr(900, "zone", "riya"));
  
  let ourAArr = [1, 5, 6];
  let count = 0;
  for (let i = 0; i < ourAArr.length; i++) {
    count += ourAArr[i];
  }
  // console.log(count);
  
  function multiArr(arr) {
    var total = 1;
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        total *= arr[i][j];
      }
    }
    return total;
  }
  
  var allarr = multiArr([
    [1, 2],
    [2, 3],
    [3, 4],
  ]);
  // console.log(allarr)
  
  let collections = [
    { name: "John", age: 31, city: "New York" },
    { name: "salman", age: 200, city: "mumbai" },
    { name: "sunny", age: 38, city: "punjab" },
    { name: "ruma", age: 41, city: "surat" },
  ];
  
  function searchValue(name, prop) {
    for (let i = 0; i < collections.length; i++) {
      if (collections[i].name === name) {
        return collections[i][prop] || "No such property";
      }
    }
    return "opps no name available";
  }
  
  console.log(searchValue("sunny", "city"));
  let arr = {
    232: {
      name: "John",
      age: 31,
      city: "New York",
      zone: ["1220", "test", "name"],
    },
    900: {
      name: "amna",
      age: 30,
      city: "sur55at",
      zone: ["1100", "teaa", "sshh"],
    },
    786: {
      name: "shara",
      age: 21,
      city: "bardoli",
      zone: ["1010", "tyu"],
    },
  };
  // console.log(JSON.parse(JSON.stringify(arr)));
  
  function updatearr(id, prop, value) {
    if (value === "") {
      delete arr[id][prop];
    } else if (prop === "zone") {
      arr[id][prop] = arr[id][prop] || [];
      arr[id][prop].push(value);
    } else {
      arr[id][prop] = value;
    }
    return arr;
  }
  //console.log(updatearr(900, "zone", "riya"));
  
  let ourAArr = [1, 5, 6];
  let count = 0;
  for (let i = 0; i < ourAArr.length; i++) {
    count += ourAArr[i];
  }
  // console.log(count);
  
  function multiArr(arr) {
    var total = 1;
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        total *= arr[i][j];
      }
    }
    return total;
  }
  
  var allarr = multiArr([
    [1, 2],
    [2, 3],
    [3, 4],
  ]);
  // console.log(allarr)
  
  let collections = [
    { name: "John", age: 31, city: "New York" },
    { name: "salman", age: 200, city: "mumbai" },
    { name: "sunny", age: 38, city: "punjab" },
    { name: "ruma", age: 41, city: "surat" },
  ];
  
  function searchValue(name, prop) {
    for (let i = 0; i < collections.length; i++) {
      if (collections[i].name === name) {
        return collections[i][prop] || "No such property";
      }
    }
    return "opps no name available";
  }
  
  console.log(searchValue("sunny", "city"));

  
  console.log("hello her");
  

  console.log("new branch for checking")

