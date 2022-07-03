import "./style.css";
import Gallery from "./component/gallery";
import Header from "./component/Header";
import Footer from "./component/Footer";

function GalleryApp() {
  return (
    <div>
      <Header />
      <Gallery />
      <div className="mb-3" style={{marginButtom:'5px'}}>
        <Footer />
      </div>
    </div>
  );
}
export default GalleryApp;
