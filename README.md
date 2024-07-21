

# Task Management System

This Task Management System is a full-stack application designed to manage tasks efficiently. It is built using Java, Spring Boot, Hibernate, JPA, MySQL for the backend, and Angular for the frontend.

#Backend Folder : TaskManager

#Frontend Folder : task-manager

## Features

- **CRUD Operations**: Create, read, update, and delete tasks.
- **Task Completion**: Mark tasks as completed.
- **Dynamic Form**: Form to create and edit tasks.
- **Filter and Search**: Filter tasks based on their completion status.
- **Consistent Styling**: Custom CSS theme for a consistent look and feel.

## Technologies Used

- **Backend**:
  - Java
  - Spring Boot
  - Hibernate
  - JPA
  - MySQL

- **Frontend**:
  - Angular
  - HTML
  - CSS

## Installation

### Backend

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/task-management-system.git
    cd task-management-system/backend
    ```

2. Set up the MySQL database:
    - Create a database named `task_management`.
    - Update the database configuration in `application.properties`.

3. Build and run the Spring Boot application:
    ```bash
    ./mvnw spring-boot:run
    ```

### Frontend

1. Navigate to the frontend directory:
    ```bash
    cd ../frontend
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Run the Angular application:
    ```bash
    ng serve
    ```

## Usage

1. Open your browser and navigate to `http://localhost:4200`.
2. You will see the task list. Use the form to create new tasks or edit existing ones.
3. Use the checkboxes to mark tasks as completed.
4. Use the filter options to view tasks based on their completion status.

## Project Structure

### Backend

- `src/main/java/com/example/taskmanagement`: Contains the main application files.
  - `controller`: REST controllers for handling API requests.
  - `entity`: Entity classes for mapping to database tables.
  - `repository`: Repository interfaces for database operations.
  - `service`: Service classes for business logic.

- `src/main/resources`: Configuration files.
  - `application.properties`: Database and other configurations.

### Frontend

- `src/app`: Contains the Angular application files.
  - `components`: Angular components.
  - `services`: Services for making HTTP requests to the backend.
  - `models`: TypeScript interfaces and models.

## Future Enhancements

- **User Authentication**: Implement user registration and login.
- **Task Categories**: Categorize tasks for better organization.
- **Due Dates**: Add due dates to tasks and notifications for upcoming deadlines.
- **Attachments**: Attach files to tasks (if required in the future).

## Contributing

Contributions are welcome! Please create an issue or submit a pull request for any changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries, please contact sutarbhakti04@gmail.com.

<h2> ScreenShots</h2>
<h3>Home Page</h3>
<img src = ""></img>
<br>

<h3>Add Task</h3>
<img src = ""></img>
<br>

