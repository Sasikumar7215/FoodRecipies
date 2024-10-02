import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/header';
import { Home } from './components/home';
import { Footer } from './components/footer';
import { Breakfast } from './components/breakfast';
// import { PageNotFound } from './components/PageNotFound';
function App() {
  return (
    <div className="App">
     <Router>
     <Header />
     <Home />
     {/* <Breakfast/> */}
     <div className="container">
        <Routes>
          <Route exact path="/home" element={<Home />} >
          </Route>
          <Route path="/breakfast" element={<Breakfast />} > </Route>
          {/* <Route exact path="/" component={Home} />/ */}
          {/* <Route exact path="/" component={Home} /> */}
          {/* <Route exact path="/" component={Home} /> */}
          {/* <Route component={PageNotFound} /> */}
        </Routes>
      </div>
      <Footer />
      </Router>
    </div>
  )}

export default App;
