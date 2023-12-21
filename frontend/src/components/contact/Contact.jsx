// import '../about/about.css'

import './contact.css'

const Contact = () => {

  return (
    <>
    <div className="homeBody">
    <div className="bgimage"><div className="bd"></div></div>
      <div className="bodycontainer" data-aos='zoom-in'>
       
      </div>
     </div>

     <div className="contact">
        <span className="bodyText">Contact page</span>

      <div className="conatcItems">
      <div className="contactContainer">
        <div className="contactAddress" data-aos='fade-right'>
        <div className="address">
        
          <div className="addresstext">
          <span className="addressname">Address</span>
          <span className="addressname aname">Nepal</span>
          </div>
        </div>
        <div className="address">
       
          <div className="addresstext">
          <span className="addressname">Email</span>
          <span className="addressname aname">example@gmail.com</span>
          </div>
        </div>
        <div className="address">
      
          <div className="addresstext">
          <span className="addressname">Phone</span>
          <span className="addressname aname">+977-98009800</span>
          </div>
        </div>
       
        </div>
        <form action="" className="contactForm" data-aos='fade-left'>
          <div className="inputfield">
          <input type="text" className="forminput" placeholder='Name'/>
          </div>
          <div className="inputfield">
          <input type="text" className="forminput" placeholder='Email'/>
          </div>
          <div className="inputfield">
          <textarea type="text" className="forminput inputTextArea" placeholder='Message'/>
          </div>
          <button className="submitbtn">Submit</button>
        </form>
      </div>
      </div>
      
     </div>
   
     </>
  )
}

export default Contact
