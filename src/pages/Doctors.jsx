
import React from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import { motion } from 'framer-motion'; 

const Doctors = () => {

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const specialtyParam = params.get('specialty');
  const searchParam = params.get('search');

  const allDoctors = [
    { id: 1, name: 'دکتر سارا احمدی', specialty: 'قلب و عروق', image: 'https://img.freepik.com/free-photo/female-doctor-hospital-with-stethoscope_23-2148827715.jpg' },
    { id: 2, name: 'دکتر محمود علوی', specialty: 'قلب و عروق', image: 'https://img.freepik.com/free-photo/doctor-with-co-workers-analyzing-x-ray_1098-581.jpg' },
    { id: 3, name: 'دکتر ناصر همتی', specialty: 'قلب و عروق', image: 'https://img.freepik.com/free-photo/portrait-smiling-handsome-male-doctor-man_171337-5055.jpg' },
    { id: 4, name: 'دکتر رضا کریمی', specialty: 'قلب و عروق', image: 'https://img.freepik.com/free-photo/doctor-standing-with-folder-stethoscope_1291-16.jpg' },
    { id: 5, name: 'دکتر علی مرادی', specialty: 'ارتوپد', image: 'https://img.freepik.com/free-photo/smiling-doctor-with-stethoscope-isolated-grey_651396-974.jpg' },
    { id: 6, name: 'دکتر بابک نوری', specialty: 'ارتوپد', image: 'https://img.freepik.com/free-photo/handsome-young-male-doctor-with-stethoscope-standing-against-white-background_23-2148203957.jpg' },
    { id: 7, name: 'دکتر محمد شمس', specialty: 'ارتوپد', image: 'https://img.freepik.com/free-photo/medium-shot-doctor-posing-with-arms-crossed_23-2148868114.jpg' },
    { id: 8, name: 'دکتر فریبا ناصری', specialty: 'مخصوص زنان', image: 'https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-with-stethoscope-around-neck-standing-with-folded-arms_409827-254.jpg' },
    { id: 10, name: 'دکتر مونا اکبری', specialty: 'مخصوص زنان', image: 'https://img.freepik.com/free-photo/confident-female-doctor-with-stethoscope-around-neck_1262-19796.jpg' },
    { id: 11, name: 'دکتر رضا رضایی', specialty: 'روانپزشکی', image: 'https://img.freepik.com/free-photo/male-doctor-hospital-suit_23-2148827725.jpg' },
    { id: 12, name: 'دکتر کامران پارسا', specialty: 'روانپزشکی', image: 'https://img.freepik.com/free-photo/smiling-young-doctor-white-coat-standing-with-arms-folded_171337-14981.jpg' },
    { id: 13, name: 'دکتر هستی تهرانی', specialty: 'روانپزشکی', image: 'https://img.freepik.com/free-photo/professional-doctor-hospital_23-2148827714.jpg' },
    { id: 14, name: 'دکتر نیما صبوری', specialty: 'روانپزشکی', image: 'https://img.freepik.com/free-photo/smiling-doctor-white-coat_23-2148827734.jpg' },
    { id: 15, name: 'دکتر ژاله صادقی', specialty: 'روانپزشکی', image: 'https://img.freepik.com/free-photo/nurse-hospital-with-stethoscope_23-2148827711.jpg' },
  ];

  const filteredDoctors = allDoctors.filter(doctor => {

    const matchesSpecialty = specialtyParam ? doctor.specialty === specialtyParam : true;
    const matchesSearch = searchParam ? (doctor.name.includes(searchParam) || doctor.specialty.includes(searchParam)) : true;
    return matchesSpecialty && matchesSearch;
  });

  return (

    <div className="container py-5" dir="rtl" 
    style={{ fontFamily: 'Vazir', marginTop: '30px' }}>

      <motion.h2 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }}    
        className="text-center fw-bold mb-5">
        {specialtyParam ? `متخصصین ${specialtyParam}` : 'لیست پزشکان متخصص'}
      </motion.h2>

      <div className="row g-4">
        {filteredDoctors.map((doctor, index) => (

          <div key={doctor.id} 
          className="col-md-4 col-lg-3" 
          style={{marginTop: '90px'}}>

            <motion.div
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: index * 0.1 }} 
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}>

              <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden text-center">

                <img 
                  src={doctor.image} 
                  className="card-img-top" 
                  alt={doctor.name} 
                  style={{ height: '250px', objectFit: 'cover' }}/>

                <div className="card-body">

                  <h5 className="fw-bold">
                    {doctor.name}
                  </h5>

                  <p className="text-primary">
                    {doctor.specialty}
                  </p>

                  <Link to={`/doctor/${doctor.id}`} 
                  className="btn btn-outline-primary rounded-pill w-100">
                    مشاهده پروفایل
                  </Link>

                </div>

              </div>

            </motion.div>

          </div>
        ))}

        {filteredDoctors.length === 0 && (
          <div className="text-center py-5">

             <p className="text-muted">پزشکی با این مشخصات یافت نشد.</p>

             <Link to="/doctors" 
             className="btn btn-link">
              نمایش همه پزشکان
             </Link>
             
          </div>
        )}
      </div>
    </div>
  );
};

export default Doctors;
