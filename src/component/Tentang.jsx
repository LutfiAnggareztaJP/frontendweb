import React from 'react'
import 'aos';

const Kami = () => {
  return (
    <div>
      <div
        className="position-relative"
        style={{
          marginTop: "10px",
          textAlign: "center",
          padding: "70px",
          backgroundColor: "green",
        }}
      >
        <div className="my-5 text-black">
          <h1 className="display-5 fw-normal">Tentang Kami</h1>
          <p data-aos="fade-up"data-aos-delay="200">
            
          </p>
        </div>
        <div className="container" style={{ marginButtom: "200px" }}>
          <h3 className="text-center">Keluarga Pendiri</h3>
          <div className="row mt-30">
            <div className="col-md-4 col-sm-6">
              <div className="box4">
                <img
                  src="img/pendiri2.jpg"
                  alt=""
                  sizes="pic-1 rounded-circle"
                  srcset=""
                />
                <div className="box-content">
                  <h3 className="title">Potret Keluarga</h3>
                  <span className="post">Keluarga Pendiri</span>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="box4">
                <img
                  src="img/Pendiri1.jpg"
                  alt=""
                  sizes="pic-1 rounded-circle"
                  srcset=""
                />
                <div className="box-content ">
                  <h3 className="title-black">KH.Hasan Dailami Ahmad</h3>
                  <span className="post">Pengasuh PP Nurul Huda sekaligus pendiri pp Nurul Huda</span>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="box4">
                <img
                  src="img/pendiri3.jpg"
                  alt=""
                  sizes="pic-1 rounded-circle"
                  srcset=""
                />
                <div className="box-content">
                  <h3 className="title">Dewan Guru </h3>
                  <span className="post">Dewan Guru Mts Nurul Huda</span>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
      
      <div className="container">
        <div className="container mt-3">
          <div className="text-center mb-4">
            <h1>Tentang kami</h1>
          </div>
          <div className="container"data-aos="fade-up"data-aos-delay="200">
            <div className="row justify-content-center">
              <div className="col">
                <h4 className="text-center">Apa sih Mts Nurul Huda?</h4>
                <p className="txt">
                Pondok Pesantren Nurul Huda ini merupakan lembaga “Tafaqquh fi al-din” 
                   (memperdalam ilmu-ilmu agama) yang bergerak dalam berbagai bidang yaitu dakwah islamiyah, 
                   pendidikan dan pelayanan sosisal.Untuk meningkatkan peran dan fungsi Pondok Pesantren Nurul huda Badean yang diasuh oleh KH. Hasan Dailami Ahmad,
                    maka dibukalah lembaga formal mulai dari MTs dan MA dengan tidak menghilangkan identitas Pondok sebagai Pondok Pesantren Salafiyah.
                    Sekolah yang mempersiapkan generasi
                    hafidz/hafidzah yang mampu menghayati dan mengamalkan isi
                    kandungan Al-Quran, bertaqwa, berintegritas, berakhlaqul
                    karimah dan memiliki intelektualitas tinggi.
                </p>
                <button className='btn btn-hero btn-sm' disabled="disabled">Info Selengkapnya</button>
              </div>
              <div className="col">
                <h4 className="text-center">Visi And Misi?</h4>
                <h5 className="text-left">Visi</h5>
                <p className="txt">Mencetak Generasi yang Alim dan Amil</p>
                <h5 className="text-left">Misi</h5>
                <p className="txt">Mencetak insan manusia yang berbudi luhur dan berakhlak mulia</p>
                <button className='btn btn-hero btn-sm' disabled="disabled">Info Selengkapnya</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Kami
