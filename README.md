openwin
=======

```
var openWin = require('./openwin.js');

var url = 'http://';
var onClose = function() { /* ... */ };
var width = 500;
var height = 500;
var name = 'superWindow';

// Open window
openWin(url, onClose, width, height, name);
```
