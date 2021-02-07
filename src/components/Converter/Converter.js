import * as React from "react";
import SelectDevise from "./SelectDevise";
import InputNumber from "./InputNumber";
import Spinner from "../Spinner/index";
import axios from "axios";

class Converter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      from_devise: "EUR",
      to_devise: "EUR",
      result: 0,
      number: 0,
      fetching: false
    };
  }

  fromCallback = (data) => {
    this.setState({ from_devise: data }, () => this.convert());
  };

  toCallback = (data) => {
    this.setState({ to_devise: data }, () => this.convert());
  };

  numberCallback = (data) => {
    this.setState({ number: data }, () => this.convert());
  };

  convert = () => {
    if (this.state.from_devise === this.state.to_devise)
      this.setState({ result: 0 });
    else {
      this.setState({ fetching: true }, () => {
        axios
          .get(`https://api.exchangeratesapi.io/latest`, {
            params: {
              base: this.state.from_devise,
              symbols: this.state.to_devise
            }
          })
          .then((data) => {
            const rates = data.data.rates;
            this.setState({
              result: this.state.number * rates[this.state.to_devise],
              fetching: false
            });
          });
      });
    }
  };

  render() {
    let result;
    if (this.state.fetching) result = <Spinner />;
    else result = this.state.result;

    return (
      <>
        <div className="container">
          <div className="row">
            <h3>Convertisseur</h3>
            <div className="col s8">
              <div className="row">
                <SelectDevise parentCallback={this.fromCallback} />
                <SelectDevise parentCallback={this.toCallback} />
              </div>
              <InputNumber parentCallback={this.numberCallback} />
            </div>

            <div className="input-field col s12">
              <h5>Résultat : {result}</h5>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Converter;
