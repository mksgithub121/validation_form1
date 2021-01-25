function formCheck(){
    //confirm message
    if(confirm("Are you want to submit this form?")){
        function formValidetion(){
            //if confirm message are true then check the input value
            //name box check
            var name = document.forms['form']['name'].value;
            //email box check
            var email = document.forms['form']['email'].value;
            //number box check
            var number = document.forms['form']['number'].value;
            //message box check
            var message = document.forms['form']['message'].value;
            //if input value are null then error message show by array
            var error = [];
            //condition for name
            if(name == "" || name.length <3){
                error[0] = "Name field must be fill!! ";
                document.getElementById("name-error").innerHTML = error[0]; 
            }else{document.getElementById("name-error").innerHTML = ""; }
            //condition for email
            if(email == "" || email.length <10){
                error[1] = "input a valid email ";
                document.getElementById("email-error").innerHTML = error[1];
            }else{document.getElementById("email-error").innerHTML = ""}
            //condition for number
            if(number == "" || number.length <11){
                error[2] = "input a valid number ";
                document.getElementById("number-error").innerHTML = error[2];
            }else{ document.getElementById("number-error").innerHTML = ""}
            //condition for message
            if(message == "" || message.length < 20){
                error[3]="type minimum 20 letter"; document.getElementById("message-error").innerHTML = error[3];
            }else{document.getElementById("message-error").innerHTML = ""}
            if(error.length >0){
                return false;
            }
        }
         if(formValidetion()==false){
            return false;
        }
        
    }else{
        event.preventDefault();return false;
        }
}
           
    
           
    
