import React from "react";
import Right from "../../images/right.png";
import Left from "../../images/left.png";
import "./general.css";

function Pagination(props) {
  let pgeCount = props.total / 8;
  let pgeArr = Array(Math.ceil(pgeCount));
  pgeArr.fill(8);
  function increment() {
    if (props.active < pgeArr.length) {
      props.inc();
    }
  }

  function decrement() {
    if (props.active > 1) {
      props.dec();
    }
  }
  return (
    <div className="pagination">
      <div>
        <img
          style={{
            border: "1px solid gray",
            padding: "5px",
            cursor: "pointer",
          }}
          alt="arrow"
          onClick={decrement}
          src={Left}
        />
      </div>
      <div>
          <>
            {props.active >2 && <span style={{ margin: "2px 8px" }}>1 . . . {props.active - 1}</span>}
            <span
              style={{
                margin: "5px",
                background: "#43AFFF33",
                padding: "2px 8px",
              }}
            >
              {props.active}
            </span>
            {props.active < pgeArr.length-2 && <span style={{ margin: "2px 8px" }}>{props.active + 1} . . . {pgeArr.length}</span>}
          </>
      </div>
      <div>
        <img
          style={{
            border: "1px solid gray",
            padding: "5px",
            cursor: "pointer",
          }}
          onClick={increment}
          alt="arrow"
          src={Right}
        />
      </div>
    </div>
  );
}

export default Pagination;

// {
//   pgeArr?.map((ele, idx) => {
//     if (idx + 1 === props.active) {
//       return (
//         <span
//           style={{
//             margin: "5px",
//             background: "#43AFFF33",
//             padding: "2px 8px",
//           }}
//         >
//           {idx + 1}
//         </span>
//       );
//     }
//     return (
//       <span key={idx} style={{ margin: "2px 8px" }}>
//         {idx + 1}
//       </span>
//     );
//   });
// }
