import { Fragment } from 'react';
//import { useState } from 'react'
//import { useState } from 'react'
import { Header } from './Header';
import { Section2 }  from './section2';
import { Section3 }  from './section3';
import { Section4 }  from './section4';
import { Section5 } from './section5';
import { Section6 } from './section6';
import { Section7 } from './section7';
import EmptyRoad from '../../assets/images/empty-road-floor.png';
import  CrossCar  from '../../assets/images/CrossCar.png';
import Vector from '../../assets/images/Vector.png';
import './EntireApp.css';



export function EntireApp() {
  return (
    <Fragment >
      <div className="section1-container">
        <div className="empty-road-container">
          <img className="empty-road"
            src={EmptyRoad} />
            <Header />
            
            <div className="mobil-car-container">
              <div className="mobil-container">
                 <p className="mobil-para1">Mobil Imppian</p>
                <p className="mobil-para2">Anda Menunggu</p>
                <p className="mobil-para3">di Sini</p>
                <p className="mobil-para4">Pilihan mobil berkualitas,harga </p>
                <p className="mobil-para5">terjangku dan peleyanan terbaik</p>
                <p className="mobil-para6">hanya ada di sini</p>
                <div className="button-text-container">
                  <button className="button">Hubungi Kami</button>
                  <div className="text">Lebih Lanjut</div>
                </div>
            </div>
              <div className="car-image-container">
                <img className="car-image"
                src={CrossCar}/>
            </div>
  
            <img className="vector-image"
            src={Vector}/>
            </div>
          </div>
        </div>

       <Section2 />
       <Section3 />
       <Section4 />
       <Section5 />
       <Section6 />
       <Section7 />
    </Fragment>
  );
}