# Task Management Application

A modern, feature-rich task management system built with Angular 21, designed to help teams collaborate efficiently and track project progress in real-time.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Key Features Explained](#key-features-explained)
- [API Integration](#api-integration)
- [Design Decisions](#design-decisions)
- [Future Enhancements](#future-enhancements)

## 🎯 Overview

This Task Management Application is a comprehensive solution for managing teams, projects, and tasks. It provides an intuitive interface for organizing work, tracking progress, and collaborating with team members. The application features a modern dashboard with real-time statistics, drag-and-drop task boards, and a clean, responsive design.

## ✨ Features

### Core Functionality
- **User Authentication**: Secure login and registration system with JWT token-based authentication
- **Dashboard**: Interactive dashboard with animated statistics and visual mockups
- **Team Management**: Create and manage teams with member assignments
- **Project Management**: Organize work into projects linked to specific teams
- **Task Board**: Kanban-style board with drag-and-drop functionality for task status updates
- **Task Management**: Create, edit, delete, and track tasks with priorities and due dates

### User Experience
- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional interface with smooth animations and transitions
- **Real-time Updates**: Instant feedback and updates across the application
- **Color-coded Status**: Visual indicators for task priorities and statuses
- **Interactive Elements**: Hover effects, smooth transitions, and intuitive interactions

### Technical Features
- **Signal-based State Management**: Utilizing Angular's latest signal API for reactive state management
- **Lazy Loading**: Optimized performance with lazy-loaded feature modules
- **Form Validation**: Comprehensive form validation with real-time error messages
- **Error Handling**: Robust error handling with user-friendly messages
- **Type Safety**: Full TypeScript implementation for type safety

## 🛠 Technologies Used

### Frontend Framework
- **Angular 21.1.2**: Latest version of Angular framework
- **TypeScript 5.7**: Strongly-typed programming language
- **RxJS 7.8**: Reactive programming library for handling asynchronous operations

### UI Components & Styling
- **Angular Material 21.1.1**: Material Design components for Angular
- **SCSS**: Advanced CSS preprocessor for maintainable styles
- **Custom Animations**: CSS keyframe animations for enhanced user experience

### Development Tools
- **Angular CLI 21.1.2**: Command-line interface for Angular development
- **Vitest**: Modern testing framework for unit tests
- **ESLint**: Code quality and consistency tool

### Backend Integration
- **RESTful API**: Integration with backend API for data persistence
- **HTTP Client**: Angular's HttpClient for API communication
- **JWT Authentication**: Token-based authentication system

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 18.x or higher
- **npm**: Version 9.x or higher (comes with Node.js)
- **Angular CLI**: Version 21.x or higher

To check your versions:
```bash
node --version
npm --version
ng version
```

To install Angular CLI globally:
```bash
npm install -g @angular/cli@21
```

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd task-management-app-main
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment** (if needed)
   - Update API endpoints in `src/environments/environment.ts`
   - Configure authentication settings

## 💻 Running the Application

### Development Server

Start the development server:
```bash
ng serve
```

The application will be available at `http://localhost:4200/`

The app will automatically reload when you make changes to the source files.

### Production Build

Build the application for production:
```bash
ng build --configuration production
```

The build artifacts will be stored in the `dist/` directory.

### Running Tests

Execute unit tests:
```bash
ng test
```

## 📁 Project Structure

```
task-management-app-main/
├── src/
│   ├── app/
│   │   ├── core/                    # Core services and guards
│   │   │   ├── guards/              # Route guards (auth)
│   │   │   ├── interceptors/        # HTTP interceptors
│   │   │   ├── models/              # Data models and interfaces
│   │   │   └── services/            # Core services (auth, API)
│   │   ├── features/                # Feature modules
│   │   │   ├── auth/                # Authentication (login, register)
│   │   │   ├── dashboard/           # Dashboard with statistics
│   │   │   ├── projects/            # Project management
│   │   │   ├── tasks/               # Task board and management
│   │   │   └── teams/               # Team management
│   │   ├── shared/                  # Shared components and utilities
│   │   │   ├── components/          # Reusable components (layout)
│   │   │   └── utils/               # Utility functions
│   │   └── app.component.ts         # Root component
│   ├── assets/                      # Static assets
│   ├── environments/                # Environment configurations
│   └── styles.scss                  # Global styles
├── angular.json                     # Angular CLI configuration
├── package.json                     # Dependencies and scripts
├── tsconfig.json                    # TypeScript configuration
└── README.md                        # This file
```

## 🔑 Key Features Explained

### 1. Dashboard
The dashboard provides an overview of your work with:
- Animated statistics showing total teams, projects, and tasks
- Visual mockup demonstrating task progress with color-coded indicators
- Smooth entrance animations for an engaging user experience
- Real-time completion rate tracking

### 2. Team Management
- Create teams with names and descriptions
- View all teams in a responsive grid layout
- Navigate to team-specific projects
- Color-coded cards with hover effects

### 3. Project Management
- Create projects linked to specific teams
- Set project descriptions and due dates
- View projects in an organized grid
- Filter projects by team

### 4. Task Board
- Kanban-style board with three columns: To Do, In Progress, Done
- Drag-and-drop functionality for easy status updates
- Create tasks with:
  - Title and description
  - Priority levels (High, Normal, Low)
  - Due dates
  - Team and project assignments
- Edit and delete tasks with confirmation
- Color-coded priority badges
- Responsive card design with hover effects

### 5. Authentication
- Secure login system with email and password
- User registration with validation
- JWT token-based authentication
- Protected routes with auth guards
- Automatic token refresh

## 🔌 API Integration

The application integrates with a backend API for data persistence:

### Endpoints Used
- `POST /api/auth/login` - User authentication
- `POST /api/auth/register` - User registration
- `GET /api/teams` - Fetch all teams
- `POST /api/teams` - Create new team
- `GET /api/projects` - Fetch all projects
- `POST /api/projects` - Create new project
- `GET /api/tasks` - Fetch all tasks
- `POST /api/tasks` - Create new task
- `PUT /api/tasks/:id` - Update task
- `DELETE /api/tasks/:id` - Delete task

### Authentication
All API requests (except login/register) include JWT token in headers:
```typescript
Authorization: Bearer <token>
```

## 🎨 Design Decisions

### Color Scheme
- **Primary Blue**: `#2c5282` - Main brand color
- **Deep Blue**: `#1e3a5f` - Headers and emphasis
- **Accent Colors**: 
  - Red `#ef4444` - High priority/urgent
  - Blue `#3b82f6` - Normal priority/in progress
  - Green `#22c55e` - Low priority/completed

### Typography
- Clean, modern sans-serif fonts
- Clear hierarchy with varied font sizes and weights
- Excellent readability with proper line heights

### Layout
- Responsive grid system
- Consistent spacing and padding
- Card-based design for content organization
- Smooth transitions and animations

### User Experience
- Intuitive navigation with clear visual hierarchy
- Immediate feedback for user actions
- Error messages in English for clarity
- Hover states for interactive elements
- Loading states for async operations

## 🚀 Future Enhancements

Potential features for future development:
- Real-time collaboration with WebSockets
- File attachments for tasks
- Task comments and activity history
- Email notifications
- Advanced filtering and search
- Task dependencies
- Time tracking
- Reports and analytics
- Mobile application
- Dark mode theme

## 📝 Notes

- All user-facing text is in English for consistency
- Forms use LTR (Left-to-Right) direction
- The application uses Angular's latest features including signals and standalone components
- Material Design principles are followed throughout the application
- Code is fully typed with TypeScript for maintainability

## 👥 Author

Developed as part of an academic project demonstrating modern web development practices with Angular.

## 📄 License

This project is created for educational purposes.

---

**Built with ❤️ using Angular 21**
