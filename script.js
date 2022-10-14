//This function compares the initial password with the re-entered password.
function validate(){
  
  const taken_passwords = ["Harry", "Elizabeth","Shana"];
  
  var x = document.getElementById('re-password').value;
  
  var y = document.getElementById('password').value;

  var username = document.getElementById('username').value;

  var isValadUsername = false;
  var isValadPassword = false;
  
  if(taken_passwords.includes(username)){
    alert("Username taken.")
    return false;
  }
  else{
    isValadUsername = true;
  }
  
  if(x==y){
    isValadPassword = true;
  }
  else{
    alert("Your re-entered password does not match.")
    return false
  }

  if(isValadPassword && isValadUsername){
    return true;
  }
  else{
    return false;
  }
    
}