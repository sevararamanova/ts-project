import './footer.css'
import logo from '../../images/Logo.png'

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className='footer__content'>
          <div className='footer__logo'>
            <img src={logo} />
            <p>Our vision is to provide convenience <br></br>and help increase your sales business.</p>
          </div>
          <div className='about'>
            <h3>About</h3>
            <p>How It Works</p>
            <p>Featured</p>
            <p>Partnership</p>
            <p>Bussiness Relation</p>
          </div>

          <div className='about'>
            <h3>Community</h3>
            <p>Events</p>
            <p>Blog</p>
            <p>Podcast</p>
            <p>Invate a firend</p>
          </div>

          <div className='about'>
            <h3>Socials</h3>
            <p>Discord</p>
            <p>Instagram</p>
            <p>Twitter</p>
            <p>Facebook</p>
          </div>
        </div>
        </div>
        <hr></hr>
       
        <div className='subfooter'>
          <div className='first'>
            <p>©2022 MORENT. All rights reserved</p>
          </div>
          <div className='second'>
            <p>Privacy & Policy</p>
            <p>Terms & Condition</p>
          </div>
        </div>

       
    
      </div>
  
  )
}

export default Footer