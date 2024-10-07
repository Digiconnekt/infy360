import React, { useEffect } from "react";

const ThankYou = () => {
  useEffect(() => {
    window.location.pathname = "/";
  }, []);

  return (
    <>
      <section>
        <h1 className="text-center my-5 py-5">Thank You...</h1>
      </section>
    </>
  );
};

export default ThankYou;
