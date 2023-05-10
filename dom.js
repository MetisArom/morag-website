const myForm = document.querySelector(".my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const messageInput = document.querySelector("#message");

myForm.addEventListener("submit", onSumbit);

function onSumbit(e) {
    e.preventDefault();
    if(nameInput.value === "" || emailInput.value === "" || messageInput.value === "" ){
        msg.classList.add("error");
        msg.innerHTML = "<p>Please Enter All Fields <\p>";
        setTimeout( () => {
            msg.classList.remove("error")
            msg.innerHTML = "";
        }, 3000);
    }
    else{
        console.log("Processed Message");
        nameInput.value = "";
        emailInput.value = "";
        messageInput.value = "";
        msg.innerHTML = "<p>Message was Sent<\p>";
        setTimeout( () => {
            msg.innerHTML = "";
        }, 3000);
    }
}