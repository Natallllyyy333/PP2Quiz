document.addEventListener('DOMContentLoaded', function() {
    emailjs.init('CZBD7pmlWJlOCL1-T'); 

const buttonValue = document.getElementById('buttonValue');
const name = document.getElementById('name');

const container = document.getElementById('containner');


document.getElementById('form').addEventListener('submit', function(event) {
   event.preventDefault();


   buttonValue.innerText = 'Sending...';

   const serviceID = 'service_oal2s54';
   const templateID = 'template_i19g79l';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
    
    
    container.innerHTML= `<div id="transparent">
            <h3>Thank you <br> for your message, ${name.value}! <br> Your Feedback means a lot!</h3>
        </div>`;
    }, (err) => {
    
      alert(JSON.stringify(err));
    });
});
  
} );


   

