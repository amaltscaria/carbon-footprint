import React from 'react';
import backgroundImage from '../assets/Images/certificate.svg';

const SuccessPage = ({data, emit}) => {
  const formatDate = (date) => {
    const options = { day: '2-digit', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('en-GB', options);
  };
  const today = new Date();
  const formattedDate = formatDate(today);
  return (
    <div
      style={{
        position: 'relative',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        color: 'white',
        textAlign: 'center',
      }}
    >
      {/* First dynamic text */}
      <div style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <p style={{ color: '#40a578', fontSize: '2rem' }}>{data.name}</p>
        {/* Additional elements or components can be added */}
      </div>

      {/* Second dynamic text */}
      <div style={{ position: 'absolute', top: '37%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <p style={{ color: '#40a578', fontSize: '2rem' }}>{+emit/100} tonnnes of CO2 emissions</p>
        {/* Additional elements or components can be added */}
      </div>

      {/* Third dynamic text */}
      <div style={{ position: 'absolute', top: '46%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <p style={{ color: '#40a578', fontSize: '2rem' }}>{formattedDate}</p>
        {/* Additional elements or components can be added */}
      </div>

      {/* Media queries for responsive font sizes */}
      <style>
        {`
          @media (max-width: 768px) {
            /* Adjust font size for smaller screens */
            div > p {
              font-size: 1.5rem !important; /* Use !important to ensure override */
            }
          }

          @media (max-width: 480px) {
            /* Further adjust font size for even smaller screens */
            div > p {
              font-size: 1rem !important; /* Use !important to ensure override */
            }
          }
        `}
      </style>
    </div>
  );
};

export default SuccessPage;
