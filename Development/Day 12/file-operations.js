// Below I try to read a file

const fs = require('fs').promises;

async function readFile(filepath) {
  try {
    const readedData = await fs.readFile(filepath, 'utf8');
    console.log('File Content \n', readedData);
    return readedData;
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.error('File Not Found :', filepath);
    } else {
      console.error('Read Error :', error.message);
    }
    return null;
  }
}

readFile('read.txt');

// Below I try to write a file

async function writeToFile(filepath, content) {
  try {
    await fs.writeFile(filepath, content, 'utf8');
    console.log(`Written to ${filepath}`);
  } catch (error) {
    console.error('Write error', error.message);
  }
}

writeToFile(
  'write.txt',
  'Hello I am trying to write this file hope it was done gracefully \n Date: ' +
    new Date(),
);

// Below I try to append a file content without earsing existing one

async function appendToFile(filepath, content) {
  try {
    await fs.appendFile(filepath, '\n' + content, 'utf8');
    console.log(`Appending in this file :`, filepath);
  } catch (error) {
    console.error(`Error Message :`, error.message);
  }
}

appendToFile('write(2).txt', 'Appending Sucessful');

// Read JSON File

async function readJson(filepath) {
  try {
    const data = await fs.readFile(filepath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('JSON read error', error.message);
    return null;
  }
}

// Write JSON File

async function writeToFile(filepath, content) {
  try {
    await fs.writeFile(filepath, content, 'utf8');
    console.log(`Written to ${filepath}`);
    return JSON.parse();
  } catch (error) {
    console.error('Error Message :', error.message);
  }
}

// Building a task manager that persists tasks

const fs = require('fs').promises;

class TaskManager {
  constructor(filePath) {
    this.filePath = filePath;
    this.tasks = []; // Initialize empty array
  }

  // 1. LOAD: Read file and put data into this.tasks
  async loadTasks() {
    try {
      // FIX: Use 'this.filePath', not 'filepath'
      const readData = await fs.readFile(this.filePath, 'utf8');
      
      // FIX: Use 'this.tasks' (plural), not 'this.task'
      this.tasks = JSON.parse(readData);
      console.log('📂 Tasks loaded successfully.');
    } catch (error) {
      if (error.code === 'ENOENT') {
        // If file doesn't exist, we just start with an empty array
        this.tasks = [];
        console.log('🆕 No task file found. Starting fresh.');
      } else {
        console.error('❌ Error loading tasks:', error.message);
      }
    }
  }

  // 2. SAVE: Write this.tasks to file
  async saveTasks() {
    try {
      // Convert array to string with indentation (Pretty Print)
      const data = JSON.stringify(this.tasks, null, 2);
      await fs.writeFile(this.filePath, data, 'utf8');
      // We don't need to log every time we save, but it helps for debugging
      // console.log('💾 Tasks saved to file.'); 
    } catch (error) {
      console.error('❌ Error saving tasks:', error.message);
    }
  }

  // 3. ADD: Create a task, push to array, and save
  async addTask(title, priority = 'medium') {
    const newTask = {
      id: Date.now(), // specific ID based on current time
      title: title,
      priority: priority,
      completed: false,
      createdAt: new Date().toISOString()
    };

    this.tasks.push(newTask); // Add to local memory
    await this.saveTasks();   // Save to hard drive
    
    console.log(`✅ Added task: "${title}"`);
    return newTask;
  }

  // 4. LIST: Display all tasks
  async listTasks() {
    console.log('\n--- 📋 YOUR TASKS ---');
    if (this.tasks.length === 0) {
      console.log('(No tasks found)');
    } else {
      this.tasks.forEach((task) => {
        const status = task.completed ? '[x]' : '[ ]';
        console.log(`${status} ${task.title} (${task.priority})`);
      });
    }
    console.log('---------------------\n');
  }

  // 5. COMPLETE: Find task by ID and update it
  async completeTask(taskId) {
    // Find the task in the array
    const task = this.tasks.find(t => t.id === taskId);
    
    if (task) {
      task.completed = true;
      await this.saveTasks(); // Save the change!
      console.log(`🎉 Completed task: "${task.title}"`);
    } else {
      console.error(`❌ Task with ID ${taskId} not found.`);
    }
  }
}

// --- TEST ZONE ---
// We wrap this in an async function to use 'await'
(async () => {
  console.log('🚀 Starting Task Manager...');
  
  const manager = new TaskManager('tasks.json');

  // 1. Load existing tasks (or start empty)
  await manager.loadTasks();

  // 2. Add some new tasks
  await manager.addTask('Learn Node.js fs', 'high');
  await manager.addTask('Practice JavaScript Classes', 'medium');

  // 3. Show the list
  await manager.listTasks();

  // 4. (Optional) Simulate completing the first task
  // We grab the ID of the first task to test the complete function
  if (manager.tasks.length > 0) {
    const firstTaskId = manager.tasks[0].id;
    await manager.completeTask(firstTaskId);
    
    // List again to see the change
    await manager.listTasks();
  }

})();