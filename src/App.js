import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import Searchform from './Searchform';
// import Carousel from './Components/Carousel'

function App() {
  const apiKey="45efa4a592c05bcc017f3d58f9effa82"
  return (<>
    <Navbar />
    {/* <Carousel /> */}
    <Searchform apiKey={apiKey} />

    </>
  );
}

export default App;
