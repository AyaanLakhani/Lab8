function Validate()
{
  var pw1 = document.getElementById("pass1");  
  var pw2 = document.getElementById("pass2"); 
  if(pw1.value.length < 8 || pw2.value.length < 8) 
  {
    alert("Password must be atleast 8 characters");
  }
  else if(pw2.value != pw1.value)  
  {   
    alert("Passwords did not match");  
  }
  else
  {
    alert("Password is good");
  }
}