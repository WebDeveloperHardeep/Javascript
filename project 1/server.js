const express = require("express"); // it is used for build a single page and hybrid web applications
// express is used to create a web server, that accecpts requests and send back response

const path = require("path"); // it is allow you to Extract Content From module
const app = express(); // it is object return by express. and they decide to make variable (app)
const multer = require("multer"); // that is used for the easy handling of multipart/form-data that is used when file uploading is done
const { mergePdfs } = require("./merge"); // It is merging 2 objects

const upload = multer({ dest: "uploads/" }); //it is make process of uploading file in nodejs Eaiser
app.use("/static", express.static("public")); // it is getting resquest & Respones. we can call it response-request infinite Circle

const port = 3000; // it is listen for incoming request on port. this can be change any time for use.
// ==================
// get()=>// Routes http get request to
// specified path with callback function & it will allowed to get requests
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "templates/index.html"));
});
// ====================================

app.post("/", (req, res) => {
  // it routes the http post request to the specified path wih spcified callback funtion
  res.sendFile(path.join(__dirname, "templates/index.html"));
});

app.post("/merge", upload.array("pdfs", 2), async (req, res, next) => {
  console.log(req.files);
  let d = await mergePdfs(
    path.join(__dirname, req.files[0].path),
    path.join(__dirname, req.files[1].path)
  );
  res.redirect(`http://localhost:3000/static/${d}.pdf`); // get the URl specified path. which is match http code
});

app.listen(port, () => {
  // The app.listen() function is used to bind and listen to the connections on the specified host and port
  console.log(`Example app listening on port http://localhost:${port}`);
});
