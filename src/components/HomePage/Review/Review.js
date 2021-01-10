import React, { useEffect, useState } from "react";
import AllReviews from "../../../fakeData/fakeReviews";
import SingleReview from "../SingleReview/SingleReview";
const Review = () => {
  const [reviews, SetReviews] = useState([]);

  useEffect(() => {
       SetReviews(AllReviews);
  }, []);

  return (
    <section className='review' style={{ margin: "6rem 0" }}>
      <div className='container'>
        <h3
          className='text-center'
          style={{
            fontWeight: "700",
            fontSize: "36px",
            marginBottom: "3rem",
            color: "#171B4E",
          }}>
          Client <span style={{ color: "#7AB259" }}>Feedback</span>{" "}
        </h3>

        <div className='row justify-content-around'>
          {reviews.map(review => (
            <SingleReview key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
