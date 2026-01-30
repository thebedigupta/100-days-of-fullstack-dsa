const contact = {
  // Properties (key-value pairs)
  firstName: 'Alex',
  lastName: 'Bedi',
  phone: '+1-555-1234',
  email: 'alex@example.com',
  isFavorite: true,
  tags: ['work', 'developer'], // Array inside object

  // Method (function inside object)
  getFullName: function () {
    // Use 'this' to access other properties
    return this.firstName + ' ' + this.lastName;
  },

  // Another method
  getContactInfo: function () {
    const favoriteStar = this.isFavorite ? '★' : '☆';
    return `${favoriteStar} ${this.getFullName()} | ${this.phone} | ${this.email}`;
  },
};

// Test it
console.log('Full Name:', contact.getFullName());
console.log('Contact Info:', contact.getContactInfo());

// Access individual properties
console.log('Phone:', contact.phone);
console.log('Email:', contact.email);

// Access using bracket notation (for dynamic keys)
const property = 'tags';
console.log('Tags:', contact[property]); // Same as contact.tags

const secondPerson = {
  firstName: 'Bedi',
  lastName: 'Gupta',
  isFavorite: false,
  phone: '+919999999999',
  email: 'example@gmail.com',
  tags: ['SDE', 'Developer'],

  getfullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },

  getContactInfo: function () {
    const favoriteStar = this.isFavorite ? '★' : '☆';
    return `${favoriteStar} ${this.getfullName()} | ${this.phone} | ${this.email}`;
  },
};
console.log(`Full Name :`, secondPerson.getfullName());
console.log(`Contact Info : ${secondPerson.getContactInfo()}`);
console.log(`Phone : ${secondPerson.phone}`);
console.log(`Email :${secondPerson.email}`);
const posts = 'tags';
console.log(`Tags :`, secondPerson[posts]);

const thirdPerson = {
  firstName: 'Tanvi',
  lastName: 'Gupta',
  phone: '+919090909090',
  email: 'example@gmail.com',
  isFavorite: true,
  tags: ['SDE Intern', 'Full Stack Developer'],

  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },

  getContactInfo: function () {
    const favoritePerson = this.isFavorite ? '★' : '☆';
    return `${favoritePerson} ${this.getFullName()} ${this.phone} | ${this.email}`;
  },
};

console.log(`Full Name :`, thirdPerson.getFullName());
console.log(`Contact Info :`, thirdPerson.getContactInfo());
console.log(`Phone :`, thirdPerson.phone);
console.log(`Email :`, thirdPerson.email);

const occupation = 'tags';
console.log(`Tags :`, thirdPerson[occupation]);
