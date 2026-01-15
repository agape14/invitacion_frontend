import { motion } from 'framer-motion';
import { useState } from 'react';
import Animalitos from './Animalitos';

const SeccionInicio = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden pt-24">
      {/* Cielo con nubes y estrellas */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-300 via-sky-200 to-pastel-crema">
        {/* Nubes */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-10 opacity-30"
            style={{ left: `${20 + i * 20}%` }}
            animate={{ x: [0, 20, 0], y: [0, 10, 0] }}
            transition={{ duration: 3 + i, repeat: Infinity }}
          >
            <div className="text-6xl">☁️</div>
          </motion.div>
        ))}
        {/* Estrellas */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute text-2xl"
            style={{
              top: `${10 + (i % 4) * 20}%`,
              left: `${15 + (i % 2) * 70}%`,
            }}
            animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
            transition={{ duration: 2 + i * 0.5, repeat: Infinity }}
          >
            ⭐
          </motion.div>
        ))}
      </div>

      {/* Arcoíris */}
      <motion.div
        className="absolute top-20 left-1/2 transform -translate-x-1/2 w-80 h-40 opacity-80"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <div className="relative w-full h-full">
          <div className="absolute inset-0 rounded-full border-8 border-red-300"></div>
          <div className="absolute inset-2 rounded-full border-8 border-orange-300"></div>
          <div className="absolute inset-4 rounded-full border-8 border-yellow-300"></div>
          <div className="absolute inset-6 rounded-full border-8 border-green-300"></div>
          <div className="absolute inset-8 rounded-full border-8 border-blue-300"></div>
          <div className="absolute inset-10 rounded-full border-8 border-purple-300"></div>
        </div>
      </motion.div>

      {/* Banners decorativos */}
      <div className="absolute top-32 left-0 right-0 flex justify-center gap-2 z-10">
        {['🔵', '🩷', '🟡', '🟢'].map((flag, i) => (
          <motion.div
            key={i}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 + i * 0.1 }}
            className="text-4xl"
          >
            {flag}
          </motion.div>
        ))}
      </div>

      {/* Estado Cerrado: Sobre Mágico Mejorado */}
      {!isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-pastel-celeste via-pastel-rosado to-pastel-crema overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Partículas de fondo */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-2xl opacity-40 select-none pointer-events-none"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: 0
              }}
              animate={{
                y: [null, Math.random() * -100],
                rotate: [0, 360],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            >
              {['✨', '🌸', '🎈', '⭐'][i % 4]}
            </motion.div>
          ))}

          <motion.div
            className="relative cursor-pointer group perspective-1000"
            onClick={() => setIsOpen(true)}
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            {/* Sobre CSS Realista */}
            <div className="w-80 md:w-96 h-52 md:h-64 bg-pink-100 rounded-sm shadow-2xl relative flex items-center justify-center overflow-hidden z-10 transition-shadow group-hover:shadow-[0_20px_50px_rgba(255,182,193,0.5)]">

              {/* Solapa del sobre (Triángulo superior) */}
              <div className="absolute top-0 left-0 w-full h-0 border-l-[160px] md:border-l-[192px] border-r-[160px] md:border-r-[192px] border-t-[100px] md:border-t-[130px] border-l-transparent border-r-transparent border-t-pink-200 z-20 origin-top transform transition-transform duration-500 group-hover:scale-y-90"></div>

              {/* Cuerpo del sobre (Fondo interior oscuro para profundidad) */}
              <div className="absolute inset-2 bg-pink-50 z-0"></div>

              {/* Contenido asomándose ligeramente */}
              <div className="absolute top-4 bg-white w-11/12 h-full z-1 shadow-sm rounded-t-lg transition-transform duration-500 group-hover:-translate-y-6">
                <div className="w-full h-4 bg-gradient-to-r from-verde-sapito via-amarillo-abejita to-rosa-conejito opacity-50"></div>
              </div>

              {/* Bolsillo del sobre (Triángulos inferiores) */}
              <div className="absolute bottom-0 left-0 w-0 h-0 border-l-[160px] md:border-l-[192px] border-b-[110px] md:border-b-[140px] border-r-[160px] md:border-r-[192px] border-l-pink-300 border-r-pink-300 border-b-pink-400 border-t-transparent z-30"></div>

              {/* Sello de Cera (Botón) */}
              <div className="absolute z-40 bg-gradient-to-br from-red-500 to-red-600 w-16 h-16 rounded-full shadow-lg flex items-center justify-center border-2 border-red-400 transform transition-transform group-hover:scale-110">
                <span className="text-3xl filter drop-shadow no-select">💌</span>
              </div>

              {/* Texto "Abrir" flotante */}
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-50 group-hover:-translate-y-2">
                <span className="bg-white/90 text-pink-500 px-4 py-1 rounded-full text-sm font-bold shadow-md">
                  ¡Click!
                </span>
              </div>
            </div>

            {/* Texto de instrucción inferior */}
            <div className="mt-12 text-center relative z-50">
              <motion.h3
                className="text-3xl md:text-4xl font-pacifico text-gray-700 mb-2 drop-shadow-sm"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                ¡Tienes una invitación especial!
              </motion.h3>
              <motion.p
                className="text-lg md:text-xl font-quicksand text-gray-500 font-semibold bg-white/50 inline-block px-6 py-2 rounded-full"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                ✨ Toca el sobre para abrir ✨
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Estado Abierto: Contenido Principal */}
      <div className={`relative z-20 max-w-5xl w-full transition-all duration-1000 ${!isOpen ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'}`}>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isOpen ? { opacity: 1, y: 0 } : {}}
          transition={{ type: 'spring', damping: 20, delay: 0.2 }}
          className="bg-white/90 backdrop-blur-xl rounded-[3rem] shadow-2xl border-8 border-white/50 p-6 md:p-12 relative overflow-hidden text-center mx-4"
        >
          {/* Decoraciones flotantes internas (Confetti estático mejorado) */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-32 h-32 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

          {/* Encabezado elegante */}
          <div className="relative mb-6">
            <motion.span
              className="inline-block text-xl md:text-2xl text-gray-500 font-medim tracking-widest uppercase mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Te invitamos al
            </motion.span>
            <motion.h1
              className="text-6xl md:text-8xl font-pacifico bg-gradient-to-r from-rosado via-purple-400 to-celeste bg-clip-text text-transparent drop-shadow-sm pb-2"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, type: 'spring' }}
            >
              1er Añito
            </motion.h1>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mt-2 font-quicksand">
              de Kailany
            </h2>
          </div>

          <div className="my-8 flex justify-center items-center">
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            <span className="mx-4 text-2xl">✨</span>
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
          </div>

          {/* Sección de Personajes (Animalitos) reorganizada */}
          <div className="mb-10 relative">
            <motion.div
              className="bg-gradient-to-b from-white to-gray-50 rounded-3xl border-4 border-dashed border-pastel-celeste p-6 shadow-inner relative"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white px-6 py-1 rounded-full shadow-sm text-sm font-bold text-gray-400 uppercase tracking-wider">
                Con mis amigos favoritos
              </div>

              {/* Aquí se cargan los componentes Animalitos */}
              <Animalitos />
            </motion.div>
          </div>

          {/* Detalles del Evento (Grid limpio) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {/* Tarjeta Fecha */}
            <motion.div
              className="bg-pink-50 rounded-2xl p-6 flex flex-col items-center justify-center border-2 border-pink-100"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
            >
              <span className="text-4xl mb-2">📅</span>
              <h3 className="text-pink-400 font-bold uppercase text-sm tracking-wider">¿Cuándo?</h3>
              <p className="text-3xl font-bold text-gray-700 font-pacifico mt-1">14 de Marzo</p>
              <p className="text-gray-500 font-semibold">5:00 PM</p>
            </motion.div>

            {/* Tarjeta Lugar */}
            <motion.div
              className="bg-blue-50 rounded-2xl p-6 flex flex-col items-center justify-center border-2 border-blue-100"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1 }}
            >
              <span className="text-4xl mb-2">📍</span>
              <h3 className="text-blue-400 font-bold uppercase text-sm tracking-wider">¿Dónde?</h3>
              <p className="text-2xl font-bold text-gray-700 mt-1">Salón de Eventos</p>
              <p className="text-gray-500 text-sm">Ver mapa abajo</p>
            </motion.div>
          </div>

          {/* Frase emotiva */}
          <motion.p
            className="text-gray-500 italic text-lg mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            "Acompáñanos a celebrar un año lleno de amor, sonrisas y primeras veces. ¡Tu presencia es el mejor regalo!"
          </motion.p>

          {/* Flecha para scrollear */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="mt-4 opacity-50 cursor-pointer"
            onClick={() => document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <p className="text-sm font-bold uppercase tracking-widest mb-2 font-quicksand">Desliza para ver más</p>
            <div className="text-2xl">⬇</div>
          </motion.div>
        </motion.div>
      </div>

      {/* Paisaje safari en la parte inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-amber-200 via-yellow-200 to-transparent opacity-30 z-10">
        <div className="flex justify-around items-end h-full pb-4">
          {['🌳', '🌴', '🌲'].map((tree, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2 + i * 0.2 }}
              className="text-4xl"
            >
              {tree}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeccionInicio;
