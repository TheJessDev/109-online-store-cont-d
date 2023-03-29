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
            return null  // a return with no ().....?
        }

    }

     return (   // a return with ()....?
        <div className="About-page">
            {/* <i class="fa fa-shopping-cart" aria-hidden="true"></i>  */}
            <h2>About Us</h2>
            <p className="about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, vitae illum, quos praesentium qui aut inventore necessitatibus consequuntur cum ducimus iusto vel beatae laboriosam unde quidem impedit magni! Modi, sint.</p>
            <h3>Our Email</h3>
            {getEmailSection()}
            <button className="view-email" onClick={toggleEmail}>Click to veiw email</button> 
             {/* when to call funtion with or without () ...?? */}
        </div>
     );

}


export default About;