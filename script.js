//This function compares the initial password with the re-entered password.
function validate(){
  // these usernames are taken
  const taken_username = ["Harry", "Elizabeth","Shana"];
  // assigns x to the value in 're-password' lable.
  var x = document.getElementById('re-password').value;
  // assigns y to the value in 'password' lable.
  var y = document.getElementById('password').value;
  // assigns username to the value given in 'username' lable.
  var username = document.getElementById('username').value;
  //These are flags used for checking if the username and password is valid. These will become true if they are.
  var isValadUsername = false;
  var isValadPassword = false;
  // includes method checks to see if the argument 'username' is in the list 'taken_username'.
  if(taken_username.includes(username)){
    //onsubmit will be returned a false boolean if the username given is in the list. This also stops the submit from completing.
    alert("Username taken.")
    return false;
  }
  else{
    isValadUsername = true;
  }
  
  if(x==y){
     //If password is the same value to the re-entered password then the password will be valid.
    isValadPassword = true;
  }
  else{
    alert("Your re-entered password does not match.")
    return false
  }
  //If both the password and the username are valid then return true and submit the form.
  if(isValadPassword && isValadUsername){
    return true;
  }
  else{
    return false;
  }
    
}

window.onload = draw; // Execute draw function when DOM is ready
function draw() {
     // Assign our canvas element to a variable 
    var canvas = document.getElementById("canvas1");
    // Check to see if the canvas is supported in the user broswer
    if(canvas.getContext){
        var ctx = canvas.getContext("2d"); 
        ctx.fillStyle = "rgba(24,124,200,1)";
        ctx.fillRect (36, 10, 40, 40);
    }
}