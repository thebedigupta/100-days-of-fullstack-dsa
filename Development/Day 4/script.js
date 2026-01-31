// ============================================
// DAY 4: CONTACT BOOK (Final Version)
// ============================================

// Contact 1
const contact = {
  firstName: 'Alex',
  lastName: 'Bedi',
  phone: '+1-555-1234',
  email: 'alex@example.com',
  isFavorite: true,
  tags: ['work', 'developer'],

  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },

  getContactInfo: function () {
    const favoriteStar = this.isFavorite ? '★' : '☆';
    return `${favoriteStar} ${this.getFullName()} | ${this.phone} | ${this.email}`;
  },
};

// Contact 2 (Fixed: getFullName)
const secondPerson = {
  firstName: 'Bedi',
  lastName: 'Gupta',
  isFavorite: false,
  phone: '+919999999999',
  email: 'example@gmail.com',
  tags: ['SDE', 'Developer'],

  getFullName: function () {
    // FIXED: Capital F
    return `${this.firstName} ${this.lastName}`;
  },

  getContactInfo: function () {
    const favoriteStar = this.isFavorite ? '★' : '☆';
    return `${favoriteStar} ${this.getFullName()} | ${this.phone} | ${this.email}`;
  },
};

// Contact 3 (Fixed: getFullName, getContactInfo)
const thirdPerson = {
  firstName: 'Tanvi',
  lastName: 'Gupta',
  phone: '+919090909090',
  email: 'example@gmail.com',
  isFavorite: true,
  tags: ['SDE Intern', 'Full Stack Developer'],

  getFullName: function () {
    // FIXED: Capital F
    return `${this.firstName} ${this.lastName}`;
  },

  getContactInfo: function () {
    // FIXED: Capital C
    const favoriteStar = this.isFavorite ? '★' : '☆';
    return `${favoriteStar} ${this.getFullName()} | ${this.phone} | ${this.email}`;
  },
};

// =========================================
