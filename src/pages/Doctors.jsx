
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

const Doctors = () => {

  const { specialty } = useParams();
  const navigate = useNavigate();
  const location = useLocation(); 

  const [searchQuery, setSearchQuery] = useState("");

  const allDoctors = [
    { id: 1, name: 'دکتر سارا احمدی', specialty: 'قلب و عروق', image: 'https://img.freepik.com/free-photo/female-doctor-hospital-with-stethoscope_23-2148827715.jpg' },
    { id: 2, name: 'دکتر محمود علوی', specialty: 'قلب و عروق', image: 'https://img.freepik.com/free-photo/doctor-with-co-workers-analyzing-x-ray_1098-581.jpg' },
    { id: 3, name: 'دکتر ناصر همتی', specialty: 'قلب و عروق', image: 'https://img.freepik.com/free-photo/portrait-smiling-handsome-male-doctor-man_171337-5055.jpg' },
    { id: 4, name: 'دکتر رضا کریمی', specialty: 'قلب و عروق', image: 'https://img.freepik.com/free-photo/doctor-standing-with-folder-stethoscope_1291-16.jpg' },
    { id: 5, name: 'دکتر علی مرادی', specialty: 'ارتوپد', image: 'https://img.freepik.com/free-photo/smiling-doctor-with-stethoscope-isolated-grey_651396-974.jpg' },
    { id: 6, name: 'دکتر بابک نوری', specialty: 'ارتوپد', image: 'https://img.freepik.com/free-photo/handsome-young-male-doctor-with-stethoscope-standing-against-white-background_23-2148203957.jpg' },
    { id: 7, name: 'دکتر محمد شمس', specialty: 'ارتوپد', image: 'https://img.freepik.com/free-photo/medium-shot-doctor-posing-with-arms-crossed_23-2148868114.jpg' },
    { id: 8, name: 'دکتر فریبا ناصری', specialty: 'مخصوص زنان', image: 'https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-with-stethoscope-around-neck-standing-with-folded-arms_409827-254.jpg' },
    { id: 9, name: 'دکتر الهام یزدانی', specialty: 'مخصوص زنان', image: 'https://img.freepik.com/free-photo/woman-doctor-wearing-white-coat-with-stethoscope-isolated_273609-15214.jpg' },
    { id: 10, name: 'دکتر مونا اکبری', specialty: 'مخصوص زنان', image: 'https://img.freepik.com/free-photo/confident-female-doctor-with-stethoscope-around-neck_1262-19796.jpg' },
    { id: 11, name: 'دکتر رضا رضایی', specialty: 'روانپزشکی', image: 'https://img.freepik.com/free-photo/male-doctor-hospital-suit_23-2148827725.jpg' },
    { id: 12, name: 'دکتر کامران پارسا', specialty: 'روانپزشکی', image: 'https://img.freepik.com/free-photo/smiling-young-doctor-white-coat-standing-with-arms-folded_171337-14981.jpg' },
    { id: 13, name: 'دکتر هستی تهرانی', specialty: 'روانپزشکی', image: 'https://img.freepik.com/free-photo/professional-doctor-hospital_23-2148827714.jpg' },
    { id: 14, name: 'دکتر نیما صبوری', specialty: 'روانپزشکی', image: 'https://img.freepik.com/free-photo/smiling-doctor-white-coat_23-2148827734.jpg' },
    { id: 15, name: 'دکتر ژاله صادقی', specialty: 'روانپزشکی', image: 'https://img.freepik.com/free-photo/nurse-hospital-with-stethoscope_23-2148827711.jpg' },
  ];


  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const q = params.get('search');
    if (q) setSearchQuery(q);
  }, [location]);


  const filteredDoctors = allDoctors.filter(doc => {
    const matchesSpecialty = specialty ? doc.specialty === specialty : true;
    const matchesSearch = searchQuery ? 
    (doc.name.includes(searchQuery) || doc.specialty.includes(searchQuery)) : true;
    return matchesSpecialty && matchesSearch;
  });

  
  return (

    <div className="container py-5" dir="rtl"
    style={{fontFamily: 'Vazir'}}>

      <h3 className="mb-5 fw-bold text-center"
       style={{ color: '#0a58ca', marginTop: '40px' }}>

        {specialty ? `پزشکان متخصص ${specialty}` : 'لیست تمام پزشکان متخصص'}

      </h3>

      <div className="row g-4">

        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doc) => (

            <div className="col-12 col-sm-6 col-md-4 col-lg-3" 
            style={{marginTop: '90px'}}
            key={doc.id}>
              
              <div 
                className="card h-100 border-0 shadow-sm overflow-hidden" 
                style={{ borderRadius: '20px', cursor: 'pointer' }}
                onClick={() => navigate(`/doctor/${doc.id}`)} >

                <img src={doc.image}
                 className="card-img-top" 
                 alt={doc.name} 
                 style={{ height: '250px', objectFit: 'cover' }} />

                <div className="card-body text-center">

                  <h6 className="fw-bold">{doc.name}</h6>

                  <p className="text-primary small">{doc.specialty}</p>

                  <button className="btn btn-primary btn-sm w-100 rounded-pill mt-2" 
                  style={{backgroundColor: '#0a58ca', border: 'none'}}>
                    رزرو نوبت
                  </button>

                </div>
              </div>
            </div>
          ))
        ) : (

          <div className="text-center py-5">

            <p className="text-muted">پزشکی با این مشخصات یافت نشد. 🔍</p>

          </div>
        )}
      </div>
    </div>
  );
};

export default Doctors;


