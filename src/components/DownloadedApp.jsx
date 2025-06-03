import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

const DownloadedApp = () => {
  return (
    <>
      <section className="full-app-section container">
        <div className="container download-main-div ">
          <h2>It’s easier in the apps</h2>
          <div className="main-barcode-div flex">
            <a href="#">
              <div className="left-barcode flex">
                <div className="barcode ">
                  <img src="Final-Download-Uber-App.webp" alt="" />
                </div>
                <div className="app-content">
                  <h3>Download the Uber app</h3>
                  <p>Scan to download</p>
                </div>
                <div>
                  <FaArrowRight />
                </div>
              </div>
            </a>
            <a href="#">
              <div className="left-barcode flex">
                <div className="barcode ">
                  <img src="Driver_QR.webp" alt="" />
                </div>
                <div className="app-content">
                  <h3>Download the Driver app</h3>
                  <p>Scan to download</p>
                </div>
                <div>
                  <FaArrowRight />
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default DownloadedApp
