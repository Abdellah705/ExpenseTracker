# Expense Tracker Application

This project consists of two main parts:

1. **Frontend**: Built with Angular, providing the user interface for interacting with the expense tracker.
2. **Backend**: Built with .NET, handling the API and the database interactions for managing expenses.

## Prerequisites

Before you begin, make sure you have the following installed:

### Frontend
- [Node.js](https://nodejs.org/en/) (v14.x or higher)
- [Angular CLI](https://angular.io/cli) (v12.x or higher)
- [npm](https://www.npmjs.com/) (v6.x or higher)

### Backend
- [.NET 8 SDK](https://dotnet.microsoft.com/download/dotnet/8.0) (or higher)
- [MySQL](https://www.mysql.com/) (for database)

## Getting Started

### Frontend Setup

1. Clone the repository:

    ```bash
    git clone <repository-url>
    cd frontend
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Run the Angular application:

    ```bash
    ng serve
    ```

4. The frontend will be running at `http://localhost:4200/`.

### Backend Setup

1. Navigate to the backend directory:

    ```bash
    cd backend
    ```

2. Install .NET dependencies:

    ```bash
    dotnet restore
    ```

3. Configure the database connection:
   - Open `appsettings.json` and ensure the connection string for MySQL is correctly set.

4. Migrate the database to create tables:

    ```bash
    dotnet ef database update
    ```

5. Run the backend application:

    ```bash
    dotnet run
    ```

6. The backend will be running at `http://localhost:5000/` (or whichever port you've configured).

## API Endpoints

The backend exposes the following API endpoints:

### `GET /api/expenses`

- Fetches all expenses.

### `POST /api/expenses`

- Adds a new expense. 
- Request body:

  ```json
  {
    "description": "Example expense",
    "amount": 100,
    "date": "2024-12-01"
  }
