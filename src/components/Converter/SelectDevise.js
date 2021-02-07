import * as React from "react";

class SelectDevise extends React.Component {
  select_values = ["EUR", "CHF", "GBP", "USD"];

  constructor(props) {
    super(props);
    this.state = { value: this.select_values[0] };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value }, () => {
      console.log(this.state.value);
      this.props.parentCallback(this.state.value);
    });
  };

  render() {
    return (
      <div className="col s6">
        <select
          defaultValue={this.state.value}
          className="browser-default"
          name="inputDevises"
          id="inputDevises"
          onChange={this.handleChange}
        >
          {this.select_values.map((val) => (
            <option key={val} value={val}>
              {val}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default SelectDevise;
