import React from 'react'
import { ReactComponent as Close } from "../assets/close.svg";

const SingleCard = ({modal, setModal}) => {
  return (
    <div className="singlecontainer">
          <div className="singleheader">
            <p>{modal.title ?? modal.original_name}</p>
            <Close
              onClick={() => setModal(null)}
              style={{
                padding: "0.1rem",
                cursor: "pointer",
                border: "1px solid black",
              }}
            />
          </div>

          <div className="singlecardcontainer">
            <img src={`${process.env.REACT_APP_IMG_URL}${modal.poster_path}`} />
            <div className="info">
              <p>
                <span>Released date: </span>
                {modal.release_date ?? "Not Known"}
              </p>
              <p>{modal.overview}</p>
              <p>
                <span>{modal.vote_average.toFixed(1)}</span> / 10 (
                {`${modal.vote_count} total votes`}){" "}
              </p>
            </div>
          </div>
        </div>
  )
}

export default SingleCard