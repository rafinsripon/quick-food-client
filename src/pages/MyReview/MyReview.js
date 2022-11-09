import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import MyReviewsRow from "./MyReviewsRow";
import Swal from "sweetalert2";
import useTitle from "../../hooks/UseTitle";

const MyReview = () => {
  const { user, logOut } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  useTitle('my reviews')

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("food-token")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logOut();
        }
        return res.json();
      })
      .then((data) => {
        setReviews(data);
      });
  }, [user?.email, logOut]);

  //revirews
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You Want to Delete?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "success");
        fetch(`http://localhost:5000/reviews/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              const remaining = reviews.filter((rvw) => rvw._id !== id);
              setReviews(remaining);
            }
          });
      }
    });
  };


  return (
    <div className="">
        {
            reviews.length === 0 && 
            <p className="text-4xl font-bold text-uppercase text-rose-700 text-center mt-4 mb-4">No reviews were added</p>
        }
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-12">
        {reviews?.map((reviews) => (
          <MyReviewsRow
            key={reviews._id}
            reviews={reviews}
            handleDelete={handleDelete}
            
          />
        ))}
      </div>
    </div>
  );
};

export default MyReview;
