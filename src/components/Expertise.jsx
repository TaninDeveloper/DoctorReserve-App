
import React from 'react';
import { useNavigate } from 'react-router-dom'; 

const Expertise = () => {
const navigate = useNavigate();

  const specialtiesList = [
    { id: 1, name: 'قلب و عروق', icon: '❤️', color: '#ffebee' },
    { id: 2, name: 'ارتوپد', icon: '🦴', color: '#e0f2f1' },
    { id: 3, name: 'مخصوص زنان', icon: '🌸', color: '#fce4ec' },
    { id: 4, name: 'روانپزشکی', icon: '🧠', color: '#e8f5e9' },
  ];

  return (
    
    <div className="container py-5" dir="rtl">
      <div className="text-center mb-5">
        <h2 style={{ fontWeight: '700', color: '#0a58ca', marginTop: '50px' }}>تخصص‌ های 
            <span  style={{ color: '#0dcaf0' }}>پرطرفدار</span>
        </h2>

        <p className="text-muted">سریع‌ترین راه برای پیدا کردن متخصص مورد نیاز شما</p>

      </div>

      <div className="row g-4 justify-content-center">

        {specialtiesList.map((item) => (

          <div className="col-6 col-md-3" key={item.id}>

            <div 
              onClick={() => navigate(`/doctors/${item.name}`)} 
              style={{ backgroundColor: '#fff', borderRadius: '20px', padding: '30px 20px', 
                textAlign: 'center', cursor: 'pointer', transition: '0.3s', 
                border: '1px solid #f0f0f0', boxShadow: '0 4px 15px rgba(0,0,0,0.02)' }}

              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';}}

              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.02)';}}>

              <div style={{width: '70px', height: '70px', backgroundColor: item.color, 
                borderRadius: '50%', display: 'flex', justifyContent: 'center', 
                alignItems: 'center', fontSize: '30px', margin: '0 auto 15px'}}>

                {item.icon}

              </div>

              <h6 style={{ fontWeight: '600', color: '#444' }}>{item.name}</h6>

            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Expertise;