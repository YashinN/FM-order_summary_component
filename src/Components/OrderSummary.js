import "./OrderSummary.css";
import HeroIllustration from "../Svg_Components/HeroIllustration";
import OrderPlan from "./OrderPlan";

const OrderSummary = () => {
  return (
    <div className="container-fluid bg-container">
      <div className="container summary-card p-0">
        <HeroIllustration />
        <div className="container summary-details">
          <h1 className="text-center title">Order Summary</h1>
          <p className="text-center text">
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>
          <OrderPlan />
          <button className="payment-btn">Proceed to Payment</button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
