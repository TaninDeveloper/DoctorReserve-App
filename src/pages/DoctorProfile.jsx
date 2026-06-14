
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { motion, AnimatePresence } from 'framer-motion';

const DoctorProfile = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedTime, setSelectedTime] = useState(null);
  const [bookedTimes, setBookedTimes] = useState([]);

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [rating, setRating] = useState(5);

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

  const availableTimes = [
    { time: '۰۹:۰۰', capacity: 3 },
    { time: '۱۰:۳۰', capacity: 1 },
    { time: '۱۲:۰۰', capacity: 5 },
    { time: '۱۴:۳۰', capacity: 0 },
    { time: '۱۶:۰۰', capacity: 4 },
    { time: '۱۸:۳۰', capacity: 2 }
  ];

  useEffect(() => {
    if (doctor) {
      const appointments = JSON.parse(localStorage.getItem('myAppointments') || '[]');
      const doctorBookedTimes = appointments
        .filter(app => app.doctorName === doctor.name)
        .map(app => app.time);
      setBookedTimes(doctorBookedTimes);

      const allComments = JSON.parse(localStorage.getItem(`comments_${id}`) || '[]');
      setComments(allComments);
    }
  }, [id]);

  const handleBooking = () => {
    if (!selectedTime) {
      toast.error('لطفاً ابتدا یک زمان را انتخاب کنید.');
      return;
    }

    const userData = localStorage.getItem('user');
    if (!userData) {
      toast.error('برای رزرو نوبت ابتدا باید وارد حساب خود شوید');
      return;
    }

    const newAppointment = {
      id: Date.now(),
      doctorName: doctor.name,
      specialty: doctor.specialty,
      time: selectedTime,
      date: '۱۴۰۳/۰۳/۱۴'
    };

    const existingAppointments = JSON.parse(localStorage.getItem('myAppointments') || '[]');
    localStorage.setItem('myAppointments', JSON.stringify([...existingAppointments, newAppointment]));

    toast.success(`نوبت شما با ${doctor.name} ثبت شد.`);

    setTimeout(() => {
      navigate('/my-appointments');
    }, 1500);
  };

  const submitComment = () => {
    if (newComment.trim().length < 5) {
      toast.error('لطفاً نظر کامل‌تری بنویسید');
      return;
    }

    const commentObj = {
      id: Date.now(),
      text: newComment,
      rating: rating,
      date: new Date().toLocaleDateString('fa-IR')
    };

    const updatedComments = [commentObj, ...comments];

    setComments(updatedComments);
    localStorage.setItem(`comments_${id}`, JSON.stringify(updatedComments));
    setNewComment('');
    toast.success('نظر شما ثبت شد');
  };

  if (!doctor) return <div className="text-center py-5">پزشک مورد نظر یافت نشد.</div>;

  return (

    <div className="container py-5" dir="rtl" 
    style={{ fontFamily: 'Vazir', marginTop: '60px' }}>

      <div className="row g-4">

        <div className="col-lg-4">

          <div className="card border-0 shadow-sm rounded-4 overflow-hidden">

            <img 
            src={doctor.image} 
            alt={doctor.name} 
            className="card-img-top" 
            style={{ height: '350px', objectFit: 'cover' }} />

            <div className="card-body text-center">

              <h4 className="fw-bold text-primary">
                {doctor.name}
              </h4>

              <span className="badge bg-info-subtle text-info px-3 py-2 rounded-pill">
                {doctor.specialty}
              </span>

            </div>

          </div>

        </div>

        <div className="col-lg-8">

          <div className="bg-white p-4 p-md-5 rounded-4 shadow-sm border mb-4">

            <h5 className="fw-bold mb-4 border-right border-4 border-info pr-3">
              درباره پزشک
            </h5>

            <p className="text-secondary leading-relaxed mb-5">
              {doctor.bio}
            </p>

            <h5 className="fw-bold mb-4">
              انتخاب زمان نوبت (امروز)
            </h5>

            <div className="d-flex flex-wrap gap-3 mb-5">
              {availableTimes.map((slot) => {
                const isBooked = bookedTimes.includes(slot.time) || slot.capacity === 0;
                const isSelected = selectedTime === slot.time;

                return (

                  <motion.button
                    key={slot.time}
                    whileHover={!isBooked ? { scale: 1.05 } : {}}
                    whileTap={!isBooked ? { scale: 0.95 } : {}}
                    onClick={() => !isBooked && setSelectedTime(slot.time)}
                    disabled={isBooked}
                    className={`btn py-3 px-4 rounded-4 flex-grow-1 border-2 transition-all ${
                      isSelected ? 'btn-info text-white border-info' : 
                      isBooked ? 'btn-light text-muted border-transparent' : 'btn-outline-info'
                    }`}
                    style={{ minWidth: '140px', cursor: isBooked ? 'not-allowed' : 'pointer' }}>

                    <div className="fw-bold fs-5">
                      {slot.time}
                    </div>

                    <div style={{ fontSize: '0.75rem', marginTop: '4px' }}>
                      {isBooked ? '🔴 تکمیل' : `🟢 ${slot.capacity} ظرفیت`}
                    </div>

                  </motion.button>
                );
              })}

            </div>

            <button 
              onClick={handleBooking}
              className="btn btn-primary btn-lg w-100 rounded-pill fw-bold py-3 shadow-sm transition-all"
              style={{ letterSpacing: '0.5px' }}>
              تایید و رزرو نوبت نهایی
            </button>

          </div>

          <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          className="bg-white p-4 p-md-5 rounded-4 shadow-sm border mt-4">

            <h5 className="fw-bold mb-4">
              نظرات مراجعین
            </h5>
            
            <div className="bg-light p-3 rounded-4 mb-5">

              <div className="mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span 
                    key={star} 
                    onClick={() => setRating(star)}
                    style={{ cursor: 'pointer', fontSize: '24px', color: star <= rating ? '#ffc107' : '#ccc' }}>
                    ★
                  </span>

                ))}

              </div>

              <textarea 
                className="form-control border-0 rounded-4 p-3 shadow-sm mb-3" 
                rows="3" 
                placeholder="تجربه خود را بنویسید..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}>
                </textarea>

              <button 
              onClick={submitComment} 
              className="btn btn-info text-white rounded-pill px-4 fw-bold">
                ثبت نظر
              </button>

            </div>

            <div className="comments-list">
              <AnimatePresence>
                {comments.length > 0 ? comments.map((c) => (
                  <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} key={c.id} 
                  className="border-bottom pb-3 mb-3">

                    <div className="d-flex justify-content-between align-items-center mb-2">

                      <div style={{ color: '#ffc107' }}>
                        {'★'.repeat(c.rating)}{'☆'.repeat(5-c.rating)}
                      </div>

                      <small className="text-muted">
                        {c.date}
                      </small>

                    </div>

                    <p className="mb-0 text-dark small">
                      {c.text}
                    </p>

                  </motion.div>
                )) : (
                  <p className="text-center text-muted">
                    هنوز نظری ثبت نشده است.
                  </p>
                )}

              </AnimatePresence>

            </div>

          </motion.div>
          
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;





