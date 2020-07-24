import React, { useState, useEffect } from "react";

const PageInBuild = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
  }, []);
  return (
    <>
      <div className="subpage-layout">
        <i className="fas fa-exclamation-triangle"></i>
        <h1>Page not found</h1>
        <h2>{seconds} seconds have elapsed since mounting.</h2>
        {/* <h2>{colors} seconds have elapsed since mounting.</h2> */}
      </div>
    </>
  );
};

export default PageInBuild;
