# Ori: Skills Profile Explorer

Ori shines a light on your unique skills. Whether you’re learning, teaching, or parenting, it creates space for reflection, deeper understanding, and more compassionate connections.

## Components Overview

### Introduction.tsx
The introduction component welcomes users to the app and provides a brief overview of what Ori is about. It includes:
- A title
- An introductory message
- A button that starts the questionnaire process

### Questionnaire.tsx
This component allows users to self-assess their skills by rating themselves on various skill areas from 0 (less skilled) to 10 (highly skilled). Users can submit their ratings to view their skills profile.

### RadarChartComponent.tsx
A reusable chart component that visualizes user's skills using a radar chart. This component is used in the results section to display the skills profile.

### Results.tsx
displays the results of the self-assessment as a radar chart and provides an option for users to start over if they wish to reassess their skills.

## How To Use

1. **Introduction**:
   - Click on "Get Started" to begin the self-assessment.

2. **Questionnaire**:
   - Rate your skill level in each area from 0 (less skilled) to 10 (highly skilled).
   - After completing all ratings, click on "View My Profile".

3. **Results**:
   - View your skills profile displayed as a radar chart.
   - Take note that results won't be saved; consider taking a screenshot if you want to keep them.

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
    ```bash
    npm install
    ```
2. Run the app:
    ```bash
    npm run dev
    ```
