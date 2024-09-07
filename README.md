# Expense Tracker App

## Test Submission

This project is submitted as part of a test assignment for a fintech mobile app feature. The task was to build a simple expense tracker application using React Native and TypeScript, with a focus on clean code, intuitive UI, and proper state management.

## Description

This is a simple expense tracking mobile application that allows users to add, display, and calculate their expenses. It features core functionality like adding new expenses, viewing recent expenses in a list, and calculating the total amount spent.

## Features

### 1. Add Expenses

- Users can add new expenses with the following fields:
  - **Description**: A short description of the expense.
  - **Amount**: The monetary value of the expense.
  - **Category**: The category under which the expense falls (e.g., Food, Travel, etc.).

### 2. Display Recent Expenses

- A list of recent expenses is displayed using FlashList for efficient rendering.
- Expenses are categorized and styled for easy readability.

### 3. Calculate Total Amount

- The app automatically calculates and displays the total amount spent based on the added expenses.

## Bonus Features

### 1. Filter by Category

- Users can filter the list of expenses based on selected categories to easily manage expenses.

### 2. Data Persistence

- The app uses MMKV for storage, ensuring that expense data persists even after the app is closed and reopened.

## UI and Styling

- No external UI libraries were used in this project.
- The UI is styled using React Native’s built-in styling methods and is designed to be responsive across different screen sizes.

## Technologies Used

- **React Native**: To build the cross-platform mobile app.
- **TypeScript**: For better code maintainability and type safety.
- **React Hooks**: (e.g., `useState`, `useEffect`) for state and effect management.
- **FlashList**: For rendering a performant list of expenses.
- **MMKV**: For fast and efficient data storage.

## Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/benjamineruvieru/gradell-test.git
   ```

2. Navigate into the project directory:

   ```bash
   cd  gradell-test
   ```

3. Install the dependencies:

   ```bash
   npm install
   # or
   yarn
   ```

4. Run the app on your device or simulator:
   ```bash
   npx react-native run-android
   # or
   npx react-native run-ios
   ```

A ready to install apk can also be found under the apk folder

## Usage

1. Open the app on your mobile device.
2. Click on the plus button and use the form to add expenses with a description, amount, and category.
3. View recent expenses in a categorized list and see the total amount spent.
4. Optionally, filter expenses by category.

## Folder Structure

```bash
.
├── assets/             # Static assets
├── components/         # Reusable UI components
├── constants/          # App-wide constants
├── features/           # Features like expense management
├── utils/              # Utility functions (e.g., formatting functions)
├── navigation/
└── services
```

## License

This project is licensed under the MIT License.
