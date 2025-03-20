'use client'

import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-purple-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">VidaPlena</h3>
            <p className="text-purple-200 mb-4">
              Ajudamos-lhe a encontrar o equilíbrio e bem-estar que procura através de aconselhamento personalizado, coaching e suplementos naturais.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Ligações Rápidas</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-purple-200 hover:text-white transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-purple-200 hover:text-white transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-purple-200 hover:text-white transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/testemunhos" className="text-purple-200 hover:text-white transition-colors">
                  Testemunhos
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-purple-200 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <p className="text-purple-200 mb-2">Email: info@vidaplena.pt</p>
            <p className="text-purple-200 mb-2">Telefone: +351 912 345 678</p>
            <p className="text-purple-200">Morada: Rua da Harmonia, 123<br />Lisboa, Portugal</p>
          </div>
        </div>
        
        <div className="border-t border-purple-700 mt-8 pt-8 text-center text-purple-200">
          <p>&copy; {new Date().getFullYear()} VidaPlena. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
