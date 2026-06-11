
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
    style={{fontFamily: 'Vazir'}}>
      <div style={{ background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
        marginTop: '50px',
        marginBottom: '50px',
        padding: '60px 5%',
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center'}}>

        <div className="row w-100 align-items-center">

          <div className="col-lg-6 text-right">

            <div className="d-flex align-items-center mb-4 flex-wrap">

              <h1 style={{ fontWeight: '800', color: '#0a58ca', fontSize: 'calc(1.8rem + 1vw)', lineHeight: '1.3', margin: 0 }}>
                سلامتی شما، <br />
                  <span style={{ color: '#0dcaf0' }}>اولویت اول ماست.</span>
              </h1>

              <div className="d-lg-none mt-2" 
              style={{width: '120px', height: '120px', marginRight: '25px',
                borderRadius: '50%', border: '5px solid #fff',
                boxShadow: '0 8px 20px rgba(0,0,0,0.15)', overflow: 'hidden',
                backgroundColor: '#fff', flexShrink: 0}}>

                <img 
                  src="https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg" 
                  alt="Doctor Mini"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>

              </div>
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

              <button 
                onClick={handleSearch}
                className="btn btn-info text-white rounded-pill px-4 py-2 fw-bold shadow-sm">
                جستجو
              </button>

            </div>

            <div className="mt-5 d-flex gap-4">

              <div>

                <h5 className="mb-0 fw-bold" 
                style={{ color: '#0a58ca' }}>+۵۰۰</h5>

                <small className="text-muted">پزشک</small>

              </div>

              <div style={{ width: '1px', backgroundColor: '#ccc' }}></div>

              <div>

                <h5 className="mb-0 fw-bold"
                 style={{ color: '#0a58ca' }}>+۱۰هزار</h5>

                <small className="text-muted">نوبت</small>

              </div>

            </div>

          </div>

          <div className="col-lg-6 d-none d-lg-flex justify-content-center">
            <div style={{ position: 'relative' }}>

              <img 
                src="https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg" 
                alt="Doctor Large" 
              
              style={{ width: '100%', maxWidth: '450px', borderRadius: '30px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}/>
            
              <div style={{position: 'absolute', bottom: '-30px', right: '-30px',
                width: '150px', height: '150px', backgroundColor: '#0dcaf0', 
                opacity: '0.1', borderRadius: '50%', zIndex: '-1'}}>
                </div>

            </div>
          </div>
        </div>
      </div>

      <Expertise />
      
    </div>
  );
};

export default Home;

