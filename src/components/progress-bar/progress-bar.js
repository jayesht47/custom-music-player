import { useLayoutEffect, useRef, useState } from "react";

const ProgressBar = (props) => {
  const [prog, setProg] = useState(1);
  const ref = useRef(null);

  useLayoutEffect(() => {
    console.log(ref);
  }, []);

  let classes = `bg-orange-600 h-1 w-0 rounded-lg`;

  const seekHandler = (event) => {
    const parentOffsetWidth = event.target.parentElement.offsetWidth;
    const widthPx =
      ((event.clientX - event.target.offsetLeft) / parentOffsetWidth) *
        parentOffsetWidth +
      "px";

    if (event.target.classList.contains(`seek-bg`))
      event.target.children[0].style.width = widthPx;
    else event.target.style.width = widthPx;
  };

  return (
    <div
      onClick={seekHandler}
      className="seek-bg bg-gray-400 h-1 w-full hover:cursor-pointer rounded-lg"
    >
      <div className={classes}></div>
    </div>
  );
};

export default ProgressBar;
