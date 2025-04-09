import { VictoryPie, VictoryLabel } from "victory";
import { useGlobalState } from "../context/Globalstate";

function ExpenseChart() {
  const { transactions } = useGlobalState();

  const total = transactions.reduce(
    (acc, transaction) => (acc += transaction.amount),
    0
  );

  const totalIncome = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => (acc += transaction.amount), 0);

  const totalExpense = transactions
    .filter((transaction) => transaction.amount < 0)
    .reduce((acc, transaction) => (acc += transaction.amount), 0) * -1;

  const percentageIncome = Math.round((totalExpense / totalIncome) * 100);
  const percentageExpense = 100 - percentageIncome;


  return (
    <VictoryPie
      colorScale={["#2ecc71","#e74c3c" ]}
      data={[
        { x: "Expenses", y: percentageExpense },
        { x: "Income", y: percentageIncome},
      ]}
      animate={{
        duration: 200,
        onLoad: { duration: 500 },
      }}
      labels={({ datum }) => ` ${datum.y}%`} // muestra el valor de la etiqueta
      labelComponent={
        <VictoryLabel
          angle={0} // define el grado de inclinacion de la etiqueta
          style={{ fill: "white" }}
        />
      }
    />
  );
}

export default ExpenseChart;
