import './style.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Content from './component/Content';

function Home (){
    return(
        <div>
        <Header/>
        <Content/>
        <Footer/>
        </div>
    )
}
export default Home;