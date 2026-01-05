const employees = [
  {
    id: 1,
    firstName: "Amit",
    email: "employee1@example.com",
    password: "123",
    taskSummary: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Design Login Page",
        description: "Create UI for login page using Tailwind",
        taskDate: "2026-01-02",
        category: "UI/UX",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix Navbar Bug",
        description: "Resolve alignment issue in navbar",
        taskDate: "2026-01-01",
        category: "Bug Fix",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "API Integration",
        description: "Integrate login API with frontend",
        taskDate: "2025-12-30",
        category: "Backend",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },

  {
    id: 2,
    firstName: "Priya",
    email: "employee2@example.com",
    password: "123",
    taskSummary: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Create Dashboard Layout",
        description: "Build dashboard structure using grid",
        taskDate: "2026-01-03",
        category: "Frontend",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Optimize Images",
        description: "Compress and optimize website images",
        taskDate: "2026-01-01",
        category: "Performance",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Write Unit Tests",
        description: "Add unit tests for components",
        taskDate: "2025-12-29",
        category: "Testing",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },

  {
    id: 3,
    firstName: "Rahul",
    email: "employee3@example.com",
    password: "123",
    taskSummary: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Database Schema Design",
        description: "Design schema for employee tasks",
        taskDate: "2026-01-04",
        category: "Database",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Auth Middleware",
        description: "Implement JWT authentication middleware",
        taskDate: "2026-01-02",
        category: "Backend",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Fix Deployment Issue",
        description: "Resolve Vercel build error",
        taskDate: "2025-12-28",
        category: "DevOps",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },

  {
    id: 4,
    firstName: "Neha",
    email: "employee4@example.com",
    password: "123",
    taskSummary: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Create Task Form",
        description: "Build task creation form for admin",
        taskDate: "2026-01-03",
        category: "Frontend",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Validate Inputs",
        description: "Add form validations",
        taskDate: "2026-01-01",
        category: "Frontend",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Bug Fix: Date Picker",
        description: "Fix incorrect date selection issue",
        taskDate: "2025-12-27",
        category: "Bug Fix",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },

  {
    id: 5,
    firstName: "Suresh",
    email: "employee5@example.com",
    password: "123",
    taskSummary: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Setup Redux Store",
        description: "Configure Redux Toolkit store",
        taskDate: "2026-01-04",
        category: "State Management",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Refactor Components",
        description: "Clean and refactor reusable components",
        taskDate: "2026-01-01",
        category: "Code Quality",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Fix API Error Handling",
        description: "Handle API errors gracefully",
        taskDate: "2025-12-26",
        category: "Backend",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  }
];

const admin = [
  {
    id: 101,
    email: "admin@example.com",
    password: "123"
  }
];





export const setLocalStorage=()=>{
   localStorage.setItem("employees",JSON.stringify(employees));//we just set our employyes array data to localstoarge by stringyfying that
   localStorage.setItem("admin",JSON.stringify(admin));//we just set our employyes array data to localstoarge by stringyfying that
}

export const getLocalStorage=()=>{
   const employees= JSON.parse(localStorage.getItem('employees'))
   const admin= JSON.parse(localStorage.getItem('admin'))
   return {employees,admin}   
}
