export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map((option, indx) => (
        <button type="button" key={indx} onClick={onLeaveFeedback(option)}>
          {option}
        </button>
      ))}
    </>
  );
};
