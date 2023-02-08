const CustomCursor = ({ innerCursorRef, outerCursorRef }) => {
  return (
    <>
      <div className="inner-cursor" ref={innerCursorRef}></div>
      <div className="outer-cursor" ref={outerCursorRef}></div>
    </>
  );
};

export default CustomCursor;
