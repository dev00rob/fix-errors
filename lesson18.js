//Fix the error
function myFunction() {
    let myObject = {
        objProperty: "some text",
        objMethod: function() {
            console.log(this.objProperty);
            // console.log(myObject.objProperty);
        }
    };
    myObject.objMethod();
}
myFunction()
