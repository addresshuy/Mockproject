import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import 'antd/dist/antd.css';

import { Button } from 'antd';
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
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <h1>Page Not Found</h1>
        <p style={{ fontWeight: 'bold' }}>
          Please check your URL and make sure that the address entered is
          correct!!!
        </p>
        <Link to="/">
          <Button>Back</Button>
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;
