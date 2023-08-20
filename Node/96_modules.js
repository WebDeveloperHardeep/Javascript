// requried package
var pdf = require("pdf-node");
var fs = require("fs");

// Read Html Templete
const html = fs.readFileSync("templete.html", "utf8");

var options = {
    formal: "A3",
    orientation:"portrail",
    border:"10mm",
    Header: {
        height:"45mm",
        contents: '<div style=","tex-align: center;">Author: Shyam Majare</div>'
    }, 
    footer:{
        height:"28mm",
        contents:{
            first:"Cover page",
            2: "second page", // Any page is working, 1 based index
            default: '<span style="color=#444">{[page]}</span></span>[{pages}]</span>',
            value,
            lsst: "last page"
        }
    }
};

var users =[
    {
        name:"tom",
        age:"32",
    },
    {
        name:"ron",
        age:"33",
    },
    {
        name:"rob",
        age:"31",
    },
];
var document ={
    html:html,
    data: {
        users:users
    },
    path: "/output.pdf",
    type: "pdf",
};



pdf(document, options)
.then((res)=>{
    console.log(res)
})
.catch((error)=>{
    console.log(error)
})