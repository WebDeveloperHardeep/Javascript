class RailwayFrom{
    submit(){
        alert(this.name +": Your Form is Subimitted for this train number" + this.trainno) 
    }

    cancel(){
        alert(this.name +": this Form is cancel for this train number " + this.trainno)
    }
    fill(givename, trainno){
        this.name = givename
        this.trainno = trainno
    }
}
// create a form form harry 
let harryForm = new RailwayFrom()
// Fill the form with Harry's Details
harryForm.fill("Harry", 142452)
// create a form form Hardeep
let hardeepForm1 = new RailwayFrom()
let hardeepForm2 = new RailwayFrom()
// Fill the form with Hardeep's Details

hardeepForm1.fill("Hardeep", 535420)

hardeepForm2.fill("Hardeep", 535420)

harryForm.submit()
hardeepForm1.submit()
hardeepForm2.submit()

hardeepForm1.cancel()