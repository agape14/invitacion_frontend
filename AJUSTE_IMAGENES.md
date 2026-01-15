# Guía para Ajustar el Recorte de Imágenes

Si las imágenes de los animalitos no se recortan correctamente, puedes ajustar las coordenadas en el archivo `src/utils/imageCropper.js`.

## Cómo Funciona

El sistema divide la imagen en 4 secciones horizontales iguales para los 4 animalitos:
- **Ranita (Sapito)**: índice 0 (primera sección)
- **Abejita**: índice 1 (segunda sección)
- **Conejito**: índice 2 (tercera sección)
- **Osito**: índice 3 (cuarta sección)

## Ajustar Coordenadas Manuales

Si necesitas coordenadas más precisas, puedes modificar la función `cropImageWithCanvas` en `imageCropper.js`:

```javascript
export const cropImageWithCanvas = async (imagePath, element) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      // Ajusta estas coordenadas según tu imagen
      const { x, y, width, height, scale = 1.5 } = element;
      
      canvas.width = width * scale;
      canvas.height = height * scale;
      
      ctx.drawImage(
        img,
        x, y, width, height,  // Coordenadas de recorte
        0, 0, width * scale, height * scale
      );
      
      resolve(canvas.toDataURL('image/png'));
    };
    img.src = imagePath;
  });
};
```

## Coordenadas por Animalito

Si tu imagen tiene los animalitos en posiciones específicas, puedes usar coordenadas exactas:

```javascript
const coordenadas = {
  ranita: { x: 0, y: 0, width: 200, height: 300 },
  abejita: { x: 200, y: 0, width: 200, height: 300 },
  conejito: { x: 400, y: 0, width: 200, height: 300 },
  osito: { x: 600, y: 0, width: 200, height: 300 },
};
```

## Verificar Dimensiones de la Imagen

Para conocer las dimensiones exactas de tu imagen, puedes agregar este código temporalmente:

```javascript
img.onload = () => {
  console.log('Dimensiones de la imagen:', img.width, 'x', img.height);
  // ... resto del código
};
```

## Escala de las Imágenes

El parámetro `scale` controla el tamaño de salida:
- `scale: 1.0` = tamaño original
- `scale: 1.5` = 50% más grande (recomendado)
- `scale: 2.0` = doble tamaño

## Solución de Problemas

1. **Las imágenes no se ven**: Verifica que la imagen esté en `/public/imagenes_invitacion.png`
2. **Recorte incorrecto**: Ajusta las coordenadas en `imageCropper.js`
3. **Calidad baja**: Aumenta el `scale` o mejora la calidad del canvas
4. **Error de CORS**: Asegúrate de que la imagen esté en la carpeta `public`

