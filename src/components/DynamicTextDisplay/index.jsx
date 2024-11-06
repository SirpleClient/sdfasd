import DynamicTextRenderer from "../DynamicTextRenderer";
import "./style.css";

function DynamicTextDisplay({ dynamicFeatureTextValues }) {
  return (
    <div className="dynamic-feature-container">
      {dynamicFeatureTextValues.map((data, index) => {
        return <DynamicTextRenderer {...data} key={index} />;
      })}
    </div>
  );
}

export default DynamicTextDisplay;
