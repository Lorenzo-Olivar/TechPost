const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector("#inputUsername").value;
    const password = document.querySelector("#inputPassword").value;
  
    if (username && password) {
      const response = await fetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to sign up.');
      }
    }
  };

  document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);