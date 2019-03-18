import * as React from "react";
import "./App.css";
import FormControls from "./Components/FormControls";
import Card from "./Components/Card";
import * as moment from "moment";

interface IState {
  weeklyForecast: Array<object>;
  hourlyForecast: Array<object>;
  displayWeeklyForecast: boolean;
  town: string;
}

class App extends React.Component<{}, IState> {
  state = {
    weeklyForecast: [],
    hourlyForecast: [],
    displayWeeklyForecast: false,
    town: ""
  };

  handleSubmitWeekly = (jsonResponse: Array<object>) => {
    this.setState({
      weeklyForecast: jsonResponse,
      displayWeeklyForecast: true
    });
  };

  handleSubmitHourly = (jsonResponse: Array<object>) => {
    this.setState({
      hourlyForecast: jsonResponse,
    });
  };

  public render() {
    const { weeklyForecast, displayWeeklyForecast } = this.state;

    return (
      <div className="App">
        <div className="panel-container">
          <div className="searchPanel">
            <div className="initial-section">
              <h1>City Forecast</h1>
              <FormControls
                onSubmitWeekly={this.handleSubmitWeekly}
                onSubmitHourly={this.handleSubmitHourly}
              />
            </div>
          </div>
        </div>
        <div className="result-container">
          {displayWeeklyForecast &&
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
  const dayName = moment()
    .day(currentDay)
    .format("dddd");
  return dayName;
}

// function compareDays() {
//  moment(dt_txt, "YYYY-MM-DD");
// }

export default App;
