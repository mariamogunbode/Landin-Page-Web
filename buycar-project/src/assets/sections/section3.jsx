import { Link } from 'react-router';
import { availableCars } from '../data/availableCars';
import { carLogo } from '../data/carLogo';
import './section3.css'

export function Section3() {

  return (
    <>
      <div className="section3-container">
        <div className="link-container">
          <p className="mobil-terbaru">Mobil terbaru</p>
          <p>
            <Link to="/cars" className="link-div">Lihat Koleksi Mobil &gt;</Link>
          </p>
        </div>
        <div className="car-list-container">
          {availableCars.map((car) => {
            const imageName = car.image.split('/').pop().split('.')[0].toLowerCase();
            if (car.id === 'id1') {
              return (
                <>
                  <div key={car.id} className="car-name-list-container">
                    <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '100px' }}>
                      {car.Carnames.map((carName, carIndex) => (
                        <span
                          key={carIndex}
                          style={
                            carName.Name.toLowerCase().includes(imageName.replace('Crosscar', '').replace('GrandVitara', '').replace('SPresso', '').replace('WRX', '').replace('Omoda', '').trim())
                              ?
                              {
                                backgroundColor: '#0000ff',
                                color: '#ffffff',
                                marginBottom: '20px',
                                fontSize: '20px',
                                padding: '5px,'
                              }
                              : {
                                padding: '5px',
                                marginBottom: '10px',
                                fontSize: '20px',
                              }
                          }
                        >
                          {carName.Name}</span>
                      ))}
                    </div>
                    <img src={car.image} alt={car.image}
                      className="car-picture" />
                  </div>
                </>
              );
            }
          })}
        </div>

        <div className="car-logo-container">
          {carLogo.map((carlogo) => {
            return (
              <div key={carlogo.id}>
                <img src={carlogo.logo} />
              </div>
            );
          })}

        </div>

      </div>
    </>
  );
}



