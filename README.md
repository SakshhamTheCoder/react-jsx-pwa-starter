# React JSX SPA Starter Template

## 🌟 Overview

**React JSX SPA Starter Template** is a bare-minimum starter kit for building Progressive Web Applications with React. It provides a simple and minimal setup, making it easy for beginners to get started. The template includes essential tools and configurations, allowing you to focus on adding features and customizing the app as per your needs.

## 💡 Motivation

The motivation behind this template was to create an easy-to-use, beginner-friendly setup for building SPAs in JavaScript. While there are similar templates available with more advanced setups in TypeScript, this project aims to simplify the process for those new to React and SPA development. Some basic configurations have already been done to make future enhancements easier, ensuring a smooth learning curve for beginners.

## ✨ Tech Stack & Features

### Core Technologies

| Technology                               | Version | Description                                              |
| ---------------------------------------- | ------- | -------------------------------------------------------- |
| [Vite](https://vitejs.dev/)              | Latest  | Fast build tool based on ES modules, Rollup, and esbuild |
| [React](https://react.dev/)              | Latest  | Modern React features for building UIs                   |
| [TailwindCSS](https://tailwindcss.com/)  | Latest  | Utility-first CSS framework for styling                  |
| [React Router](https://reactrouter.com/) | Latest  | Flexible client-side routing                             |
| [Axios](https://axios-http.com/)         | Latest  | Promise-based HTTP client for making API requests        |

### Key Features

-   **Routing**: [React Router](https://reactrouter.com/) for flexible client-side routing
-   **State Management**: Context API for global state handling
-   **Project Structure**: Organized folder structure for easy navigation
-   **Performance**: Optimized bundle size with Vite
-   **Code Quality**: ESLint integration for maintaining code quality
-   **API Integration**: Axios-based `apiClient` and `useAPI` hook for seamless API requests

## 🚀 Getting Started

### Quick Start

```bash
# Clone the repository
git clone https://github.com/SakshhamTheCoder/react-jsx-spa-starter.git

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📂 Folder Structure

```
src/
├── assets/         # Static assets like images
├── components/     # Reusable React components
├── contexts/       # React Contexts for global state management
├── hooks/          # Custom React hooks for better code logic
├── pages/          # Page components for routing
├── utils/          # Small utility function snippets
├── App.jsx         # Main app component
├── main.jsx        # Entry point for the app
└── index.css       # Global CSS file
```

This structure ensures a clean and organized codebase, making it easier to navigate and extend.

## 🔧 API Integration with `useAPI`

This template includes a custom `useAPI` hook for making API requests. It is built on top of an Axios-based `apiClient` and provides a simple way to handle API calls with support for:

-   **GET, POST, PUT, PATCH, DELETE** methods.
-   Automatic handling of headers and request bodies.
-   Centralized error handling.

### Example Usage

#### Fetching Data (GET Request)

```javascript
import { useAPI } from '../hooks/useAPI';

const ExampleComponent = () => {
    const { data, loading, error } = useAPI('/example-endpoint', {
        method: 'GET',
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return <div>Data: {JSON.stringify(data)}</div>;
};
```

#### Sending Data (POST Request)

```jsx
const { data, loading, error } = useAPI('/example-endpoint', {
    method: 'POST',
    body: { key: 'value' },
});
```

The `useAPI` hook ensures a consistent and reusable way to interact with APIs, making it easier to manage API calls in your React components.

## ❓ FAQ

### Why does the API get called twice when I check the network requests?

This happens because React's `StrictMode` renders components twice in development mode to help identify potential side effects. This behavior is intentional and only occurs in development.

#### Fix:

If you want to prevent this behavior, you can remove `StrictMode` from your `main.jsx` file:

```jsx
// src/main.jsx
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { ThemeProvider } from './contexts';

createRoot(document.getElementById('root')).render(
    <ThemeProvider>
        <App />
    </ThemeProvider>
);
```

However, it is recommended to keep `StrictMode` enabled during development to catch potential issues early.

### How do I add a new page to the app?

1. Create a new component in the `src/pages` folder (e.g., `About.jsx`).
2. Import the newly created component and add a route for the new page in your router configuration (e.g., in `App.jsx`).

Example:

```jsx
...
children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
...
```

### Why is my API request failing?

1. Check the `baseURL` in `apiClient.js` to ensure it points to the correct API endpoint.
2. Verify that the API server is running and accessible.
3. Ensure that any required headers (e.g., Authorization) are correctly set in the `apiClient` or `useAPI` hook.

### How do I add global state management?

This template uses React Context for basic global state management. If your app requires more advanced state management, consider integrating a library like [Redux](https://redux.js.org/) or [Zustand](https://zustand-demo.pmnd.rs/).

### How do I deploy this app?

1. Build the app using `npm run build`.
2. Deploy the contents of the `dist` folder to a static hosting service like [Netlify](https://www.netlify.com/), [Vercel](https://vercel.com/), or [GitHub Pages](https://pages.github.com/).

### How do I add environment variables?

1. Create a `.env` file in the root of your project.
2. Add your variables prefixed with `VITE_` (e.g., `VITE_API_KEY=your_api_key`).
3. Access them in your code using `import.meta.env.VITE_API_KEY`.

## 🤝 Contributing

Feel free to fork this repository and customize it to suit your needs. Contributions are welcome!

## 📜 License

This project is licensed under the MIT License.

