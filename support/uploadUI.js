'use strict';
var exec = require('child_process').execFile;
var path = require('path');

// usage
//var uploader = require('../support/uploadUI');
// $('button[type=submit]').click();
// uploader('pic');

var filePaths = {
	'pic': './filesToUpload/pic.jpg',
	'txt': './filesToUpload/text.txt',
	'video': '',
<<<<<<< HEAD
	'code': ''
=======
	'invalid-pic': './filesToUpload/5mb.jpg',
	'invalid-txt': './filesToUpload/more-than-500kb.txt'
>>>>>>> 03cfe573c2759fa3e3e99d87d3fa7b9e8ffdbfd1
};

var upload = function(fileType) {
	exec('./support/upload.exe', [path.resolve(__dirname, filePaths[fileType])], function(err, data) {
        console.log(err);
        console.log(data.toString());
    });
};

module.exports = upload;
