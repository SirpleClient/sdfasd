import WidgetContainer from "../WidgetContainer";
import ChangeLogDisplay from "../ChangeLogDisplay";
import SvgIcon1 from "./icons/SvgIcon1";
import SvgIcon2 from "./icons/SvgIcon2";
import "./style.css";

function DynamicContentLayout({ dynamicFeatureTextValues }) {
  return (
    <div className="mystic-panel">
      <div className="dark-panel-widget">
        <div className="button-container">
          {/* Button Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
          <button className="gradient-button">SIRPLECLIENT</button>
        </div>
        <div className="flex-column-container1">
          {/* Input Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
          <div className="header-container">
            <input placeholder="Search" type="text" className="input-with-icon input-style-f62::placeholder" />
            <SvgIcon1 className="svg-container" />
          </div>
        </div>
      </div>
      <div className="client-details-section">
        <div className="flex-column-container">
          <WidgetContainer />
          <div className="dark-box-with-content">
            <div className="horizontal-flex-container">
              <p className="unique-text-styler">cyldim</p>
              <SvgIcon2 className="svg-container1" />
            </div>
            <p className="gradient-text-fill">release</p>
          </div>
        </div>
        <div className="changelog-container">
          <ChangeLogDisplay dynamicFeatureTextValues={dynamicFeatureTextValues} />
        </div>
      </div>
    </div>
  );
}

export default DynamicContentLayout;
