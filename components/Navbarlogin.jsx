const React = require('react') ;
const {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
Button, Modal, ModalBody, ModalFooter, ModalHeader, FormGroup } = require('reactstrap');

module.exports = class Navbarlogin extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }


  render() {
    return (

        <>
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">MagdalenaDevelopers</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
        </Navbar>
      </div>
      </>
    );
  }
}
