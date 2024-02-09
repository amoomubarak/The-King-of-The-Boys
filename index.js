function validation(){
    if(document.Formfill.Username.value==""){
        document.getElementById("result").innerHTML="Enter Username*";
        return false;
    }
    else if(document.Formfill.Username.value.length<6){
        document.getElementById("result").innerHTML="Atleast The Username Must Be Morethan six letter*";
        return false;
    }
    else if(document.Formfill.Email.value==""){
        document.getElementById("result").innerHTML="Enter your Email*";
        return false;
    }
    else if(document.Formfill.Password.value==""){
        document.getElementById("result").innerHTML="Enter your Password*";
        return false;
    }
    else if(document.Formfill.CPassword.length<6){
        document.getElementById("result").innerHTML="Password Must Be 6-Digits";
        return false;
    } 
    else if(document.Formfill.CPassword.value==""){
        document.getElementById("result").innerHTML="Enter confirm Password *";
        return false;
    } 
    else if(document.Formfill.CPassword.value !== document.Formfill.Password.value){
        document.getElementById("result").innerHTML="Password doesn't matched*";
        return false;
    }
    else if(document.Formfill.Password.value == document.Formfill.CPassword.value){
        popup.classList.add("open-slide")
        return false;
    }
}
var popup=document.getElementById('popup');
function CloseSlide(){
    popup.classList.remove("open-slide")
}