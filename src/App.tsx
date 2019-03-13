import * as React from 'react';
import './App.css';
import PanelForm from './Components/PanelForm';
import Card from './Components/Card';

class App extends React.Component<{},{}> {
state = {
weekForecast:""
}

handleSubmit = (jsonResponse: any) =>{
this.setState({
  weekForecast: jsonResponse
})
}
  public render() {
    return (
      <div className="App">
      <div className="panel-container">
        <div className="searchPanel">
          <PanelForm 
          onSubmit={this.handleSubmit}/>
        </div>
        </div>
        <div className="result-container">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
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
