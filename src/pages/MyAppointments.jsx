
import React, { useEffect, useState } from 'react';

const MyAppointments = () => {
const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('myAppointments') || '[]');
    setAppointments(savedData);
  }, []);

  const deleteAppointment = (id) => {
    const updated = appointments.filter(item => item.id !== id);
    setAppointments(updated);
    localStorage.setItem('myAppointments', JSON.stringify(updated));
  };


  return (

    <div className="container py-5" dir="rtl">
      <h3 className="fw-bold mb-5 text-center" 
      style={{ color: '#0a58ca' }}>نوبت‌های رزرو شده شما</h3>
      
      <div className="row justify-content-center">

        <div className="col-md-8">

          {appointments.length > 0 ? (
            appointments.map((item) => (
              <div key={item.id}
               className="card mb-3 border-0 shadow-sm p-3" 
               style={{ borderRadius: '20px' }}>

                <div className="d-flex justify-content-between align-items-center flex-wrap">

                  <div>

                    <h5 className="fw-bold mb-1">{item.doctorName}</h5>

                    <p className="text-primary mb-0 small">{item.specialty}</p>

                    <span className="badge bg-light text-dark mt-2 p-2">📅 {item.date} | ⏰ ساعت {item.time}</span>

                  </div>

                  <button 
                    onClick={() => deleteAppointment(item.id)}
                    className="btn btn-outline-danger btn-sm rounded-pill px-4 mt-3 mt-sm-0">
                    لغو نوبت
                  </button>

                </div>

              </div>
            ))
          ) : (

            <div className="text-center p-5 bg-light rounded-5">

              <p className="text-muted">شما هنوز هیچ نوبتی رزرو نکرده‌اید.</p>

            </div>

          )}
          
        </div>
      </div>
    </div>
  );
};

export default MyAppointments;