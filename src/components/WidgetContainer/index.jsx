import MemoryWidget from "../MemoryWidget";
import "./style.css";

function WidgetContainer() {
  return (
    <div className="vertical-flex-container">
      <MemoryWidget />
      <div className="sidebar-info-block">
        <div className="center-content-box">
          <div className="content-wrapper">
            {/* Input Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
            <input placeholder="ЗАПУСТИТЬ" type="text" className="gradient-text-input" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WidgetContainer;
