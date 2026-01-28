// Good morning, Alex! You have 3 unread messages. Priority level: HIGH
const now = new Date();
const hoursOfDay = now.getHours();

if (hoursOfDay < 12) {
  greetingText = 'Good Morning';
} else if (hoursOfDay < 18) {
  greetingText = 'Good Afternoon';
} else {
  greetingText = 'Good Evening';
}

// Use it in your template literal

const userName = 'Bedi'; // string
const hourOfDay = 9; // number (9 AM)
const unreadCount = 3; // number
const isPriority = true; // boolean (true/false)
const priorityLevel = 'HIGH';

const greeting =
  greetingText + ' ' + userName + '! You have'+ ' ' + unreadCount + ' ' + 'unread messages. Priority level :' + priorityLevel;
console.log(greeting);
