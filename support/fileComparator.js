'use strict';

var fs = require('fs');

  var compareFiles = function (path1, path2) {
    var data1 = fileToString(path1);
      console.log("data1 size: ", data1.length);
    var data2 = fileToString(path2);
      console.log("data2 size: ", data2.length);
      // console.log("COMPARISON: ", data1 === data2);
       if (data1 === data2)
        return true;
       else {
         throw ("different files:" + data1.length + " vs " + data2.length);
       }
  }

  function fileToString(file) {
    var path = require('path');

    var pth = path.resolve(__dirname, file);
    var contents = fs.readFileSync(pth).toString();
    return contents;
  }

module.exports = compareFiles;

  // var data1, data2;
  //
  // readImg(path1)
  // .then((data) => {
  //   data1 = data;
  //   console.log("\ndata1 finished: ", data1.length);
  // });
  //
  // readImg(path2)
  // .then((data) => {
  //   data2 = data;
  //   console.log("\ndata2 finished: ", data2.length);
  // });



  // const PATH = "images/iMaRiTHWnEeCaObVxSnZOA.PNG";
  // var options =
  // {
  //   host: 'w3schools.com',
  //   path: '/css/img_fjords.jpg'
  // }
  //
  //
  // getFile('https://pasta.lab.epam.com' + '/images/iMaRiTHWnEeCaObVxSnZOA.PNG')
  //   // getFile('https://w3schools.com' + '/css/img_fjords.jpg')
  //   .then((data) => {
  //     data2 = data;
  //     console.log("\ndata2 finished: ", data2.length);
  //
  //     console.log("\n COMPARS:", data1.toString()===data2.toString());
  //   })
  //   // .then( data => {
  //   //   console.log("readddd");
  //   // // }, err => { console.log("EGORRRR:", err);
  //   // })
  //   .catch((err) => {
  //     console.log("ERROR: ", err);
  //   });
  //
  //
  //
  //   function getFile(url) {
  //
  //     return new Promise((resolve, reject) => {
  //       console.log("get file...", url);
  //
  //       https.get(url, (response) => {
  //         var str = "";
  //         if(response.statusCode !== 200) {
  //
  //           if ([301, 302].indexOf(response.statusCode) > -1 ) {
  //               var str = getFile(response.headers.location);
  //               return resolve(str);
  //           }
  //
  //           return reject("bad response: " + response.statusCode);
  //         }
  //         response.on("data", (chunk) => {
  //           str += chunk;
  //         })
  //
  //         response.on("end", () => {
  //           console.log("file readed: ", "str");
  //           return resolve(str);
  //               // return reject(str);
  //         })
  //
  //       });
  //     });
  //   }

  //
  // .then(() => {
  //   console.log("data1:", data1);
  //   console.log("data2:", data2);
  //   console.log('compars:', data1===data2);
  // })




//
// function readImg(url) {
//   return new Promise((resolve, reject) => {
//
//     fs.readFile(url, (err, data) => {
//       if (err) throw err;
//       console.log("read buffer:", data);
//       return resolve(data);
//     });
//
//   })
// }
