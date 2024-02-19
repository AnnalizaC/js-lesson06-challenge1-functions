//Function with no parameters
var startMyDay = function () {
  return "Time for coffee and work!";
};

console.log(startMyDay());

//Function with 1 parameter
var favoriteCookie = function (cookie) {
  return `My favorite cookie is ${cookie}.`;
};

console.log(favoriteCookie());
console.log(favoriteCookie("oreos"));

//Function with 2 parameters
var introduce = function (name, occupation) {
  return `Hi, my name is ${name} and I am a ${occupation}. Nice to meet you!`;
};

console.log(introduce("Annaliza", "Operations Associate"));
console.log(introduce("Jen", "Software Engineer"));

//Functions with a prompt and conditional
var hydrationFeedback = function () {
  var numGlasses = Number(
    prompt("How many glasses of water did you have today?")
  );
  if (numGlasses >= 8) {
    console.log("Great job with the hydration! Keep it up!");
  } else if (numGlasses < 8) {
    console.log("Not bad, not bad. Let's try for a bit more tomorrow!");
  }
};

hydrationFeedback();
