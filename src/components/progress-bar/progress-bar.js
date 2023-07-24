import { useEffect, useLayoutEffect, useRef, useState } from "react";

const ProgressBar = (props) => {
  const [prog, setProg] = useState(0);
  const childRef = useRef(null);

  useEffect(() => {
    updateProgressBar(prog);
  }, [prog]);

  let classes = `bg-orange-600 h-1 w-0 rounded-lg`;


  const updateProgressBar = (currentValue) => {
    const parentOffsetWidth = childRef.current.parentElement.offsetWidth;
    const widthPx = (currentValue * parentOffsetWidth) + "px";
    if (childRef && childRef.current) {
      childRef.current.style.width = widthPx;
    }
  }

  const seekHandler = (event) => {
    const parentOffsetWidth = event.target.parentElement.offsetWidth;
    setProg((event.clientX - event.target.offsetLeft) / parentOffsetWidth);
  };


  return (
    <div
      onClick={seekHandler}
      className="seek-bg bg-gray-400 h-1 w-full hover:cursor-pointer rounded-lg"
    >
      <div ref={childRef} className={classes}></div>
    </div>
  );
};

export default ProgressBar;
