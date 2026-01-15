import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { cropFrutasImage } from '../utils/imageCropper';

const FrutasDecorativas = () => {
  const [frutasImage, setFrutasImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFrutas = async () => {
      try {
        const imagePath = '/imagenes_invitacion.png';
        const image = await cropFrutasImage(imagePath);
        setFrutasImage(image);
        setLoading(false);
      } catch (error) {
        console.error('Error al cargar imagen de frutas:', error);
        setLoading(false);
      }
    };

    loadFrutas();
  }, []);

  if (loading) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2 }}
      className="absolute bottom-0 left-0 right-0 h-40 md:h-48 overflow-hidden"
    >
      {frutasImage && (
        <motion.img
          src={frutasImage}
          alt="Frutas decorativas"
          className="w-full h-full object-cover opacity-60"
          animate={{ 
            scale: [1, 1.05, 1],
            x: [0, 10, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}
    </motion.div>
  );
};

export default FrutasDecorativas;

