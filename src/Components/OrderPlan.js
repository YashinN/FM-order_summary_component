import IconMusic from "../Svg_Components/IconMusic";
import "./OrderPlan.css";

const OrderPlan = () => {
  return (
    <div className=" container p-4 order-box">
      <div className="container p-0 order-content">
        <div className="plan-container">
          <div className="plan-wrapper">
            <IconMusic />
            <div className="plan-details">
              <span className="plan-type">Annual Plan</span>
              <span className="price">$59.99/year</span>
            </div>
          </div>
        </div>

        <a className="change-tag" href="#">
          change
        </a>
      </div>
    </div>
  );
};

export default OrderPlan;
