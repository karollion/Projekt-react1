
import Container from './components/Container/Container';
import NavBar from './components/NavBar/NavBar';
import Favorite from './components/Favorite/Favorite';
import About from './components/About/About';
import Home from './components/Home/Home';

const App = () => {
  return (
    <main>
      <NavBar />
      <Container>
        <Favorite />
        <About />
        <Home />
      </Container>
    </main>
  );
};

export default App;