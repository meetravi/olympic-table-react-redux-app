import React from 'react';
import PropTypes from 'prop-types';
import './row.css';

class Row extends React.Component {
  deleteRow = (e) => {
    const country = e.currentTarget.parentElement.querySelector('.country-name')
      .textContent;
    this.props.deleteRow(country);
  };
  render() {
    const { countries } = this.props;
    return countries.map((country, index) => {
      const imageUrl = `https://www.countryflags.io/${country.countryCode}/flat/24.png`;
      return (
        <div className="row" key={index}>
          <div>
            <img src={imageUrl} alt={country.countryCode} />
            <span className="country-name">{country.countryName}</span>
            <span className="country-code">({country.countryCode})</span>
          </div>
          <div className="gold">{country.gold}</div>
          <div className="silver">{country.silver}</div>
          <div className="bronze">{country.bronze}</div>
          <div className="total">{country.total}</div>
          <div className="delete" onClick={(e) => this.deleteRow(e)}>
            X
          </div>
        </div>
      );
    });
  }
}

Row.propTypes = {
  countries: PropTypes.array.isRequired,
  deleteRow: PropTypes.func.isRequired,
};

export default Row;
