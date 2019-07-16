// Don't change or delete this line! It waits until the DOM has loaded, then calls 
// the start function. More info: 
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start () {
  // The first example is done for you. Uncomment the line below and reload the browser.
  one()
    
  // Your turn! Create a new function called `two`, then call it from here.
}

function one () {
  // First, we have to find the element:
  var one = document.getElementById("one");

  // Next, we apply a new CSS class to it:
  one.classList.add("blue");
}

// CREATE FUNCTION two HERE


function two () {
  var two = document.getElementById("two")
  two.classList.add("green");
}

// CREATE FUNCTION three HERE
function three () {
  var three = document.getElementById("three")
  three.classList.add("black");


// CREATE FUNCTION makeVisible HERE
function makeVisible () {
   invisible()
}
function invisible () {
  var invisible = document.getElementsByClassName("[0]")
  invisible.classList.add("[0]")

}
function makeVisible () {
  visible()
}
function visible() {
  var visible = document.getElementsByClassName("visible")
  visible.classList.add("visible")

}

to complete Wednesday. 
