import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler,Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody, Dropdown, DropdownItem, DropdownToggle, DropdownMenu,
    Form, FormGroup, Input, Label, Badge } from 'reactstrap';
import {NavLink} from 'react-router-dom'

class Header extends Component {

  constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false,
            isDropDownOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.toggleDropDown = this.toggleDropDown.bind(this);
        this.handleGoogleLogin = this.handleGoogleLogin.bind(this);
    }

    toggleDropDown() {
        this.setState({
            isDropDownOpen: !this.state.isDropDownOpen
        });
    }
    

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleLogin(event) {
        this.toggleModal();
        event.preventDefault();
    }

    handleGoogleLogin(event) {
        this.toggleModal();
        event.preventDefault();
    }

  render() {
    return(
    <React.Fragment>
      <Navbar expand="md">
        <div className="container justify-text-center">
        <NavbarToggler >
            <Button onClick={this.toggleNav} outline color="warning">Menu &nbsp;
                <span className="fa fa-list fa-lg"></span>
            </Button>
            </NavbarToggler>
          <NavbarBrand  href="/">
            <img src="assets/images/logo.png" alt="ffi_logo" style={{width:"50px", height:"50px" }}/>  
          </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
                <Nav>
                    <NavItem>
                        <NavLink className="nav-link" style={{color: "#ffffff"}} to="/home">
                            <span className="fa fa-home fa-lg" style={{color: "#ffffff"}}></span> &nbsp; Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" style={{color: "#ffffff"}} to="/aboutus">
                            <span className="fa fa-info fa-lg" style={{color: "#ffffff"}}></span> &nbsp; About Us
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" style={{color: "#ffffff"}} to="/menu">
                            <Dropdown isOpen={this.state.isDropDownOpen} toggle={this.toggleDropDown} className="nav-item">
                            <DropdownToggle tag="li" active="false">
                                <span className="fa fa-list fa-lg" style={{color: "#ffffff"}}></span> &nbsp; Initiatives 
                            </DropdownToggle>
                            <DropdownMenu style={{backgroundColor:"#343a40"}}>
                                <DropdownItem>
                                    <NavItem>
                                        <NavLink className="nav-link" style={{color: "#000000"}} to="/bloodline">
                                            Bloodline
                                        </NavLink>
                                    </NavItem>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavItem>
                                        <NavLink className="nav-link" style={{color: "#000000"}} to="/disha">
                                            Disha
                                        </NavLink>
                                    </NavItem>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavItem>
                                        <NavLink className="nav-link" style={{color: "#000000"}} to="/escape">
                                            Escape
                                        </NavLink>
                                    </NavItem>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavItem>
                                        <NavLink className="nav-link" style={{color: "#000000"}} to="/jagriti">
                                            Jagriti
                                        </NavLink>
                                    </NavItem>
                                </DropdownItem>
                            </DropdownMenu>
                            </Dropdown>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" style={{color: "#ffffff"}} to="/members">
                            <span className="fa fa-address-card fa-lg" style={{color: "#ffffff"}}></span> &nbsp; Members
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" style={{color: "#ffffff"}} to="/favorites">
                            <span className="fa fa-inr fa-lg" style={{color: "#ffffff"}}></span> &nbsp; Donate
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" style={{color: "#ffffff"}} to="/contactus">
                            <span className="fa fa-address-card fa-lg" style={{color: "#ffffff"}}></span> &nbsp; ContactUs
                        </NavLink>
                    </NavItem>
                </Nav>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                            <Button outline color="warning" onClick={this.toggleModal}>
                                <span className="fa fa-sign-in fa-lg"></span> Login
                            </Button>
                    </NavItem>
                </Nav>
            </Collapse>
        </div>
      </Navbar>
      
       <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Email</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input}  />
                            </FormGroup>
                            <FormGroup check className="mb-2">
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                    innerRef={(input) => this.remember = input}  />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                        <p></p>
                        <Button color="danger" onClick={this.handleGoogleLogin}><span className="fa fa-google fa-lg"></span> Login with Google</Button>
                    </ModalBody>
                </Modal>
    </React.Fragment>
    );
  }
}

export default Header;