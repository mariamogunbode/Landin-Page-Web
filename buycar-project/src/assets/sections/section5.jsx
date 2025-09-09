import CarPointer from '../../assets/images/CarPointer.png';
import './section5.css'

export function Section5() {
  return (
    <>
      <div className="carpointer-container">
        <img src={CarPointer} 
        className="car-pointer"/>
        <div className="text-button-container">
          <div className="text-container">Beli mobil impianmu sekarang di BuyCar dan nikmati pengalaman memebeli mobil yang mudah dan menyenangkan! Tunggu apa lagi?</div>
          <button className="button-container">Hubungi Kami Sekarang</button>
        </div>
      </div>
    </>
  );
}