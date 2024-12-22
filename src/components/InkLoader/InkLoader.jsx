import React, { useEffect, useState } from "react";
import "./inkLoader.css";

const InkLoader = ({ isLoading }) => {
  const [visible, setVisible] = useState(isLoading);

  useEffect(() => {
    if (!isLoading) {
      // Hide the loader after the animation ends
      const timeout = setTimeout(() => setVisible(false), 2000); // Match this duration to the animation duration
      return () => clearTimeout(timeout);
    }
  }, [isLoading]);

  if (!visible) return null;

  return (
    <div className="ink-loader">
      <div className="banner"></div>
    </div>
  );
};

export default InkLoader;
