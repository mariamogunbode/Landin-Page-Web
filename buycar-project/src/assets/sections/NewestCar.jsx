import { NavLink } from 'react-router';
import { Header } from './Header';
import { availableCars } from '../data/availableCars';
import './NewestCar.css'

export function NewestCar() {
  return (
    <>
    <div className="newest-section">
    <Header />  

    <p className="home-page-link">
      <NavLink to="/">&lt; Go to Homepage</NavLink>
    </p>
     

    <div className="car-list-container2">
          {availableCars.map((car) => {
            const imageName = car.image.split('/').pop().split('.')[0].toLowerCase();
           
              return (
                <>
                  <div key={car.id} className="car-name-list-container">
                    <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '100px',
                      paddingRight: '100px',
                      
                     }}>
                      {car.Carnames.map((carName, carIndex) => (
                        <span
                          key={carIndex}
                          style={
                            carName.Name.toLowerCase().includes(imageName.replace('Cross', '').replace('Grand', '').replace('S-Presso', '').replace('WRX', '').replace('Omoda', '').trim())
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
            
          )}
        </div>
        </div>
    </>
  );
}