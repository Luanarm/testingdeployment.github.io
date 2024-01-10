import styled from "styled-components";
import background_footer from "../assets/images/background_footer.png";

export const Logo = styled.img`
  max-width: 100px;
  margin-right: 20px;
`;

export const Box = styled.div`
  padding: 10% auto;
  background: #712323;
  bottom: 0;
  width: 100%;
  background-image: url(${background_footer}),
    height: 100vh,
    marginTop: -70px,
    fontSize: 50px,
    backgroundSize: cover,
    backgroundRepeat: no-repeat;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1200px;
  padding-top: 5%;
  margin: 0 auto;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 6px;
`;

export const ColumnSocial = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 20px; /* Adjust the margin for smaller screens */
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const RowSocial = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 20px;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    color: #ffce82;
    transition: 200ms ease-in;
  }
`;

export const SocialIconsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .socials {
    display: flex;
    gap: 20px;
  }
`;

export const ContactSection = styled.div`
  .container-fluid {
    padding: 2px;
    border-radius: 10px;
    display: bottom;
    flex-direction: column;
  }

  p {
    color: #fff;
    font-size: 16px;
    margin: 0;
    font-weight: bold;
    margin-bottom: auto;
  }
`;

export const ContactLink = styled.a`
  color: #fff;
  text-decoration: underline;

  &:hover {
    color: #ffce82;
    transition: 200ms ease-in;
  }
`;
