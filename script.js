

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registration-form");
   
    form.addEventListener("submit", async function (event) {
        event.preventDefault();  

        // Get values from the form
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const password = document.getElementById("password").value;
        const gender = document.getElementById("gender").value;
        const dob = document.getElementById("dob").value;
        const self = document.getElementById("self").value;

        // Basic client-side validation
        if (!name || !email || !phone || !password) {
            alert("Please fill all required fields.");
            return; // Stop further execution
        }

        const userData = {
            name: name,
            Email: email,
            Mobileno: phone,
            Password: password,
            gender: gender,
            Dob: dob,
            About: self
        };
        console.log(userData)

        try {
            // Send data to backend using axios
            const response = await axios.post('http://localhost:3000/register', userData);
            alert('User registered successfully!');
            console.log('Response:', response.data);
        } catch (error) {
            console.error('There was an error!', error);
            alert('Error registering user: ' + error.response?.data?.message || error.message);
        }
    });
});
