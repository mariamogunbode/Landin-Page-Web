import { Icon } from '@iconify/react';
import { navs } from '../data/navs';
import SubtractLogo from '../../assets/images/subtract.png';
import './Header.css'

export function Header() {
  return (
    <>
      <div className="section1-header">
        <div className="logo-container">
          <img className="lo-go"
            src={SubtractLogo} />
          <p className="logo-para">BuyCar</p>
        </div>

        <div className="header-para-container">
          {navs.map((nav) => {
            return (
              <p className="header-para">{nav.sentence}</p>
            );
          })}
        </div>
        <div className="contact-div">
          <Icon icon="mdi:whatsapp" width="24" height="24" color="white" />
          <p className="number">08123456789</p>
        </div>

      </div>
    </>
  );
}