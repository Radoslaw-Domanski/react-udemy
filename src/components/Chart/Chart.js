import ChartBar from "./ChartBar";
import "./Chart.css";

export const Chart = (props) => {
  const amountArray = props.points.map((point) => point.value);
  const totalMax = Math.max(...amountArray);

  return (
    <div className="chart">
      {props.points.map((point) => (
        <ChartBar
          value={point.value}
          maxValue={totalMax}
          label={point.label}
          key={point.label}
        />
      ))}
    </div>
  );
};

export default Chart;
