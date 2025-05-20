//Validation username ga kosong dan lebih dari 4 karakter, gmail harus @gmail.com, password harus alphanumeric, password == confirm password, gender pilih satu gbs kosong, terms condiiton harus centang


//kalau kita taro .value ketika define variablenya dibawahnya pas if dkk udah gaperu lagi karena nanti jadi undefined
function validateForm(){
    let username=document.getElementById("username").value //atau habis define pake username.value
    let email=document.getElementById("email").value
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
   }
   //buat submit formnya
   document.querySelector("form").submit()
}

function isAlphaNumeric (str){
    let isAlpha=false
    let isNumeric=false
    //kita mau iterasi semua letter di string, kalau ada yang number berarti isNumeric true dan kalau bukan number berarti isAlpha true

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