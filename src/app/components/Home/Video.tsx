"use client";
import React, { useEffect, useState } from "react";
import { VideoPauseIcon } from "../Icon";
import VideoPlayer from "./VideoPlayer";

export default function Video() {
  const [showToast, setShowToast] = useState(false);

  const handleCloseToast = () => {
    setShowToast(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowToast(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      <Toast show={showToast} onClose={handleCloseToast} />
    </div>
  );
}

interface ToastProps {
  show: boolean;
  onClose: () => void;
}
const Toast: React.FC<ToastProps> = ({ show, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div
        className={`fixed sm:top-[80vh] top-[75vh] right-0 sm:right-6 lg:right-[60px] z-50 transition-transform transform duration-1000 ease-linear px-6 ${
          show ? "translate-x-0 opacity-100" : "translate-x-5 opacity-0"
        }`}
      >
        <div className="bg-white border-[5px] border-black h-fit sm:w-[373px] max-w-[373px] rounded-[16px] p-[16px]">
          <div className="flex items-center justify-between relative">
            <div className="flex items-center sm:gap-[20px] gap-4">
              <div className="bg-[#D6CEE9] w-fit rounded-[8.5px] overflow-hidden">
                <img src="assets/img/man.svg" className="min-w-[40px]" alt="" />
              </div>
              <h5 className="text-black text-[13px] sm:text-[15px] font-semibold leading-[122%] max-w-[131px] sm:max-w-[151px] clash-semibold ">
                A personal walkthrough with our CEO Adam <br /> —click to play!
              </h5>
            </div>

            <button
              onClick={toggleModal}
              className="sm:w-[55px] w-[40px] sm:h-[55px] h-[40px]  bg-[#FB5DA5] rounded-full sm:border-[6px] border-[4px] border-[#FDBEDB] flex justify-center items-center pulse"
            >
              <VideoPauseIcon />
            </button>

            <button
              className="absolute text-black text-[13px] font-semibold clash-semibold leading-[127%] sm:-top-1.5 -top-3 sm:right-0 -right-1.5"
              onClick={onClose}
            >
              X
            </button>
          </div>
        </div>
      </div>

      {/* Modal Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-[2px] transition-opacity duration-300 ease-out z-[51]"
          onClick={toggleModal}
        >
          {/* Modal */}
          <div
            className={`py-4 shadow-lg transform transition-transform duration-1000 ease-out max-w-[1166px] w-[90%]  ${
              isOpen ? "scale-100 opacity-100" : "scale-50 opacity-0"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="">
              <VideoPlayer
                poster="assets/img/poster.png"
                src="assets/video/walkthrough.mp4"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
