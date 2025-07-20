import React from 'react';

// Lucide React Icons
const Search = ({ className = '', ...props }) => (
  <svg className={`lucide lucide-search ${className}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="11" cy="11" r="8"/>
    <path d="m21 21-4.35-4.35"/>
  </svg>
);

const ShoppingCart = ({ className = '', ...props }) => (
  <svg className={`lucide lucide-shopping-cart ${className}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="8" cy="21" r="1"/>
    <circle cx="19" cy="21" r="1"/>
    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57L22 9H7"/>
  </svg>
);

const User = ({ className = '', ...props }) => (
  <svg className={`lucide lucide-user ${className}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
);

const Heart = ({ className = '', ...props }) => (
  <svg className={`lucide lucide-heart ${className}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7z"/>
  </svg>
);

const Menu = ({ className = '', ...props }) => (
  <svg className={`lucide lucide-menu ${className}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="4" x2="20" y1="12" y2="12"/>
    <line x1="4" x2="20" y1="6" y2="6"/>
    <line x1="4" x2="20" y1="18" y2="18"/>
  </svg>
);

const Star = ({ className = '', ...props }) => (
  <svg className={`lucide lucide-star ${className}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
  </svg>
);

const Smartphone = ({ className = '', ...props }) => (
  <svg className={`lucide lucide-smartphone ${className}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="14" height="20" x="5" y="2" rx="2" ry="2"/>
    <path d="M12 18h.01"/>
  </svg>
);

const Laptop = ({ className = '', ...props }) => (
  <svg className={`lucide lucide-laptop ${className}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"/>
  </svg>
);

const Headphones = ({ className = '', ...props }) => (
  <svg className={`lucide lucide-headphones ${className}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M3 18v-6a9 9 0 0 1 18 0v6"/>
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
  </svg>
);

const Watch = ({ className = '', ...props }) => (
  <svg className={`lucide lucide-watch ${className}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="6"/>
    <polyline points="12,10 12,12 13,13"/>
    <path d="m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05"/>
    <path d="m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05"/>
  </svg>
);

const Camera = ({ className = '', ...props }) => (
  <svg className={`lucide lucide-camera ${className}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
    <circle cx="12" cy="13" r="3"/>
  </svg>
);

const Gamepad2 = ({ className = '', ...props }) => (
  <svg className={`lucide lucide-gamepad-2 ${className}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="6" x2="10" y1="11" y2="11"/>
    <line x1="8" x2="8" y1="9" y2="13"/>
    <line x1="15" x2="15.01" y1="12" y2="12"/>
    <line x1="18" x2="18.01" y1="10" y2="10"/>
    <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"/>
  </svg>
);

const Shirt = ({ className = '', ...props }) => (
  <svg className={`lucide lucide-shirt ${className}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/>
  </svg>
);

const Home = ({ className = '', ...props }) => (
  <svg className={`lucide lucide-home ${className}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9,22 9,12 15,12 15,22"/>
  </svg>
);

const Facebook = ({ className = '', ...props }) => (
  <svg className={`lucide lucide-facebook ${className}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const Twitter = ({ className = '', ...props }) => (
  <svg className={`lucide lucide-twitter ${className}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

const Instagram = ({ className = '', ...props }) => (
  <svg className={`lucide lucide-instagram ${className}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const Youtube = ({ className = '', ...props }) => (
  <svg className={`lucide lucide-youtube ${className}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
    <path d="m10 15 5-3-5-3z"/>
  </svg>
);

const Mail = ({ className = '', ...props }) => (
  <svg className={`lucide lucide-mail ${className}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="16" x="2" y="4" rx="2"/>
    <path d="m22 7-10 5L2 7"/>
  </svg>
);

const Phone = ({ className = '', ...props }) => (
  <svg className={`lucide lucide-phone ${className}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const MapPin = ({ className = '', ...props }) => (
  <svg className={`lucide lucide-map-pin ${className}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

// Base styles (inline styles instead of external CSS)
const baseStyles = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
    background: hsl(210, 20%, 98%);
    color: hsl(220, 20%, 15%);
    line-height: 1.6;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 16px;
  }
  
  .grid {
    display: grid;
  }
  
  .flex {
    display: flex;
  }
  
  .hidden {
    display: none;
  }
  
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 8px 16px;
    border-radius: 8px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s;
    border: none;
    text-decoration: none;
    font-size: 14px;
  }
  
  .btn-primary {
    background: linear-gradient(135deg, hsl(210, 100%, 45%), hsl(210, 100%, 60%));
    color: white;
  }
  
  .btn-primary:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px hsl(210, 100%, 45%, 0.3);
  }
  
  .btn-secondary {
    background: hsl(210, 40%, 96%);
    color: hsl(220, 20%, 15%);
  }
  
  .btn-secondary:hover {
    background: hsl(210, 40%, 90%);
  }
  
  .btn-outline {
    background: transparent;
    border: 1px solid hsl(220, 15%, 88%);
    color: hsl(220, 20%, 15%);
  }
  
  .btn-outline:hover {
    background: hsl(210, 40%, 96%);
  }
  
  .btn-ghost {
    background: transparent;
    color: hsl(220, 20%, 15%);
  }
  
  .btn-ghost:hover {
    background: hsl(210, 40%, 96%);
  }
  
  .btn-hero {
    background: hsl(45, 100%, 55%);
    color: hsl(220, 20%, 15%);
    font-weight: 600;
  }
  
  .btn-cart {
    background: hsl(210, 100%, 45%);
    color: white;
  }
  
  .input {
    padding: 8px 12px;
    border: 1px solid hsl(220, 15%, 88%);
    border-radius: 6px;
    font-size: 14px;
    width: 100%;
  }
  
  .input:focus {
    outline: none;
    border-color: hsl(210, 100%, 45%);
    box-shadow: 0 0 0 2px hsl(210, 100%, 45%, 0.2);
  }
  
  .card {
    background: linear-gradient(145deg, hsl(0, 0%, 100%) 0%, hsl(210, 40%, 96%) 100%);
    border-radius: 12px;
    overflow: hidden;
    transition: all 0.3s;
    box-shadow: 0 4px 20px -2px hsl(210, 100%, 45%, 0.1);
  }
  
  .card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px -4px hsl(210, 100%, 45%, 0.15);
  }
  
  .badge {
    display: inline-flex;
    align-items: center;
    padding: 2px 8px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 500;
  }
  
  .badge-new {
    background: hsl(120, 60%, 45%);
    color: white;
  }
  
  .badge-sale {
    background: hsl(0, 85%, 55%);
    color: white;
  }
  
  .text-gradient {
    background: linear-gradient(135deg, hsl(210, 100%, 45%), hsl(210, 100%, 60%));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  .hero-gradient {
    background: linear-gradient(135deg, hsl(210, 100%, 45%) 0%, hsl(45, 100%, 55%) 100%);
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-fade-in {
    animation: fadeIn 0.6s ease-out forwards;
  }
  
  @media (min-width: 768px) {
    .md\\:grid-cols-2 {
      grid-template-columns: repeat(2, 1fr);
    }
    .md\\:grid-cols-4 {
      grid-template-columns: repeat(4, 1fr);
    }
    .md\\:flex {
      display: flex;
    }
    .md\\:hidden {
      display: none;
    }
  }
  
  @media (min-width: 1024px) {
    .lg\\:grid-cols-4 {
      grid-template-columns: repeat(4, 1fr);
    }
  }
  
  @media (max-width: 767px) {
    .md\\:hidden {
      display: block;
    }
    .hidden {
      display: block;
    }
  }
`;

// Button Component
const Button = ({ variant = 'primary', size = 'md', children, className = '', ...props }) => {
  const baseClass = 'btn';
  const variantClass = `btn-${variant}`;
  const sizeClasses = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg',
    icon: 'p-2 w-10 h-10'
  };
  
  return (
    <button 
      className={`${baseClass} ${variantClass} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Input Component
const Input = ({ className = '', ...props }) => (
  <input className={`input ${className}`} {...props} />
);

// Card Components
const Card = ({ children, className = '', style, ...props }) => (
  <div className={`card ${className}`} style={style} {...props}>
    {children}
  </div>
);

const CardContent = ({ children, className = '', ...props }) => (
  <div className={`p-4 ${className}`} {...props}>
    {children}
  </div>
);

// Badge Component
const Badge = ({ children, className = '', variant = 'new' }) => (
  <span className={`badge badge-${variant} ${className}`}>
    {children}
  </span>
);

// Header Component
const Header = () => {
  return (
    <header style={{ background: 'white', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', position: 'sticky', top: 0, zIndex: 50, borderBottom: '1px solid hsl(220, 15%, 88%)' }}>
      <div className="container">
        {/* Top bar */}
        <div style={{ display: 'none', alignItems: 'center', justifyContent: 'space-between', padding: '8px 0', fontSize: '14px', color: 'hsl(220, 15%, 55%)', borderBottom: '1px solid hsl(220, 15%, 88%)' }} className="md:flex">
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <span>Free shipping on orders over $50</span>
            <span>24/7 Customer Support</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span>Track Your Order</span>
            <span>Help</span>
          </div>
        </div>

        {/* Main header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 0' }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu style={{ width: '20px', height: '20px' }} />
            </Button>
            <h1 className="text-gradient" style={{ fontSize: '24px', fontWeight: 'bold' }}>
              NovaShop
            </h1>
          </div>

          {/* Search bar */}
          <div style={{ display: 'none', flex: 1, maxWidth: '500px', margin: '0 32px', position: 'relative' }} className="md:flex">
            <Input
              placeholder="Search for products..."
              style={{ paddingRight: '48px', height: '48px', background: 'hsl(210, 40%, 96%)', border: 'none' }}
            />
            <Button
              size="icon"
              style={{ position: 'absolute', right: '4px', top: '4px', width: '40px', height: '40px' }}
            >
              <Search style={{ width: '16px', height: '16px' }} />
            </Button>
          </div>

          {/* Action buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Button variant="ghost" size="icon" style={{ position: 'relative' }}>
              <Heart style={{ width: '20px', height: '20px' }} />
              <span style={{ position: 'absolute', top: '-4px', right: '-4px', background: 'hsl(0, 85%, 55%)', color: 'white', fontSize: '12px', borderRadius: '50%', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                2
              </span>
            </Button>
            <Button variant="ghost" size="icon" style={{ position: 'relative' }}>
              <ShoppingCart style={{ width: '20px', height: '20px' }} />
              <span style={{ position: 'absolute', top: '-4px', right: '-4px', background: 'hsl(0, 85%, 55%)', color: 'white', fontSize: '12px', borderRadius: '50%', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                3
              </span>
            </Button>
            <Button variant="outline" style={{ display: 'none' }} className="md:flex">
              <User style={{ width: '16px', height: '16px', marginRight: '8px' }} />
              Sign In
            </Button>
          </div>
        </div>

        {/* Mobile search */}
        <div style={{ display: 'block', paddingBottom: '16px' }} className="md:hidden">
          <div style={{ position: 'relative' }}>
            <Input
              placeholder="Search products..."
              style={{ paddingRight: '48px', background: 'hsl(210, 40%, 96%)', border: 'none' }}
            />
            <Button
              size="icon"
              style={{ position: 'absolute', right: '4px', top: '4px', width: '32px', height: '32px' }}
            >
              <Search style={{ width: '16px', height: '16px' }} />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

// Hero Component
const Hero = () => {
  return (
    <section className="hero-gradient" style={{ position: 'relative', height: '70vh', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0 }}>
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop"
          alt="Premium Shopping Experience"
          style={{ width: '100%', height: '100%', objectFit: 'cover', mixBlendMode: 'overlay', opacity: 0.3 }}
        />
      </div>
      
      <div style={{ position: 'relative', zIndex: 10, height: '100%', display: 'flex', alignItems: 'center' }} className="container">
        <div className="animate-fade-in" style={{ maxWidth: '600px' }}>
          <h1 style={{ fontSize: '56px', fontWeight: 'bold', color: 'white', marginBottom: '24px', lineHeight: 1.1 }}>
            Discover
            <span style={{ display: 'block', color: 'hsl(45, 100%, 55%)' }}>Premium</span>
            Shopping
          </h1>
          
          <p style={{ fontSize: '20px', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '32px', maxWidth: '500px' }}>
            Explore thousands of products from top brands. Quality guaranteed, 
            fast delivery, and unbeatable prices.
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Button variant="hero" size="lg" style={{ fontSize: '18px', padding: '16px 32px' }}>
              Shop Now
            </Button>
            <Button variant="outline" size="lg" style={{ fontSize: '18px', padding: '16px 32px', background: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.3)', color: 'white' }}>
              View Categories
            </Button>
          </div>
          
          <div style={{ marginTop: '48px', display: 'flex', alignItems: 'center', gap: '32px', color: 'rgba(255, 255, 255, 0.8)' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: 'hsl(45, 100%, 55%)' }}>10M+</div>
              <div style={{ fontSize: '14px' }}>Products</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: 'hsl(45, 100%, 55%)' }}>500K+</div>
              <div style={{ fontSize: '14px' }}>Happy Customers</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: 'hsl(45, 100%, 55%)' }}>24/7</div>
              <div style={{ fontSize: '14px' }}>Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Category Grid Component
const CategoryGrid = () => {
  const categories = [
    { name: "Electronics", icon: Smartphone, color: "#3b82f6", products: "2.5K+ Products" },
    { name: "Computers", icon: Laptop, color: "#8b5cf6", products: "1.8K+ Products" },
    { name: "Audio", icon: Headphones, color: "#10b981", products: "890+ Products" },
    { name: "Watches", icon: Watch, color: "#f97316", products: "650+ Products" },
    { name: "Photography", icon: Camera, color: "#ef4444", products: "450+ Products" },
    { name: "Gaming", icon: Gamepad2, color: "#6366f1", products: "1.2K+ Products" },
    { name: "Fashion", icon: Shirt, color: "#ec4899", products: "3.1K+ Products" },
    { name: "Home", icon: Home, color: "#14b8a6", products: "1.5K+ Products" }
  ];

  return (
    <section style={{ padding: '64px 0', background: 'hsl(210, 40%, 98%)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 'bold', color: 'hsl(220, 20%, 15%)', marginBottom: '16px' }}>
            Shop by Category
          </h2>
          <p style={{ fontSize: '20px', color: 'hsl(220, 15%, 55%)', maxWidth: '600px', margin: '0 auto' }}>
            Discover amazing products across all categories with unbeatable deals
          </p>
        </div>
        
        <div className="grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={category.name} 
                style={{ 
                  cursor: 'pointer',
                  animationDelay: `${index * 100}ms`
                }}
              >
                <CardContent style={{ padding: '24px', textAlign: 'center' }}>
                  <div style={{ 
                    width: '64px', 
                    height: '64px', 
                    background: category.color, 
                    borderRadius: '16px', 
                    margin: '0 auto 16px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    transition: 'transform 0.3s'
                  }}>
                    <Icon style={{ width: '32px', height: '32px', color: 'white' }} />
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: '600', color: 'hsl(220, 20%, 15%)', marginBottom: '8px' }}>
                    {category.name}
                  </h3>
                  <p style={{ color: 'hsl(220, 15%, 55%)', fontSize: '14px' }}>
                    {category.products}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Product Card Component
const ProductCard = ({ 
  name, 
  price, 
  originalPrice, 
  rating, 
  reviews, 
  image, 
  category,
  isNew,
  onSale
}) => {
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <Card style={{ cursor: 'pointer', overflow: 'hidden' }}>
      <div style={{ position: 'relative' }}>
        <img 
          src={image} 
          alt={name}
          style={{ width: '100%', height: '256px', objectFit: 'cover', transition: 'transform 0.3s' }}
        />
        
        {/* Badges */}
        <div style={{ position: 'absolute', top: '12px', left: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {isNew && (
            <Badge variant="new">
              New
            </Badge>
          )}
          {onSale && discount > 0 && (
            <Badge variant="sale">
              -{discount}%
            </Badge>
          )}
        </div>

        {/* Actions */}
        <div style={{ position: 'absolute', top: '12px', right: '12px', display: 'flex', flexDirection: 'column', gap: '8px', opacity: 0, transition: 'opacity 0.3s' }}>
          <Button size="icon" variant="secondary" style={{ width: '32px', height: '32px', background: 'rgba(255, 255, 255, 0.9)' }}>
            <Heart style={{ width: '16px', height: '16px' }} />
          </Button>
        </div>

        {/* Quick Add */}
        <div style={{ position: 'absolute', bottom: '12px', left: '12px', right: '12px', opacity: 0, transition: 'opacity 0.3s' }}>
          <Button variant="cart" style={{ width: '100%' }}>
            <ShoppingCart style={{ width: '16px', height: '16px', marginRight: '8px' }} />
            Add to Cart
          </Button>
        </div>
      </div>

      <CardContent>
        <div style={{ fontSize: '14px', color: 'hsl(220, 15%, 55%)', marginBottom: '4px' }}>{category}</div>
        <h3 style={{ fontWeight: '600', color: 'hsl(220, 20%, 15%)', marginBottom: '8px', lineHeight: 1.4 }}>
          {name}
        </h3>
        
        {/* Rating */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '12px' }}>
          <div style={{ display: 'flex' }}>
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                style={{ 
                  width: '12px', 
                  height: '12px',
                  fill: i < Math.floor(rating) ? '#fbbf24' : 'none',
                  color: i < Math.floor(rating) ? '#fbbf24' : '#d1d5db'
                }}
              />
            ))}
          </div>
          <span style={{ fontSize: '12px', color: 'hsl(220, 15%, 55%)' }}>({reviews})</span>
        </div>

        {/* Price */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '18px', fontWeight: 'bold', color: 'hsl(220, 20%, 15%)' }}>
            ${price.toFixed(2)}
          </span>
          {originalPrice && (
            <span style={{ fontSize: '14px', color: 'hsl(220, 15%, 55%)', textDecoration: 'line-through' }}>
              ${originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

// Featured Products Component
const FeaturedProducts = () => {
  const featuredProducts = [
    {
      id: "1",
      name: "Wireless Bluetooth Headphones with Noise Cancelling",
      price: 149.99,
      originalPrice: 199.99,
      rating: 4.8,
      reviews: 2847,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
      category: "Audio",
      onSale: true
    },
    {
      id: "2", 
      name: "Smart Watch Series 8 with Health Monitoring",
      price: 399.99,
      rating: 4.9,
      reviews: 1943,
      image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=400&fit=crop",
      category: "Watches",
      isNew: true
    },
    {
      id: "3",
      name: "Premium Gaming Mechanical Keyboard RGB",
      price: 89.99,
      originalPrice: 129.99,
      rating: 4.7,
      reviews: 856,
      image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=400&fit=crop",
      category: "Gaming",
      onSale: true
    },
    {
      id: "4",
      name: "Professional DSLR Camera with 50mm Lens",
      price: 1299.99,
      rating: 4.9,
      reviews: 543,
      image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=400&fit=crop",
      category: "Photography",
      isNew: true
    },
    {
      id: "5",
      name: "Ultrabook Laptop 15.6 inch Intel i7",
      price: 899.99,
      originalPrice: 1199.99,
      rating: 4.6,
      reviews: 1287,
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
      category: "Computers",
      onSale: true
    },
    {
      id: "6",
      name: "Wireless Charging Pad Fast Charge 15W",
      price: 39.99,
      rating: 4.5,
      reviews: 692,
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=400&fit=crop",
      category: "Electronics"
    },
    {
      id: "7",
      name: "Premium Cotton T-Shirt Organic Material",
      price: 29.99,
      originalPrice: 49.99,
      rating: 4.4,
      reviews: 1834,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
      category: "Fashion",
      onSale: true
    },
    {
      id: "8",
      name: "Smart Home Speaker with Voice Assistant",
      price: 129.99,
      rating: 4.7,
      reviews: 2156,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      category: "Home",
      isNew: true
    }
  ];

  return (
    <section style={{ padding: '64px 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 'bold', color: 'hsl(220, 20%, 15%)', marginBottom: '16px' }}>
            Featured Products
          </h2>
          <p style={{ fontSize: '20px', color: 'hsl(220, 15%, 55%)', maxWidth: '600px', margin: '0 auto' }}>
            Handpicked products that our customers love most
          </p>
        </div>
        
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {featuredProducts.map((product, index) => (
            <div 
              key={product.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer style={{ background: 'hsl(210, 100%, 45%)', color: 'white' }}>
      <div className="container" style={{ padding: '48px 16px' }}>
        {/* Newsletter Section */}
        <div style={{ background: 'rgba(255, 255, 255, 0.1)', borderRadius: '16px', padding: '32px', marginBottom: '48px' }}>
          <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
            <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>Stay Updated</h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', marginBottom: '24px' }}>
              Subscribe to our newsletter and get exclusive deals and updates
            </p>
            <div style={{ display: 'flex', gap: '16px', maxWidth: '400px', margin: '0 auto' }}>
              <Input 
                placeholder="Enter your email" 
                style={{ background: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)', color: 'white' }}
              />
              <Button variant="secondary" style={{ background: 'hsl(45, 100%, 55%)', color: 'hsl(220, 20%, 15%)' }}>
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px', marginBottom: '32px' }}>
          {/* Company Info */}
          <div>
            <h4 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px', color: 'hsl(45, 100%, 55%)' }}>NovaShop</h4>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', marginBottom: '16px' }}>
              Your trusted online marketplace for premium products with fast delivery and excellent customer service.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <Phone style={{ width: '16px', height: '16px' }} />
              <span style={{ fontSize: '14px' }}>+1 (555) 123-4567</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <Mail style={{ width: '16px', height: '16px' }} />
              <span style={{ fontSize: '14px' }}>support@novashop.com</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <MapPin style={{ width: '16px', height: '16px' }} />
              <span style={{ fontSize: '14px' }}>123 Commerce St, NY 10001</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontWeight: '600', marginBottom: '16px' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {["About Us", "Contact", "FAQ", "Shipping Info", "Returns", "Size Guide"].map((link) => (
                <li key={link} style={{ marginBottom: '8px' }}>
                  <a href="#" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', fontSize: '14px' }}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 style={{ fontWeight: '600', marginBottom: '16px' }}>Categories</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {["Electronics", "Computers", "Audio", "Watches", "Gaming", "Fashion"].map((category) => (
                <li key={category} style={{ marginBottom: '8px' }}>
                  <a href="#" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', fontSize: '14px' }}>
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 style={{ fontWeight: '600', marginBottom: '16px' }}>Customer Service</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {["Help Center", "Track Order", "Return Policy", "Privacy Policy", "Terms of Service", "Warranty"].map((service) => (
                <li key={service} style={{ marginBottom: '8px' }}>
                  <a href="#" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', fontSize: '14px' }}>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.2)', paddingTop: '32px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
          <div style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '14px' }}>
            © 2024 NovaShop. All rights reserved.
          </div>
          
          {/* Social Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ fontSize: '14px' }}>Follow us:</span>
            <div style={{ display: 'flex', gap: '8px' }}>
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                <Button key={index} variant="ghost" size="icon" style={{ width: '32px', height: '32px', background: 'rgba(255, 255, 255, 0.1)' }}>
                  <Icon style={{ width: '16px', height: '16px' }} />
                </Button>
              ))}
            </div>
          </div>

          {/* Payment Methods */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '14px' }}>We accept:</span>
            <div style={{ display: 'flex', gap: '4px' }}>
              {["VISA", "MC", "AMEX", "PAYPAL"].map((method) => (
                <div key={method} style={{ background: 'rgba(255, 255, 255, 0.1)', padding: '4px 8px', borderRadius: '4px', fontSize: '12px' }}>
                  {method}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
const EcommerceApp = () => {
  return (
    <>
      <style>{baseStyles}</style>
      <div style={{ minHeight: '100vh', background: 'hsl(210, 20%, 98%)' }}>
        <Header />
        <Hero />
        <CategoryGrid />
        <FeaturedProducts />
        <Footer />
      </div>
    </>
  );
};

export default EcommerceApp;