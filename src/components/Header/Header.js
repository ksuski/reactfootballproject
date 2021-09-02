import { Col, Row } from 'react-bootstrap';
import logo from '../../assets/img/logo-reactfootball.png';

import './Header.css';
import '../../assets/css/bootstrap/bootstrap-grid.css';

function Header() {
  return (
    <>
      <header className="main-header d-flex justify-content-center align-items-center">
        
          <Row className="d-flex justify-content-center">
            <Col xs md lg={3} className="d-flex justify-content-center">
            <img src={logo} className="App-logo" alt="logo" />
            </Col>
            <Col xs md lg={9} className="d-flex justify-content-center align-items-center main-header-title flex-column">
              <h1>
                 ReactFootball
              </h1>
              <h2>find some informations about football</h2>
            </Col>
          </Row>
        
       
       
      </header>
    </>
  );
}

export default Header;
