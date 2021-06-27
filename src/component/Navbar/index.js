
import '../../pages/App.css';





const Navbar = ({ history }) => (<div>





    <div class="container-fluid " style={{borderRadius:"20px", width: "1400px",height: "50px"}}>
      <div class="row">
  
            <div > <div class="navbar navbar-dark bg-info"  style={{width:'100%',height: "70px" ,marginbottom:'5px',  position: "fixed",   display: "block"}}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            
                <nav style={{JustifyItems:"centre"}}>           
                <ol class="flex" style={{display:"flex",liststyle: "none",textcolor:"black"}} >
            
          <a href="/" > <span>
<font face="Arial" fontSize="100px" color="black"><b><h3>Home</h3></b></font></span> </a>
<a href="/#Specs" ><font face="Arial" fontSize="100px" color="black"><b><h3>Specification</h3></b></font></a>
      <a href="/product" ><font face="Arial" fontSize="100px" color="black"><b><h3>product</h3></b></font></a>
      <a href="/#about" ><font face="Arial" fontSize="100px" color="black"><b><h3>About-us</h3></b></font></a>
      <a href="/#contact" ><font face="Arial" fontSize="100px" color="black"><b><h3>Contact</h3></b></font></a>
</ol>

                  <div> 
  
                    <ul id="nav" >
            
                      <li class="fl-custom-tabmenulink mega-menu"> <a href="/" > <span>Home</span> </a></li>
                      <li class="fl-custom-tabmenulink mega-menu"> <a href="/product" class="level-top"> <span>product</span> </a></li>
                      <li class="fl-custom-tabmenulink mega-menu"> <a href="/About-us" class="level-top"> <span>About-us</span> </a></li>
                      <li class="fl-custom-tabmenulink mega-menu"> <a href="/#contact" class="level-top"> <span>Contact</span> </a></li>


                     

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