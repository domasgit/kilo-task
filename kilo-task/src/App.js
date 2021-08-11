import DiscountTimer from "./components/discount-timer/DiscountTimer";
import TopBanner from "./components/top-banner/TopBanner";
import PlansSold from "./components/plans-sold/PlansSold";
import Checkout from "./components/checkout/Checkout";
import ProgramInclusions from "./components/program-elements/ProgramElements";
import ReviewCard from "./components/user-reviews/ReviewCard";

import "./App.css";


function App() {
  return (
    <div className="background">
      <DiscountTimer validUntil="8/13/2021" discount="50%" />
      <TopBanner />
      <div className="content">
        <PlansSold totalPlans='52147'/>
        <h1>
          <b>Get access to your yoga program now!</b>
        </h1>
        <Checkout /><ProgramInclusions />
        <ReviewCard name='Emily' age='28' city='Delaware, NJ' rating='4' imgsrc=''/>
      </div>
    </div>
  );
}

export default App;
