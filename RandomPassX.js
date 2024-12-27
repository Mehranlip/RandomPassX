// random-password-generator.js
// This library was created by Mehran Asadi (mehranlip)
// GitHub: https://github.com/mehranlip
// Twitter: https://x.com/mehranlip

class RandomPassX {
    constructor() {
        // Character sets for password generation
        this.charSets = {
            lower: 'abcdefghijklmnopqrstuvwxyz',  // Lowercase letters
            upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',  // Uppercase letters
            numbers: '0123456789',               // Digits
            symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?/~`—'  // Special characters
        };
    }

    // Generate a password
    generate(options = { length: 12, include: ['lower', 'upper', 'numbers'], excludeSimilar: true }) {
        const { length, include, excludeSimilar } = options;
        let charPool = '';  // Pool of characters to choose from

        // Add selected character sets to the pool
        include.forEach(type => {
            if (this.charSets[type]) {
                charPool += this.charSets[type];
            }
        });

        // Remove similar characters (like 0, O, l, I) if needed
        if (excludeSimilar) {
            charPool = charPool.replace(/[oO0lI1]/g, '');
        }

        // If no characters left in the pool, throw an error
        if (charPool.length === 0) {
            throw new Error('Character pool is empty. Include at least one character type.');
        }

        let password = '';  // Generated password
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charPool.length);  // Get a random index
            password += charPool[randomIndex];  // Build the password
        }

        return password;  // Return the password
    }

    // Generate multiple passwords
    generateMultiple(count = 5, options = { length: 12, include: ['lower', 'upper', 'numbers'], excludeSimilar: true }) {
        const passwords = [];  // Array to hold the generated passwords
        for (let i = 0; i < count; i++) {
            passwords.push(this.generate(options));  // Add each generated password to the array
        }
        return passwords;  // Return all the generated passwords
    }
}

// Export the class for other uses
module.exports = RandomPassX;