const PDFMerger = require('pdf-merger-js');

var merger = new PDFMerger();

const mergePdfs = async (p1, p2) => {
    await merger.add('p1.pdf')
    await merger.add('p2.pdf')

    await merger.save('merged.pdf')
}

module.exports ={mergePdfs}