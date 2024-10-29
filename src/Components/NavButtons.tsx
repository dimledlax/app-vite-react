export function NavButtons({
  prevClick,
  nextClick,
}: {
  prevClick: () => void;
  nextClick: () => void;
}) {
  return (
    <div className="navContainer">
      <button className="navButtons" onClick={prevClick}>
        Previous
      </button>
      <button className="navButtons" onClick={nextClick}>
        Next
      </button>
    </div>
  );
}
