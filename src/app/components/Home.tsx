"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Modal from "./Modal";

type data = {
  id: number;
  name: string;
  log: string;
  lat: string;
};

const HomePage = () => {
  const [data, setData] = useState<data[]>([]);
  const [sendData, setSendData] = useState({
    name :"",
    log: "",
    lat: "",
  });

  const [open, setOpen] = useState(false);

  const handleModal = () => {
    setOpen(!open);
  };

  const sendDataToMadal = (log: string, lat: string, name : string) => {
    setSendData({
        name,
      log,
      lat
    });
    handleModal()
  };

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
      <Modal open={open} setOpen={setOpen} sendData={sendData} />
      <div className="flex flex-wrap   ">
        {data.map((item, index) => (
          <div key={item.id} className="  w-full lg:w-1/4 p-2 ">
            <div className="bg-white shadow-lg rounded-md px-4 py-2 flex justify-between ">
              <p>{item.name}</p>
              <button
                onClick={() => sendDataToMadal(item.log, item.lat, item.name)}
                className="bg-red-700 px-3 py-1 text-white rounded-md"
              >
                เลือก
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
