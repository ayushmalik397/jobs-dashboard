import axios from "axios";
import React, { Fragment, useState, useEffect } from "react";
import Pin from "../../images/pin.png";
import Pagination from "../General/Pagination";
import "./dashboard.css";
import Curriculum from "../../images/curriculum.png";

function RecruiterDash() {
  const [active, setActive] = useState(1);
  const [renderArr, setRenderArr] = useState([]);
  const [totalJobs, setTotalJobs] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const [candArr, setCandArr] = useState([]);
  function checkEllipses(str) {
    if (str.length > 30) {
      return str.slice(0, 30) + "...";
    } else {
      return str;
    }
  }
  function checkLocEllipses(str) {
    if (str.length > 20) {
      return str.slice(0, 20) + "...";
    } else {
      return str;
    }
  }
  useEffect(() => {
    async function fetchAndSet() {
      let JobsArr = [];
      let count = 0;
      await axios
        .get(`https://jobs-api.squareboat.info/api/v1/jobs?page=${active}`)
        .then((res) => {
          JobsArr = res.data.data;
          count = res.data.metadata.count;
        });
      setTotalJobs(count);
      setRenderArr(JobsArr);
    }
    fetchAndSet();
  }, [active]);
  function increment() {
    setActive(active + 1);
  }
  function decrement() {
    setActive(active - 1);
  }

  async function viewApplication(id) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", localStorage.getItem("token"));

    let res = await fetch(
      "https://jobs-api.squareboat.info/api/v1/recruiters/jobs/449b6a36-3da2-4b44-806b-060d9fceed79/candidates",
      {
        method: "GET",
        headers: myHeaders,
      }
    );
    let { data } = await res.json();
    setCandArr(data);
    setIsModal(true);
  }
  return (
    <Fragment>
      {isModal && (
        <div id="myModal" className="modal">
          <div className="modal-content">
            <span>Applicants for this job</span>
            <span className="close" onClick={() => setIsModal(false)}>
              &times;
            </span>
            <hr />
            {candArr.length !== 0 ? (
              <>
                <p>Total {candArr.length} Applications</p>
                <div className="applicants">
                  {candArr.map((ele) => {
                    if (ele) {
                      return (
                        <div key={ele.id} className="applicant-card">
                          <div className="title-head">
                            <div className="card-initial">
                              {ele.name ? ele.name[0] : ""}
                            </div>
                            <div>
                              <div>{ele.name}</div>
                              <div>{ele.email}</div>
                            </div>
                          </div>
                          <div className="skills">
                            <div style={{ fontWeight: "600" }}>Skills</div>
                            <div>{ele.skills}</div>
                          </div>
                        </div>
                      );
                    } else {
                      return "";
                    }
                  })}
                </div>
              </>
            ) : (
              <>
                <p>0 Applications</p>
                <div className="zero-applications">
                  <div style={{ textAlign: "center" }}>
                    <div>
                      <img src={Curriculum} alt="icon" height={64} width={64} />
                    </div>
                    <p>No Applications Available</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
      <div className="jobs">
        {renderArr?.map((ele, idx) => {
          if (ele) {
            return (
              <div className="job" key={idx}>
                <h4>{checkEllipses(ele?.title)}</h4>
                <p>{checkEllipses(ele?.description)}</p>
                <div className="card-footer">
                  <div>
                    <img src={Pin} alt="Pin" style={{ marginRight: "5px" }} />
                    {checkLocEllipses(ele?.location)}
                  </div>
                  <div>
                    <button
                      className="application-btn"
                      onClick={() => viewApplication(ele.id)}
                    >
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
        total={totalJobs || 0}
        inc={increment}
        dec={decrement}
        active={active}
      />
    </Fragment>
  );
}

export default RecruiterDash;
