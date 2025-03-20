'use client'

import Image from 'next/image'

export default function Sobre() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre Nós</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Conheça a nossa missão, valores e a equipa dedicada a ajudar-lhe a alcançar uma vida mais plena e equilibrada.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="relative h-64 md:h-96 w-full">
                <Image 
                  src="/images/mission-image.svg" 
                  alt="Nossa missão" 
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">A Nossa Missão</h2>
              <p className="text-lg text-gray-700 mb-6">
                Na VidaPlena, acreditamos que cada pessoa merece viver uma vida equilibrada, satisfatória e alinhada com os seus valores e objetivos. A nossa missão é proporcionar um espaço seguro e acolhedor onde possa explorar os seus desafios, descobrir o seu potencial e criar um caminho para o bem-estar duradouro.
              </p>
              <p className="text-lg text-gray-700">
                Através de uma abordagem holística que combina aconselhamento personalizado, coaching transformador e suplementos naturais cuidadosamente selecionados, ajudamos-lhe a superar obstáculos, clarificar objetivos e implementar mudanças positivas em todas as áreas da sua vida.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Os Nossos Valores</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Estes princípios orientam o nosso trabalho e o compromisso que temos consigo.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="bg-purple-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Integridade</h3>
              <p className="text-gray-600">
                Atuamos sempre com honestidade, transparência e respeito pela sua individualidade e processo pessoal.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="bg-purple-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Confidencialidade</h3>
              <p className="text-gray-600">
                Garantimos um ambiente seguro onde pode partilhar as suas preocupações com total privacidade e confiança.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="bg-purple-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Empatia</h3>
              <p className="text-gray-600">
                Escutamos atentamente, sem julgamentos, procurando compreender profundamente a sua perspetiva e experiência.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">A Nossa Equipa</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Profissionais qualificados e apaixonados por ajudar pessoas a alcançarem o seu potencial.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative h-64 w-64 mx-auto mb-6">
                <Image 
                  src="/images/team-1.svg" 
                  alt="Foto de Ana Martins" 
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Ana Martins</h3>
              <p className="text-purple-700 mb-4">Fundadora e Consultora Principal</p>
              <p className="text-gray-600">
                Psicóloga com mais de 15 anos de experiência em aconselhamento e coaching de vida. Especialista em transformação pessoal e desenvolvimento de potencial.
              </p>
            </div>
            
            <div className="text-center">
              <div className="relative h-64 w-64 mx-auto mb-6">
                <Image 
                  src="/images/team-2.svg" 
                  alt="Foto de Miguel Santos" 
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Miguel Santos</h3>
              <p className="text-purple-700 mb-4">Coach de Vida e Carreira</p>
              <p className="text-gray-600">
                Coach certificado com formação em PNL e especialização em transições de carreira e equilíbrio entre vida pessoal e profissional.
              </p>
            </div>
            
            <div className="text-center">
              <div className="relative h-64 w-64 mx-auto mb-6">
                <Image 
                  src="/images/team-3.svg" 
                  alt="Foto de Sofia Costa" 
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sofia Costa</h3>
              <p className="text-purple-700 mb-4">Especialista em Nutrição e Suplementos</p>
              <p className="text-gray-600">
                Nutricionista com especialização em suplementação natural e abordagens holísticas para melhorar o bem-estar físico e mental.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
