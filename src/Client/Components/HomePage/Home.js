import './Home.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Slider from './Slider/Slider';
import Menu from './Menu/Menu';
import PhoneSelect from './SelectItem/PhoneSelect';
import LaptopSelect from "./SelectItem/LaptopSelect";
import DesktopSelect from "./SelectItem/DesktopSelect";
import SoundSelect from "./SelectItem/SoundSelect";
import WatchSelect from "./SelectItem/WatchSelect";
import TabletSelect from "./SelectItem/TabletSelect";
import TiviSelect from "./SelectItem/TiviSelect";
function Home() {
    return(
        <div>
            <div className="cps-container">
                <div className="block-top-home">
                    <Menu/>
                    <Slider/>

                    <div className="right-banner">
                        <div className="right-banner-item">
                            <img src="image/right-banner1.png" alt="right-banner1"/>
                        </div>
                        <div className="right-banner-item">
                            <img src="image/right-banner2.png" alt="right-banner1"/>
                        </div>
                        <div className="right-banner-item">
                            <img src="image/right-banner3.png" alt="right-banner1"/>
                        </div>
                    </div>
                </div>
                <div className="container-common">
                    <PhoneSelect/>
                </div>
                <div className="container-common">
                    <LaptopSelect/>
                </div>
                <div className="container-common">
                    <DesktopSelect/>
                </div>
                <div className="container-common">
                    <SoundSelect/>
                </div>
                <div className="container-common">
                    <WatchSelect/>
                </div>
                <div className="container-common">
                    <TabletSelect/>
                </div>
                <div className="container-common">
                    <TiviSelect/>
                </div>

            </div>
        </div>
    )
}

export default Home;