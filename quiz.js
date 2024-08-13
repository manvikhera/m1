var questions = ['Mammals that can fly?' , 'An animal with blue blood?' , 'An animal with no brain?' , 'What animal is this?'];
var count=0;
var person = prompt("Please enter your name", "Harry Potter");


function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeBackgroundColor() {
  document.body.style.backgroundColor = getRandomColor();
}


function afunc() {
    
    if (person != null && person != " " ) {
        document.getElementById("demo").innerHTML = "Hello " + person + "! We will start quiz as soon as you press START QUIZ";
        document.getElementById("start").style.display = "block";
    }
}

function bfunc(){
   document.getElementById("ques").innerHTML = questions[0];
   count=0;
   document.getElementById("demo").innerHTML = "";
   document.getElementById("score").innerHTML = "";
   document.getElementById("hello").style.display="none";
   document.getElementById("start").style.display="none";
   changeBackgroundColor()
}

function cfunc(i){
  var c = i+1;
  var d = questions.length;
  document.getElementById("ques").innerHTML = questions[c];
  changeBackgroundColor()
  ans();
}

/*
function dfunc(i){
  var c = i-1;
  var d = questions.length;
  document.getElementById("ques").innerHTML = questions[c];
  ans();
}
*/


function next(){
  document.getElementById("res").innerHTML = "";
    var i = 0;
    var c = questions.length;

    for(i; i<c; i++){
      if(document.getElementById("ques").innerHTML === questions[i]){
        cfunc(i);
        break;
      }
    }
}


/*
function previous(){
  var i = 0;
  var c = questions.length;

  for(i; i<c; i++){
    if(document.getElementById("ques").innerHTML === questions[i]){
      dfunc(i);
      break;
    }
 }
}
*/

function ans(){
  if(document.getElementById("ques").innerHTML === "Mammals that can fly?"){
        var opt1 = document.createElement("button");
        opt1.innerHTML = "penguins";
        opt1.onclick = function opta(){
             document.getElementById("res").innerHTML = "your answer is wrong.";
             document.getElementById("res").style.color = "red";
              setTimeout(next, 1000);
              opt1.style.display = "none";
              opt2.style.display = "none";
              opt4.style.display = "none";
              opt3.style.display = "none";
           }
        document.body.appendChild(opt1);

        var opt2 = document.createElement("button");
        opt2.innerHTML = "Squirrels";
        opt2.onclick = function optb(){
          document.getElementById("res").innerHTML = "your answer is wrong.";
          document.getElementById("res").style.color = "red";
             setTimeout(next, 1000);
             opt1.style.display = "none";
             opt2.style.display = "none";
             opt4.style.display = "none";
             opt3.style.display = "none";
        }
        document.body.appendChild(opt2);

        var opt3 = document.createElement("button");
        opt3.innerHTML = "Bats";
        opt3.onclick = function optc(){
          document.getElementById("res").innerHTML = "your answer is right.";
          document.getElementById("res").style.color = "green";
             setTimeout(next, 1000);
               count++;
             opt1.style.display = "none";
             opt2.style.display = "none";
             opt4.style.display = "none";
             opt3.style.display = "none";
          }
        document.body.appendChild(opt3);

        var opt4 = document.createElement("button");
        opt4.innerHTML = "Chickens";
        opt4.onclick = function optd(){
          document.getElementById("res").innerHTML = "your answer is wrong.";
          document.getElementById("res").style.color = "red";
             setTimeout(next, 1000);
             opt1.style.display = "none";
             opt2.style.display = "none";
             opt4.style.display = "none";
             opt3.style.display = "none";
        }
        document.body.appendChild(opt4);

  }

 else if(document.getElementById("ques").innerHTML === "An animal with blue blood?"){
        var opt1 = document.createElement("button");
        opt1.innerHTML = "Whale shark";
        opt1.onclick = function opta(){
          document.getElementById("res").innerHTML = "your answer is wrong.";
          document.getElementById("res").style.color = "red";
             setTimeout(next, 1000);
             opt1.style.display = "none";
             opt2.style.display = "none";
             opt4.style.display = "none";
             opt3.style.display = "none";
        }
        document.body.appendChild(opt1);

        var opt2 = document.createElement("button");
        opt2.innerHTML = "Platypus";
        opt2.onclick = function optb(){
          document.getElementById("res").innerHTML = "your answer is wrong.";
          document.getElementById("res").style.color = "red";
             setTimeout(next, 1000);
             opt1.style.display = "none";
             opt2.style.display = "none";
             opt4.style.display = "none";
             opt3.style.display = "none";
        }
        document.body.appendChild(opt2);

        var opt3 = document.createElement("button");
        opt3.innerHTML = "Snake";
        opt3.onclick = function optc(){
          document.getElementById("res").innerHTML = "your answer is wrong.";
          document.getElementById("res").style.color = "red";
             setTimeout(next, 1000);
             opt1.style.display = "none";
             opt2.style.display = "none";
             opt4.style.display = "none";
             opt3.style.display = "none";
        }
        document.body.appendChild(opt3);

        var opt4 = document.createElement("button");
        opt4.innerHTML = "Octopus";
        opt4.onclick = function optd(){
          document.getElementById("res").innerHTML = "your answer is right.";
          document.getElementById("res").style.color = "green";
             setTimeout(next, 1000);
              count++;
             opt1.style.display = "none";
             opt2.style.display = "none";
             opt4.style.display = "none";
             opt3.style.display = "none";
          }
        document.body.appendChild(opt4);
  }

  else if(document.getElementById("ques").innerHTML === "An animal with no brain?"){
        var opt1 = document.createElement("button");
        opt1.innerHTML = "Ostrich";
        opt1.onclick = function opta(){
          document.getElementById("res").innerHTML = "your answer is wrong.";
          document.getElementById("res").style.color = "red";
             setTimeout(next, 1000);
             opt1.style.display = "none";
             opt2.style.display = "none";
             opt4.style.display = "none";
             opt3.style.display = "none";
        }
        document.body.appendChild(opt1);

        var opt2 = document.createElement("button");
        opt2.innerHTML = "Starfish";
        opt2.onclick = function optb(){
          document.getElementById("res").innerHTML = "your answer is right.";
          document.getElementById("res").style.color = "green";
             setTimeout(next, 1000);
             count++;
             opt1.style.display = "none";
             opt2.style.display = "none";
             opt4.style.display = "none";
             opt3.style.display = "none";
        }
        document.body.appendChild(opt2);

        var opt3 = document.createElement("button");
        opt3.innerHTML = "Ant";
        opt3.onclick = function optc(){
          document.getElementById("res").innerHTML = "your answer is wrong.";
          document.getElementById("res").style.color = "red";
             setTimeout(next, 1000);
             opt1.style.display = "none";
             opt2.style.display = "none";
             opt4.style.display = "none";
             opt3.style.display = "none";
          }
        document.body.appendChild(opt3);

        var opt4 = document.createElement("button");
        opt4.innerHTML = "Fish";
        opt4.onclick = function optd(){
          document.getElementById("res").innerHTML = "your answer is wrong.";
          document.getElementById("res").style.color = "red";
             setTimeout(next, 1000);
             opt1.style.display = "none";
             opt2.style.display = "none";
             opt4.style.display = "none";
             opt3.style.display = "none";
        }
        document.body.appendChild(opt4);
  }

  else if(document.getElementById("ques").innerHTML === "What animal is this?"){ 
        const img = document.createElement('img');
        img.src = "https://th.bing.com/th/id/OIP.dFfkluXbAqUZfX6MJMgiMwHaFj?w=236&h=180&c=7&r=0&o=5&dpr=2&pid=1.7";
        img.width = 500;
        img.height = 300;
        document.getElementById('image').appendChild(img);
        var opt1 = document.createElement("button");      
        opt1.innerHTML = "seal";
        opt1.onclick = function opta(){
          document.getElementById("res").innerHTML = "your answer is wrong.";
          document.getElementById("res").style.color = "red";
             setTimeout(next, 1000);
             opt1.style.display = "none";
             opt2.style.display = "none";
             opt4.style.display = "none";
             opt3.style.display = "none";
        }
        document.body.appendChild(opt1);

        var opt2 = document.createElement("button");
        opt2.innerHTML = "Otter";
        opt2.onclick = function optb(){
          document.getElementById("res").innerHTML = "your answer is right.";
          document.getElementById("res").style.color = "green";
             setTimeout(next, 1000);
               count++;
             opt1.style.display = "none";
             opt2.style.display = "none";
             opt4.style.display = "none";
             opt3.style.display = "none";
        }
        document.body.appendChild(opt2);

        var opt3 = document.createElement("button");
        opt3.innerHTML = "Walrus";
        opt3.onclick = function optc(){
          document.getElementById("res").innerHTML = "your answer is wrong.";
          document.getElementById("res").style.color = "red";
             setTimeout(next, 1000);
             opt1.style.display = "none";
             opt2.style.display = "none";
             opt4.style.display = "none";
             opt3.style.display = "none";
        }
        document.body.appendChild(opt3);

        var opt4 = document.createElement("button");
        opt4.innerHTML = "Beaver";
        opt4.onclick = function optd(){
          document.getElementById("res").innerHTML = "your answer is wrong.";
          document.getElementById("res").style.color = "red";
             setTimeout(next, 1000);
             opt1.style.display = "none";
             opt2.style.display = "none";
             opt4.style.display = "none";
             opt3.style.display = "none";
        }
        document.body.appendChild(opt4);
  }

  else{
    document.getElementById("ques").innerHTML="The quiz ends here.";
    score();
  }
}

function score(){
  image.style.display= "none";
  document.getElementById("score").innerHTML = "Hey!" + person + " your score was " + count + " Out of 4";
}