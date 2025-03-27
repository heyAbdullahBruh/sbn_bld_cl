import React, { useEffect, useState } from "react";

const Banner = () => {
  const slideImags = [
    " https://i.ibb.co.com/Xx6RdFhL/bloodD1.png",
    " https://i.ibb.co.com/hxwhKRkf/bloodD2.png",
    " https://i.ibb.co.com/wZF62DqP/bloodD3.png",
    "  https://i.ibb.co.com/5ddmTzD/bloodD4.png",
    " https://i.ibb.co.com/Rk6Ztmtx/bloodD5.png",
    " https://i.ibb.co.com/5g7qK6db/bloodD6.png",
    " https://i.ibb.co.com/LX8XWfNs/bloodD7.png",
    " https://i.ibb.co.com/spLYK2Cm/bloodD8.png",
    " https://i.ibb.co.com/mr2stzCx/bloodD9.png",
    "https://i.ibb.co.com/yBgXX271/bloodD10.png",
    "https://i.ibb.co.com/V0jZPnZb/bloodD12.png",
    "https://i.ibb.co.com/93tykPrB/bloodD13.png",
    "https://i.ibb.co.com/ynCrbmTb/bloodD15.png",
    "https://i.ibb.co.com/hxb6KNBb/bloodD21.png",
  ];

  const [currIndex, setCurrIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrIndex((prevIndex) => {
        if (prevIndex >= slideImags.length - 1) {
          return 0;
        } else {
          return prevIndex + 1;
        }
      });
      return clearInterval(interval);
    }, 3000);
  }, [slideImags.length]);

  const slideStyle = {
    width: "100%",
    height: "95vh",
    // borderRadius:'1rem',
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slideImags[currIndex]})`,
    // backgroundAttachment: 'fixed',
    backgroundRepeat: "no-repeat",
    transition: "all 1s ease-in-out",
  };

  return (
    <section style={slideStyle}>
      <h1>hello</h1>
    </section>
  );
};

export default Banner;
