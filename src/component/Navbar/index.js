
import '../../pages/App.css';

import e from './11.jpg'



const Navbar = ({ history }) => (<div>





    <div class="container-fluid " style={{borderRadius:"20px", width: "2500px",height: "150px"}}>
      <div class="row">
  
            <div > <div class="navbar navbar-dark bg-dark"  style={{width:'100%' ,  position: "fixed",   display: "block",  backgroundImage: `url(${e})`}}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            
                <nav style={{alignContent:"centre"}}>           
                  <div class="mm-toggle-wrap">
                    <div class="mm-toggle"><i class="fa fa-bars"></i><span class="mm-label">Menu</span> </div>
                  </div>
                  <div class="nav-inner"> 
  
                    <ul id="nav" class="hidden-xs">
            
                    <button style={{borderRadius:"20px",fontSize:"25px",width:"75px",height:"45px",opacity:"0.6"}}>  <li class="mega-menu"> <a class="level-top" href="/"><span>Home</span></a></li></button>
                    <button style={{borderRadius:"20px",fontSize:"25px",width:"75px",height:"45px",opacity:"0.6"}}> <li class="mega-menu"> <a class="level-top" href="/product"><span>Product</span></a></li></button>
                    <button style={{borderRadius:"20px",fontSize:"25px",width:"75px",height:"45px",opacity:"0.6"}}> <li class="fl-custom-tabmenulink mega-menu"> <a href="/About-us" class="level-top"> <span>About us</span> </a></li></button>
                    <button style={{borderRadius:"20px",fontSize:"25px",width:"75px",height:"45px",opacity:"0.6"}}> <li class="fl-custom-tabmenulink mega-menu"> <a href="/contact" class="level-top"> <span>Contact</span> </a></li></button>

                     

                  </ul>
                  </div>
                 
                  </nav>
                  </div>
                  <div class="header-logo"> 
                  </div>
              </div>
                  
                  </div>    
            </div>
   
    </div>
    


  
);


export default Navbar;