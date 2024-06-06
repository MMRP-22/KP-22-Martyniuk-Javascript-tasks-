// Sample user data
const users = [
    { name: "Moore Hensley" },
    { name: "Sharlene Bush" },
    { name: "Ross Vazquez" },
    { name: "Elma Head" },
    { name: "Carey Barr" }
];

// Function to create the list and add click event listeners
function createUserList(users) {
    const userList = document.getElementById('user-list');
    
    users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = user.name;
        listItem.addEventListener('click', () => {
            alert(`Hello, ${user.name}`);
        });
        userList.appendChild(listItem);
    });
}

// Initialize the list
createUserList(users);
