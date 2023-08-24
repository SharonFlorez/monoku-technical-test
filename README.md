# Mood Tracking Application

This is a simple mood tracking application built using Angular that allows users to track their mood selections and view mood trends over time.

## Getting Started

### Prerequisites

- Node.js (at least version 12)
- npm (Node Package Manager)

### Installation

1. Clone the repository: `git clone https://github.com/SharonFlorez/monoku-technical-test.git`
2. Install dependencies: `npm install`

### Configuration

1. Create a Firebase project:

- Go to the Firebase Console: https://console.firebase.google.com/
- Create a new project or use an existing one.
- Enable Firestore Database and Authentication sections.
  -- Authentication with Google provider

2. Configure Firebase in your app:

- Open `src/environments/environment.ts` and replace the Firebase configuration placeholders with your actual Firebase configuration.

3. Add API key:

- Open `src/services/config.ts` and replace the API key placeholder with your actual API key.

### Running the Application

1. Start the development server: `ng serve` o `npm run start`

2. Open your browser and navigate to `http://localhost:4200` to access the application.

### Using the Application

1. Login:

- Login using the Google provided authentication method.

2. Make Mood Selections:

- Once logged in, you will be able to make mood selections from the main screen.

3. View Calendar and Trend Chart:

- Navigate to the "Summary" section to view a calendar with recorded mood entries and the trend of your mood selections over time.

4. Logout:

- If you are finished, you can log out of the application with the icon in the header.

### Contributions

- Contributions are welcome! Please fork the repository and submit a pull request.
