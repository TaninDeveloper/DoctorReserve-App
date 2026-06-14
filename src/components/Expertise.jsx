
import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import { motion } from 'framer-motion';

const Expertise = () => {

const navigate = useNavigate();

const specialtiesList = [
    { id: 1, name: 'قلب و عروق', icon: '❤️', color: '#ffebee' },
    { id: 2, name: 'ارتوپد', icon: '🦴', color: '#e0f2f1' },
    { id: 3, name: 'مخصوص زنان', icon: '🌸', color: '#fce4ec' },
    { id: 4, name: 'روانپزشکی', icon: '🧠', color: '#e8f5e9' },
  ];

  return (

    <div className="container py-5" dir="rtl" 
    style={{fontFamily: 'Vazir'}}>

      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-5">

        <h2 style={{ fontWeight: '700', color: '#0a58ca', marginTop: '50px' }}> 
          تخصص‌ های 
            <span style={{ color: '#0dcaf0' }}> پرطرفدار </span>
        </h2>

        <p className="text-muted">
          سریع‌ ترین راه برای پیدا کردن متخصص مورد نیاز شما
        </p>

      </motion.div>

      <motion.div 
        className="row g-4 justify-content-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
          }
        }}>


        {specialtiesList.map((item) => (
          <div className="col-6 col-md-3" key={item.id}>
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 }
              }}
              whileHover={{ 
                y: -10, 
                boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                transition: { duration: 0.3 }
              }}

              onClick={() => navigate(`/doctors?specialty=${item.name}`)} 

              style={{backgroundColor: '#fff', 
                borderRadius: '20px', 
                padding: '30px 20px', 
                textAlign: 'center', 
                cursor: 'pointer', 
                border: '1px solid #f0f0f0', 
                boxShadow: '0 4px 15px rgba(0,0,0,0.02)'}}>

              <div style={{width: '70px', height: '70px', backgroundColor: item.color, 
                borderRadius: '50%', display: 'flex', justifyContent: 'center', 
                alignItems: 'center', fontSize: '30px', margin: '0 auto 15px'}}>
                {item.icon}
              </div>

              <h6 style={{ fontWeight: '600', color: '#444' }}>
                {item.name}
              </h6>

            </motion.div>

          </div>

        ))}
        
      </motion.div>
    </div>
  );
};

export default Expertise;