import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import MyReviewsRow from "./MyReviewsRow";

const MyReview = () => {
  const { user } = useContext(AuthContext);

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user?.email]);

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
      {reviews?.map((reviews) => (
        <MyReviewsRow
          key={reviews._id}
          reviews={reviews}
          handleDelete={"handleDelete"}
          handleUpdate={"handleUpdate"}
        />
      ))}
    </div>
  );
};

export default MyReview;
