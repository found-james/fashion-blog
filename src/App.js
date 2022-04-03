import Header from './components/Header';
import Article from './components/Article';
import Footer from './components/Footer';
import './styles.css';
import { navData1 } from './data.js';

function App() {
  console.log("data soruce at app", navData1);
  return (
    <div>
      <Header data={ navData1 }/>
      <main>
      <Article />
      <Article />
      </main>
      <Footer data={ navData1 }/>
    </div>
  );
}

export default App;
