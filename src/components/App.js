import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [categoriesList, setCategoryList] = useState(CATEGORIES);
  const[taskData, setTaskData] = useState(TASKS)
  const [newItem, setNewItem] = useState({
    text:"Wash the dishes",
    category: "Code"
  })

  function handleDelete(taskName) {
    const newTaskData = taskData.filter(task => task.text !== taskName);
    // console.log("This is the task", taskName)
    // console.log("This is the filtered tasks", newTaskData)
    setTaskData(newTaskData)
  }

  function handleCategoryList(event) {

    setCategoryList(categoriesList)
    const {value} = event.target
    console.log(value);
    event.target.className = 'selected';

    // console.log(event.target.className)

    handleFilteredList(value, event.target.className);
    // console.log("The returned value is:",res)
  }


  function handleFilteredList(value, className) {
    // console.log("This is the className of this button", className)
    if(className){
      const newDataTasks = TASKS.filter((task) => {
        if(value === "All") return true;
        return value === task.category;
      })
    setTaskData(newDataTasks);
    }
  }

  function handleInputChange(event) {
    const{value, name} = event.target;
    const userNewItem = {
      ...newItem,
      [name]:value,
    }

    setNewItem(userNewItem)
  }


  function onTaskFormSubmit(event) {
    event.preventDefault();
      setTaskData([
        ...taskData,
        newItem
      ])
      console.log("This is the rendered: ", newItem)
      setNewItem({
        text:'',
        category:'Code'
      })


  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categoriesList} onClickCategory={handleCategoryList} />
      <NewTaskForm  categories = {categoriesList} newItem={newItem} onChangeAddItem={handleInputChange} onTaskFormSubmit={onTaskFormSubmit}  />
      <TaskList tasks={taskData} onDeleteTask={handleDelete}  />
    </div>
  );
}

export default App;
