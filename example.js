/*jshint multistr:true */
var fs = require('fs'),
    path = require('path'),
    hifile = require('./index.js'),
    head = '<!DOCTYPE html><html lang="en"><head><meta charset="utf-8">\
<title>hifile</title><style>body {margin: 0}</style>\
<link rel="stylesheet" type="text/css" href="hifile.css">\
<script src="hifile.js" type="text/javascript"></script></head>\
<script>window.onload = function(){hifile.init()};</script><body>',
  foot = '</body></html>',
  code,
  input = 'index.js',
  output = 'example.html';


console.log('parsing', input);
code = fs.readFileSync(path.join(__dirname, input), 'utf8'),
code = hifile(code, path.extname(input).substring(1));
console.log('writing', output);
fs.writeFileSync(path.join(__dirname, output), head+code+foot);
