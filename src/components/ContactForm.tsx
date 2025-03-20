'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    servico: '',
    mensagem: ''
  })

  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulação de envio para um servidor
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    console.log('Formulário enviado:', formData)
    setFormSubmitted(true)
    setIsSubmitting(false)
    
    // Resetar o formulário
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      servico: '',
      mensagem: ''
    })
  }

  return (
    <div>
      {formSubmitted ? (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6"
        >
          <p className="font-medium">Mensagem enviada com sucesso!</p>
          <p>Entraremos em contacto consigo brevemente.</p>
          <button 
            onClick={() => setFormSubmitted(false)}
            className="mt-3 bg-green-700 text-white px-4 py-2 rounded text-sm"
          >
            Enviar nova mensagem
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
              Nome Completo *
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500 transition-colors"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500 transition-colors"
            />
          </div>
          
          <div>
            <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-1">
              Telefone
            </label>
            <input
              type="tel"
              id="telefone"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500 transition-colors"
            />
          </div>
          
          <div>
            <label htmlFor="servico" className="block text-sm font-medium text-gray-700 mb-1">
              Serviço de Interesse *
            </label>
            <select
              id="servico"
              name="servico"
              value={formData.servico}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500 transition-colors"
            >
              <option value="">Selecione uma opção</option>
              <option value="aconselhamento">Aconselhamento</option>
              <option value="coaching">Coaching</option>
              <option value="suplementos">Suplementos</option>
              <option value="consulta-gratuita">Consulta Inicial Gratuita</option>
              <option value="outro">Outro</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-1">
              Mensagem
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              value={formData.mensagem}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500 transition-colors"
            ></textarea>
          </div>
          
          <div>
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-purple-700 text-white hover:bg-purple-800 px-6 py-3 rounded-lg font-medium transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? 'A enviar...' : 'Enviar Mensagem'}
            </motion.button>
          </div>
        </form>
      )}
    </div>
  )
}
