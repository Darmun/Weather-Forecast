import * as React from "react";
import "./App.css";
import FormControls from "./Components/FormControls";
import Card from "./Components/Card";
import * as moment from "moment";

interface IState {
  weeklyForecast: Array<object>;
  fetched: boolean;
  town: string;
}

class App extends React.Component<{}, IState> {
  state = {
    weeklyForecast: [],
    fetched: false,
    town: ""
  };

  handleSubmit = (jsonResponse: Array<object>) => {
    this.setState({
      weeklyForecast: jsonResponse,
      fetched: true
    });
  };

  public render() {
    const { weeklyForecast, fetched } = this.state;

    return (
      <div className="App">
        <div className="panel-container">
          <div className="searchPanel">
            <div className="initial-section">
              <h1>City Forecast</h1>
              <FormControls onSubmit={this.handleSubmit} />
            </div>
          </div>
        </div>
        <div className="result-container">
          {fetched &&
            weeklyForecast.map((dailydata: any, index: number) => (
              <Card
                forecast={dailydata}
                key={dailydata.id}
                day={getDay(index)}
              />
            ))}
        </div>
        <footer>
          <a href="https://www.freepik.com/free-photos-vectors/snow">
            Snow vector created by freepik - www.freepik.com
          </a>
        </footer>
      </div>
    );
  }
}

function getDay(dayIndex: number) {
  const currentDay = moment().day() + dayIndex;
  const dayName = moment().day(currentDay).format('dddd');
  return dayName;
}

export default App;
