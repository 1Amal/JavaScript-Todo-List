//This module will create a new Project
import { initializeLocalStorage } from "./index.js";

export class newProject {
  constructor() {
    this.test = {
      completeTaskList: [
        {
          projectName: "urgentAndImportant",
          tasks: [
            {
              taskTitle: "Buy Milk",
              taskDetails: "Buy 2x Cartons of Milk",
              dueDate: "01/06/2024",
              priority: "High",
            },

            {
              taskTitle: "Buy Rice",
              taskDetails: "Buy 10Kg of Rice",
              dueDate: "11/06/2024",
              priority: "Medium",
            },
          ],
        },
        {
          projectName: "notUrgentButImportant",
          tasks: [
            {
              taskTitle: "Wash The Car",
              taskDetails: "Take the Car to a Car Wash",
              dueDate: "22/05/2024",
              priority: "Medium",
            },
            {
              taskTitle: "Cut Grass",
              taskDetails: "Cut grass in the front yard",
              dueDate: "19/05/2024",
              priority: "High",
            },
          ],
        },
      ],
    };
  }

  newProjectAdd(newProjectAdd) {
    let currentLocalStorage = initializeLocalStorage.localStorageAccessRead();
    let newProjectName = newProjectAdd;
    let projectExists = false;

    console.log("Below is the passed Project Name");
    console.log(newProjectAdd);
    for (let i = 0; i < currentLocalStorage["completeTaskList"].length; i++) {
      if (
        currentLocalStorage["completeTaskList"][0]["projectName"] ===
        newProjectName
      ) {
        projectExists = true;
        break;
      }
    }

    if (projectExists) {
      console.log("Project Name exists, so project name will not be added");
    } else {
      console.log("Project Name does not exist, so project name will be ADDED");
      currentLocalStorage["completeTaskList"].push({
        projectName: newProjectName,
        tasks: [], // Assuming a new project starts with an empty task list
      });
      initializeLocalStorage.localStorageAccessWrite(currentLocalStorage);
    }
    // if (initializeLocalStorage["completeTaskList"][i]["projectName"]===!newProjectName)
    //     {
    //         console.log("Project Name does not exist, so project name will be ADDED");
    //     }

    // return initializeLocalStorage.localStorageAccessWrite(newProjectName);

    // this.currentLocalStorage["completeTaskList"].push({projectName:setProjectName,tasks:[addNewTask]});
    // console.log(this.currentLocalStorage);
    // return initializeLocalStorage.localStorageAccessWrite(this.currentLocalStorage);
  }
}
