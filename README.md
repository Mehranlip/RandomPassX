<img src="https://github.com/user-attachments/assets/4b711a3b-341d-4096-8e95-6a85aa497a71"/>

# RandomPassX
RandomPassX is a simple and flexible JavaScript library for generating secure, random passwords. It allows you to customize the generated passwords based on length, character types (lowercase, uppercase, numbers, symbols), and the option to exclude similar-looking characters (e.g., o, O, 0, I, 1, etc.).

Features:
### Customizable Password Length: Choose the length of the generated password.
### Character Set Customization: Select the types of characters to include in the password (lowercase, uppercase, numbers, symbols).
### Exclusion of Similar Characters: Optionally exclude characters that look alike, such as o, O, 0, l, I, 1.
### Generate Multiple Passwords: Generate multiple passwords at once with the same or different settings.
### Installation:
Clone the repository or download the file.
Use the following in your project:
bash
Copy code
```
npm install random-password-generator
```

Usage:
1. Generate a Single Password
You can generate a single password with your custom options.

javascript
Copy code
```
const RandomPassX = require('random-password-generator');

const generator = new RandomPassX();
const password = generator.generate({ length: 16, include: ['lower', 'upper', 'numbers', 'symbols'], excludeSimilar: true });

console.log(password);  // Example: "A8b!&1vQz#N3nD0p"

```
2. Generate Multiple Passwords
You can also generate multiple passwords in one call:

javascript
Copy code
```
const passwords = generator.generateMultiple(5, { length: 12, include: ['lower', 'numbers'], excludeSimilar: false });
console.log(passwords);  // Example: [ "m9h2y0g5j3c8", "e1k9p4x3r2a1", ... ]
```
Options:
length: The length of the generated password(s). Default is 12. <br/>
include: An array of character sets to include in the password. Available options: 'lower', 'upper', 'numbers', 'symbols'. Default is ['lower', 'upper', 'numbers'].  <br/>
excludeSimilar: A boolean flag to exclude similar characters (like o, O, 0, l, I, 1). Default is true.  <br/>
Example Options:
javascript
Copy code
```
{
  length: 16,                       // Password length
  include: ['lower', 'upper', 'numbers', 'symbols'],  // Include lowercase, uppercase, digits, and symbols
  excludeSimilar: true              // Exclude similar-looking characters
}
```
License:
This project is open source and available under the MIT License.

