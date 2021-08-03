import React from "react";
import { useSelector } from "react-redux";
import styles from '../GlobalLoading/GlobalLoading.scss'

function GlobalLoading(props) {
  const isLoading = useSelector((state) => state.GlobalReducer.isLoading);
  if (isLoading) {
    return <div className='container'><div className='loader'></div></div>;
  }
  return null;
}

export default GlobalLoading;
