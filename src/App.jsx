import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/theme.js';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import 'boxicons/css/boxicons.min.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      
      <main>
        <Hero />
        <Skills />
        <Projects />
      </main>
      
      <Footer />
    </ThemeProvider>
  );
}

export default App;