const form = document.querySelector (".login-form");
form.addEventListener ("submit", (event) => {
event.PreventDefault ();

const {elements: { email, password }} = Event.currentTarget;
if (email.value === "" ||  password.value === "") {
    alert ("Все поля должны быть заполнены!") 
}
else {
        console.log ({ "email": email.value, "password": password.value });
        
 form.reset ();

}
});
