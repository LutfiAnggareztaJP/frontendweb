import React, { Component } from "react";
import $ from "jquery";
export default class Content extends Component {
  jQuerycode = () => {
    $(document).on("click", ".action-buttons .dropdown-menu", function (e) {
      e.stopPropagation();
    });

    $(document).ready(function () {
      $(".filter-button").click(function () {
        var value = $(this).attr("data-filter");

        if (value === "semua") {
          $(".filter").removeClass("hidden");
          $(".filter").show("1000");
        } else {
          $('.filter[filter-item="' + value + '"]').removeClass("hidden");
          $(".filter")
            .not('.filter[filter-item="' + value + '"]')
            .addClass("hidden");
          $(".filter")
            .not("." + value)
            .hide("1000");
          $(".filter")
            .filter("." + value)
            .show("1000");
        }
      });
    });
  };
  componentDidMount() {
    this.jQuerycode();
  }
  render() {
    return (
      <div>
        <div>
          <section>
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="position-absolute p-5">
                    <div className="my-5 text-white text-center">
                      <h1 className="display-5 fw-normal">
                        Mts Nurul Huda
                      </h1>
                      <p className="lead fw-normal">
                        Lembaga Pilihan Pencetak Generasi Yang unggul dan Berbudi luhur
                      </p>
                      <button className="btn btn-primary" disabled="disabled">
                        Daftar
                      </button>
                    </div>
                  </div>
                  <img
                    src="img/kitab.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <div className="position-absolute p-5">
                    <div className="my-5 text-white text-center">
                      <h1 className="display-5 fw-normal">
                        Mts Nurul Huda
                      </h1>
                      <p className="lead fw-normal">
                        Lembaga Pilihan Pencetak Generasi Yang Alim dan Amil
                      </p>
                      <button className="btn btn-primary" disabled="disabled">
                        Daftar
                      </button>
                    </div>
                  </div>
                  <img
                    src="img/siswamts.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="img/tahfidz.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </section>
          <div className="container mt-3">
            <div className="text-center mb-4">
              <h1>Tentang Kami</h1>
            </div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col">
                  <h4 className="text-center">What Is Mts?</h4>
                  <p className="txt">
                  Pondok Pesantren Nurul Huda badean ini merupakan lembaga “Tafaqquh fi al-din” 
                   (memperdalam ilmu-ilmu agama) yang bergerak dalam berbagai bidang yaitu dakwah islamiyah, 
                   pendidikan dan pelayanan sosisal.Untuk meningkatkan peran dan fungsi Pondok Pesantren Nurul huda Badean yang diasuh oleh KH. Hasan Dailami Ahmad,
                    maka dibukalah lembaga formal mulai dari MTs dan MA dengan tidak menghilangkan identitas Pondok sebagai Pondok Pesantren Salafiyah.
                    Sekolah yang mempersiapkan generasi
                    hafidz/hafidzah yang mampu menghayati dan mengamalkan isi
                    kandungan Al-Quran, bertaqwa, berintegritas, berakhlaqul
                    karimah dan memiliki intelektualitas tinggi.
                  </p>
                  <button className="btn btn-hero btn-sm" disabled="disabled">
                    Info Selengkapnya
                  </button>
                </div>
                <div className="col">
                  <h4 className="text-center">Visi And Misi?</h4>
                  <h5 className="text-left">Visi</h5>
                  <p className="txt">Mencetak Generasi yang Alim dan Amil</p>
                  <h5 className="text-left">Misi</h5>
                  <p className="txt">Mencetak insan manusia yang berbudi luhur dan berakhlak mulia</p>
                  <button className="btn btn-hero btn-sm" disabled="disabled">
                    Info Selengkapnya
                  </button>
                </div>
              </div>
            </div>
          </div>
          <section className="faq-section">
            <div className="container">
              <div className="section-title max-820 lr-auto">
                <h1 className="ngc-maintitle">
                  WE ARE HERE TO HELP
                  <span className="ngc-hat">
                    <br />
                    <span>Fasilitias &amp; Layanan</span>
                  </span>
                </h1>
                <p>
                  Memberikan pelayanan terdepan dengan dukungan tenaga pendidik
                  yang berkualitas, memanfaatkan teknologi yang ada, serta
                  sistem informasi digital yang terintegrasi. Kenali lebih dalam
                  di sini.
                </p>
              </div>
              <div className="row">
                <div className="col-lg-7 mt-1">
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Gedung Bertingkat
                        </button>
                      </h2>
                      <div>
                        <div
                          id="collapseOne"
                          className="collapse show"
                          aria-labelledby="headingOne"
                          data-parent="#accordionExample"
                        >
                          <div className="card-body">
                            <div>
                              <img
                                src="img/IMG_20200428_170152.jpg"
                                className="img-thumbnail"
                                alt="..."
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          Aula Terbuka
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="collapse"
                        aria-labelledby="headingTwo"
                        data-parent="#accordionExample"
                      >
                        <div className="card-body">
                          <div>
                            <img
                              src="img/IMG_20201218_100912.jpg"
                              className="img-thumbnail"
                              alt="..."
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          Alat Olah Raga
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="collapse"
                        aria-labelledby="headingThree"
                        data-parent="#accordionExample"
                      >
                        <div className="card-body">
                          <div>
                            <img
                              src="img/IMG_20201218_100912.jpg"
                              className="img-thumbnail"
                              alt="..."
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 mt-3">
                  <div>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <strong>
                          Kenapa kita fasilitasi para siswa?
                        </strong>{" "}
                        Kami memfasilitasi para siswa agar mereka merasa nyaman dalam menuntut ilmu,baik itu ilmu pengetahuan umum mapun ilmu agamanya{" "}
                        
                      </div>
                    </div>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <strong>
                          This is the second item's accordion body.
                        </strong>
                        It is hidden by default, until the collapse plugin adds
                        the appropriate classes that we use to style each
                        element. These classes control the overall appearance,
                        as well as the showing and hiding via CSS transitions.
                        You can modify any of this with custom CSS or overriding
                        our default variables. It's also worth noting that just
                        about any HTML can go within the{" "}
                        <code>.accordion-body</code>, though the transition does
                        limit overflow.
                      </div>
                    </div>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <strong>
                          This is the third item's accordion body.
                        </strong>{" "}
                        It is hidden by default, until the collapse plugin adds
                        the appropriate classes that we use to style each
                        element. These classes control the overall appearance,
                        as well as the showing and hiding via CSS transitions.
                        You can modify any of this with custom CSS or overriding
                        our default variables. It's also worth noting that just
                        about any HTML can go within the{" "}
                        <code>.accordion-body</code>, though the transition does
                        limit overflow.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="container">
              <div className="page-header text-center">
                <h1>Dapat apa kita sekolah disini..?</h1>
              </div>
              <div className="row grid-divider mt-3">
                <div className="col-sm-6">
                  <div className="col-padding">
                    <h3>Profil Lulusan Mts Nurul Huda</h3>
                    <p>
                      Lembaga profesional dengan basis iman, ilmu pengetahuan
                      dan teknologi. Mengembangkan pendidikan dengan pelatihan
                      ilmiah dan amaliah dan Membudayakan prilaku cerdas,
                      berkarakter qurani
                    </p>
                    <div className="text-center">
                      <img src="" alt="" srcset="" />
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="col-padding">
                    <h4>Beriman &amp; Bertaqwa</h4>
                    <p className>
                      Menjadi makhluk yang senantiasa beriman dan bertaqwa
                      kepada Allah SWT.
                    </p>
                  </div>
                  <div className="col-padding mt-5">
                    <h4>Pribadian Mulia</h4>
                    <p className>
                      Memiliki kepribadian, kejujuran, kedisiplinan, tanggung
                      jawab sosial dan jiwa kepemimpinan.
                    </p>
                  </div>
                  <div className="col-padding mt-5">
                    <h4>Berwawasan Luas</h4>
                    <p className>
                      Lulusan memiliki bekal pengetahuan dan wawasan luas yang
                      berguna untuk terjun ke masyarakat.
                    </p>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="col-padding">
                    <h4>Komunikasi Baik</h4>
                    <p>
                      Memiliki kemampuan berkomunikasi dalam bahasa arab dan
                      inggris dalam kehidupan sehari hari.
                    </p>
                  </div>
                  <div className="col-padding">
                    <h4>Saraf lifeskill</h4>
                    <p>
                      Memiliki kemampuan lifeskill yang ditunjukkan dengan
                      kemandirian dalam hidup
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="gallery">
            <div className="conatiner text-center">
              <h1>Gallery Foto</h1>
            </div>
            <div className="container mt-2">
              <div className="row justify-content-center">
                <div className="col text-center mt-3">
                  <button
                    className="btn btn-outline-primary filter-button"
                    data-filter="semua"
                    style={{ borderRadius: 20 }}
                  >
                    Semua
                  </button>
                  <button
                    className="btn btn-outline-primary filter-button"
                    data-filter="formal"
                    style={{ borderRadius: 20 }}
                  >
                    Pembelajaran Formal
                  </button>
                  <button
                    className="btn btn-outline-primary filter-button"
                    data-filter="diniah"
                    style={{ borderRadius: 20 }}
                  >
                    Pembelajaran Diniah
                  </button>
                  <button
                    className="btn btn-outline-primary filter-button"
                    data-filter="extra"
                    style={{ borderRadius: 20 }}
                  >
                    Ekstrakulikuler
                  </button>
                  <button
                    className="btn btn-outline-primary filter-button"
                    data-filter="lomba"
                    style={{ borderRadius: 20 }}
                  >
                    Perlombaan
                  </button>
                  <button
                    className="btn btn-outline-primary filter-button"
                    data-filter="lain"
                    style={{ borderRadius: 20 }}
                  >
                    Kegiatan Lain
                  </button>
                </div>
              </div>
            </div>
            <div className="container mt-4 mb-4">
              <div className="row justify-content-center">
                <div className="col-12 col-sm-8 col-md-6 col-lg-4 mt-3 mb-3 filter formal extra">
                  <div className="card">
                    <img
                      className="card-img"
                      src="img/IMG_20200428_170152.jpg"
                      alt="Vans"
                    />
                    <div className="card-body">
                      <h4 className="card-title">Kitab</h4>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-8 col-md-6 col-lg-4 mt-3 mb-3 filter diniah lomba">
                  <div className="card">
                    <img
                      className="card-img"
                      src="img/tahfidz.jpg"
                      alt="Vans"
                    />
                    <div className="card-body">
                      <h4 className="card-title">Lomba Tahfidz Al-Quran</h4>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-8 col-md-6 col-lg-4 mt-3 mb-3 filter diniah lain extra">
                  <div className="card">
                    <img className="card-img" src="img/kitab.jpg" alt="Vans" />
                    <div className="card-body">
                      <h4 className="card-title">Belajar Kitab Kuning</h4>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-8 col-md-6 col-lg-4 mt-3 mb-3 filter formal extra">
                  <div className="card">
                    <img className="card-img" src="img/film.jpg" alt="Vans" />
                    <div className="card-body">
                      <h4 className="card-title">
                        Belajar Membuat Film Pendek
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-8 col-md-6 col-lg-4 mt-3 mb-3 filter formal lain">
                  <div className="card">
                    <img className="card-img" src="img/senam.JPG" alt="Vans" />
                    <div className="card-body">
                      <h4 className="card-title">Olahraga</h4>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-8 col-md-6 col-lg-4 mt-3 mb-3 filter formal extra">
                  <div className="card">
                    <img className="card-img" src="img/1.JPG" alt="Vans" />
                    <div className="card-body">
                      <h4 className="card-title">Belajar Kamera</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="button-buttom mb-3">
                <div className="d-grid gap-2">
                  <button className="btn btn-primary" type="button">
                    Selengkapnya
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
