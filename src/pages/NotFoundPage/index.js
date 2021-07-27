import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { GlobalActions } from "../../redux/slices/globalSlice";

function PageNotFound() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GlobalActions.toggleLoading());
    setTimeout(() => {
      dispatch(GlobalActions.toggleLoading());
    }, 2000);
  }, []);

  return (
    <div>
      <h1>Page Not Found</h1>
      <p>
        Please check your URL and make sure that the address entered is correct
      </p>
      <Link to="/login">
        <button>Back</button>
      </Link>
    </div>
  );
}

export default PageNotFound;
