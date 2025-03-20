'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Servicos() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nossos Serviços</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Descubra como os nossos serviços personalizados podem ajudar-lhe a transformar a sua vida e alcançar o bem-estar que procura.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Aconselhamento */}
          <div className="flex flex-col md:flex-row items-center mb-20">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="relative h-64 md:h-96 w-full">
                <Image 
                  src="/images/counseling.svg" 
                  alt="Serviço de aconselhamento" 
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Aconselhamento Personalizado</h2>
              <p className="text-lg text-gray-700 mb-6">
                O nosso serviço de aconselhamento oferece um espaço seguro e confidencial onde pode explorar os seus pensamentos, sentimentos e desafios com o apoio de um profissional qualificado.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Através de uma escuta atenta e empática, ajudamos-lhe a ganhar clareza, desenvolver estratégias de enfrentamento eficazes e encontrar soluções para os problemas que está a enfrentar.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ideal para quem procura:</h3>
              <ul className="space-y-2 mb-8">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-purple-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Superar ansiedade, stress ou depressão</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-purple-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Lidar com transições de vida difíceis</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-purple-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Melhorar relacionamentos pessoais</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-purple-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Encontrar significado e propósito</span>
                </li>
              </ul>
              <Link href="/contacto" className="bg-purple-700 text-white hover:bg-purple-800 px-6 py-3 rounded-lg font-medium inline-block">
                Marcar Sessão
              </Link>
            </div>
          </div>

          {/* Coaching */}
          <div className="flex flex-col md:flex-row-reverse items-center mb-20">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pl-12">
              <div className="relative h-64 md:h-96 w-full">
                <Image 
                  src="/images/coaching.svg" 
                  alt="Serviço de coaching" 
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="md:w-1/2 md:pr-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Coaching de Vida</h2>
              <p className="text-lg text-gray-700 mb-6">
                O nosso serviço de coaching foca-se no presente e no futuro, ajudando-lhe a definir objetivos claros, superar obstáculos e criar um plano de ação concreto para alcançar os resultados que deseja.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Através de um processo estruturado e orientado para resultados, trabalhamos consigo para identificar o seu potencial, desenvolver novas competências e implementar mudanças positivas e duradouras.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ideal para quem procura:</h3>
              <ul className="space-y-2 mb-8">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-purple-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Definir e alcançar objetivos pessoais ou profissionais</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-purple-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Melhorar produtividade e gestão de tempo</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-purple-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Desenvolver liderança e comunicação eficaz</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-purple-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Criar equilíbrio entre vida pessoal e profissional</span>
                </li>
              </ul>
              <Link href="/contacto" className="bg-purple-700 text-white hover:bg-purple-800 px-6 py-3 rounded-lg font-medium inline-block">
                Marcar Sessão
              </Link>
            </div>
          </div>

          {/* Suplementos */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="relative h-64 md:h-96 w-full">
                <Image 
                  src="/images/supplements.svg" 
                  alt="Suplementos naturais" 
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Suplementos Naturais</h2>
              <p className="text-lg text-gray-700 mb-6">
                Complementamos o nosso trabalho de aconselhamento e coaching com recomendações personalizadas de suplementos naturais que podem apoiar o seu bem-estar físico e mental.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                A nossa especialista em nutrição avalia as suas necessidades específicas e sugere suplementos de alta qualidade que podem ajudar a melhorar energia, foco, humor e equilíbrio geral.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Benefícios dos nossos suplementos:</h3>
              <ul className="space-y-2 mb-8">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-purple-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Ingredientes 100% naturais e de alta qualidade</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-purple-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Formulações baseadas em evidências científicas</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-purple-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Recomendações personalizadas para as suas necessidades</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-purple-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Apoio contínuo para ajustar conforme necessário</span>
                </li>
              </ul>
              <Link href="/contacto" className="bg-purple-700 text-white hover:bg-purple-800 px-6 py-3 rounded-lg font-medium inline-block">
                Consulta de Avaliação
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Investimento</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Escolha o plano que melhor se adapta às suas necessidades e objetivos.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Sessão Única</h3>
                <p className="text-purple-700 text-4xl font-bold mb-2">€75</p>
                <p className="text-gray-600">Por sessão</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-purple-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Sessão de 60 minutos</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-purple-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Aconselhamento ou coaching</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-purple-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Materiais de apoio</span>
                </li>
              </ul>
              <div className="text-center">
                <Link href="/contacto" className="bg-purple-700 text-white hover:bg-purple-800 px-6 py-3 rounded-lg font-medium inline-block w-full">
                  Marcar Sessão
                </Link>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border-2 border-purple-500 transform md:-translate-y-4">
              <div className="text-center mb-6">
                <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">Mais Popular</span>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Pacote Mensal</h3>
                <p className="text-purple-700 text-4xl font-bold mb-2">€260</p>
                <p className="text-gray-600">4 sessões por mês</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-purple-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">4 sessões de 60 minutos</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-purple-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Aconselhamento e coaching</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-purple-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Suporte por email entre sessões</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-purple-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Materiais e exercícios personalizados</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-purple-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">10% desconto em suplementos</span>
                </li>
              </ul>
              <div className="text-center">
                <Link href="/contacto" className="bg-purple-700 text-white hover:bg-purple-800 px-6 py-3 rounded-lg font-medium inline-block w-full">
                  Escolher Plano
                </Link>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Pacote Trimestral</h3>
                <p className="text-purple-700 text-4xl font-bold mb-2">€690</p>
                <p className="text-gray-600">12 sessões (3 meses)</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-purple-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">12 sessões de 60 minutos</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-purple-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Programa personalizado completo</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-purple-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Suporte prioritário por email/WhatsApp</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-purple-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Avaliação completa de suplementos</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-purple-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">15% desconto em suplementos</span>
                </li>
              </ul>
              <div className="text-center">
                <Link href="/contacto" className="bg-purple-700 text-white hover:bg-purple-800 px-6 py-3 rounded-lg font-medium inline-block w-full">
                  Escolher Plano
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Tem Dúvidas Sobre os Nossos Serviços?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Marque uma consulta inicial gratuita de 30 minutos para conhecer melhor os nossos serviços e como podemos ajudar-lhe.
          </p>
          <Link href="/contacto" className="bg-white text-purple-700 hover:bg-purple-100 px-8 py-4 rounded-lg font-medium text-lg inline-block">
            Marcar Consulta Gratuita
          </Link>
        </div>
      </section>
    </main>
  )
}
