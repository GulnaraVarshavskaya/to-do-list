import './App.css';
import Signup from './components/signup/Signup';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import MainContent from './components/mainContent/MainContent.jsx';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
      <Signup />
      {/* <Header />
      <div className='App__container App__body'>
        <Sidebar />
        <MainContent />        
      </div> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
