export const API_CONFIG = {
  baseUrl: 'https://chanis-tasks-serve.onrender.com/api',
  endpoints: {
    auth: {
      register: '/auth/register',
      login: '/auth/login',
      me: '/auth/me'
    },
    teams: '/teams',
    projects: '/projects',
    tasks: '/tasks',
    comments: '/comments'
  }
} as const;