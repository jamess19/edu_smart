# eduSmart - University Management System

## Overview

eduSmart is a comprehensive university management system developed as an individual project to streamline academic and administrative processes for students, teachers, and administrators. It provides a robust platform for managing student records, course schedules, grades, and communication within a university environment. The system is built with a modern tech stack, featuring a Java Spring Boot backend, a ReactJS frontend, and Knex.js for database management.

## Tech Stack

eduSmart is a university management system consisting of three main components:

- **Back-end**: RESTful API built with Java Spring Boot.
- **Front-end**: ReactJS web application for end users.
- **Database Migration**: Uses Knex.js for schema management and seeding data.

---

## Features

- **Student Management**: Manage student profiles, enrollment status, and academic records.
- **Course Management**: Create and manage course schedules, syllabi, and assignments.
- **Teacher Management**: Handle teacher profiles, class assignments, and grading tasks.
- **Student Portal**: Allow students to view grades, schedules, and submit assignments.
- **Teacher Portal**: Enable teachers to manage classes, input grades, and communicate with students.
- **Notifications**: Automated alerts for deadlines, class updates, and announcements.
- **Reporting**: Generate reports for student performance, attendance, and course analytics.

## Project Structure

```
eduSmart/
├── back-end/           # Java Spring Boot RESTful API
├── db_migration/       # Database migrations and seeding with Knex.js
├── front-end/          # ReactJS web application
├── README.md           # Project documentation
```

## System Requirements

- **Node.js**: >= 14.x (for frontend and database migrations)
- **Java**: >= 17 (for backend)
- **Maven**: For building the backend
- **SQL Server**: For database storage
- **Git**: For version control

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/jamess19/edu_smart.git
cd eduSmart
```

### 2. Database Migration

1. Install dependencies:

```bash
cd db_migration
npm install
```

2. Configure database connection in `db_migration/knexfile.js` and `.env`. Example `.env`:

```env
DB_HOST=localhost
DB_PORT=1433
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=edu_smart
```

3. Run migrations and seeders:

```bash
npx knex migrate:latest
npx knex seed:run
```

### 3. Backend Setup (Spring Boot)

1. Install dependencies:

```bash
cd back-end
./mvnw clean install
```

2. Configure database in `back-end/src/main/resources/application.properties`. Example:

```properties
spring.datasource.url=jdbc:sqlserver://localhost:1433;databaseName=edu_smart
spring.datasource.username=your_username
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
```

3. Start the backend server:

```bash
./mvnw spring-boot:run
```

The API will be available at `http://localhost:8080`.

### 4. Frontend Setup (ReactJS)

1. Install dependencies:

```bash
cd front-end
npm install
```

2. Start the frontend application:

```bash
npm start
```

The application will be available at `http://localhost:3000`.

## Usage

1. **Access the Application**: Open `http://localhost:3000` in your browser.
2. **Manage University Operations**: Use the interface to manage student records, course schedules, and grades.
3. **Student Portal**: Students can log in to view their grades, schedules, and submit assignments.
4. **Teacher Portal**: Teachers can manage classes, input grades, and communicate with students.
5. **Notifications**: Receive automated alerts for deadlines, class updates, and announcements.
6. **Reporting**: Generate reports for student performance, attendance, and course analytics.

## Useful Commands

- **Backend**:
  - Build: `./mvnw clean install`
  - Run: `./mvnw spring-boot:run`
- **Frontend**:
  - Run: `npm start`
  - Build: `npm run build`
- **Database Migration**:
  - Migrate: `npx knex migrate:latest`
  - Seed: `npx knex seed:run`

## Tech Stack

- **Frontend**: ReactJS, JavaScript, HTML, CSS
- **Backend**: Java, Spring Boot
- **Database**: SQL Server, Knex.js
- **Tools**: Maven, Node.js, Git, GitHub, VS Code, Postman

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add your feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

Please ensure your code adheres to the project's coding standards and includes relevant tests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For questions or feedback, reach out to [jamess19](https://github.com/jamess19) or open an issue on GitHub.
