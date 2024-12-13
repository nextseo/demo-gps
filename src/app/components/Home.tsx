"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
// import Modal from "./Modal";

type data = {
  id: number;
  name: string;
  log: string;
  lat: string;
};

const HomePage = () => {
  const [data, setData] = useState<data[]>([]);
  // const [sendData, setSendData] = useState({
  //   name: "",
  //   log: "",
  //   lat: "",
  // });

  // const [open, setOpen] = useState(false);

  // const handleModal = () => {
  //   setOpen(!open);
  // };

  // const sendDataToMadal = (log: string, lat: string, name: string) => {
  //   setSendData({
  //     name,
  //     log,
  //     lat,
  //   });
  //   handleModal();
  // };

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/location`
      );

      if (res.status === 200) {
        setData(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {/* <Modal open={open} setOpen={setOpen} sendData={sendData} /> */}

      <div className="bg-white px-4 py-4 rounded-md shadow-lg">
        <h2 className="text-xl font-semibold">เครื่องมือติดตาม หมายเลข 01</h2>

        {data.map((item) => (
          <div key={item.id} className="  w-full ">
            <div className="mt-2 ">
              ลองติจูด : {item.log} <br />
              ละติจูด : {item.lat}
              {/* ต้องการโชว์ Google map ตรงนี้ */}
              <div className="map-container " style={{ marginTop: "10px" }}>
                <iframe
                  width="100%"
                  height="500"
                  frameBorder="0"
                  style={{ border: 0 }}
                  src={`https://www.google.com/maps?q=${item.log},${item.lat}&z=15&output=embed`}
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
