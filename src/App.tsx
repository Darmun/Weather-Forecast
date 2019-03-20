import * as React from "react";
import "./App.css";
import FormControls from "./Components/FormControls";
import Card from "./Components/Card";
import * as moment from "moment";
import ForecastTable from "./Components/ForecastTable";
import Row from "./Components/Row";
// import DayDetails from "./Components/DayDetails"

interface IState {
  weeklyForecast: Array<object>;
  hourlyForecast: Array<object>;
  displayWeeklyForecast: boolean;
  displayTable: boolean;
  dayDetails: Array<object>;
}

class App extends React.Component<{}, IState> {
  state = {
    weeklyForecast: [],
    hourlyForecast: [],
    displayWeeklyForecast: false,
    displayTable: false,
    dayDetails: []
  };

  handleSubmitWeekly = (jsonResponse: Array<object>) => {
    this.setState({
      weeklyForecast: jsonResponse,
      displayWeeklyForecast: true,
      displayTable: false,
    });
  };

  handleSubmitHourly = (jsonResponse: Array<object>) => {
    this.setState({
      hourlyForecast: jsonResponse
    });
  };

  handleHideTable = () => {
    this.setState({
      displayTable: false
    });
  };

  handleGetDayDetails = (day: any) => {
    const { hourlyForecast } = this.state;
    const arrayLength: number = hourlyForecast.length;
    const matchingForecasts: Array<any> = [];
    
    for (let i = 0; i < arrayLength; i++) {
      let dataStamp: any = this.getTimeStamp(hourlyForecast[i]);
      dataStamp = dataStamp.slice(0, 10);
      let weekDay: string = moment(dataStamp).format("dddd");
      if (day === weekDay) {
        console.log(day);
        matchingForecasts.push(hourlyForecast[i]);
      }
    }
    this.setState({
      dayDetails: matchingForecasts,
      displayTable: true
    });
  };

  getTimeStamp = (currentForecast: { dt_txt: string }): string => {
    return currentForecast.dt_txt;
  };

  getDayName = (dayIndex: number): string => {
    const currentDay = moment().day() + dayIndex;
    const dayName = moment()
      .day(currentDay)
      .format("dddd");
    return dayName;
  };

  public render() {
    const { weeklyForecast, displayWeeklyForecast, displayTable } = this.state;

    return (
      <div className="App">
        <div className="panel-container">
          <div className="searchPanel">
            <h1>City Forecast</h1>
            <FormControls
              onSubmitWeekly={this.handleSubmitWeekly}
              onSubmitHourly={this.handleSubmitHourly}
            />
          </div>
        </div>
        <div className="result-container">
          {displayWeeklyForecast &&
            weeklyForecast.map((dailydata: any, index: number) => (
              <Card
                onDisplayDetails={this.handleGetDayDetails}
                forecast={dailydata}
                key={dailydata.id}
                day={this.getDayName(index)}
              />
            ))}
          {displayTable && (
            <div style={{ width: "100%" }}>
              <ForecastTable>
                {this.state.dayDetails.map((hourlyData: any) => (
                  <Row 
                  key={hourlyData.dt} 
                  hourlyData={hourlyData} 
                  />
                ))}
              </ForecastTable>
            </div>
          )}
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

export default App;
