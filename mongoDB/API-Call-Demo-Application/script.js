const fetchbtn = document.getElementById("fetchbtn");
const output = document.getElementById("output");

fetchbtn.addEventListener("click", fetchUsers);

function fetchUsers() {
    output.innerHTML = "<p>Loading...</p>";

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
            return response.json();
        })
        .then(data => {
            output.innerHTML = "";

            data.forEach(user => {
                const userDiv = document.createElement("div");
                userDiv.classList.add("user");

                userDiv.innerHTML = `
                    <strong>${user.name}</strong><br>
                    Email: ${user.email}<br>
                    City: ${user.address.city}
                `;

                output.appendChild(userDiv);
            });
        })
        .catch(error => {
            output.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
        });
}