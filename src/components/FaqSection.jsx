import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ_DATA = [
  {
    question: "Che cos'è l'epilazione progressiva con laser a diodo?",
    answer: "È una tecnologia all'avanguardia che permette l'eliminazione permanente dei peli superflui in modo sicuro e progressivo. A differenza di altri metodi, il laser a diodo è efficace su diverse tipologie di pelle e peli, garantendo risultati duraturi con il massimo comfort."
  },
  {
    question: "Cosa si intende per trattamenti 100% green?",
    answer: "Significa che per i nostri trattamenti viso e corpo utilizziamo esclusivamente prodotti formulati con ingredienti di origine naturale e biologica, privi di sostanze chimiche aggressive. Scegliamo partner che condividono la nostra visione di bellezza sostenibile e rispettosa dell'ambiente."
  },
  {
    question: "Quali servizi di estetica base offrite?",
    answer: "Offriamo tutti i servizi fondamentali per la cura della persona: dalla ceretta tradizionale e brasiliana alla pulizia del viso profonda, fino a trattamenti specifici per mani e piedi, sempre eseguiti con la massima attenzione all'igiene e alla qualità dei prodotti."
  },
  {
    question: "Che tipo di servizi offrite per le unghie?",
    answer: "Siamo specializzati in Nail Care completa: manicure curativa ed estetica, applicazione di smalto semipermanente, ricostruzione in gel e nail design personalizzato. Utilizziamo prodotti di alta gamma per garantire la salute e la bellezza delle tue unghie."
  },
  {
    question: "Il laser a diodo è doloroso?",
    answer: "Assolutamente no. Grazie ai moderni sistemi di raffreddamento integrati nel manipolo, la seduta è molto confortevole. La maggior parte delle clienti avverte solo un leggero calore o un pizzicore quasi impercettibile, molto meno fastidioso della ceretta."
  },
  {
    question: "Quante sedute servono per vedere i risultati con il laser?",
    answer: "I primi risultati sono visibili già dopo 1-2 sedute. Per un risultato completo e permanente, mediamente si consiglia un ciclo di 6-10 sedute, a seconda della zona trattata e delle caratteristiche soggettive del pelo."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  // JSON-LD Schema for SEO & AI (ChatGPT/SearchGPT/Perplexity)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_DATA.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <section id="faq" className="w-full pt-14 pb-20 md:pt-24 md:pb-48 lg:pt-32 lg:pb-56 px-6 lg:px-16" style={{ backgroundColor: '#faf9f6' }}>
      {/* Schema Markup Injection */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 px-6 py-2 rounded-full mb-8 shadow-sm"
            style={{ backgroundColor: '#fef6fe', border: '1px solid rgba(213, 101, 217, 0.1)' }}
          >
            <HelpCircle size={14} className="text-[#d565d9]" />
            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#d565d9] uppercase">
              Supporto & Informazioni
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-black font-medium mb-4"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2.5rem, 6.5vw, 5rem)',
              lineHeight: '1.1',
              letterSpacing: '-0.02em'
            }}
          >
            Domande frequenti
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-stone-500 text-lg max-w-2xl"
          >
            Tutto quello che c'è da sapere sui nostri trattamenti per la tua bellezza e sicurezza.
          </motion.p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-[1.5rem] border border-stone-200/60 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 md:px-8 md:py-6 flex items-center justify-between gap-6 text-left cursor-pointer group"
                >
                  <span className="text-black font-medium text-base md:text-xl group-hover:text-[#d565d9] transition-colors">
                    {faq.question}
                  </span>
                  <div className={`w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#d565d9]' : ''}`}>
                    <ChevronDown size={20} className={isOpen ? 'text-white' : 'text-[#d565d9]'} />
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
                    >
                      <div className="px-6 md:px-8 pb-6 md:pb-8 text-stone-600 leading-relaxed text-sm md:text-lg max-w-[95%] md:max-w-[90%]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
