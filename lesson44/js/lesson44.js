// callbacks

function loadScript(src, callback){
    var script = document.createElement("script");
    script.src = src;
    script.onload = function(){
        console.log("loaded script with SRC" + src)
        callback(null, src);
    }
    script.onerror = function(){
        console.log("Error Loading script with SRC" + src)
        callback(new error("Src got some error"))
    }
    document.body.append(script);
}

function hello(error, src) {
    if(error) {
        console.log(error)
        return
    }
    alert("Hello World!" + src);
}


loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js", function goodMorning(error, src) {
    if(error){
        console.log(error)
        sendEmergencyMessageToCeo();
        return
    }
})
 
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js", function goodMorning(error, src){
    
})



function goodMorning(error, src) {
    if(error){
        console.log(error)
        sendEmergencyMessageToCeo();
        return
    }
}
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js", function goodMorning(error, src){
    
})

function goodMorning(error, src) {
    if(error){
        console.log(error)
        sendEmergencyMessageToCeo();
        return
    }
}
 
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js", function goodMorning(error, src){
    
})
// do not use that more call backs. beacuse it is change our coding into non-readbal code