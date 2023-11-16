const loginFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector("#inputUsername").value;
    const password = document.querySelector("#inputPassword").value;

    console.log(username)
    console.log(password)

    if (username && password) {
        const response = await fetch("/api/users/login", {
            method: "POST",
            body: JSON.stringify({ username, password }),
            headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
            document.location.replace("/");
        } else {
            alert("Failed to log in.");
        }
    }
};

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
