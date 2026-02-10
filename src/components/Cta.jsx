import "../css/cta.css";

export default function Cta(props) {
  const { link = "https://tidycal.com/threatsenseai/" } = props;

  return (
    <div
      className="cta-section"
      style={{ backgroundImage: props.backgroundImage }}
    >
      <div className="cta-content">
        <h1 className="big-text-head-white">{props.title}</h1>
        <p className="para-text-white">{props.description}</p>
        <a href={link} className="black-button">{props.buttonText}</a>
      </div>
    </div>
  );
}
