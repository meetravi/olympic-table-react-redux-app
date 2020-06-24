import React from 'react';
import './header.css';
import PropTypes from "prop-types";

class Header extends React.Component{
  sortBy = (key) => {
    this.props.sortBy(key);
  }
  render() {
    return (
      <div className="header">
        <div className="countries" onClick={() => this.sortBy('countries')} >Countries</div>
        <div className="gold" onClick={() => this.sortBy('gold')}>Gold</div>
        <div className="silver" onClick={() => this.sortBy('silver')}>Silver</div>
        <div className="bronze" onClick={() => this.sortBy('bronze')}>Bronze</div>
        <div className="total" onClick={() => this.sortBy('total')}>Total</div>
        <div className="delete">Delete</div>
      </div>
    )
  }
}

Header.propTypes = {
  sortBy: PropTypes.func.isRequired,
};

export default Header;
