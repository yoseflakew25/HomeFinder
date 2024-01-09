import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import image1 from "../../assets/hero/1.jpg";
import image2 from "../../assets/hero/2.jpg";
import image3 from "../../assets/hero/3.jpg";
import image4 from "../../assets/hero/4.jpg";
import image5 from "../../assets/hero/5.jpg";
import image6 from "../../assets/hero/6.jpg";
import image7 from "../../assets/hero/7.jpg";
import image8 from "../../assets/hero/8.jpg";
import image9 from "../../assets/hero/9.jpg";
import image10 from "../../assets/hero/10.jpg";
import image11 from "../../assets/hero/11.jpg";
import image12 from "../../assets/hero/12.jpg";
import image13 from "../../assets/hero/13.jpg";
import image14 from "../../assets/hero/14.jpg";
import image15 from "../../assets/hero/15.jpg";
import image16 from "../../assets/hero/16.jpg";

const ShuffleHero = () => {
  return (
    <section className="w-full px-8 py-16 grid grid-cols-1 md:grid-cols-2 items-center gap-16 max-w-7xl mx-auto">
     <div>
        <h2 className="mb-4 text-3xl font-bold text-secondary sm:text-4xl md:text-[42px]">
        የሚሸጥ እና የሚከራይ ቤት ይፈልጋሉ?
              </h2>
          <p className="my-8 text-gray-600">
            Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
            expedita at? Asperiores nemo possimus nesciunt dicta veniam
            aspernatur quam mollitia.
          </p>

          <Link to='/search' className="self-center w-auto px-8 mr-4 border-0 text-white text-lg btn hover:bg-secondary bg-primary hover:text-white">
            Get started
          </Link>
          <Link to='/about' className="self-center w-auto px-8 font-semibold tmr-16 text-[#9333EA] hover:text-secondary">
           About
          </Link>
        </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: image1
  },
  {
    id: 2,
    src: image2 },
  {
    id: 3,
    src: image3  },
  {
    id: 4,
    src: image4  },
  {
    id: 5,
    src: image5  },
  {
    id: 6,
    src: image6  },
  {
    id: 7,
    src: image7  },
  {
    id: 8,
    src: image8  },
  {
    id: 9,
    src: image9  },
  {
    id: 10,
    src: image10  },
  {
    id: 11,
    src: image11  },
  {
    id: 12,
    src: image12  },
  {
    id: 13,
    src: image13  },
  {
    id: 14,
    src: image14  },
  {
    id: 15,
    src: image15  },
  {
    id: 16,
    src: image16  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-2">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;