import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const Ubicacion = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  // Estado para la información del evento
  const [info, setInfo] = useState({
    lugar: "Salón de Eventos 'Mundo Mágico'",
    direccion: "Av. Siempre Viva 123, Springfield",
    referencia: "Frente al parque central, puerta amarilla.",
    mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15603.491223964!2d-77.0282376!3d-12.1192804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8cebc1a6723%3A0xe5a3632938166c2d!2sMiraflores!5e0!3m2!1ses!2spe!4v1700000000000!5m2!1ses!2spe"
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setIsAdmin(params.get('admin') === 'true');
  }, []);

  // API configuration
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api/v1';

  // Load settings from backend
  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const response = await fetch(`${API_URL}/settings`);
      if (response.ok) {
        const data = await response.json();
        // Merge with defaults if some keys are missing
        setInfo(prev => ({
          ...prev,
          ...data
        }));
      }
    } catch (error) {
      console.error("Error fetching settings:", error);
    }
  };

  const saveSettings = async () => {
    try {
      const response = await fetch(`${API_URL}/settings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(info),
      });

      if (response.ok) {
        alert("¡Información actualizada correctamente!");
        setIsEditing(false); // Close edit mode on success
      } else {
        alert("Error al guardar la información.");
      }
    } catch (error) {
      console.error("Error saving settings:", error);
      alert("Error de conexión al guardar.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="ubicacion" className="min-h-screen py-24 px-4 bg-gradient-to-br from-pastel-crema via-white to-pastel-celeste relative overflow-hidden">
      {/* Decoración de fondo */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-100 rounded-full blur-3xl opacity-50 -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-100 rounded-full blur-3xl opacity-50 -z-10 -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-6xl mx-auto z-10 relative">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block py-1 px-4 rounded-full bg-orange-100 text-orange-600 font-bold text-sm tracking-widest uppercase mb-4 shadow-sm border border-orange-200">
            ¡No faltes!
          </span>
          <h2 className="text-5xl md:text-6xl text-center mb-4 font-pacifico text-gray-800 drop-shadow-sm">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fiesta-azul to-fiesta-morado">¿Dónde</span> celebraremos?
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-quicksand max-w-2xl mx-auto">
            Ven a compartir este día especial en nuestra <br />
            <span className="font-bold text-orange-500">Fiesta Safari Multicolor 🦁</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* Tarjeta de Detalles */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/80 backdrop-blur-md rounded-[2.5rem] p-8 md:p-10 shadow-xl border-4 border-white relative"
          >
            {/* Admin Edit Button */}
            {isAdmin && (
              <button
                onClick={() => isEditing ? saveSettings() : setIsEditing(true)}
                className={`absolute top-4 right-4 text-white p-2 rounded-full shadow transition-colors z-20 text-xs font-bold ${isEditing ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-800 hover:bg-black'}`}
              >
                {isEditing ? '💾 Guardar Cambios' : '✏️ Editar Info'}
              </button>
            )}

            {isEditing ? (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-400 border-b pb-2">Editar Información</h3>
                <div>
                  <label className="block text-sm font-bold text-gray-700">Nombre del Lugar</label>
                  <input type="text" name="lugar" value={info.lugar} onChange={handleInputChange} className="w-full border rounded p-2" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700">Dirección Exacta</label>
                  <input type="text" name="direccion" value={info.direccion} onChange={handleInputChange} className="w-full border rounded p-2" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700">Referencia</label>
                  <input type="text" name="referencia" value={info.referencia} onChange={handleInputChange} className="w-full border rounded p-2" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700">Link Iframe Google Maps (src)</label>
                  <textarea name="mapLink" value={info.mapLink} onChange={handleInputChange} className="w-full border rounded p-2 h-20 text-xs" />
                </div>
              </div>
            ) : (
              <>
                <div className="flex items-start gap-6 mb-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-4xl shadow-inner shrink-0">
                    🏢
                  </div>
                  <div>
                    <h3 className="text-blue-500 font-bold uppercase text-sm tracking-wider mb-1">Lugar del Evento</h3>
                    <p className="text-3xl font-pacifico text-gray-800 leading-tight">
                      {info.lugar}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 mb-8">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center text-4xl shadow-inner shrink-0">
                    📍
                  </div>
                  <div>
                    <h3 className="text-pink-500 font-bold uppercase text-sm tracking-wider mb-1">Dirección Exacta</h3>
                    <p className="text-xl font-quicksand font-bold text-gray-700">
                      {info.direccion}
                    </p>
                    <p className="text-gray-500 mt-2 bg-gray-50 p-3 rounded-lg border-l-4 border-pink-300 italic text-sm">
                      "{info.referencia}"
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <motion.a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(info.direccion + ' ' + info.lugar)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 px-6 rounded-xl font-bold text-center shadow-lg flex items-center justify-center gap-2"
                  >
                    <span>🗺️</span> Google Maps
                  </motion.a>
                  <motion.a
                    href={`https://waze.com/ul?q=${encodeURIComponent(info.direccion)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-4 px-6 rounded-xl font-bold text-center shadow-lg flex items-center justify-center gap-2"
                  >
                    <span>🚗</span> Waze
                  </motion.a>
                </div>
              </>
            )}

            {/* Adorno Animalitos */}
            <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between px-4 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
              <span className="text-4xl animate-bounce" style={{ animationDelay: '0s' }}>🐸</span>
              <span className="text-4xl animate-bounce" style={{ animationDelay: '0.2s' }}>🐝</span>
              <span className="text-4xl animate-bounce" style={{ animationDelay: '0.4s' }}>🐰</span>
              <span className="text-4xl animate-bounce" style={{ animationDelay: '0.6s' }}>🐻</span>
            </div>
          </motion.div>

          {/* Tarjeta de Mapa */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-full min-h-[400px] bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border-4 border-white relative group"
          >
            <iframe
              src={info.mapLink}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '450px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="group-hover:scale-105 transition-transform duration-700"
            ></iframe>
            <div className="absolute inset-0 border-[2.5rem] border-white/0 pointer-events-none rounded-[2.5rem] shadow-[inset_0_0_20px_rgba(0,0,0,0.1)]"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Ubicacion;

