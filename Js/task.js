let firstName = "Jalal";
let lastName = "Ud din ";
let Country = "Pakistan";
let city = "Islamabad";
let isMarried = true;
let year = 2026;
console.log(typeof firstName);
console.log(typeof Country);
console.log(typeof isMarried);
console.log(typeof year);

console.log("10" == 10);
console.log("10" === 10);
//parseInt value to truncate krdeta hai like dot k bd values ko khatm krdeta hai
console.log(parseInt(7.9));
console.log(parseInt("9.8") == 10);

//
let isApproved = true;
console.log(isApproved);
let isStudent = false;
console.log(isStudent);

console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != "4");
console.log(4 == "4");
console.log(4 === "4");

const x = 3;
// (y = x2 + 6x + 9).
console.log(Math.pow(x, 2) + 6 * x + 9);

//if else
let fname = "jalal";
let lname = "ud din";
if (fname.length > lname.length) {
  console.log(
    `Your family name, ${lname} is longer than your first name, ${fname}`,
  );
} else {
  console.log(
    `Your Family name, ${lname} is longer then your Firstname , ${fname}`,
  );
}

let fName = "Jalal";
let lName = "Abbas";
if (fName.length > lName.length) {
  console.log(
    `Your firstName ${fName} is longer than your family name, ${lName}`,
  );
} else {
  console.log(
    `Your FamilyName, ${lName} is longer than your First name ${fName}`,
  );
}


