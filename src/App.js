import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import Searchform from './Searchform';
import LoadingBar from 'react-top-loading-bar'
import {useState} from 'react'

// import Carousel from './Components/Carousel'

function App() {
  const [progress, setProgress] = useState(0)
  const setprogress=(progress)=>{
    setprogress(progress)
  }
  const apiKey=process.env.REACT_APP_RECIPE_API
  return (<>
    <Navbar />
    {/* <Carousel /> */}
    <LoadingBar
        color='#f11946'
        progress={progress}
       
      />
    <Searchform apiKey={apiKey} setProgress={setProgress} />

    </>
  );
}

export default App;
