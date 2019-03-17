import * as React from "react";

interface IState {
  city: string;
}

export interface Props {
  onSubmit: Function;
}

export default class extends React.Component<Props, IState> {
  state = {
    city: ""
  };

  handleChange = (e: any) => {
    const value: string = e.target.value;
    this.setState({
      city: value
    });
  };

  submitData = (e: any) => {
    e.preventDefault();
    const apiKey: string = "33b985291235fc7df89ea4df9600c81c";
    const url: string = `https://api.openweathermap.org/data/2.5/find?q=${
      this.state.city
    }&units=metric&APPID=${apiKey}`;

    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Request failed!");
      })
      .then(jsonResponse => this.props.onSubmit(jsonResponse.list));
  };

  render() {
    return (
      <form className="panel-form">
        <input
          type="text"
          className="text-input is-rounded"
          placeholder="Choose town.."
          onChange={this.handleChange}
          value={this.state.city}
        />
        <button className="btn submit is-rounded" onClick={this.submitData}>
          Search
        </button>
      </form>
    );
  }
}
