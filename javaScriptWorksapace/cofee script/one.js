// Generated by CoffeeScript 1.8.0
(function() {
  var bitlist, clapsHands, cube, factorial, fill, func, happy, kids, knowsIt, mood, showIt, singers, singing, song, square, vikas;

  square = function(x) {
    return x * x;
  };

  console.log(square(8));

  cube = function(x) {
    return square(x) * x;
  };

  console.log(cube(16));

  func = function() {
    return "bar";
  };

  console.log(func());

  fill = function(container, liquid) {
    if (liquid == null) {
      liquid = "coffee";
    }
    return "Filling the " + container + " with " + liquid + "...";
  };

  console.log(fill('hiii', 'vikas'));

  song = ["do", "re", "mi", "fa", "so"];

  singers = {
    Jagger: "Rock",
    Elvis: "Roll"
  };

  bitlist = [1, 0, 1, 0, 0, 1, 1, 1, 0];

  kids = {
    brother: {
      name: "Max",
      age: 11
    },
    sister: {
      name: "Ida",
      age: 9
    }
  };

  console.log(singers['Elvis']);

  singing = 4;

  happy = false;

  knowsIt = 4;

  if (singing > 3) {
    mood = 'greatlyImproved';
  }

  clapsHands = function() {
    return 'heloo';
  };

  showIt = function() {
    return 'dhakka mukki';
  };

  vikas = function() {
    if (happy && knowsIt) {
      return clapsHands();
    } else {
      return showIt();
    }
  };

  console.log(vikas());

  factorial = function(x) {
    var _ref;
    return (_ref = x <= 1) != null ? _ref : {
      1: factorial(x - 1) * x
    };
  };

  console.log(factorial(5));

}).call(this);
