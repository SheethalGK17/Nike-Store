import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
  onSearchChange: (query: string) => void;
}

export const Header = ({ cartCount, onCartClick, onSearchChange }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    onSearchChange(e.target.value);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="flex-shrink-0 flex items-center space-x-2">
              <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">SOLE</span>
            </div>

            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-900 hover:text-gray-600 font-medium transition-colors">
                New Releases
              </a>
              <a href="#" className="text-gray-900 hover:text-gray-600 font-medium transition-colors">
                Men
              </a>
              <a href="#" className="text-gray-900 hover:text-gray-600 font-medium transition-colors">
                Women
              </a>
              <a href="#" className="text-gray-900 hover:text-gray-600 font-medium transition-colors">
                Sale
              </a>
            </nav>
          </div>

          <div className="hidden md:flex items-center space-x-4 flex-1 max-w-md ml-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search shoes..."
                value={searchQuery}
                onChange={handleSearch}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={onCartClick}
              className="relative p-2 text-gray-900 hover:text-gray-600 transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-900"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search shoes..."
                  value={searchQuery}
                  onChange={handleSearch}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
            </div>
            <nav className="flex flex-col space-y-3">
              <a href="#" className="text-gray-900 hover:text-gray-600 font-medium">
                New Releases
              </a>
              <a href="#" className="text-gray-900 hover:text-gray-600 font-medium">
                Men
              </a>
              <a href="#" className="text-gray-900 hover:text-gray-600 font-medium">
                Women
              </a>
              <a href="#" className="text-gray-900 hover:text-gray-600 font-medium">
                Sale
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
