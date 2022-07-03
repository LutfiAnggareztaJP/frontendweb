import React, { Component } from "react";
import $ from "jquery";
import 'aos'; 
export default class Gallery extends Component {
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
        <div className="container" style={{ marginTop: "200px" }}>
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
            <div className="container mt-4 mb-4" data-aos="zoom-in">
              <div className="row justify-content-center">
                <div className="col-12 col-sm-8 col-md-6 col-lg-4 mt-3 mb-3 filter formal extra">
                  <div className="foto-guru  card">
                    <img
                      className="card-img"
                      src="img/mapala.jpg"
                      alt="Vans"
                    />
                    <div className="card-body">
                      <h4 className="card-title">Belajar DiAlam</h4>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-8 col-md-6 col-lg-4 mt-3 mb-3 filter diniah lomba">
                  <div className="foto-guru card">
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
                <div className="col-12 col-sm-8 col-md-6 col-lg-4 mt-3 mb-3 filter diniah lomba">
                  <div className="foto-guru card">
                    <img
                      className="card-img"
                      src="img/pai.jpeg"
                      alt="Vans"
                    />
                    <div className="card-body">
                      <h4 className="card-title">Lomba PAI Kabupaten</h4>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-8 col-md-6 col-lg-4 mt-3 mb-3 filter diniah lain extra">
                  <div className="foto-guru card">
                    <img className="card-img" src="img/kitab.jpg" alt="Vans" />
                    <div className="card-body">
                      <h4 className="card-title">Belajar Kitab Kuning</h4>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-8 col-md-6 col-lg-4 mt-3 mb-3 filter formal extra">
                  <div className="foto-guru card">
                    <img className="card-img" src="img/film.jpg" alt="Vans" />
                    <div className="card-body">
                      <h4 className="card-title">
                        Belajar Membuat Film Pendek
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-8 col-md-6 col-lg-4 mt-3 mb-3 filter formal lain">
                  <div className="foto-guru card">
                    <img className="card-img" src="img/senam.JPG" alt="Vans" />
                    <div className="card-body">
                      <h4 className="card-title">Olahraga</h4>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-8 col-md-6 col-lg-4 mt-3 mb-3 filter formal extra">
                  <div className="foto-guru card">
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
        <div className="conatiner text-center">
          <h1>Dewan Guru</h1>
        </div>
        <div className="container" style={{ marginButtom: "200px" }}>
          <h3 className="text-center">Foto Dewan Guru</h3>
          <div className="row mt-30">
            <div className="col-md-4 col-sm-6">
              <div className="box4">
                <img
                  src="img/pendiri3.jpg"
                  alt=""
                  sizes="pic-1 rounded-circle"
                  srcset=""
                />
                <div className="box-content">
                  <h3 className="title">Dewan Guru</h3>
                  <span className="post"></span>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="box4">
                <img
                  src="img/"
                  alt=""
                  sizes="pic-1 rounded-circle"
                  srcset=""
                />
                <div className="box-content">
                  <h3 className="title">.</h3>
                  <span className="post"></span>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="box4">
                <img
                  src="img/"
                  alt=""
                  sizes="pic-1 rounded-circle"
                  srcset=""
                />
                <div className="box-content">
                  <h3 className="title">.</h3>
                  <span className="post"></span>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
    );
  }
}
