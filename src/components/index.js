import React from "react";

export const EntranceComp = (props) => {
  const { size, top, left, name, onClick, setsize } = props || "";
  const handleSmall = (e) => {
    e.stopPropagation();
    setsize(1);
  };
  const handleMedium = (e) => {
    e.stopPropagation();
    setsize(2);
  };
  const handleLarge = (e) => {
    e.stopPropagation();
    setsize(3);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onClick();
  };
  return (
    <form
      onSubmit={handleSubmit}
      type="button"
      style={{
        position: "absolute",
        top: `${top * 10}rem`,
        left: `${left * 10}rem`,
        height: "auto",
        gap: "1rem",
        width: "250px",
        background: "yellow",
        display: "flex",
        flexDirection: "column",
      }}
      className=""
    >
      {/* <span>x- {left}</span>
      <span>y- {top}</span> */}
      <div style={{ fontSize: "22px", fontWeight: "bolder" }}>{name}</div>
      {/* <div>Vehicle Size : {size}</div> */}
      <div>
        <button onClick={handleSmall}>Small</button>
        <button onClick={handleMedium}>Medium</button>
        <button onClick={handleLarge}>Large</button>
      </div>
      <button type="button" onClick={handleSubmit}>
        SUBMIT
      </button>
    </form>
  );
};
