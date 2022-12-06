import React from 'react'
import "../App.css";
import { useState, useEffect } from "react";
const Capsules = () => {
    const [data, setData] = useState([]);
    const [status , setStatus] = useState('')
  
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
  <div className='box'>
        <div className="searching">
          <input className="inputSerach" onChange={event => {setStatus(event.target.value)}} type="text" placeholder="Search by status" />
          <input className="inputSerach" onChange={event => {setStatus(event.target.value)}} type="text" placeholder="Search by Launch" />
          <input className="inputSerach" onChange={event => {setStatus(event.target.value)}} type="text" placeholder="Search by type" />
        </div>
      </div>
      <div className="realData">
        <section>
          <div className="conatiner">
            <div className="max-width grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {data.filter((item)=>{
                if(item == ""){
                  return item
                }
                else if (item.status.toLowerCase().includes(status.toLowerCase())){
                  return item
                }
              })
              .map((item) => {
                return (
                  <div className="card">
                    <p className='text-xl font-bold mb-5'>Name: {item.capsule_serial}</p>
                      {item.status === "active" ? (
                     <p> Status: <span className='text-emerald-500'>Active</span></p>
                    ):(
                      <p> Status: <span className='text-rose-500'>Retired</span></p>
                    )}
                    <p>Launch unix:{item.original_launch_unix}</p>
                    <p>Launch: {item.original_launch}</p>
                    <p>Type: {item.type}</p>
                    <p>Details: {item.details}</p>   
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        </div>
      </div>
 </>
  )
}

export default Capsules