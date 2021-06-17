
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Navbar from './component/Navbar';
import Homes from './pages/Homes';
import contact from './pages/contact';
import about from './pages/aboutus';
import product from './pages/product';

function App() {
  return (<div>    <Router>
      <Navbar></Navbar>
      <switch>
        <Route path='/' exact component={Homes} />
        <Route path='/contact' exact component={contact} />
        <Route path='/product' exact component={product} />
        <Route path='/About-us' exact component={about} />
      </switch>


    </Router>
   
    </div>

  );
}

export default App;
