import { useTheme } from '../contexts/ThemeContext';
import reactLogo from '../assets/react.svg';

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();

    const links = [{ name: 'Home', path: '/' }];

    return (
        <nav
            className={`fixed top-0 left-0 w-full p-4 flex items-center justify-between shadow-md ${
                theme === 'light' ? 'bg-white text-gray-800' : 'bg-gray-900 text-gray-100'
            }`}
        >
            <div className="flex items-center space-x-2">
                <img src={reactLogo} alt="React Logo" className="w-8 h-8" />
                <span className="text-2xl font-bold">React JSX SPA</span>
            </div>

            <ul className="flex space-x-6">
                {links.map((link) => (
                    <li key={link.name}>
                        <a
                            href={link.path}
                            className={`${theme === 'light' ? 'text-blue-500' : 'text-blue-400'} hover:underline`}
                        >
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>

            <button
                onClick={toggleTheme}
                className={`px-4 py-2 rounded ${
                    theme === 'light'
                        ? 'bg-blue-500 text-white hover:bg-blue-600'
                        : 'bg-blue-400 text-gray-900 hover:bg-blue-500'
                }`}
            >
                Toggle Theme
            </button>
        </nav>
    );
};

export default Navbar;
