//IT21013300
import React from 'react';
import { Container, Nav, Tab, Col, Row } from "react-bootstrap";
import Bookingtourspot from "../components/Retrieveallbooktourspot";
import UserProfile from "../components/Userprofile";
function Userdashboard() {
  return (
    <Container>
    <Tab.Container defaultActiveKey="userprofile">
        <Row>
            <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                        <Nav.Link eventKey="userprofile">Your Profile</Nav.Link>
                     
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="tourspot">Your Bookings(Tour Spot)</Nav.Link>
                    </Nav.Item>
            
                </Nav>
            </Col>
            <Col sm={9}>
                <Tab.Content>
                    <Tab.Pane eventKey="userprofile">
              <UserProfile/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tourspot">
                   <Bookingtourspot/>
                    </Tab.Pane>
                 
                </Tab.Content>
            </Col>
        </Row>
    </Tab.Container>
</Container>
  )
}

export default Userdashboard
