import Header from './components/Header';
import Article from './components/Article';
import Footer from './components/Footer';
import './styles.css';
import { navData } from './data.js';

function App() {
  return (
    <div>
      <Header data={ navData }/>
      <main>
      <Article />
      <Article />
      </main>
      <Footer />
    </div>
  );
}

export default App;
