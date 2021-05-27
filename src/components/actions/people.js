import axios from "axios";
import { setHistory } from "../../store/historyReducer";
import { setIsFetching, setPeople } from "../../store/peopleReduser";
import moment from "moment";

const HOST = process.env.REACT_APP_API;

export const getPeople = (search, page) => {
  return async (dispatch) => {
    try {
      dispatch(setIsFetching(true));
      const response = await axios.get(`${HOST}/people/`, {
        params: {
          search,
          page,
        }
      });
      dispatch(setPeople(response.data));
    } catch (err) {
      console.error(err);
    }
  }
}

export const getCurrentPeople = (id, setMan) => {
  return async (dispatch) => {
    try {
      dispatch(setIsFetching(true));
      const response = await axios.get(`${HOST}/people/${id}/`);
      setMan(response.data);
      dispatch(setHistory({
        dateVisit: moment().format('YYYY-MM-DD HH:mm'),
        name: response.data.name,
      }));
      dispatch(setIsFetching(false));
    } catch (err) {
      console.error(err);
    }
  }
}