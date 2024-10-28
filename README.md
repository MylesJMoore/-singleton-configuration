  # Singleton Pattern Configuration Manager

This project demonstrates the Singleton Design Pattern in PHP by managing application configuration settings. The backend is powered by XAMPP (PHP), while the frontend is built using React.

### Features:
- Singleton pattern in PHP for managing configuration settings.
- Fetch configuration settings via a REST API.
- React frontend for displaying configuration data.
- Basic styling with CSS.
- Automated tests with React Testing Library and Jest.

### Steps to Run:

1. **Start the XAMPP Server**
   - Place the backend (`singleton-config-backend`) in the `htdocs` folder.
   - Start Apache from the XAMPP Control Panel.

2. **Run the React Frontend**
   - Navigate to the `singleton-config-frontend` folder.
   - Run `npm start` to start the React app.
   - Access the app at `http://localhost:3000`.

3. **Run Automated Tests**
   - Inside the `singleton-config-frontend` folder, run:
   ```bash
   npm test
