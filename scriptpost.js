function SendMail(){
    var params ={
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById("email_id").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_oal2s54", "template_i19g79l", params).then(function(res){
        alert("Success! " + res.status);
    })
}


