
import './App.css';
import a from './undraw-contact.svg'


function contact() {
    
  return (
  <div>   
      <script src="js/jquery-3.3.1.min.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/jquery.validate.min.js"></script>
    <script src="js/main.js"></script>

  <div class="content">
    
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-10">
          

          <div class="row justify-content-center">
            <div class="col-md-6">
              
              <h3 class="heading mb-4">Let's talk about everything!</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas debitis, fugit natus?</p>

              <p><img src={a}  class="img-fluid"  style={{borderRadius: "24px",height:"260px"}} /></p>


            </div>
            <div class="col-md-6">
              
              <form class="mb-5" method="post" id="contactForm" name="contactForm">
                <div class="row">
                  <div class="col-md-12 form-group">
                    <input type="text" class="form-control" style={{borderRadius: "24px",height:"40px",fontWeight: "bold",fontSize: "12px"}} name="name" id="name" placeholder="Your name"/>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12 form-group">
                    <input type="text" class="form-control" style={{borderRadius: "24px",height:"40px",fontWeight: "bold",fontSize: "12px"}}  name="email" id="email" placeholder="Email"/>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12 form-group">
                    <input type="text" class="form-control" style={{borderRadius: "24px",height:"40px",fontWeight: "bold",fontSize: "12px"}}  name="subject" id="subject" placeholder="Subject"/>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12 form-group">
                    <textarea class="form-control"  style={{borderRadius: "24px",height:"125px",fontWeight: "bold",fontSize: "12px"}}  name="message" id="message" cols="30" rows="7" placeholder="Write your message"></textarea>
                  </div>
                </div>  
                <div class="row">
                  <div class="col-12">
                    <input type="submit"  style={{borderRadius: "50px",height:"30px",border:"outset",background:"white"}} value="Send Message" class="btn"/>
                  <span class="submitting"></span>
                  </div>
                </div>
              </form>

              <div id="form-message-warning mt-4"></div> 
              <div id="form-message-success">
                Your message was sent, thank you!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
    
    

  

</div>

  );
}

export default contact;
