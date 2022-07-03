import React from "react";

const Penerimaan = () => {
  return (
    <div>
      <div className="container" style={{ marginTop: "100px" }}>
        <div
          className="row"
          style={{
            textAlign: "center",
            padding: "50px",
          }}
        >
          <div className="d-grid gap-2">
            <h1 className="text-center">
              Penerimaan Peserta Didik Baru (PPDB)
            </h1>
          </div>
          <div className="container">
            <button type="button" className="btn btn-outline-primary">
              DAFTAR SEKARANG
            </button>
          </div>
          <div className="container" style={{ marginTop: "50px" }}>
            <img
              src="img/IMG_20200428_170152.jpg"
              className="img-fluid"
              alt="..."
            />
          </div> 
          <button type="button" className="btn btn-outline-primary mt-2">
            DOWNLOAD BROSUR
          </button>
        </div>
      </div>
    </div>
  );
};

export default Penerimaan;
