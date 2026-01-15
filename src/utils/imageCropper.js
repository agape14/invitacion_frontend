/**
 * Utilidad para recortar secciones específicas de la imagen de invitación
 * Las coordenadas se ajustarán según las dimensiones reales de la imagen
 */

/**
 * Crea un sprite recortado usando canvas (más preciso)
 */
export const cropImageWithCanvas = async (imagePath, element) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      // Calcular las coordenadas basadas en el tamaño real de la imagen
      const imgWidth = img.width;
      const imgHeight = img.height;
      
      // Asumimos que la imagen tiene los 4 animalitos en una fila en la parte superior
      // Cada animalito ocupa aproximadamente 1/4 del ancho
      const animalWidth = imgWidth / 4;
      const animalHeight = imgHeight * 0.4; // Aproximadamente 40% de la altura
      
      const { index, scale = 1.5 } = element;
      
      const x = index * animalWidth;
      const y = 0;
      const width = animalWidth;
      const height = animalHeight;
      
      canvas.width = width * scale;
      canvas.height = height * scale;
      
      // Mejorar la calidad de la imagen
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      
      ctx.drawImage(
        img,
        x, y, width, height,  // Fuente (recorte de la imagen original)
        0, 0, width * scale, height * scale  // Destino (escalado en el canvas)
      );
      
      resolve(canvas.toDataURL('image/png'));
    };
    
    img.onerror = (error) => {
      console.error('Error al cargar la imagen:', error);
      reject(error);
    };
    
    img.src = imagePath;
  });
};

/**
 * Recorta la sección de frutas de la imagen
 */
export const cropFrutasImage = async (imagePath) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      const imgWidth = img.width;
      const imgHeight = img.height;
      
      // Las frutas están en la parte inferior (aproximadamente del 40% hacia abajo)
      const x = 0;
      const y = imgHeight * 0.4;
      const width = imgWidth;
      const height = imgHeight * 0.6;
      
      canvas.width = width;
      canvas.height = height;
      
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      
      ctx.drawImage(
        img,
        x, y, width, height,
        0, 0, width, height
      );
      
      resolve(canvas.toDataURL('image/png'));
    };
    
    img.onerror = reject;
    img.src = imagePath;
  });
};
