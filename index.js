document.getElementById('SubscribeForm').addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    
    // Capture the form data
    const email = document.getElementById('SubscribeEmail').value;

    console.log(email);
    // Create an output section to display form data
    // const output = document.getElementById('output');
    // output.innerHTML = `<p>Name: ${name}</p><p>Email: ${email}</p>`;

    // Optionally reset the form
    this.reset();
});