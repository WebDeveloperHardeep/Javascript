class RailwayFrom{
    constructor(givename, trainno, address, time){
        this.name = givename
        this.trainno = trainno
        this.address = address
        this.time = time
        console.log("constructor called...." + givename + "  " + trainno)
    }
    preview(){
        alert(this.name +": Your Form is Subimitted for this train number" + this.trainno + "and your adrdres is " + this.address) 
    }

    submit(){
        alert(this.name +": Your Form is Subimitted for this train number" + this.trainno) 
    }

    cancel(){
        alert(this.name +": this Form is cancel for this train number " + this.trainno)
        this.trainno = 0
    }
    
}

let harryForm = new RailwayFrom("Harry", 21421, "31a/118 arjun nagar - 14402")

harryForm.preview()
harryForm.submit()
harryForm.cancel()
harryForm.preview()
