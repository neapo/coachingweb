'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface FAQItemProps {
  question: string
  answer: string
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left"
      >
        <h3 className="text-lg font-semibold text-gray-900">{question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-purple-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="mt-3 text-gray-600">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const faqItems = [
    {
      question: "Quanto tempo dura cada sessão?",
      answer: "As nossas sessões de aconselhamento e coaching têm duração de 60 minutos. A consulta inicial gratuita dura 30 minutos."
    },
    {
      question: "Posso marcar sessões online?",
      answer: "Sim, oferecemos sessões por videoconferência para clientes que preferem atendimento remoto ou que não residem em Lisboa."
    },
    {
      question: "Que tipos de suplementos recomendam?",
      answer: "Recomendamos apenas suplementos naturais de alta qualidade, personalizados para as necessidades específicas de cada cliente após uma avaliação completa."
    },
    {
      question: "Quanto tempo leva para ver resultados?",
      answer: "Os resultados variam de pessoa para pessoa, mas a maioria dos clientes começa a notar melhorias após 3-4 sessões. Para transformações mais profundas, recomendamos um compromisso de pelo menos 3 meses."
    },
    {
      question: "Como sei qual serviço é o mais adequado para mim?",
      answer: "Na consulta inicial gratuita, avaliamos as suas necessidades e objetivos para recomendar a abordagem mais adequada. Podemos combinar diferentes serviços conforme necessário para criar um plano personalizado."
    }
  ]

  return (
    <div className="space-y-2">
      {faqItems.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  )
}
