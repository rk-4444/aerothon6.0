import Navbar from "./Navbar";
import Dashboard from "../pages/DashboardPage";
import Activity from "../pages/ActivityPage";
import { Provider, useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../redux/tabSlice";
// import { Router, useHistory } from "react-router-dom";

const Home = () => {
  const activeTab = useSelector((state) => state.tab);
  const dispatch = useDispatch();
  // const history = useHistory(); // Get the history object

  const handleTabChange = (changedTab) => {
    dispatch(setActiveTab(changedTab));
    // history.push(`/${changedTab.toLowerCase()}`);
  };

  return (
    <>
      {/* <Router> */}
      <div className="flex">
        <Navbar handleTabChange={handleTabChange} />
        <main className="grow">
          {activeTab === "Dashboard" && <Dashboard />}
          {activeTab === "Activity" && <Activity />}
        </main>
      </div>
      {/* </Router> */}
      //{" "}
    </>
  );
};

export default Home;
