import ActivityCard from "@components/Cards/ActivityCard";
import SHome from "./style";

function Home() {
  return (
    <SHome>
      <p>Transactions</p>
      <ActivityCard name="loyer" date="05 / 06 / 2022" amount={400} />
    </SHome>
  );
}

export default Home;
