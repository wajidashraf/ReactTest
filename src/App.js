// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Nav from './pages/Nav'
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom'
import MoneyExchanger from './pages/MoneyExchanger'
import Counter from './pages/Counter'
function App() {
  return (
    <Router>
    <Nav/>
    <Switch>
      <Route  path ='/counter' render={()=> <Counter/>}/>
      <Route path ='/money' render={()=> <MoneyExchanger/>}/>
    </Switch>
    </Router>
   
  )
}

export default App;
