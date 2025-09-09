import { mengapa } from '../data/mengapa';
//import DiscountSymbol from '../../assets/images/Discount.png';
import SecondTire from '../../assets/images/SecondTire.png';

import './section2.css'

export function Section2() {
  return (
    <>
    <div className="blended-background">
      <img className="second-tire"
      src={SecondTire}/>
      <p className="mengapa-para">Mengapa membeli mobil di BuyCar?</p>
      <div className="smiley-para-container">
        {mengapa.map((detail) => {
          return (
            <div className="smiley-para">
          <img src={detail.image}/>
          <p>{detail.sentence}</p>
          </div>
          )
        })}
      </div>
    </div>
    </>
  )
}