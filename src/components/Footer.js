import { Container, Row, Col } from "react-bootstrap";
//import { Newsletter } from "./Newsletter"; // Import the Newsletter component 
import Newsletter from './Newsletter';
// import logo from '../assets/img/mylogo.png';
import navIcon1 from "../assets/img/nav-icon1.svg";
import giticon2 from "../assets/img/github (5).png";
import navIcon3 from '../assets/img/twitter.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Newsletter /> {/* Include the Newsletter component */}
          <Col size={12} sm={6} className="text-center text-sm-start">
            {/*<img src={logo} alt="Logo" />*/}
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/vaibhav-dinkar-80810622b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img src={navIcon1} alt="LinkedIn" /></a>
              <a href="https://github.com/vaibhav2536"><img src={giticon2} alt="Github"/></a>
              <a href="https://x.com/Vaibhav_2536?t=jbhhCp2LC9i9JSDv5ESiEQ&s=08"><img src={navIcon3} alt="Twitter"/></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};







// import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
// import logo from '../assets/img/mylogo.png';
// import navIcon1 from "../assets/img/nav-icon1.svg";
// import giticon2 from "../assets/img/giticon2.png";
// import navIcon3 from "../assets/img/nav-icon3.svg";

// export const Footer = () => {
//   return (
//     <footer className="footer">
//       <Container>
//         <Row className="align-items-center">
//           <MailchimpForm />
//           <Col size={12} sm={6}>
//             { <img src={logo} alt="Logo" /> }
//           </Col>
//           <Col size={12} sm={6} className="text-center text-sm-end">
//           <div className="social-icon">
//                 <a href="https://www.linkedin.com/in/eva-goel-93871124a"><img src={navIcon1} alt="LinkedIn" /></a>
//                 <a href="https://github.com/evagoel"><img src={giticon2} alt="Github"/></a>
//                 <a href="https://www.instagram.com/"><img src={navIcon3} alt=" Instagram"/></a>
//               </div>
//             <p>Copyright 2024. All Rights Reserved</p>
//           </Col>
//         </Row>
//       </Container>
//     </footer>
//   )
// }
