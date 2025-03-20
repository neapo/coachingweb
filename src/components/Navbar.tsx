'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-purple-700">VidaPlena</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md font-medium">
              Início
            </Link>
            <Link href="/sobre" className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md font-medium">
              Sobre
            </Link>
            <Link href="/servicos" className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md font-medium">
              Serviços
            </Link>

            <Link href="/contacto" className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md font-medium">
              Contacto
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-purple-600 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="text-gray-700 hover:text-purple-600 block px-3 py-2 rounded-md font-medium">
              Início
            </Link>
            <Link href="/sobre" className="text-gray-700 hover:text-purple-600 block px-3 py-2 rounded-md font-medium">
              Sobre
            </Link>
            <Link href="/servicos" className="text-gray-700 hover:text-purple-600 block px-3 py-2 rounded-md font-medium">
              Serviços
            </Link>

            <Link href="/contacto" className="text-gray-700 hover:text-purple-600 block px-3 py-2 rounded-md font-medium">
              Contacto
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
