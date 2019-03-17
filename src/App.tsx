import * as React from 'react';
import './App.css';
import FormControls from './Components/FormControls';
import Card from './Components/Card';

interface IState{
  weeklyForecast: Array<object>,
  fetched: boolean
}

class App extends React.Component<{}, IState> {
  state = {
    weeklyForecast: [],
    fetched: false
  }

  handleSubmit = (jsonResponse: Array<object>) => {
    this.setState({
      weeklyForecast: jsonResponse,
      fetched: true
    })
  };

  public render() {
    const {weeklyForecast} = this.state
    return (
      <div className="App">
        <div className="panel-container">
          <div className="searchPanel">
          <h1>City Forecast</h1>
            <FormControls
              onSubmit={this.handleSubmit}/>
          </div>
        </div>
        <div className="result-container">
          { this.state.fetched && weeklyForecast.map((dailydata: any) =>
            <Card forecast={dailydata} key={dailydata.id}/>)
          }
        </div>
        <footer>
          <a href="https://www.freepik.com/free-photos-vectors/snow">
            Snow vector created by freepik - www.freepik.com</a>
        </footer>
      </div>
    );
  }
}

export default App;
