const form = document.querySelector("form");



const submitHandler = (e => {
    e.preventDefault();

    const { elements: {
        email,
        password,
    }} = e.currentTarget

    if(email.value === "" || password.value === ""){
        return alert("Please fill the fields!")
     } 
     
     const user = { email : email.value, password: password.value};
     console.log(user)

     form.reset()
})


form.addEventListener("submit" , submitHandler);
