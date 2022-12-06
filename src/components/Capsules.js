import React from "react";
import "../App.css";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
const Capsules = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState("");

  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/capsules").then((res) => {
      console.log(res);
      res.json().then((result) => {
        console.log(result);
        setData(result);
      });
    });
  }, []);

  return (
    <>
      <div className="capsules-box">
        <div className="box">
          <div className="search-box text-center mt-5 mb-5">
            <input
              className="mr-2 py-1"
              onChange={(event) => {
                setStatus(event.target.value);
              }}
              type="text"
              placeholder="Search by status"
            />

            <input
              className="ml-2 py-1"
              onChange={(event) => {
                setStatus(event.target.value);
              }}
              type="text"
              placeholder="Search by type"
            />
          </div>
        </div>
        <div className="item">
          <section>
            <div className="item-box">
              <div className="max-width grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                {data
                  .filter((item) => {
                    if (item == "") {
                      return item;
                    } else if (
                      item.status.toLowerCase().includes(status.toLowerCase())
                    ) {
                      return item;
                    }
                  })
                  .map((item) => {
                    return (
                      <div className="card mt-5">
                        <p className="text-xl font-bold  mb-5">
                          {item.capsule_serial}
                        </p>
                        {item.status === "active" ? (
                          <p className="mb-1">
                            Status:{" "}
                            <span className="text-emerald-500 ">Active</span>
                          </p>
                        ) : (
                          <p className="mb-1">

                            Status:{" "}
                            <span className="text-rose-500 ">Retired</span>
                          </p>
                        )}
                        <p className="mb-1">
                          Launch unix:{item.original_launch_unix}
                        </p>
                        <p className="mb-1">Launch: {item.original_launch}</p>
                        <p className="mb-1">Type: {item.type}</p>
                        <p className="mt-5 opacity-75">
                          Details: {item.details}
                        </p>
                      </div>
                    );
                  })}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Capsules;
