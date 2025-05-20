
function validateForm(){

    let username=document.getElementById("username").value 
    let email=document.getElementById("textmail").value
    let password=document.getElementById("password").value
    let cpassword=document.getElementById("cpassword").value
    let female=document.getElementById("female")
    let male=document.getElementById("male")
    let terms=document.getElementById("terms")

   if(username==""||username.length<4){
    alert("Username must be filled and more than 4 characters")
   }else if (!email.endsWith("@gmail.com")){
    alert ("Email must end with @gmail.com")
   }else if (!isAlphaNumeric(password)){
    alert("Password must be alphanumeric")
   }else if (password != cpassword){
    alert("Password and confirm password has to match")
   }else if (!female.checked && !male.checked){
    alert("Please select a gender")
   }else if (!terms.checked){
    alert("Please agree to the term and condition")
   }
   else{
    alert("form sucessfully submitted")
   document.querySelector("form").submit()

   }
   //buat submit formnya
}

function isAlphaNumeric (str){
    let isAlpha=false
    let isNumeric=false

    for(let i=0;i<str.length;i++){
        if(isNaN(str[i])){
            isAlpha=true;
        }
        else{
            isNumeric=true;
        }
    
        if (isAlpha && isNumeric){
            return true
        }
    
    }
    return false
}




