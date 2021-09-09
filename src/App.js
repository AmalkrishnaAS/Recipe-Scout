import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import Searchform from './Searchform';
// import Carousel from './Components/Carousel'

function App() {
  const apiKey=process.env.REACT_APP_RECIPE_API
  return (<>
    <Navbar />
    {/* <Carousel /> */}
    <Searchform apiKey={apiKey} />

    </>
  );
}

export default App;
