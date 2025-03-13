fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
        username: "emilys",
        password: "emilyspass",
        expiresInMins: 30
    })
})
    .then(res => res.json())
    .then(function(data){
        console.log(data)
    })

const formButtons = document.getElementById("buttons");
const registerButton = document.getElementById("register-button");
const selectAge = document.getElementById("age");
const deleteButton = document.createElement("button");

for (let i=0; i < 83; i++) {
    let ageOption = document.createElement("option");
    ageOption.innerText = i + 18;
    ageOption.value = i + 18;
    selectAge.append(ageOption);
}

registerButton.addEventListener("click", function () {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const ageOptions = document.getElementById("age").value;
    if(username.trim() === "" || password.trim() === ""){
        alert("Please enter both credentials");
        return;
    }
     register(username, password, ageOptions);
});

function register(username, password, age) {
    fetch("https://dummyjson.com/users/add", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            username: username,
            password: password,
            age: age
        })
    })
        .then(res => res.json())
        .then(function(data){
            deleteButton.innerText = "Delete user";
            deleteButton.setAttribute("userid", data.id);
            formButtons.append(deleteButton);
            alert("Regirsted successfully with name: " + data.username);
        })
}

deleteButton.addEventListener("click", function () {
    let apiUrl = "https://dummyjson.com/users/" + this.getAttribute("userid");
    fetch(apiUrl, {
        method: "DELETE",
    })
        .then(res => res.json())
        .then(function(data){
            console.log(data);
        })
});


