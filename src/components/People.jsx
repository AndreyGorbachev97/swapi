import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPeople } from "./actions/people";
import { setCurrentPage } from "../store/peopleReduser";
import { NavLink } from "react-router-dom";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { parseIdFromUrl } from "../helpers";

const People = () => {
  const dispatch = useDispatch();
  const { items, isFetching, currentPage, totalCount } = useSelector(state => state.people);
  const [searchValue, setSearchValue] = useState("");

  const pagesCount = Math.ceil(totalCount / 10);
  useEffect(() => {
    dispatch(getPeople(searchValue, currentPage));
  }, [currentPage]);

  const searchHandler = () => {
    dispatch(setCurrentPage(1));
    dispatch(getPeople(searchValue, 1));
  }

  return (
    <div>
      <div className="search">
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          type="text"
          placeholder="Input name"
          className="search-input"
        />
        <button onClick={() => searchHandler()} className="search-btn">Search</button>
      </div>
      {
        isFetching ?
          <div className="fetchig" /> :
          <div>
            <div className="wrapper">
              {
                items.map(item =>
                  <div key={item.name}>
                    <div className="card-people">
                      <div className="card-people-content">
                        <div className="card-people-name">{item.name}</div>
                        <NavLink to={`/detail/${parseIdFromUrl(item.url)}`}>
                          <div className="card-people-btn">detailed</div>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                )
              }
            </div>

            <div className="pagination">
              <ArrowBackIosIcon className="left" onClick={() => dispatch(setCurrentPage(currentPage > 1 ? currentPage - 1 : 1))} />
              <div>{`${currentPage} of ${pagesCount}`}</div>
              <ArrowForwardIosIcon className="right" onClick={() => dispatch(setCurrentPage(currentPage < pagesCount ? currentPage + 1 : pagesCount))} />
            </div>
          </div>
      }
    </div>
  )
}

export default People;