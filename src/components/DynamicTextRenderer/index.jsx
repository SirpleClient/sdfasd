import "./style.css";

function DynamicTextRenderer({ dynamicFeatureText }) {
  return <p className="dynamic-feature-text-style vertical-margin-text">{dynamicFeatureText}</p>;
}

export default DynamicTextRenderer;
