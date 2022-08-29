function validateForm(){
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
   
    if ( email.value !== " " && password.value.length >= 6 ){
    
    window.location = "/home.html"; 
    return false;
    }
    else{
    alert("Los datos ingresados son incorrectos");
  
    }
    }