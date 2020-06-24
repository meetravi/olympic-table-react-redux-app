import React from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import Row from '../Row/Row';
import './olympicTable.css';
import { sortBy, addRow, deleteRow } from '../../action/creators';

export class OlympicTable extends React.Component {
  addRow = () => {
    const countryName = this.refs.countryName.value;
    const countryCode = this.refs.countryCode.value;
    const gold = this.refs.gold.value && parseInt(this.refs.gold.value, 10);
    const silver =
      this.refs.silver.value && parseInt(this.refs.silver.value, 10);
    const bronze =
      this.refs.bronze.value && parseInt(this.refs.bronze.value, 10);
    const total = this.refs.total.value && parseInt(this.refs.total.value, 10);
    this.props.addRow({
      countryName,
      countryCode,
      gold,
      silver,
      bronze,
      total,
    });
  };

  render() {
    const { countries, sortBy, deleteRow } = this.props;
    return (
      <div>
        <div className="olympic-entries">
          <p>Enter the Olympic medal details to be added into the table</p>
          <label>Country Name</label>
          <input ref="countryName" type="text" />
          <label>
            <a href="https://countryflags.io/#country_codes">Country Code</a>
          </label>
          <input ref="countryCode" type="text" />
          <label>Gold</label>
          <input ref="gold" type="text" />
          <label>Silver</label>
          <input ref="silver" type="text" />
          <label>Bronze</label>
          <input ref="bronze" type="text" />
          <label>Total</label>
          <input ref="total" type="text" />
          <button onClick={() => this.addRow()}>Add</button>
        </div>
        <div className="olympic-table">
          <p>Click on the header to sort descending</p>
          <Header sortBy={sortBy} />
          <Row countries={countries} deleteRow={deleteRow} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { countries: state.app.countries };
};

const mapDispatchToProps = (dispatch) => ({
  addRow: (data) => dispatch(addRow(data)),
  deleteRow: (data) => dispatch(deleteRow(data)),
  sortBy: (key) => dispatch(sortBy(key)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OlympicTable);
