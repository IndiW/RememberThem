var counter = 0
var images = ["./photos/grandchild1.jpg", "./photos/grandchild2.jpg",
    "./photos/neice1.jpg", "./photos/neice2.jpg",
    "./photos/neice3.jpg", "./photos/nephew1.jpg", "./photos/nephew2.jpg",
    "./photos/sister.jpg", "./photos/brother.jpg"]
function checkAns() {
    document.getElementById("fam_image").src = images[counter]
    counter++;
    if (counter > 8) {
        counter = 0;
    }





    var element = document.getElementById("output");
    element.innerHTML = "Correct!";
}