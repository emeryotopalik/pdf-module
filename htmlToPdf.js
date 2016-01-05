var phantom = require('phantom');
var html = 'file:///Users/emeryotopalik/pdf-module/index.html';
//var html = 'https://github.com/marcbachmann/node-html-pdf/blob/master/src/scripts/pdf_a4_portrait.coffee';
var file = 'test.pdf';

phantom.create(function(ph){
  ph.createPage(function(page) {
    page.open(html, function(status) {
      page.render(file,function(){
        console.log('Page Rendered');
        ph.exit();
      });
    });
  });
});

/*var fs = require('fs');
var pdf = require('html-pdf');
var html = fs.readFileSync('.html', 'utf8');
//var html = "<h1>HI<\h1>";
var options = {  type: 'pdf', orientation: 'portrait', format: 'letter' };

pdf.create(html, options).toFile('test.pdf', function(err, res) {
  if (err) return console.log(err);
  console.log(res); // { filename: '/app/businesscard.pdf' }
});*/

/*
var pdfMake = require('pdfmake');
var docDefinition = {content: 'THIS IS CONTENT'};
pdfMake.createPdf(docDefinition).open();*/