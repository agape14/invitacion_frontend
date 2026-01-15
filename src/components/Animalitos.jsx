import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Animalitos = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const animalitos = [
    {
      key: 'ranita',
      nombre: 'Sapito',
      image: '/ranita.png',
      emoji: '🐸',
      animation: {
        y: [0, -20, 0],
        rotate: [0, 8, -8, 0],
        scale: [1, 1.08, 1]
      }
    },
    {
      key: 'abejita',
      nombre: 'Abejita',
      image: '/abejita.png',
      emoji: '🐝',
      animation: {
        y: [0, -25, 0],
        rotate: [0, -8, 8, 0],
        scale: [1, 1.1, 1]
      }
    },
    {
      key: 'conejito',
      nombre: 'Conejito',
      image: '/conejito.png',
      emoji: '🐰',
      animation: {
        y: [0, -22, 0],
        rotate: [0, 5, -5, 0],
        scale: [1, 1.09, 1]
      }
    },
    {
      key: 'osito',
      nombre: 'Osito',
      image: '/osito.png',
      emoji: '🐻',
      animation: {
        y: [0, -18, 0],
        rotate: [0, -5, 5, 0],
        scale: [1, 1.07, 1]
      }
    },
  ];

  useEffect(() => {
    const loadImages = async () => {
      const imagePromises = animalitos.map((animal) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => resolve();
          img.onerror = () => reject();
          img.src = animal.image;
        });
      });

      try {
        await Promise.all(imagePromises);
        setImagesLoaded(true);
      } catch (error) {
        console.error('Error al cargar imágenes:', error);
        setImagesLoaded(true);
      }
    };

    loadImages();
  }, []);

  if (!imagesLoaded) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        {animalitos.map((animal, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="text-center"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 flex items-center justify-center mx-auto mb-2 animate-pulse">
              <span className="text-6xl md:text-7xl">{animal.emoji}</span>
            </div>
            <p className="text-base md:text-lg font-semibold text-gray-700">{animal.nombre}</p>
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8">
      {animalitos.map((animal, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            delay: 0.6 + index * 0.15,
            type: "spring",
            stiffness: 100
          }}
          whileHover={{ scale: 1.05 }}
          className="text-center"
        >
          <motion.div
            className="w-28 h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 flex items-center justify-center mx-auto mb-3 relative"
            animate={animal.animation}
            transition={{
              duration: 2.5 + index * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.1,
              rotate: [0, -10, 10, -10, 0],
              transition: { duration: 0.6 }
            }}
          >
            <motion.img
              src={animal.image}
              alt={animal.nombre}
              className="w-full h-full object-contain drop-shadow-2xl"
              style={{
                imageRendering: 'high-quality',
                filter: 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.15))'
              }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.8 + index * 0.15,
                type: "spring",
                stiffness: 200
              }}
              whileHover={{
                scale: 1.15,
                filter: 'drop-shadow(0 12px 24px rgba(0, 0, 0, 0.25))'
              }}
              onError={(e) => {
                e.target.style.display = 'none';
                const parent = e.target.parentElement;
                if (parent) {
                  const emoji = document.createElement('span');
                  emoji.className = 'text-7xl md:text-8xl';
                  emoji.textContent = animal.emoji;
                  parent.appendChild(emoji);
                }
              }}
            />
          </motion.div>
          <motion.p
            className="text-base md:text-lg font-bold text-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 + index * 0.15 }}
          >
            {animal.nombre}
          </motion.p>
        </motion.div>
      ))}
    </div>
  );
};

export default Animalitos;
