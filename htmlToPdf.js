var phantom = require('phantom');
var jsreport = require('jsreport');

phantom.create(function(ph){
  ph.createPage(function(page) {
    page.open("http://phantomjs.org/screen-capture.html", function(status) {
      page.render('emery.pdf',function(){

        console.log('Page Rendered');
        ph.exit();

      });
    });
  });
});

/*var fs = require('fs');
var pdf = require('html-pdf');
var html = fs.readFileSync('index.html', 'utf8');
var options = {  type: 'pdf', orientation: 'portrait', "border": {
    "top": "2in",            // default is 0, units: mm, cm, in, px
    "right": "1in",
    "bottom": "2in",
    "left": "1.5in"
  } };*/


