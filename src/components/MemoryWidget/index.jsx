import SocialMediaLinksWidget from "../SocialMediaLinksWidget";
import "./style.css";

function MemoryWidget() {
  return (
    <div className="vertical-flex-container">
      <div className="memory-info-container">
        <p className="memory-description-text-style">Оперативная память</p>
        <img src="/assets/image_ca4a3b0e.png" alt="" className="memory-image-with-button" />
        {/* Button Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
        <button className="memory-button">100</button>
      </div>
      <SocialMediaLinksWidget />
    </div>
  );
}

export default MemoryWidget;
