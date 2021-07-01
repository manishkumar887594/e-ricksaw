
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
   <!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="/__/firebase/8.6.8/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="/__/firebase/8.6.8/firebase-analytics.js"></script>

<!-- Initialize Firebase -->
<script src="/__/firebase/init.js"></script>

    </div>

  );
}

export default App;
