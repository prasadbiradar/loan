import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import DisplayChild from "./DisplayChild";

class Display extends Component {
  state = {
    APR: 0.05
  };

  componentDidMount() {
    this.calculateAPR();
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.calculateAPR();
    }
  }

  calculateAPR = () => {
    let { amount } = this.props;

    if (500 < amount && amount < 1000) {
      this.setState({ APR: 0.05 });
    }
    if (1000 < amount && amount < 2000) {
      this.setState({ APR: 0.1 });
    }
    if (2000 < amount && amount < 3000) {
      this.setState({ APR: 0.15 });
    }
    if (3000 < amount && amount < 5000) {
      this.setState({ APR: 0.2 });
    }
  };

  calculateMonthlyRepayment = () => {
    let { amount, months } = this.props;
    let decimalFormat = this.state.APR + 1;
    let totalOwed = decimalFormat * amount;
    let monthlyRepayment = totalOwed / (months * 12);

    return <p>${Math.round(monthlyRepayment)}</p>;
  };

  percentageAPR = () => {
    return <p>{this.state.APR * 100}%</p>;
  };

  render() {
    return (
      <div>
        <DisplayChild func={this.percentageAPR()} text="interest rate" />
        <DisplayChild
          func={this.calculateMonthlyRepayment()}
          text=" monthly repayment"
        />
      </div>
    );
  }
}

Display.propTypes = {
  months: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired
};

export default Display;
