"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { manageData } from "@/store/SliceOne";

const Contact = () => {
  const [contactData, setcontactData] = useState({
    name: "",
    country: "",
    number: "",
    email: "",
    enquiry: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setcontactData({ ...contactData, [name]: value });
  };

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(manageData(contactData));
    setcontactData({
      name: "",
      country: "",
      number: "",
      email: "",
      enquiry: "",
    });
    return;
  };

  return (
    <>
      <div className="py-14 bg-blue-800">
        <div className="max-w-7xl m-auto">
          <div className="flex justify-center flex-col items-center pb-12">
            <h3 className="about-sub relative w-fit text-rose-600  uppercase">
              Contact Our Team
            </h3>
            <h2 className="text-[48px] font-semibold capitalize text-white">
              Have Any Questions?
            </h2>
          </div>

          <div className="w-full flex gap-10`">
            <div className="w-[40%] bg-white rounded-md p-10">

            </div>
            <div className="w-[60%]">
              <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <div className="flex gap-6">
                  <div className="w-1/2 flex flex-col gap-[10px]">
                    <label className="text-white font-medium" htmlFor="name">
                      Contact Person
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={contactData.name}
                      onChange={handleChange}
                      className="outline-none border-none outline-1 p-3 rounded-xl"
                      placeholder=""
                      required
                    />
                  </div>
                  <div className="w-1/2 flex flex-col gap-[10px]">
                    <label className="text-white font-medium" htmlFor="country">
                      Country
                    </label>
                    <input
                      type="text"
                      name="country"
                      id="country"
                      value={contactData.country}
                      onChange={handleChange}
                      className="outline-none border-none outline-1 p-3 rounded-xl "
                      placeholder=""
                      required
                    />
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-1/2 flex flex-col gap-[10px]">
                    <label className="text-white font-medium" htmlFor="number">
                      Number
                    </label>
                    <input
                      type="number"
                      name="number"
                      id="number"
                      value={contactData.number}
                      onChange={handleChange}
                      className="outline-none border-none outline-1 p-3 rounded-xl"
                      placeholder=""
                      required
                    />
                  </div>
                  <div className="w-1/2 flex flex-col gap-[10px]">
                    <label className="text-white font-medium" htmlFor="email">
                      Email
                    </label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      value={contactData.email}
                      onChange={handleChange}
                      className="outline-none border-none outline-1 p-3 rounded-xl "
                      placeholder=""
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-[10px]">
                  <label className="text-white font-medium" htmlFor="enquiry">
                    Enquiry Details
                  </label>
                  <textarea
                    className="outline-none border-none outline-1 p-3 rounded-xl "
                    name="enquiry"
                    value={contactData.enquiry}
                    id="enquiry"
                    rows={4}
                    onChange={handleChange}
                  />
                </div>
                <button
                  className="bg-rose-600 text-white py-3 rounded-full font-medium text-lg"
                  type="submit"
                >
                  Send Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
