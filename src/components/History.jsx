import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const History = () => {
  const { items } = useSelector(state => state.history);
  console.log(items);
  return (
    <div className="history">
      { items[0] ?
        items.reverse().map((item, i) =>
          <div className="history-card" key={item.name + i}>
            <span className="history-text">Date visit: {item.dateVisit}</span>
            <span className="history-text">Name: {item.name}</span>
          </div>) :
        <div className="history-message">Your history is empty</div>
      }
    </div>
  )
}

export default History;