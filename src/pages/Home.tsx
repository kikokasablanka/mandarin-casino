import { useUserStore } from '../stores/userStore';

export default function Home() {
  const { chips } = useUserStore();

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome to Mandarin Casino!</h1>
      <p className="text-xl mb-6">欢迎来到中文赌场</p>
      
      <div className="bg-gray-800 rounded-lg p-6 mb-6">
        <div className="text-center">
          <div className="text-gray-400 mb-2">Your Balance</div>
          <div className="text-4xl font-bold text-yellow-500">
            💰 {chips.toLocaleString()}
          </div>
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Start Playing</h2>
        <p className="text-gray-400">Games coming soon...</p>
      </div>
    </div>
  );
}