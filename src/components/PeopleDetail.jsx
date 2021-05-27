import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getCurrentPeople } from "./actions/people";
import moment from "moment";

const PeopleDatail = (props) => {
  const dispatch = useDispatch();
  const { isFetching } = useSelector(state => state.people);
  const { id } = useParams();
  const [man, setMan] = useState();

  useEffect(() => {
    dispatch(getCurrentPeople(id, setMan));
  }, []);

  return (
    <div className="detail">
      {
        !isFetching && man ?
          <div className="detail-card">
            <ul className="detail-content">
              <li>Name - {man.name};</li>
              <li>Height - {man.height};</li>
              <li>Mass - {man.mass};</li>
              <li>Hair color - {man.hair_color};</li>
              <li>Skin color - {man.skin_color};</li>
              <li>Eye color - {man.eye_color};</li>
              <li>Birth year - {man.birth_year};</li>
              <li>Gender - {man.gender};</li>
              <li>Created - {moment(man.created).format('YYYY-MM-DD HH:mm')};</li>
              <li>Edited - {moment(man.edited).format('YYYY-MM-DD HH:mm')};</li>
            </ul>
          </div>
          :
          <div className="fetchig" />
      }
    </div>
  )
}

export default PeopleDatail;

