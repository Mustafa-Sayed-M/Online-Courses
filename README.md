# SkillBridge - Online Courses Platform

SkillBridge is a modern online courses platform built with React and Strapi. It features a user-friendly interface, dynamic course listings, and secure authentication, designed to empower users in their learning journey.
<a href="https://mustafa-sayed-m.github.io/Online-Courses/">( Live Site )</a>

## Features

- Browse and purchase online courses with detailed curricula.
- Secure user authentication and personalized dashboards using Clerk.
- Responsive UI built with TailwindCSS for seamless cross-device experience.
- Centralized state management using React Redux and Redux Toolkit.

## Tech Stack

- Front-end: React, TailwindCSS, Font Awesome
- State Management: React Redux, Redux Toolkit
- Authentication: Clerk
- Other Tools: React Router DOM, Formik, Yup

## Environment Variables

To run this project, add the following environment variable in your .env.local file:

```
REACT_APP_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

## Folder Structure

📂 public  
 ┣ 📂assets  
📂 src  
 ┣ 📂 Components  
 ┃ ┣ 📂 About_Components  
 ┃ ┣ 📂 Courses_Components  
 ┃ ┣ 📂 Home_Components  
 ┃ ┣ 📂 Shared_Components  
 ┣ 📂 Global  
 ┣ 📂 Data  
 ┣ 📂 Pages  
 ┣ 📂 Store  
 ┃ ┣ 📂 slices  
 ┃ ┃ ┣ appSlice.js  
 ┃ ┣ store.js  
 ┣ App.js  
 ┣ index.js

## How to Run

1. Clone the repository:

   ```
   git clone https://github.com/your-username/skillbridge.git
   cd skillbridge
   ```

2. Install dependencies:

   ```
    npm install7
   ```

3. Add your environment variables in a `.env.local` file.

4. Start the development server:

   ```
   npm start
   ```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (feature/your-feature-name).
3. Commit your changes.
4. Push your branch.
5. Open a pull request.
