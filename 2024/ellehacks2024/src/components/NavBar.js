
// // import React from 'react';
// // import Container from 'react-bootstrap/Container';
// // import Nav from 'react-bootstrap/Nav';
// // import Navbar from 'react-bootstrap/Navbar';
// // import Image from 'react-bootstrap/Image';

// // function NavBar() {
// //   const linkText = {
// //     color: '#FFF',
// //     textAlign: 'center',
// //     fontSize: '18px',
// //     fontStyle: 'normal',
// //     fontWeight: 500,
// //     lineHeight: 'normal',
// //   };

// //   return (
// //     <>
// //       {/* MLH Badge (visible only on larger screens) */}
// //       <Image
// //         src={require('../assets/mlh-trust-badge.png')}
// //         alt="MLH Trust Badge"
// //         fluid
// //         className="d-none d-lg-block" // Hide on smaller screens
// //         style={{ maxHeight: '150px', position: 'fixed', top: '10px', right: '10px', zIndex: '2000' }}
// //       />

// //       <Navbar fixed="top" expand="lg" style={{ backgroundColor: '#712323', order: '1', zIndex: '1000' }}>
// //         <Container>
// //           {/* Website Logo */}
// //           <Navbar.Brand className='m-10px' href="#home" style={linkText}>
// //             <Image
// //               src={require('../assets/logo.png')}
// //               alt="ElleHacks Logo"
// //               fluid
// //               style={{ maxHeight: '50px', marginRight: '10px' }}
// //             />
// //             ElleHacks
// //           </Navbar.Brand>

// //           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
// //           <Navbar.Collapse id="responsive-navbar-nav">
// //             <Nav className="justify-content-center">
// //               <Nav.Link href="#home" style={linkText}>
// //                 Home
// //               </Nav.Link>
// //               <Nav.Link href="#aboutus" style={linkText}>
// //                 About Us
// //               </Nav.Link>
// //               <Nav.Link href="#features" style={linkText}>
// //                 Register
// //               </Nav.Link>
// //               <Nav.Link href="#sponsor" style={linkText}>
// //                 Sponsors
// //               </Nav.Link>
// //               <Nav.Link href="#faq" style={linkText}>
// //                 FAQ
// //               </Nav.Link>
// //               <Nav.Link href="#contact" style={linkText}>
// //                 Contact
// //               </Nav.Link>
// //             </Nav>
// //           </Navbar.Collapse>
// //         </Container>
// //       </Navbar>

// //       {/* Add padding to the top of the body */}
// //       <div style={{ paddingTop: '80px' }}>
// //         {/* Your other components go here */}
// //       </div>
// //     </>
// //   );
// // }

// // export default NavBar;


// import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Image from 'react-bootstrap/Image';
// import { Link, useNavigate } from 'react-router-dom';
// import { Link as ScrollLink } from 'react-scroll';

// function NavBar() {
//   const navigate = useNavigate();

//   const linkText = {
//     color: '#FFF',
//     textAlign: 'center',
//     fontSize: '18px',
//     fontStyle: 'normal',
//     fontWeight: 500,
//     lineHeight: 'normal',
//   };

//   const handleNavLinkClick = (path) => {
//     navigate(path);
//     // Scroll to the target element
//     const targetElement = document.getElementById(path);
//     if (targetElement) {
//       targetElement.scrollIntoView({ behavior: 'smooth' });
//     }
//   }
//   return (
//     <>
//      <Image
//         src={require('../assets/mlh-trust-badge.png')}
//         alt="MLH Trust Badge"
//         fluid
//         className="d-none d-lg-block" // Hide on smaller screens
//         style={{ maxHeight: '150px', position: 'fixed', top: '10px', right: '10px', zIndex: '2000' }}
//       />

// <Navbar fixed="top" expand="lg" style={{ backgroundColor: '#712323', order: '1', zIndex: '1000' }}>
//         <Container>
//           <Navbar.Brand className='m-10px' href="#home" style={linkText}>
//             {/* ... (Your ElleHacks Logo Image) */}
//             ElleHacks
//           </Navbar.Brand>

//           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//           <Navbar.Collapse id="responsive-navbar-nav">
//             <Nav className="justify-content-center">
//               <Nav.Link as={ScrollLink} to="home" spy smooth style={linkText} onClick={() => handleNavLinkClick('home')}>
//                 Home
//               </Nav.Link>
//               <Nav.Link as={ScrollLink} to="aboutus" spy smooth style={linkText} onClick={() => handleNavLinkClick('aboutus')}>
//                 About Us
//               </Nav.Link>
//               <Nav.Link as={ScrollLink} to="joinus" spy smooth style={linkText} onClick={() => handleNavLinkClick('joinus')}>
//                 Register
//               </Nav.Link>
//               <Nav.Link as={ScrollLink} to="faq" spy smooth style={linkText} onClick={() => handleNavLinkClick('faq')}>
//                 FAQ
//               </Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//       {/* Add padding to the top of the body */}
//       <div style={{ paddingTop: '80px' }}>
//         {/* Your other components go here */}
//       </div>
//     </>
//   );
// }

// export default NavBar;

// components/NavBar.js
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import { Link, useNavigate } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

function NavBar() {
  const navigate = useNavigate();

  const linkText = {
    color: '#FFF',
    textAlign: 'center',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: 'normal',
  };

  const handleNavLinkClick = (path) => {
    navigate(path);
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  };

  return (
    <>
     <a
     href="https://mlh.io/seasons/2024/events">
      <Image
        src={require('../assets/mlh-trust-badge.png')}
        alt="MLH Trust Badge"
        fluid
        className="d-none d-lg-block" // Hide on smaller screens
        style={{ maxHeight: '150px', position: 'fixed', top: '10px', right: '10px', zIndex: '2000' }}
        
      />
      </a> 

      <Navbar fixed="top" expand="lg" style={{ backgroundColor: '#712323', order: '1', zIndex: '1000' }}>
        <Container>
          <Navbar.Brand className='m-10px' href="#home" style={linkText}>
            <Image
              src={require('../assets/logo.png')}
              alt="ElleHacks Logo"
              fluid
              style={{ maxHeight: '50px', marginRight: '10px' }}
            />
            ElleHacks
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="justify-content-center">
            <Nav.Link as={ScrollLink} to="home" spy smooth style={linkText} onClick={() => handleNavLinkClick('home')}>
  Home
</Nav.Link>
<Nav.Link as={ScrollLink} to="aboutus" spy smooth style={linkText} onClick={() => handleNavLinkClick('aboutus')}>
  About Us
</Nav.Link>
<Nav.Link as={ScrollLink} to="joinus" spy smooth style={linkText} onClick={() => handleNavLinkClick('joinus')}>
  Register
</Nav.Link>
<Nav.Link as={ScrollLink} to="faq" spy smooth style={linkText} onClick={() => handleNavLinkClick('faq')}>
  FAQ
</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Add padding to the top of the body */}
      <div style={{ paddingTop: '80px' }}>
        {/* Your other components go here */}
      </div>
    </>
  );
}

export default NavBar;

