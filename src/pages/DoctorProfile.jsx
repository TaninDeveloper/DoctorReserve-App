
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const DoctorProfile = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedTime, setSelectedTime] = useState(null);


  const allDoctors = [
    { id: 1, name: 'دکتر سارا احمدی', specialty: 'قلب و عروق', image: 'https://img.freepik.com/free-photo/female-doctor-hospital-with-stethoscope_23-2148827715.jpg', bio: 'متخصص قلب و عروق با سابقه جراحی‌های موفق.' },
    { id: 2, name: 'دکتر محمود علوی', specialty: 'قلب و عروق', image: 'https://img.freepik.com/free-photo/doctor-with-co-workers-analyzing-x-ray_1098-581.jpg', bio: 'پژوهشگر و متخصص بیماری‌های عروقی.' },
    { id: 3, name: 'دکتر ناصر همتی', specialty: 'قلب و عروق', image: 'https://img.freepik.com/free-photo/portrait-smiling-handsome-male-doctor-man_171337-5055.jpg', bio: 'متخصص آنژیوگرافی و اکوکاردیوگرافی.' },
    { id: 4, name: 'دکتر رویا کریمی', specialty: 'قلب و عروق', image: 'https://img.freepik.com/free-photo/doctor-standing-with-folder-stethoscope_1291-16.jpg', bio: 'فوق تخصص نارسایی قلب.' },
    { id: 5, name: 'دکتر علی مرادی', specialty: 'ارتوپد', image: 'https://img.freepik.com/free-photo/smiling-doctor-with-stethoscope-isolated-grey_651396-974.jpg', bio: 'جراح استخوان و مفاصل.' },
    { id: 6, name: 'دکتر بابک نوری', specialty: 'ارتوپد', image: 'https://img.freepik.com/free-photo/handsome-young-male-doctor-with-stethoscope-standing-against-white-background_23-2148203957.jpg', bio: 'متخصص آسیب‌های ورزشی.' },
    { id: 7, name: 'دکتر مریم شمس', specialty: 'ارتوپد', image: 'https://img.freepik.com/free-photo/medium-shot-doctor-posing-with-arms-crossed_23-2148868114.jpg', bio: 'جراح ستون فقرات.' },
    { id: 8, name: 'دکتر فریبا ناصری', specialty: 'مخصوص زنان', image: 'https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-with-stethoscope-around-neck-standing-with-folded-arms_409827-254.jpg', bio: 'جراح و متخصص زنان و زایمان.' },
    { id: 9, name: 'دکتر الهام یزدانی', specialty: 'مخصوص زنان', image: 'https://img.freepik.com/free-photo/woman-doctor-wearing-white-coat-with-stethoscope-isolated_273609-15214.jpg', bio: 'فوق تخصص نازایی.' },
    { id: 10, name: 'دکتر مونا اکبری', specialty: 'مخصوص زنان', image: 'https://img.freepik.com/free-photo/confident-female-doctor-with-stethoscope-around-neck_1262-19796.jpg', bio: 'متخصص مراقبت‌های دوران بارداری.' },
    { id: 11, name: 'دکتر رضا رضایی', specialty: 'روانپزشکی', image: 'https://img.freepik.com/free-photo/male-doctor-hospital-suit_23-2148827725.jpg', bio: 'متخصص اعصاب و روان.' },
    { id: 12, name: 'دکتر کامران پارسا', specialty: 'روانپزشکی', image: 'https://img.freepik.com/free-photo/smiling-young-doctor-white-coat-standing-with-arms-folded_171337-14981.jpg', bio: 'روان‌درمانگر و متخصص اختلالات خواب.' },
    { id: 13, name: 'دکتر هستی تهرانی', specialty: 'روانپزشکی', image: 'https://img.freepik.com/free-photo/professional-doctor-hospital_23-2148827714.jpg', bio: 'متخصص روانپزشکی کودک و نوجوان.' },
    { id: 14, name: 'دکتر نیما صبوری', specialty: 'روانپزشکی', image: 'https://img.freepik.com/free-photo/smiling-doctor-white-coat_23-2148827734.jpg', bio: 'متخصص درمان استرس و اضطراب.' },
    { id: 15, name: 'دکتر ژاله صادقی', specialty: 'روانپزشکی', image: 'https://img.freepik.com/free-photo/nurse-hospital-with-stethoscope_23-2148827711.jpg', bio: 'متخصص علوم شناختی و روانپزشک.' },
  ];

  const doctor = allDoctors.find(doc => doc.id === parseInt(id));

  const availableTimes = ['۰۹:۰۰', '۱۰:۳۰', '۱۲:۰۰', '۱۴:۳۰', '۱۶:۰۰', '۱۸:۳۰'];

  const handleBooking = () => {
    if (!selectedTime) {
      alert('لطفاً ابتدا یک ساعت را انتخاب کنید!');
      return;
    }

    const appointments = JSON.parse(localStorage.getItem('myAppointments') || '[]');
    const newAppointment = {
      id: Date.now(),
      doctorName: doctor.name,
      specialty: doctor.specialty,
      time: selectedTime,
      date: '۱۴ خرداد ۱۴۰۵'
    };
    
    localStorage.setItem('myAppointments', JSON.stringify([...appointments, newAppointment]));
    alert(`نوبت شما با موفقیت ثبت شد!`);
    navigate('/my-appointments');
  };

  if (!doctor)
     return <div className="text-center py-5">پزشک مورد نظر یافت نشد!</div>;


  return (

    <div className="container py-5" dir="rtl"
    style={{fontFamily: 'kalibri'}}>

      <div className="row g-5">

        <div className="col-lg-4 text-center">

          <img src={doctor.image} 
          className="img-fluid rounded-4 shadow" 
          alt={doctor.name} 
          style={{ width: '100%', height: '400px', objectFit: 'cover' }} />

          <h3 className="fw-bold mt-4" 
          style={{ color: '#0a58ca' }}>
            {doctor.name}</h3>

          <p className="text-primary fw-semibold">{doctor.specialty}</p>

          <div className="p-3 bg-light rounded-4 text-muted small">{doctor.bio}</div>

        </div>

        <div className="col-lg-8">

          <div className="card border-0 shadow-sm p-4 p-md-5" 
          style={{ borderRadius: '30px' }}>

            <h4 className="fw-bold mb-4 text-end">رزرو نوبت آنلاین</h4>

            <div className="d-flex flex-wrap gap-3 justify-content-end mb-5">

              {availableTimes.map(time => (

                <div 
                  key={time} 
                  onClick={() => setSelectedTime(time)}
                  className={`px-4 py-2 rounded-pill transition-all`}
                  style={{ 
                    cursor: 'pointer', 
                    backgroundColor: selectedTime === time ? '#0a58ca' : 'white',
                    color: selectedTime === time ? 'white' : '#0a58ca',
                    border: '2px solid #0a58ca',
                    fontWeight: '600'
                  }}>

                  {time}

                </div>
              ))}
            </div>

            <button onClick={handleBooking}
             className="btn btn-primary w-100 py-3 rounded-pill fw-bold" 
             style={{ backgroundColor: '#0a58ca', border: 'none' }}>
                تایید و ثبت نوبت
             </button>
             
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;