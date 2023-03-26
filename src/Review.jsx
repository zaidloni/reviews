import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  let { name, image, job, text } = people[index];
  function prevPerson() {
    if (index === 0) {
      setIndex(() => 3);
    } else {
      setIndex(index - 1);
    }
  }
  function nextPerson() {
    if (index === people.length - 1) {
      setIndex(() => 0);
    } else {
      setIndex(index + 1);
    }
  }

  function randomPerson() {
    setIndex(() => {
      return Math.floor(Math.random() * 3);
    });
  }
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        suprise me{" "}
      </button>
    </article>
  );
};

export default Review;
