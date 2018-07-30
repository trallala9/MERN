import React, {
  Component
} from 'react';
//from reactstrap
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container

} from 'reactstrap';

/*class AppNavbar extends Component {
constructor(props){
    super(props);

    //this.toggle = this.toggle.bind(this);
}
toggle =() => {
    
}
}*/
class AppNavbar extends Component {
  state = {
    isOpen: false
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="dark"
          dark expand="sm"
          className="mb-5">
          <Container>
            <NavbarBrand href="/">Shopping list</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="#">Github</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
export default AppNavbar;