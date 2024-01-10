import React from "react";
import Red from "../assets/images/Red.png";
import {
  Box,
  FooterContainer,
  Row,
  Column,
  FooterLink,
  SocialIconsContainer,
  ContactSection,
  ContactLink,
  Logo,
  ColumnSocial,
  RowSocial,
} from "./FooterStyles";

const Footer = () => {
	return (
		<Box>


			<FooterContainer>


				<Row>
				{/* Logo */}
                    < Logo img src={Red} alt="Logo" />

					<Column>
						<FooterLink href="#home">
							Home
						</FooterLink>
						<FooterLink href="#aboutus">
							About
						</FooterLink>
						<FooterLink href="#joinus">
							Register
						</FooterLink>
					</Column>

					<Column>
						<FooterLink href="#">
							Sponsors
						</FooterLink>
						<FooterLink href="#faq">
							FAQ
						</FooterLink>
						<FooterLink href="#contact-us">
							Contact
						</FooterLink>

					</Column>


					<ColumnSocial>

                    <RowSocial>
					 {/* Social media icons directly in Footer.js */}
					 <SocialIconsContainer>
                              <div id="contact-socials" className="socials">
                                <a href="mailto::info@ellehacks.com">
                                  <img className="social-icons" src="../assets/images/socials/ic_round-email.png" alt="email" />
                                </a>
                                <a href="https://www.instagram.com/ellehacks/">
                                  <img className="social-icons" src="../assets/images/socials/instagram.png" alt="instagram" />
                                </a>
                                <a href="https://www.tiktok.com/@ellehacks">
                                  <img className="social-icons" src="../assets/images/socials/logos_tiktok-icon.png" alt="tiktok" />
                                </a>
                                <a href="https://www.linkedin.com/company/ellehacks/">
                                  <img className="social-icons" src="../assets/images/socials/linkedin.png" alt="linkedin" />
                                </a>
                                <a href="https://twitter.com/ellehacks">
                                  <img className="social-icons" src="../assets/images/socials/twitter.png" alt="twitter" />
                                </a>
                                <a href="https://www.facebook.com/ellehacks/">
                                  <img className="social-icons" src="../assets/images/socials/facebook.png" alt="facebook" />
                                </a>
                              </div>
                     </SocialIconsContainer>
                     </RowSocial>

                            <RowSocial>
                     {/* Contact section */}
                               <ContactSection>
                                 <div  className="container-fluid" id="contact-us">
                                   <p>
                                     Questions? Contact us at{" "}
                                     <ContactLink href="mailto:info@ellehacks.com">info@ellehacks.com</ContactLink>
                                   </p>
                                 </div>
                               </ContactSection>


                           </RowSocial>

                     </ColumnSocial>




				</Row>

			</FooterContainer>
		</Box>

	);
};
export default Footer;
