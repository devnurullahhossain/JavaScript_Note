//!             JavaScript Introduction
/*
 * ➜ JavaScript is the world's most popular programming language.
 * ➜ JavaScript accepts single or double quotes ➜ '' "" .
 * ➜ JavaScript can change HTML content.
 * ➜ One of many JavaScript methods is //! getElementById('demo').
 */
document.getElementById("demo").innerHTML = "Hello JavaScript";

/*
 * JavaScript can change HTML attribute value.
 */
function lightOff() {
  document.getElementById("mainBulb").src = "https://www.w3schools.com/js/pic_bulboff.gif";
}
function lightOn() {
  document.getElementById("mainBulb").src = "https://www.w3schools.com/js/pic_bulbon.gif";
}

/*
 * ➜ JavaScript can change HTML styles (CSS)
 */

function styleChange() {
  document.getElementById("lookChange").style.fontSize = "64px";
}

/*
 * ➜ JvaScript and Java are completely different language,both in concept and design.
 */

//!            JavaScript Output
/*
 * ➜ JavaScript Display Possibilities .
 * ✪ Using innerHTML ➾ document.getElementById(id).
 * ✪ Using document.write(5 + 6).
 * ✪ Using window.alert("Hello World!").
 * ✪ Using console.log('Hello console show me!')
 * ➜ JavaScript does not have any print object or print methods.➾ window.print()
 */

