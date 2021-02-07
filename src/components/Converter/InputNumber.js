import * as React from "react";

class InputNumber extends React.Component {
  constructor(props) {
    super(props);
    this.state = { number: 0 };
  }

  handleChange = (e) => {
    //e.preventDefault();
    this.setState({ number: e.target.value }, () => {
      if (
        this.state.number === undefined ||
        this.state.number === null ||
        this.state.number === ""
      ) {
        e.target.className = "validate";
      } else if (isNaN(this.state.number)) {
        // Erreur si is not a number
        e.target.className = "invalid";
      } else {
        e.target.className = "valid";
        this.props.parentCallback(this.state.number);
      }
    });
  };

  render() {
    return (
      <div className="row">
        <div className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input
                id="number"
                className="validate"
                defaultValue={this.state.number}
                onChange={this.handleChange}
              />
              <span
                className="helper-text"
                data-error="You must enter a valid number"
                data-success="All good"
              >
                Please, enter a value to convert
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InputNumber;
