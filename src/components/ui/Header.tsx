import { useUserStore } from '../../stores/userStore';

export default function Header() {
  const { chips, level, xp, streak } = useUserStore();

  return (
    <header className="sticky top-0 z-50 bg-gray-800 border-b border-gray-700 px-4 py-3">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <div className="flex items-center gap-4">
          <div className="text-xl font-bold">💰 {chips.toLocaleString()}</div>
          <div className="text-sm text-gray-400">Level {level}</div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-lg">🔥</span>
          <span className="text-sm">{streak} day streak</span>
        </div>
      </div>
    </header>
  );
}