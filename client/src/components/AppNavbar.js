import React,{Component} from 'react';
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
class AppNavbar extends Component{
    state = {
        isOpen: false
    }
    toggle = () => {
        this.setState({
        isOpen: !this.state.isOpen
        });
    } 
    render(){
        
      <div>
        <Navbar color="dark" 
        dark expand="sm" 
        className="mb-5">
          <Container>
              <NavbarBrand href="/">Gamer list</NavbarBrand>
              <NavbarToggler onClick={this.toggle}/>
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav class="ml=auto" navbar>
                  <NavItem>
                    <NavLink href="https://github.com/trallala9/MERN.git">Github</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
          </Container>

        </Navbar>
      </div>  
    }
}
export default AppNavbar;