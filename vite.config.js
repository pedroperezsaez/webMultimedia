import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        page1: 'soundtracks.html',
        page2: 'trailers.html',
        page3: 'entradas/akira.html',
        page4: 'entradas/alientrailer.html',
        page5: 'entradas/anillos.html',
        page6: 'entradas/batman.html',
        page7: 'entradas/ciudadiostriler.html',
        page8: 'entradas/dunetrailer.html',
        page9: 'entradas/forresttrailer.html',
        page10: 'entradas/gladiator.html',
        page11: 'entradas/harrypottertrailer.html',
        page12: 'entradas/interestellar.html',
        page13: 'entradas/odiosostrailer.html',
        page14: 'entradas/padrinotrailer.html',
        page15: 'entradas/psycho.html',
        page16: 'entradas/rocky.html',
        page17: 'entradas/tiburon.html',
        page18: 'entradas/clubluchatrailer.html',
        
        
       
      }
    }
  }
})