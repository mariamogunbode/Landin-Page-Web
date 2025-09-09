import { Icon } from '@iconify/react';
import './section7.css'

export function Section7() {
  return (
    <>
      <div className="section7-container">
        <div className="text-icon-container">
          <div className="text-container2023">2023 PT Beli Mobil Dyit Sendiri</div>
        <div className="icon-button-container">
          <button className="icon-button">
             <Icon icon="mdi:whatsapp" width="24" height="24" color="black"  />
          </button>
          <button className="icon-button">
             <Icon icon="icon-park:tiktok" width="24" height="24" color="black" />
          </button>
          <button className="icon-button">
             <Icon icon="mdi:instagram" width="24" height="24" color="black" />
          </button>
          <button className="icon-button">
             <Icon icon="mdi:facebook" width="24" height="24" color="black" />
          </button>
        
        </div>
        </div>
        
       
      </div>
    </>
  );
}