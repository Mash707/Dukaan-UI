import { Overview } from "./components/Overview";
import { RevenueCard } from "./components/RevenueCard";
import { SideBar } from "./components/SideBar";
import { TopNavBar } from "./components/TopNavBar";
import { Transactions } from "./components/Transactions";

function App() {
  return (
    <div className="bg-custom-white flex">
      <SideBar />
      <div className="w-full pl-7">
        <TopNavBar />
        <Overview />
        <div className="grid grid-cols-3 gap-x-5 px-2 ">
          <RevenueCard
            title={"Next payout"}
            amount={"2,312.23"}
            orderCount={"23"}
            isPayout={true}
          />
          <RevenueCard
            title={"Amount Pending"}
            amount={"92,312.20"}
            orderCount={"13"}
          />
          <RevenueCard title={"Amount Processed"} amount={"23,92,312.19"} />
        </div>
        <Transactions />
      </div>
    </div>
  );
}

export default App;
