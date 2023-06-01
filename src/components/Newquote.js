export default function Newquote(props) {
  const { setColor, onClick } = props;
  return (
    <div className="quote-btn">
      <button
        type="button"
        onClick={onClick}
        style={{ color: "white", backgroundColor: `${setColor}` }}
      >
        New quote
      </button>
    </div>
  );
}
