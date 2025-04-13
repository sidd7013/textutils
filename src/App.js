import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Switch is replace by Routes in version-6 of react-router-dom

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled", "success");
     // document.title = 'Textutils - Dark Mode';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
      //document.title = 'Textutils - Light Mode';
    }
  }


  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            {/*user this format  <Route ..../> ,not this <Route>...</Route>*/}
           <Route exact path="/"
              element={<TextForm showAlert={showAlert} heading="Try Textutils - Word Counter,Character Counter,Remove extra spaces" mode={mode} />}
            /> 
            <Route exact path="/about"
              element={<About mode={mode}/>}
            />
            {/* <About  mode={mode}/>  */}
            {/* <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} /> */}
          </Routes>
        </div>
     </Router>
    </>
  );
}

export default App;

// github pages- .io wale pages