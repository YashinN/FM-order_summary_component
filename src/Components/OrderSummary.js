import "./OrderSummary.css";
import HeroIllustration from "../Svg_Components/HeroIllustration";
import OrderPlan from "./OrderPlan";

const OrderSummary = () => {
  return (
    <div className="container-fluid bg-container">
      <div className="bg-svg container-fluid p-0">
        <img
          src="/images/pattern-background-desktop.svg"
          alt=""
          className="bg-dsk"
        />

        <img
          src="/images/pattern-background-desktop.svg"
          alt=""
          className="bg-mobi"
        />
      </div>
      <div className="container summary-card p-0">
        <img
          src="/images/illustration-hero.svg"
          alt="music"
          className="hero-img"
        />
        <div className="container summary-details ">
          <h1 className="text-center title">Order Summary</h1>
          <p className="text-center text">
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>
          <OrderPlan />

          <div className="btn-wrapper">
            <button className="payment-btn">Proceed to Payment</button>
            <button className="cancel-btn">Cancel Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
