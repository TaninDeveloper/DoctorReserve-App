
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const user = localStorage.getItem('user');

  const handleLogout = () => {
    localStorage.removeItem('user');
    toast.success('با موفقیت از حساب خارج شدید');
    setIsOpen(false); 
    navigate('/login');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/doctors?search=${searchTerm}`);
      setSearchTerm(''); 
    }
  };

  return (

    <nav dir="rtl"
      style={{backgroundColor: '#fff',
      boxShadow: '0 2px 15px rgba(0,0,0,0.08)',
      position: 'sticky', top: 0, zIndex: 1000,
      borderBottom: '3px solid #0dcaf0',
      fontFamily: 'Vazir'}}>

      <div style={{height: '75px', display: 'flex', alignItems: 'center', 
        justifyContent: 'space-between', padding: '0 5%'}}>

        <div style={{ flex: '1', display: 'flex', justifyContent: 'flex-start' }}>

          <Link to="/" 
          style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>

            <div className='brand' 
            style={{ width: '35px', height: '35px', backgroundColor: '#0dcaf0', borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff' }}>
                🩺
            </div>

            <span className='brand'
             style={{ marginRight: '10px', fontWeight: '800', color: '#0a58ca', fontSize: '1.2rem', whiteSpace: 'nowrap' }}>
                دکتر-رزرو
            </span>

          </Link>

        </div>

        <div className="d-none d-md-flex"
         style={{ flex: '2', justifyContent: 'center', alignItems: 'center', gap: '30px'}}>
          
          <Link className='linkk'
           to="/"
           style={{ color: '#444', fontWeight: '600' }}>صفحه اصلی
           </Link>

          <Link className='linkk'
          to="/doctors" 
          style={{color: '#444', fontWeight: '600' }}>پزشکان
          </Link>

          <Link className='linkk'
           to="/my-appointments" 
           style={{ color: '#444', fontWeight: '600' }}>نوبت‌ ها
           </Link>

          {user ? (
            <button onClick={handleLogout} className='linkk'
              style={{ backgroundColor: '#ff4d4d', color: '#fff', padding: '8px 22px', borderRadius: '50px', border: 'none', fontWeight: 'bold', fontSize: '0.9rem', cursor: 'pointer' }}>
                خروج از حساب کاربری 
            </button>
          ) : (
            <Link className='linkk'
              to="/login" 
              style={{ backgroundColor: '#0dcaf0', color: '#fff', padding: '8px 22px', borderRadius: '50px', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.9rem' }}>
              ورود / ثبت‌نام
            </Link>
          )}

        </div>

        <div style={{ flex: '1', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '15px' }}>

          <form
           onSubmit={handleSearch} 
           style={{ position: 'relative' }} 
           className="d-none d-sm-block">

            <input 
              type="text"
              placeholder= "نام پزشک..." 
              style={{ width: '160px', padding: '7px 35px 7px 12px', borderRadius: '50px', border: '1px solid #eee', backgroundColor: '#f8f9fa', fontSize: '0.8rem', outline: 'none' }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}/>

            <span style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', opacity: 0.5 }}>
              🔍
            </span>

          </form>

          <div 
            onClick={() => setIsOpen(!isOpen)}
            style={{width: '30px', height: '20px', display: 'flex', flexDirection: 'column', 
            justifyContent: 'space-between', cursor: 'pointer', zIndex: 1001}}
            className="d-md-none">

            <div style={{ width: '100%', height: '3px', backgroundColor: '#0dcaf0', borderRadius: '3px', transition: '0.3s', transform: isOpen ? 'rotate(45deg) translate(5px, 6px)' : '' }}></div>

            <div style={{ width: '100%', height: '3px', backgroundColor: '#0dcaf0', borderRadius: '3px', transition: '0.3s', opacity: isOpen ? 0 : 1 }}></div>

            <div style={{ width: '100%', height: '3px', backgroundColor: '#0dcaf0', borderRadius: '3px', transition: '0.3s', transform: isOpen ? 'rotate(-45deg) translate(6px, -7px)' : '' }}></div>

          </div>

        </div>

      </div>

      <div style={{position: 'absolute', top: '75px', left: 0, right: 0, 
        backgroundColor: '#fff', borderBottom: '3px solid #0dcaf0',
        maxHeight: isOpen ? '350px' : '0', overflow: 'hidden',
        transition: 'max-height 0.4s ease-in-out',
        display: 'flex', flexDirection: 'column', textAlign: 'center',
        boxShadow: '0 10px 15px rgba(0,0,0,0.05)'}}>

        <Link to="/" 
        onClick={() => setIsOpen(false)} 
        style={{ padding: '15px', textDecoration: 'none', color: '#333', borderBottom: '1px solid #f5f5f5' }}>
          صفحه اصلی
        </Link>

        <Link to="/doctors" 
        onClick={() => setIsOpen(false)}
         style={{ padding: '15px', textDecoration: 'none', color: '#333', borderBottom: '1px solid #f5f5f5' }}>
          پزشکان
         </Link>

        <Link to="/my-appointments" 
        onClick={() => setIsOpen(false)} 
        style={{ padding: '15px', textDecoration: 'none', color: '#333', borderBottom: '1px solid #f5f5f5' }}>
          نوبت‌های من
        </Link>


        {user ? (
          <div onClick={handleLogout} 
          style={{ padding: '15px', cursor: 'pointer', color: '#ff4d4d', fontWeight: 'bold' }}>
          خروج از حساب
          </div>
        ) : (
          <Link to="/login" 
          onClick={() => setIsOpen(false)} 
          style={{ padding: '15px', textDecoration: 'none', color: '#0dcaf0', fontWeight: 'bold' }}>
          ورود / ثبت‌نام
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;