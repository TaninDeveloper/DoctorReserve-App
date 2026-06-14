
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Expertise from "../components/Expertise";

const Home = () => {

  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (search.trim()) {
      navigate(`/doctors?search=${search}`);
    }
  };

  return (
    <div className="container-fluid p-0" dir="rtl" 
    style={{ fontFamily: 'Vazir', position: 'relative', overflowX: 'hidden' }}>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        style={{
          position: 'absolute',
          top: '30px', 
          left: '5%',
          zIndex: 100,
          pointerEvents: 'none' 
        }}>
        <svg width="200" height="60" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            animate={{ 
              scale: [1, 1.15, 1],
              filter: ["drop-shadow(0 0 2px #0dcaf0)", "drop-shadow(0 0 10px #0dcaf0)", "drop-shadow(0 0 2px #0dcaf0)"]
            }}
            transition={{ duration: 0.8, repeat: Infinity }}
            d="M25 38.7L23.3 37.1C17.2 31.6 13.2 28 13.2 23.5C13.2 19.8 16.1 16.9 19.8 16.9C21.9 16.9 23.9 17.9 25 19.4C26.1 17.9 28.1 16.9 30.2 16.9C33.9 16.9 36.8 19.8 36.8 23.5C36.8 28 32.8 31.6 26.7 37.2L25 38.7Z" 
            fill="#0dcaf0" 
            style={{ transformOrigin: '25px 28px' }}/>

          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            d="M37 28H60L65 15L75 40L85 5L95 50L100 28H130L135 15L145 40L155 5L165 50L170 28H180" 
            stroke="#0dcaf0" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"/>
        </svg>
      </motion.div>

      <div style={{ 
        background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
        marginTop: '100px', 
        marginBottom: '50px',
        padding: '60px 5%',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative'}}>

        <div className="row w-100 align-items-center">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="col-lg-6 text-right">

            <div className="d-flex align-items-center mb-4 flex-wrap">

              <h1 style={{ fontWeight: '800', color: '#0a58ca', fontSize: 'calc(1.8rem + 1vw)', lineHeight: '1.3', margin: 0 }}>
                سلامتی شما، <br />

                <span style={{ color: '#0dcaf0' }}>اولویت اول ماست.</span>
              </h1>
            </div>

            <p className="mt-3 text-secondary" 
            style={{ fontSize: '1.05rem', maxWidth: '500px' }}>
              با "دکتر-رزرو"، به راحتی از بهترین متخصصان کشور نوبت بگیرید. 
              تجربه‌ای سریع، ساده و بدون معطلی.
            </p>

            <div className="mt-4 p-2 bg-white shadow-lg rounded-pill d-flex align-items-center" 
            style={{ maxWidth: '500px' }}>

              <input 
                type="text" 
                className="form-control border-0 bg-transparent shadow-none" 
                placeholder="نام پزشک یا تخصص..." 
                style={{ fontSize: '0.95rem' }}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}/>

              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSearch}
                className="btn btn-info text-white rounded-pill px-4 py-2 fw-bold shadow-sm">
                جستجو
              </motion.button>

            </div>

            <div className="mt-5 d-flex gap-4">

               <div>
                
                <h5 className="mb-0 fw-bold" style={{ color: '#0a58ca' }}>
                  +۵۰۰
                </h5>
                <small className="text-muted">پزشک</small>
                
                </div>

               <div style={{ width: '1px', backgroundColor: '#ccc' }}></div>

               <div>
                
                <h5 className="mb-0 fw-bold" 
                style={{ color: '#0a58ca' }}>+۱۰هزار</h5>
                <small className="text-muted">
                  نوبت موفق
                  </small>
                  
                  </div>

            </div>

          </motion.div>

          <div className="col-lg-6 d-none d-lg-flex justify-content-center">
             <motion.img 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                src="https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg" 
                style={{ width: '100%', maxWidth: '450px', borderRadius: '30px' }}/>

          </div>

        </div>
        
      </div>

      <Expertise />

      <div className="container py-5 mt-5">

        <h3 className="fw-bold text-center mb-5" 
        style={{ color: '#0a58ca' }}>صدای مراجعین دکتر رزرو </h3>

        <div className="row g-4">

          {[
            { id: 1, user: "طناز م.", text: "نوبت‌گیری زیر یک دقیقه انجام شد. خیلی سایت روونیه!", color: '#0dcaf0' },
            { id: 2, user: "امیررضا ع.", text: "پشتیبانی سایت عالیه، برای تغییر زمان نوبت خیلی کمکم کردن.", color: '#0a58ca' },
            { id: 3, user: "سحر ک.", text: "رزرو نوبت از متخصص زنان خیلی راحت بود. ممنونم از تیم خوبتون.", color: '#6f42c1' }
          ].map((item) => (
            <motion.div key={item.id} 
            className="col-md-4" whileHover={{ y: -10 }}>

              <div className="card border-0 shadow-sm p-4 h-100" 
              style={{ borderRadius: '25px', background: '#fff' }}>

                <div className="d-flex align-items-center mb-3">

                  <div className="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold" 
                       style={{ width: '45px', height: '45px', backgroundColor: item.color }}>
                    {item.user.charAt(0)}
                  </div>

                  <div className="ms-3 me-3">

                    <h6 className="fw-bold mb-0">
                      {item.user}
                    </h6>

                    <div style={{ color: '#ffc107', fontSize: '0.8rem' }}>
                      ★★★★★
                    </div>

                  </div>

                </div>

                <p className="text-muted small mb-0">
                  "{item.text}"
                </p>

              </div>

            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Home;
