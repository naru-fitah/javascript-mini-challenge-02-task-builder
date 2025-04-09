// ✅ MINI TASK BUILDER — PHASE 1

// 🎯 GOAL:
// Create a function called addTasks that takes an array of task names (strings),
// and returns a list of task objects.

// 🧩 EACH task object should look like this:
// { title: "Task name here", done: false }

// -----------------------------------------------------------

// 🧪 EXAMPLE INPUT:
let inputTasks = ["Buy groceries", "Study JavaScript", "Walk the dog"];

// 🧪 EXPECTED OUTPUT:
/// [
///   { title: "Buy groceries", done: false },
///   { title: "Study JavaScript", done: false },
///   { title: "Walk the dog", done: false }
/// ]

// ✅ YOUR TASK:
// 1. Create a function addTasks(arr)
// 2. Inside the function, loop through the input array
// 3. For each item:
///    - Create an object with title and done properties
// 4. Push the object to a new task list array
// 5. Return the final task list array

// ⬇️ Write your function below:
function addTasks(arr) {

  // Prepares a place to store results
  let newArr = []

  // Loops through the input tasks
  for (let i = 0; i < arr.length; i++) {
    
    // Gets the string for this task
    let taskText = arr[i]
    
    // Builds the object using the string
    let taskObj = {
        title: taskText,
        done: false
      }
    
    // Adds the new object to the final array
    newArr.push(taskObj)
  
}

// Sends back the full structured task list
return newArr

}

// ⬇️ Test it here:
console.log(addTasks(inputTasks))

// ✅ MINI TASK BUILDER — PHASE 2: Mark a Task as Done

// 🎯 GOAL:
// Create a function called completeTask that:
// 1. Takes a task list (array of task objects)
// 2. Takes a string (task title)
// 3. Finds the task that matches the title
// 4. Marks its "done" property as true
// 5. Returns the updated task list

// 🧩 EACH task object looks like this:
// { title: "Buy groceries", done: false }

// -----------------------------------------------------------

// 🧪 EXAMPLE INPUT:
let tasks = [
    { title: "Learn JS", done: false },
    { title: "Walk the dog", done: false },
    { title: "Do laundry", done: false }
  ];
  
  // 🎯 GOAL CALL:
  /// let updated = completeTask(tasks, "Walk the dog");
  
  /// console.log(updated);
  
  // 🧪 EXPECTED OUTPUT:
  /// [
  ///   { title: "Learn JS", done: false },
  ///   { title: "Walk the dog", done: true },
  ///   { title: "Do laundry", done: false }
  /// ]
  
  // ✅ YOUR TASK:
  // 1. Write a function completeTask(taskList, taskTitle)
  // 2. Inside the loop, check if the title matches taskTitle
  // 3. If it does, update the "done" property to true
  // 4. Return the updated taskList
  
  // ⬇️ Write your function below:
  function completeTask(taskList, taskTitle) {
    // Your code here
    for (let i = 0; i < taskList.length; i++) {
        let taskName = taskList[i]
        if (taskTitle === taskName.title) {
            taskName.done = true
        }
    }

    return taskList
    
  }
  
  // ⬇️ Test it here:
  let updatedTasks = completeTask(tasks, "Walk the dog");
  console.log(updatedTasks);
  

// ✅ MINI TASK BUILDER — PHASE 3: Delete a Task

// 🎯 GOAL:
// Create a function called deleteTask that:
// 1. Takes a task list (array of task objects)
// 2. Takes a string (task title to remove)
// 3. Finds the matching task
// 4. Removes it from the array using .splice()
// 5. Returns the updated task list

// -----------------------------------------------------------

  
  // 🧪 CALL:
  // let updated = deleteTask(tasks, "Walk the dog");
  // console.log(updated);
  
  // ✅ EXPECTED OUTPUT:
  // [
  //   { title: "Learn JS", done: false },
  //   { title: "Do laundry", done: false }
  // ]
  
  // ⬇️ Write your function below:
  function deleteTask(taskList, taskTitle) {
    // Your code here
    for (let i = 0; i < taskList.length; i++) {
        
        let taskName = taskList[i]
        
        if (taskTitle === taskName.title) {
            taskList.splice(i, 1)
        }
    }

    return taskList
  }
  
  // ⬇️ Test it here:
  let updated = deleteTask(tasks, "Walk the dog");
  console.log(updated);
  
