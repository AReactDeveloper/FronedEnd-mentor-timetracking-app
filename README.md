# Frontend Mentor Time Tracking App

![](./design/screenshots/desktop-view.png/.jpg)

Welcome to the **Frontend Mentor Time Tracking App** repository! This project is a solution to the [Time Tracking App](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ2sYx2J) challenge from Frontend Mentor. This app allows users to track time spent on various activities and view their data through interactive charts.

## 📌 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Code Explanation](#code-explanation)
  - [HTML](#html)
  - [CSS](#css)
  - [JavaScript](#javascript)
  - [JSON Data](#json-data)
- [Screenshots](#screenshots)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [License](#license)
- [Contact](#contact)

## 📝 Overview

The Time Tracking App is designed to help users visualize how they spend their time on various activities. The app features a clean, modern design with a responsive layout and interactive charts that display time-tracking data. Users can switch between daily, weekly, and monthly views to see their activity patterns.

## 🚀 Features

- **Time Tracking Data:** View time spent on activities with daily, weekly, and monthly breakdowns.
- **Responsive Design:** Optimized for both desktop and mobile devices.
- **Interactive Charts:** Visual representation of time data using **Chart.js** for an engaging user experience.
- **Detailed Activity View:** Click on activities to see more detailed time tracking information.
- **Dark Mode:** Stylish dark mode design for a modern look and feel.

## 🛠️ Tech Stack

This project uses the following technologies:

- **HTML5**: Provides the structure for the application.
- **CSS3**: Manages the styling and layout of the app.
- **JavaScript**: Handles the interactive features and data manipulation.
- **Chart.js**: Library for creating interactive and visually appealing charts.
- **JSON**: Format for storing and retrieving time tracking data.

## 🧩 Code Explanation

Here’s a detailed look at the main components of the codebase:

### HTML

The `index.html` file sets up the basic structure of the application:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Time Tracking App</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>Time Tracking Dashboard</h1>
        </header>
        <main>
            <!-- Time tracking data display -->
        </main>
        <script src="js/script.js"></script>
    </div>
</body>
</html>
