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
	'invalid-pic': './filesToUpload/5mb.jpg'
};

var upload = function(fileType) {
	exec('./support/upload.exe', [path.resolve(__dirname, filePaths[fileType])], function(err, data) {
        console.log(err);
        console.log(data.toString());
    });
};

module.exports = upload;
