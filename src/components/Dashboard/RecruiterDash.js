import React, { Fragment, useState, useEffect } from "react";
import Pin from "../../images/pin.png";
import Pagination from "../General/Pagination";
import "./dashboard.css";

function RecruiterDash() {
  const [active, setActive] = useState(1);
  const [renderArr, setRenderArr] = useState([
    {
      id: 1,
      head: "UI/UX Designer",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
      loc: "Bengaluru",
    },
    {
      id: 2,
      head: "UI/UX Designer",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
      loc: "Bengaluru",
    },
    {
      id: 3,
      head: "UI/UX Designer",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
      loc: "Bengaluru",
    },
    {
      id: 4,
      head: "UI/UX Designer",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
      loc: "Bengaluru",
    },
    {
      id: 5,
      head: "UI/UX Designer",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
      loc: "Bengaluru",
    },
    {
      id: 6,
      head: "UI/UX Designer",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
      loc: "Bengaluru",
    },
    {
      id: 7,
      head: "UI/UX Designer",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
      loc: "Bengaluru",
    },
    {
      id: 8,
      head: "UI/UX Designer",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
      loc: "Chennai",
    },
  ]);
  const arr = [
    {
      id: 1,
      head: "UI/UX Designer",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
      loc: "Bengaluru",
    },
    {
      id: 2,
      head: "UI/UX Architech",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
      loc: "Bengaluru",
    },
    {
      id: 3,
      head: "UI/UX Manager",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
      loc: "Bengaluru",
    },
    {
      id: 4,
      head: "Product Manager",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
      loc: "Chennai",
    },
    {
      id: 5,
      head: "Intern",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
      loc: "Bengaluru",
    },
    {
      id: 6,
      head: "UI/UX Designer",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
      loc: "Gurgaon",
    },
    {
      id: 7,
      head: "ML Engineer",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
      loc: "Bengaluru",
    },
    {
      id: 8,
      head: "Automation- Selenium",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
      loc: "Chennai",
    },
    {
      id: 9,
      head: "Automation- Selenium",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
      loc: "Bengaluru",
    },
    {
      id: 10,
      head: "UI/UX Designer",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
      loc: "Bengaluru",
    },
    {
      id: 11,
      head: "UI/UX Designer",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
      loc: "Bengaluru",
    },
    {
      id: 12,
      head: "Automation- Selenium",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
      loc: "Bengaluru",
    },
    {
      id: 13,
      head: "UI/UX Designer",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
      loc: "Bengaluru",
    },
    {
      id: 14,
      head: "UI/UX Designer",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
      loc: "Gurugaon",
    },
    {
      id: 15,
      head: "Automation- Selenium",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
      loc: "Bengaluru",
    },
    {
      id: 16,
      head: "UI/UX Designer",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
      loc: "Bengaluru",
    },
    {
      id: 17,
      head: "UI/UX Designer",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
      loc: "Bengaluru",
    },
    {
      id: 18,
      head: "UI/UX Designer",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
      loc: "Bengaluru",
    },
    {
      id: 19,
      head: "UI/UX Designer",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
      loc: "Bengaluru",
    },
    {
      id: 20,
      head: "UI/UX Designer",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
      loc: "Ben",
    },
    {
      id: 21,
      head: "UI/UX Designer",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
      loc: "Gurgaon",
    },
    {
      id: 22,
      head: "ML Engineer",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
      loc: "Bengaluru",
    },
    {
      id: 23,
      head: "Automation- Selenium",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
      loc: "Chennai",
    },
  ];
  useEffect(() => {
    let JobsArr = [
      {
        id: 1,
        head: "UI/UX Designer",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
        loc: "Bengaluru",
      },
      {
        id: 2,
        head: "UI/UX Architech",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
        loc: "Bengaluru",
      },
      {
        id: 3,
        head: "UI/UX Manager",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
        loc: "Bengaluru",
      },
      {
        id: 4,
        head: "Product Manager",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
        loc: "Chennai",
      },
      {
        id: 5,
        head: "Intern",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
        loc: "Bengaluru",
      },
      {
        id: 6,
        head: "UI/UX Designer",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
        loc: "Gurgaon",
      },
      {
        id: 7,
        head: "ML Engineer",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
        loc: "Bengaluru",
      },
      {
        id: 8,
        head: "Automation- Selenium",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
        loc: "Chennai",
      },
      {
        id: 9,
        head: "Automation- Selenium",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
        loc: "Bengaluru",
      },
      {
        id: 10,
        head: "UI/UX Designer",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
        loc: "Bengaluru",
      },
      {
        id: 11,
        head: "UI/UX Designer",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
        loc: "Bengaluru",
      },
      {
        id: 12,
        head: "Automation- Selenium",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
        loc: "Bengaluru",
      },
      {
        id: 13,
        head: "UI/UX Designer",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
        loc: "Bengaluru",
      },
      {
        id: 14,
        head: "UI/UX Designer",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
        loc: "Gurugaon",
      },
      {
        id: 15,
        head: "Automation- Selenium",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
        loc: "Bengaluru",
      },
      {
        id: 16,
        head: "UI/UX Designer",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
        loc: "Bengaluru",
      },
      {
        id: 17,
        head: "UI/UX Designer",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
        loc: "Bengaluru",
      },
      {
        id: 18,
        head: "UI/UX Designer",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
        loc: "Bengaluru",
      },
      {
        id: 19,
        head: "UI/UX Designer",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
        loc: "Bengaluru",
      },
      {
        id: 20,
        head: "UI/UX Designer",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
        loc: "Ben",
      },
      {
        id: 21,
        head: "UI/UX Designer",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
        loc: "Gurgaon",
      },
      {
        id: 22,
        head: "ML Engineer",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
        loc: "Bengaluru",
      },
      {
        id: 23,
        head: "Automation- Selenium",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
        loc: "Chennai",
      },
    ];
    let temp = [];
    for (let i = 8 * (active - 1); i <= 8 * (active - 1) + 7; i++) {
      temp.push(JobsArr[i]);
    }
    setRenderArr(temp);
  }, [active]);
  function increment() {
    setActive(active + 1);
  }

  function decrement() {
    setActive(active - 1);
  }
  return (
    <Fragment>
      <div className="jobs">
        {renderArr?.map((ele, idx) => {
          if (ele) {
            return (
              <div className="job" key={idx}>
                <h4>{ele?.head}</h4>
                <p>{ele?.desc}</p>
                <div className="card-footer">
                  <div>
                    <img src={Pin} alt="Pin" style={{ marginRight: "5px" }} />
                    {ele?.loc}
                  </div>
                  <div>
                    <button className="application-btn">
                      View Applications
                    </button>
                  </div>
                </div>
              </div>
            );
          } else {
            return "";
          }
        })}
      </div>
      <Pagination
        total={arr.length || 0}
        inc={increment}
        dec={decrement}
        active={active}
      />
    </Fragment>
  );
}

export default RecruiterDash;
