import { useTheme } from '../contexts/ThemeContext.jsx';
import { useAPI } from '../hooks';

const Home = () => {
    const { theme } = useTheme();

    const { data, loading, error } = useAPI('/posts/1');

    const containerStyle = theme === 'light' ? 'bg-gray-50 text-gray-800' : 'bg-gray-900 text-gray-100';

    const headingStyle = theme === 'light' ? 'text-blue-600' : 'text-blue-400';

    const paragraphStyle = theme === 'light' ? 'text-gray-600' : 'text-gray-400';

    return (
        <div className={`flex flex-col items-center justify-center min-h-screen font-bold ${containerStyle}`}>
            <h1 className={`text-5xl text-center ${headingStyle}`}>Welcome to React JSX SPA Starter Template</h1>
            <p className={`mt-4 text-center ${paragraphStyle}`}>
                This is a simple SPA template using React, TailwindCSS and React-Router-DOM in JSX.
            </p>
            <div className={`mt-4 text-center ${containerStyle}`}>
                {loading && <p>Loading data...</p>}
                {error && <p className="text-red-500">Error: {error}</p>}
                {data && <p>Fetched Data: {data.title}</p>}
            </div>
        </div>
    );
};

export default Home;

