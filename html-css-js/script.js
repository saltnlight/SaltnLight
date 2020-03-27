//JavaScript Task

var Name = "Egwu Florence Arong";
var Courses = ["HTML", "CSS", "JavaScript", "C#", "Python", "UX/UI"];
//print my name and courses i'm taking to the console
console.log(Name + " is taking these courses: " + Courses);

// counts the number of courses and initialize variables to be used in the loop
var len = Courses.length;
var i;
var count = 200;

//Check if the number of courses is even or odd
if (len % 2 == 0) {
    for (i = 0; i <= 200; i++) {
        if (i % 2 == 0) { continue; }  
        i++;
        console.log(i);
    }
}
else {
    for (i = 0; i <= 200; i++) {
        if (i % 2 != 0) { continue; }  
        i++;
        console.log(i);
    }
}

