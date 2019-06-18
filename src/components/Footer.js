import React, {Component} from 'react';

class Footer extends Component {
  getDate = () => {
    let currentDate = new Date().getFullYear();
    return currentDate;
  }

  render() {
    return (
      <div className="footer">
        <p>&copy; {this.getDate()} <a href="http://computernoises.com" target="_blank" rel="noopener noreferrer">bv</a></p>
        <p>&nbsp; &#124; &nbsp;</p>
        <p>API credit: <a href="https://api.openbrewerydb.org/" target="_blank" rel="noopener noreferrer">https://api.openbrewerydb.org/</a></p>
      </div>
    );
  }
}

export default Footer;
