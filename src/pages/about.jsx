import "./about.css";
import {useState} from 'react';

 function About() {
    const [displayEmail, setDisplayEmail] = useState(false);

    function toggleEmail() {
        console.log("hello");
        setDisplayEmail(true);
        
        
    }

    function getEmailSection() {
        if(displayEmail) {
        return <p className="email">shoes@gmail.com</p>
        }
        else {
            return null
        }

    }

     return (
        <div className="About-page">
            <i class="fa fa-shopping-cart" aria-hidden="true"></i> 
            <h1>About Us</h1>
            <p className="about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, vitae illum, quos praesentium qui aut inventore necessitatibus consequuntur cum ducimus iusto vel beatae laboriosam unde quidem impedit magni! Modi, sint.</p>
            <h3>Our Email</h3>
            {getEmailSection()}
            <button className="view-email" onClick={toggleEmail}>Click to veiw email</button>
        </div>
     );

}


export default About;