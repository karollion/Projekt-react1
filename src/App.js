import Hero from './components/Hero/Hero'
import SearchForm from './components/SearchForm/SearchForm'
import List from './components/List/List'
import Container from './components/Container/Container';
import NavBar from './components/NavBar/NavBar';
import Favorite from './components/Favorite/Favorite';
import About from './components/About/About';

const App = () => {
  return (
    <main>
      <NavBar />
      <Container>
        <Favorite />
        <About />
        <Hero />
        <SearchForm />
        <List />
      </Container>
    </main>
  );
};

export default App;