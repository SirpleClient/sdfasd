import DynamicTextDisplay from "../DynamicTextDisplay";
import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";

function ChangeLogDisplay({ dynamicFeatureTextValues }) {
  return (
    <div className="dark-card-with-updates">
      <div className="flex-row-centered">
        <p className="change-log-title">Change Log</p>
        <SvgIcon1 className="svg-container2" />
      </div>
      <div className="update-section-styles">
        <p className="brand-link">Update 0.1 beta</p>
        <DynamicTextDisplay dynamicFeatureTextValues={dynamicFeatureTextValues} />
        <p className="feature-update-notification">Enable property</p>
        <p className="main-content-area">Enable property</p>
        <div className="dynamic-feature-section">
          <p className="brand-link">Enable property</p>
          <p className="white-text-on-background">Enable property</p>
        </div>
      </div>
    </div>
  );
}

export default ChangeLogDisplay;
