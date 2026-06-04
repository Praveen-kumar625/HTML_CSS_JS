// Logic for LECT 7: Signup and Data Fetching from Local Storage

document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.getElementById("signupForm");
    const userListContainer = document.getElementById("userListContainer");
    const fetchDataBtn = document.getElementById("fetchDataBtn");
    const clearDataBtn = document.getElementById("clearDataBtn");

    // Function to fetch and render user data from local storage
    const fetchUsers = () => {
        const storedData = localStorage.getItem("allUsers");
        const users = storedData ? JSON.parse(storedData) : [];

        if (users.length === 0) {
            userListContainer.innerHTML = '<div class="empty-state">No users registered yet.</div>';
            return;
        }

        let tableHTML = `
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
        `;

        users.forEach(user => {
            tableHTML += `
                <tr>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                </tr>
            `;
        });

        tableHTML += `
                </tbody>
            </table>
        `;

        userListContainer.innerHTML = tableHTML;
    };

    // Signup event listener
    signupForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        const newUser = { name, email, password };

        // Fetch existing users or initialize empty array
        const storedData = localStorage.getItem("allUsers");
        const users = storedData ? JSON.parse(storedData) : [];

        // Add new user to the list
        users.push(newUser);

        // Save back to local storage
        localStorage.setItem("allUsers", JSON.stringify(users));

        alert("User registered successfully!");
        signupForm.reset();
        
        // Refresh the list immediately
        fetchUsers();
    });

    // Refresh button listener
    fetchDataBtn.addEventListener("click", () => {
        fetchUsers();
        console.log("User list refreshed.");
    });

    // Clear data listener
    clearDataBtn.addEventListener("click", () => {
        if (confirm("Are you sure you want to delete all stored users?")) {
            localStorage.removeItem("allUsers");
            fetchUsers();
            console.log("Local storage cleared.");
        }
    });

    // Initial fetch on page load
    fetchUsers();
});