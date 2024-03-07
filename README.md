# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


---

# ToDo Application

The ToDo application is a simple task management tool built using React. It allows users to add, delete, and mark tasks as completed.

## Features

- Add tasks: Users can add tasks to their to-do list by typing in the input field and clicking the "ADD" button.
- Delete tasks: Users can delete tasks from their to-do list by clicking the delete icon next to each task.
- Mark tasks as completed: Users can mark tasks as completed by clicking on the task. Clicking on a completed task will unmark it.

## Usage

1. Clone the repository:

    ```
    git clone <https://github.com/DogaDurmaz/To-Do-List.git>
    ```

2. Navigate to the project directory:

    ```
    cd ToDo-App
    ```

3. Install dependencies:

    ```
    npm install
    ```

4. Run the application:

    ```
    npm start
    ```


## How it works

The application is built using React and utilizes local storage to persist tasks even after the browser is closed. 

- The main component `ToDo` manages the state of the to-do list, including adding, deleting, and marking tasks as completed.
- Each task is represented as a `ToDoItem` component, which receives props such as the task number (`no`), display state (`display`), and task text (`text`).
- Tasks are stored in local storage using the `localStorage` API. When the application loads, it retrieves tasks from local storage and populates the to-do list.



---
