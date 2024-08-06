import { useState, useEffect } from "react";
import AnimatedCursor from "react-animated-cursor";

const Cursor = () => {
    const [isMobile, setIsMobile] = useState(false);

    // on resize should render or not animated cursor
    useEffect(() => {
        setIsMobile(window.innerWidth < 768);

        const handleResize = () => {
            setIsMobile(window.innerWidth <  768);
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
      <>
        {isMobile ? null : (
          <AnimatedCursor
            innerSize={8}
            outerSize={28}
            color="233, 233, 233"
            outerAlpha={0.9}
            innerScale={0.8}
            outerScale={3}
            clickables={[
              "a",
              'input[type="text"]',
              'input[type="email"]',
              'input[type="number"]',
              'input[type="submit"]',
              'input[type="image"]',
              "label[for]",
              "select",
              "textarea",
              "button",
              "h1",
              "h2",
              "h3",
              "h4",
              "h5",
              "h6",
              "p",
              "span",
              ".hoverable",
              "img",
            ]}
            innerStyle={{
              mixBlendMode: "difference",
            }}
            outerStyle={{
              mixBlendMode: "difference",
            }}
          />
        )}
      </>
    );
};

export default Cursor;