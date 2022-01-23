import React from 'react';

const Footer = () => {
  return (
    <footer className="page-footer footer" style={styles.conteiner}>
      <div className="footer-copyright text-center py-3 copyright" style={styles.text}>© 2021 Copyright:
        <span className="copyright-name ms-2" style={styles.text}>Ireneusz Sobol</span>
      </div>
    </footer>
  )
}

var styles = {

  conteiner: {
    backgroundColor:"black",
    width: "100%",
    display: "block",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderColor: 'white',
    borderWidth: 5,
  },

  text: {
    color: "white"
  },
};

export default Footer;