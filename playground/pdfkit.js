const PDFDocument = require('pdfkit');
const fs = require('fs');

const doc = new PDFDocument;

doc.pipe(fs.createWriteStream)('output.pdf');
doc.font('fonts/PalatinoBold.ttf').fontSize(25).text('Some text with an embedded font!', 100, 100);
 
// Add an image, constrain it to a given size, and center it vertically and horizontally
doc.image('path/to/image.png', {
   fit: [250, 300],
   align: 'center',
   valign: 'center'
});