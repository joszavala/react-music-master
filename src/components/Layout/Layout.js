import React, {Component} from 'react';
import Aux from '../../hoc/Aux/Aux';
import Navigator from '../Navigation/Navigator/Navigator';
import Footer from '../Footer/Footer';

class Layout extends Component {
    render(){
        return(
            <Aux>
                <Navigator />
                <main className="container">
                    {this.props.children}
                </main>
                <Footer />
            </Aux>
        );
    }    
}

export default Layout;