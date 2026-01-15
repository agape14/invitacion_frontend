import { useEffect, useState } from 'react';
import SeccionInicio from './components/SeccionInicio';
import Timeline from './components/Timeline';
import Ubicacion from './components/Ubicacion';
import Compartir from './components/Compartir';
import RSVP from './components/RSVP';
import Stepper from './components/Stepper';

function App() {
  const [currentSection, setCurrentSection] = useState('inicio');

  useEffect(() => {
    // Google Analytics ya está configurado en index.html
    if (window.gtag) {
      window.gtag('event', 'app_loaded', {
        event_category: 'engagement',
        event_label: 'invitacion_cumple',
      });
    }
  }, []);

  return (
    <div className="min-h-screen scroll-smooth overflow-x-hidden w-full relative">
      <Stepper currentSection={currentSection} onSectionChange={setCurrentSection} />
      <div className="pt-24">
        <SeccionInicio />
        <Timeline />
        <Ubicacion />
        <Compartir />
        <RSVP />
      </div>
    </div>
  );
}

export default App;
