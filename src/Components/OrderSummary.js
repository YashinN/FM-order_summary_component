import "./OrderSummary.css";
import HeroIllustration from "../Svg_Components/HeroIllustration";

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
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
