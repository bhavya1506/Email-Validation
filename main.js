function validate() {
    let email = document.querySelector(".email").value;
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const message=document.querySelector(".message");
    const check=document.querySelector(".check");

    if(email.match(pattern)){
        check.classList.add("valid");
        check.classList.remove("invalid")
        message.innerHTML = "Your Email Is Valid"
        message.style.color="green"
    }else{
        check.classList.remove("valid");
        check.classList.add("invalid");
        message.innerHTML = "Please Enter A Valid Address"
        message.style.color="red"
    }
    if(email==""){
        check.classList.remove("valid");
        check.classList.remove("invalid");
    }
}