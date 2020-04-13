import React from "react";

export default ({ id, title, imageUrl, changeBook, bookSelected, quantity }) => (
  <li
    onClick={() => changeBook(id)}
    className={bookSelected === id ? "border-thick card mt-3 single-book" : "card mt-3 single-book"}
    key={title}
    style={{ cursor: "pointer" }}
  >
    <div className="media card-body">
      <img className="book-image" src={imageUrl} alt="book cover" />
     <div className="row">
          <div className="col">
            <p className="card-title font-weight-bold">{title}</p>
          </div>
         
<div className="col"> <div className="invalid">{quantity}</div><small> {quantity>1? "copies" : "copy"} available</small></div>
       
        </div>
     </div>
  </li>
);
