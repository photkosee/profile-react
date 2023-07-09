import './App.css';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Project from './components/project/Project';

function App() {
  return (
    <>
    <Navbar />
    <main className='main'>
      <Home />
      <Project />
    </main>
    </>
  );
}

export default App;
