'use client'

import { useEffect } from 'react'
import AnimatedSection from '@/components/AnimatedSection'
import ContactForm from '@/components/ContactForm'
import FAQ from '@/components/FAQ'
import NavbarAnimated from '@/components/NavbarAnimated'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Home() {
  // Substituir o Navbar padrão pelo NavbarAnimated
  useEffect(() => {
    const navbar = document.querySelector('nav')
    if (navbar) {
      navbar.style.display = 'none'
    }
  }, [])

  return (
    <main className="flex flex-col min-h-screen">
      <NavbarAnimated />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <AnimatedSection className="md:w-1/2 mb-10 md:mb-0" delay={0.2}>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Descubra o Seu Melhor Caminho</h1>
              <p className="text-xl mb-8">
                Aconselhamento personalizado, coaching de vida e suplementos naturais para ajudar a encontrar o equilíbrio e bem-estar que procura.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/servicos" className="bg-white text-purple-700 hover:bg-purple-100 px-6 py-3 rounded-lg font-medium text-center block">
                    Nossos Serviços
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/contacto" className="bg-transparent border-2 border-white hover:bg-white hover:text-purple-700 px-6 py-3 rounded-lg font-medium text-center block">
                    Marcar Consulta
                  </Link>
                </motion.div>
              </div>
            </AnimatedSection>
            <AnimatedSection className="md:w-1/2" delay={0.4}>
              <div className="relative h-64 md:h-96 w-full">
                <Image 
                  src="/images/hero-image.svg" 
                  alt="Consultor de vida a conversar com cliente" 
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection delay={0.2}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Como Podemos Ajudar</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Oferecemos uma abordagem holística para melhorar a sua qualidade de vida através de vários serviços personalizados.
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.3}>
              <motion.div 
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                whileHover={{ y: -5 }}
              >
                <div className="bg-purple-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.5 17.5L12 21m0 0l-3.5-3.5M12 21V3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Aconselhamento</h3>
                <p className="text-gray-600">
                  Um espaço seguro para partilhar preocupações e receber orientação personalizada para superar desafios e encontrar clareza.
                </p>
              </motion.div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.4}>
              <motion.div 
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                whileHover={{ y: -5 }}
              >
                <div className="bg-purple-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Coaching</h3>
                <p className="text-gray-600">
                  Desenvolvimento de estratégias e planos de ação para alcançar objetivos pessoais e profissionais com acompanhamento contínuo.
                </p>
              </motion.div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.5}>
              <motion.div 
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                whileHover={{ y: -5 }}
              >
                <div className="bg-purple-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Suplementos</h3>
                <p className="text-gray-600">
                  Recomendação de suplementos naturais para apoiar o bem-estar físico e mental, complementando o processo de transformação.
                </p>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>



      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection delay={0.2}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Perguntas Frequentes</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Respostas para as dúvidas mais comuns sobre os nossos serviços.
              </p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.3}>
            <FAQ />
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection delay={0.2}>
            <h2 className="text-3xl font-bold mb-6">Pronto para Transformar a Sua Vida?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Dê o primeiro passo em direção a uma vida mais equilibrada e satisfatória. Marque uma consulta inicial gratuita hoje mesmo.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contacto" className="bg-white text-purple-700 hover:bg-purple-100 px-8 py-4 rounded-lg font-medium text-lg inline-block">
                Marcar Consulta Gratuita
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
