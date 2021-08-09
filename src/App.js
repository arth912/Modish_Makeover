import './App.css'
import Nav from './components/Nav.js'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route,  Switch } from 'react-router-dom'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import About from './pages/About'
import Review from './pages/Review'

function App() {
  return (
    <div className='App'>

      {/* <Home/> */}
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/Gallery' component={Gallery} />
          <Route path='/About' component={About} />
          <Route path='/Review' component={Review} />
        </Switch>
        <Footer />
      </Router>


    </div>
  )
}

export default App
