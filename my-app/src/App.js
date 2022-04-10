// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    //JSX fragment <.> ..... </>
    <>
      {/* <Navbar title='Travelscape Goa' aboutText='About Us'/> */}
      <Navbar /> {/*if default props are set */}
      <div className="container my-3">
        <TextForm heading="Enter text of your choice"/>
      </div>
    </>
  )
}
export default App;
