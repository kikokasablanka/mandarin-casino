import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const location = useLocation();

  const links = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/games', label: 'Games', icon: '🎮' },
    { path: '/vocabulary', label: 'Vocabulary', icon: '📚' },
    { path: '/profile', label: 'Profile', icon: '👤' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-gray-800 border-t border-gray-700">
      <div className="flex justify-around max-w-6xl mx-auto">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`flex flex-col items-center py-3 px-6 transition-colors ${
              location.pathname === link.path
                ? 'text-yellow-500'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <span className="text-2xl">{link.icon}</span>
            <span className="text-xs mt-1">{link.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}