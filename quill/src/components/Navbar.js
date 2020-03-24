import React from "react"

class Navbar extends React.Component {
    render(){
        return (
            <nav class="grey darken-4" role="navigation">
            <div class="nav-wrapper container"><a id="logo-container" href="#" class="brand-logo">Quill</a>
              <ul class="right hide-on-med-and-down">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Login</a></li>
                <li><a href="#">Sign Up</a></li>
              </ul>
        
              <ul id="nav-mobile" class="sidenav">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Login</a></li>
                <li><a href="#">Sign Up</a></li>
              </ul>
              <a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
            </div>
          </nav>
        );
    }
}

export default Navbar;