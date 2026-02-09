export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="text-xl font-bold text-gray-900">Menntr</div>
            <div className="text-xs text-gray-500">
              Smarter Campus Management for Everyone
            </div>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
            Features
          </a>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
            Why Menntr?
          </a>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
            RBAC
          </a>
        </div>
        <div className="flex items-center gap-3">
          <button className="text-sm text-gray-700 hover:text-gray-900 px-4 py-2">
            Log in
          </button>
          <button className="bg-purple-600 hover:bg-purple-700 text-white text-sm px-5 py-2 rounded-lg transition-colors">
            Request Demo
          </button>
        </div>
      </div>
    </nav>
  );
}
