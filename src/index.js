//This module contains the application logic for the To Do App and it will act as the intermediary for all the other modules

//ES Module Imports
import "./index.css";
import{displayController} from "./displayController.js";
import {taskNew} from "./taskNew.js";
import {localStorageAccess} from "./localStorageAccess.js";
import {taskEdit} from "./taskEdit.js";
import {newProject} from "./newProject.js";


//ES Module Exports
export const newUserInput=new displayController();
export const initializeLocalStorage=new localStorageAccess();
export const newTaskEdit=new taskEdit();
export const newProjectAdd=new newProject();
export const taskNewSave=new taskNew();


// Program initialization code
const runProgram=function()
{
    console.log("Index.js loaded");

    newUserInput.addNewTaskFormCaptureButtonClicked();
    newUserInput.urgentAndImportantButtonClicked();
    newUserInput.notUrgentButImportantButtonClicked();
    newUserInput.addNewProjectButtonClicked();
    
    initializeLocalStorage.localStorageAccessRead();

    newUserInput.clearDisplayForCurrentTaskList();
    newUserInput.updateDisplayTaskList();



    //Code to check for Local Storage availability
    if (initializeLocalStorage.storageAvailable("localStorage")) 
    {
        console.log("Yippee! We can use localStorage awesomeness");
    } 
    
    else 
    
    {
        console.log("Too bad, no localStorage for us");
    }

}  


runProgram(); // Run the program

