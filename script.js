var counter = 0;
var images = ["./photos/grandchild1.jpg", "./photos/grandchild2.jpg",
    "./photos/neice1.jpg", "./photos/neice2.jpg",
    "./photos/neice3.jpg", "./photos/nephew1.jpg", "./photos/nephew2.jpg",
    "./photos/sister.jpg", "./photos/brother.jpg"];

var brother = "When we were little, we rode our bikes to school everyday. Yours was blue and mine was orange with a flag.";
var grandchild1 = "When you first carried me, I threw up on your new jacket. Then we both laughed together!";
var grandchild2 = "You read me the count of Monte Cristo and told me it was your favorite book!";
var neice1 = "You taught me to knit and we made a blue and red scarf together!";
var neice2 = "We went to dundas peak together and shared an ice cream cone by the cliffside! You said you were so scared!";
var neice3 = "When I was little, anytime you would bake something you would always let me roll the dough. Then you got mad at me when I ate some!";
var nephew1 = "We watched lord of the rings together and then I played The Shire for you on the piano.";
var nephew2 = "You drove me to McMaster University everyday when I had my final exams. We were both so stressed!";
var sister = "We would read together because Amma told us to. You may have stopped, but I still love doing it.";

var prompts = [grandchild1, grandchild2, neice1, neice2, neice3, nephew1, nephew2, sister, brother];

var family = ["grandchild", "grandchild", "neice", "neice", "neice", "nephew", "nephew", "sister", "brother"];
var wrong = ["cousin", "nephew", "sister", "cousin", "daughter", "son", "brother", "aunt", "grandfather"];
var names = ["Yoshi", "Boo", "Rosalina", "Peach", "Daisy", "Mario", "Bill", "Zelda", "Diddy"];
var butts = ["button_choice1", "button_choice2"];
var answer = 0;


function check(x) {
    if (x == answer) {
        var correct = true;
    }
    var element = document.getElementById("output");
    if (correct) {

        var s = "That's right! I'm your ".concat(family[counter])
        s = s.concat(", ")
        element.innerHTML = s.concat(names[counter]);
    }
    else {
        var s = "Actually, I'm your ".concat(family[counter])
        s = s.concat(", ")
        element.innerHTML = s.concat(names[counter]);
    }

    checkAns()
    element.innerHTML = "Who am I?";
}

function checkAns() {

    document.getElementById("fam_image").src = images[counter]
    var element = document.getElementById("story");
    element.innerHTML = prompts[counter];

    var n = Math.round(Math.random());
    console.log(n);
    if (n == 1) {
        var b1 = butts[0];
        var b2 = butts[1];
        answer = 0;
    }
    else {
        var b1 = butts[1];
        var b2 = butts[0];
        answer = 1;
    }

    var btn_element1 = document.getElementById(b1);
    var btn_element2 = document.getElementById(b2);

    btn_element1.innerHTML = "You're my ".concat(family[counter]);
    btn_element2.innerHTML = "You're my ".concat(wrong[counter]);
    counter++;
    if (counter > 8) {
        counter = 0;
    }
}