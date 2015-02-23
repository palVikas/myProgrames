var fs = require('fs');
 // var fd = fs.openSync("./filerename.js","r+",function(err,));

// fs.unlink('d:\go.jpg', function (err) {
//   if (err) throw err;
//   console.log('successfully deleted ');
// });

// fs.rename('d:\car.jpg', 'd:\ccar.jpg', function (err) {
//   if (err) throw err;
//   console.log('renamed complete');
// });
// fs.stat('d:\ccar.jpg', function (err, stats) {
//   if (err) throw err;
//   console.log('stats: ' + JSON.stringify(stats));
// });

// fs.rename('d:\mmarcar.jpg', 'd:\mmmarcar.jpg', function (err) {
//   if (err) throw err;
//   console.log("this is huge car");
//   fs.stat('d:\mmmarcar.jpg', function (err, stats) {
//     if (err) throw err;
//     console.log('stats: ' + JSON.stringify(stats));
//   });
// });
// fs.rename('d:\mahamahacar.jpg', 'd:\mahamahamahacar.jpg',function(err){
// 	if(err) throw err
//   console.log('renamed complete');
// });


// fs.truncateSync("d:\dog.jpg", 30)
// console.log("hii gee man");
// fs.open("./filerename.js",'r+',function(err){
// 	if (err) throw err;
// 	console.log("errr: "+err);
// 	console.log("vikas");
// })
var fileName="filerename.js";
// fs.exists(fileName, function(exists){
//   if (exists){
//   	fs.stat(fileName, function(error, stats) {
//   	fs.open(fileName,"r+",function(err,fd){
//   		var buffer = new Buffer(stats.size);
//   		fs.read(fd,buffer,0,buffer.length,null,function(err,bytesRead,buffer) {
//           var data = buffer.toString("utf8", 0, buffer.length);
//           console.log(data);
//            fs.close(fd);
//         });
//   	})
//   });
//   }
// });
 
fs.readFile(fileName, "utf8", function(error, data) {
  console.log(data);
});