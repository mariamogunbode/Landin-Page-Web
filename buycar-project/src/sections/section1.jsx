import { Fragment } from 'react';
import EmptyRoad from '../assets/images/empty-road-floor.png';
import SubtractLogo from '../assets/images/subtract.png';
import './section1.css'

export function Section1() {
  return (
    <Fragment >
      <div className="section1-container">
        <div className="empty-road">
         <img 
         src={EmptyRoad} />
         <div className="section1-header">
            <div className="logo-container">
              <img className="lo-go"
              src={SubtractLogo}/>
              <p className="logo-para">BuyCar</p>
            </div>
            <p className="header-para">Beranda</p>
            <p className="header-para">Koleski mobil</p>
            <p className="header-para">Review mobil</p>
            <p className="header-para">Berita Mobil</p>
            <div className="contact-div">
              <img />
              <p>08123456789</p>
            </div>
         </div>
      </div>
     
      
      </div>
      
    </Fragment>
  );
}