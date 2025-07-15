document.addEventListener('DOMContentLoaded', function() {
    emailjs.init('CZBD7pmlWJlOCL1-T'); // Замените на ваш userID


const transparent = document.getElementById('transparent');
const buttonValue = document.getElementById('buttonValue');
const name = document.getElementById('name');
const form = document.getElementById('form'); 
const container = document.getElementById('containner');


document.getElementById('form').addEventListener('submit', function(event) {
   event.preventDefault();

//    btn.value = 'Sending...';
   buttonValue.innerText = 'Sending...';

   const serviceID = 'service_oal2s54';
   const templateID = 'template_i19g79l';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
    
    //   alert("Thank you for your message, " + `${name.value} !`+ "Your Feedback is important for us!");
    //    transparent.classList.add('cover');
    container.innerHTML= `<div id="transparent">
            <h3>Thank you <br> for your message, ${name.value}! <br> Your Feedback means a lot!</h3>
        </div>`;
    }, (err) => {
    
      alert(JSON.stringify(err));
    });
});

    // form.addEventListener('submit', function(event) {
    //     event.preventDefault(); // Отменяем стандартное поведение формы
    //      transparent.classList.add('cover'); // Добавляем класс для затемнения
    // });

} );


   
    // if(username.value !== ''){
     
       
    
//getting elements
// const nameInput =document.getElementById("fullName");
// const emailInput =document.getElementById("email_id");
// const messageInput =document.getElementById("message");

// let isValid = true;

//getting iput vaues
    // const fullName = nameInput.value.trim();
    // const email = document.getElementById("email_id").value.trim();
    // const message = document.getElementById("message").value.trim();



// fullname check

// if(!fullName){

// }

//     //email validation
//     const emailRgex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!email){
//         emailInput.classList.add('error');
//     }
// }


