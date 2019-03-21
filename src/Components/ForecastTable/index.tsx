import * as React from "react";
import CloseBtn from "../CloseBtn";

interface Props {
  children: React.ReactNode;
  currentDay: string;
  onClose: Function;
}

class ForecastTable extends React.Component<Props> {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th colSpan={5} className="table-header">
              {this.props.currentDay}
              <CloseBtn onClose={this.props.onClose} />
            </th>
          </tr>
          <tr>
            <th>Time</th>
            <th>Temp [°C]</th>
            <th>Pressure [hPa]</th>
            <th className="wind-info">Wind [m/s]</th>
            <th>Weather</th>
          </tr>
        </thead>
        <tbody>{this.props.children}</tbody>
      </table>
    );
  }
}

export default ForecastTable;
