
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' }); 
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      const savedUser = localStorage.getItem('user');
      if (savedUser) {
        alert('خوش آمدید! ورود با موفقیت انجام شد.');
        navigate('/'); 
      } else {
        alert('کاربری یافت نشد. لطفا ابتدا ثبت‌نام کنید.');
      }
    } else {
      localStorage.setItem('user', JSON.stringify(formData));
      alert('ثبت‌نام با موفقیت انجام شد! حالا می‌توانید وارد شوید.');
      setIsLogin(true); 
    }
  };

  return (

    <div className="container d-flex justify-content-center align-items-center" 
    style={{ minHeight: '90vh' }} dir="rtl">

      <div className="card border-0 shadow-lg" 
      style={{ maxWidth: '450px', width: '100%', borderRadius: '25px' }}>

        <div className="card-body p-5">

          <div className="text-center mb-4">

            <h2 className="fw-bold" 
            style={{ color: '#0a58ca' }}>
              {isLogin ? 'خوش آمدید' : 'ثبت‌نام سریع'}
            </h2>

            <p className="text-muted">
              {isLogin ? 'برای دسترسی به نوبت‌های خود، وارد شوید' : 'همین حالا عضو شوید و نوبتی سریع بگیرید'}
            </p>

          </div>

          <form onSubmit={handleSubmit}>

            {!isLogin && (
              <div className="mb-3 text-end">

                <label className="form-label small fw-bold">نام و نام خانوادگی</label>

                <input 
                  name="name" 
                  type="text" 
                  className="form-control rounded-pill py-2" 
                  placeholder="مثلاً: علی رضایی" 
                  onChange={handleInputChange}
                  required />

              </div>
            )}

            <div className="mb-3 text-end">

              <label className="form-label small fw-bold">ایمیل</label>

              <input 
                name="email" 
                type="email" 
                className="form-control rounded-pill py-2" 
                placeholder="example@gmail.com" 
                onChange={handleInputChange}
                required/>

            </div>

            <div className="mb-4 text-end">

              <label className="form-label small fw-bold">رمز عبور</label>

              <input 
                name="password" 
                type="password" 
                className="form-control rounded-pill py-2" 
                placeholder="******" 
                onChange={handleInputChange}
                required />

            </div>

            <button className="btn btn-primary w-100 rounded-pill py-2 fw-bold mb-4"
             style={{ backgroundColor: '#0a58ca', border: 'none' }}>

              {isLogin ? 'ورود به حساب' : 'ایجاد حساب کاربری'}

            </button>

          </form>

          <div className="text-center">

            <p className="small text-muted">

              {isLogin ? 'حساب کاربری ندارید؟' : 'قبلاً ثبت‌نام کرده‌اید؟'}

              <span 
                onClick={() => setIsLogin(!isLogin)} 
                style={{ color: '#0dcaf0', cursor: 'pointer', fontWeight: '600', marginRight: '5px' }}>
                {isLogin ? 'همین حالا ثبت‌نام کنید' : 'وارد شوید'}
              </span>

            </p>
            
          </div>

        </div>
      </div>
    </div>
  );
};

export default Auth;