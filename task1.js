function findMiddleCharacter() {
    let input = prompt("Enter a word (or type 'cancelled' to exit):");

    if (input === "cancelled") {
        alert("Canceled.");
        return;
    }

    input = input.trim();

    if (input === "") {
        alert("Invalid value");
    } else {
        let length = input.length;
        let middle;

        if (length % 2 === 0) {
            // If the length is even, get the middle two characters
            middle = input.charAt(length / 2 - 1) + input.charAt(length / 2);
        } else {
            // If the length is odd, get the middle character
            middle = input.charAt(Math.floor(length / 2));
        }

        alert(middle);
    }

    // Prompt the user for another word
    findMiddleCharacter();
}

// Start the process
findMiddleCharacter();
