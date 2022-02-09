
function getFormValues() {

    let email = document.querySelector('#email-address').value;

    let model = null; 
    let phones = document.querySelectorAll('.phone-type');
    for (let phone of phones){
        if (phone.checked) {
            model = phone.value;
        }
    }

    let services = [];
    let serviceOptions = document.querySelectorAll('.services');
    for (let s of serviceOptions){
        if (s.checked){
            services.push(s.value);
        }
    }

    let pickup = document.querySelector('#pick-up').value;

    // leave this line alone!
    return [email, model, services, pickup];

}

// LEAVE THE BELOW ALONE! DON'T TOUCH
try {
   module.exports = getFormValues;
} catch (e) {}
