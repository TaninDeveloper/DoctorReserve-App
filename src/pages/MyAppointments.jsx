
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import toast from 'react-hot-toast'; 

const MyAppointments = () => {

  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('myAppointments') || '[]');
    setAppointments(savedData);
  }, []);

  const deleteAppointment = (id, silent = false) => {
    const updated = appointments.filter(item => item.id !== id);
    setAppointments(updated);
    localStorage.setItem('myAppointments', JSON.stringify(updated));
    if (!silent) {
      toast.success('نوبت شما با موفقیت لغو شد');
    }
  };

  const handleReschedule = (item) => {
    const doctorId = item.doctorId || 1; 
    deleteAppointment(item.id, true);
    toast('در حال انتقال برای انتخاب ساعت جدید...', { icon: '⏳' });
    navigate(`/doctor/${doctorId}`);
  };

  return (

    <div className="container py-5" dir="rtl" 
    style={{fontFamily: 'Vazir'}}>

      <h3 className="fw-bold mb-5 text-center" 
      style={{ color: '#0a58ca' }}>
        نوبت‌های رزرو شده شما
      </h3>

      <div className="row justify-content-center">

        <div className="col-md-8">
          {appointments.length > 0 ? (
            appointments.map((item) => (
              <div key={item.id} 
              className="card mb-3 border-0 shadow-sm p-3" 
              style={{ borderRadius: '20px' }}>

                <div className="d-flex justify-content-between align-items-center flex-wrap">

                  <div>

                    <h5 className="fw-bold mb-1">
                      {item.doctorName}
                    </h5>

                    <p className="text-primary mb-0 small">
                      {item.specialty}
                    </p>

                    <span className="badge bg-light text-dark mt-2 p-2">
                      📅 {item.date} | ⏰ ساعت {item.time}
                    </span>

                  </div>

                  <div className="d-flex gap-2 mt-3 mt-sm-0">

                    <button onClick={() => handleReschedule(item)}
                      className="btn btn-outline-info btn-sm rounded-pill px-4"
                      style={{ fontWeight: '600' }}>
                      تغییر ساعت
                    </button>

                    <button onClick={() => deleteAppointment(item.id)}
                      className="btn btn-outline-danger btn-sm rounded-pill px-4">
                      لغو نوبت
                    </button>

                  </div>

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