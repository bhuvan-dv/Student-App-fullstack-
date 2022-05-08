import React, { useEffect, useState } from "react";
import Axios from "../libraries/Axios";
import { useParams } from "react-router-dom";
const DeleteStudent = () => {
  // let [student, setStudent] = useState([]);
  let [Loading, setLoading] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    let removeEmp = async id => {
      await Axios.delete(`/api/students/${id}`);
      setLoading(true);
      window.location.assign("/");
    };
    removeEmp(id);
    setLoading(false);
  }, [id]);
  return <div>DeleteStudent</div>;
};

export default DeleteStudent;
