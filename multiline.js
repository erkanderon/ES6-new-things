var myString = (function () {/*
   I am narayan
   I am a web developer
*/}).toString().match(/[^]*\/\*([^]*)\*\/\}$/)[1];

console.log(myString);