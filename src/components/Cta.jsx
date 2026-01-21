import "../css/cta.css";
export default function Cta(props) {
  return (
    <div
      className="cta-section"
      style={{ backgroundImage: props.backgroundImage }}
    >
      <div className="cta-content">
        <h1 className="big-text-head-white">{props.title}</h1>
        <p className="para-text-white">{props.description}</p>
        <button className="black-button">{props.buttonText}</button>
      </div>
    </div>
  );
}
