import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string; general?: string }>({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors: { email?: string; password?: string } = {};

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Store user data in localStorage
      const user = {
        email,
        loginTime: new Date().toISOString(),
      };
      localStorage.setItem('currentUser', JSON.stringify(user));
      localStorage.setItem('isLoggedIn', 'true');

      // Redirect to home page
      navigate('/');
    } catch (error) {
      setErrors({ general: 'Login failed. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="page auth-page" style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: 'calc(100vh - 140px)',
      padding: '2rem 1rem',
    }}>
      <div style={{
        width: '100%',
        maxWidth: '420px',
        background: 'rgba(20, 20, 40, 0.8)',
        border: '1px solid rgba(0, 212, 255, 0.3)',
        borderRadius: '20px',
        padding: '2.5rem',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(10px)',
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1 style={{
            fontSize: '2rem',
            fontWeight: 900,
            marginBottom: '0.5rem',
            background: 'linear-gradient(135deg, #00d4ff, #a855f7)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Welcome Back
          </h1>
          <p style={{
            color: '#999',
            fontSize: '0.95rem',
          }}>
            Sign in to access your learning journey
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ marginBottom: '1.5rem' }}>
          {/* Email Field */}
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{
              display: 'block',
              marginBottom: '0.5rem',
              color: '#e0e0e0',
              fontWeight: 600,
              fontSize: '0.95rem',
            }}>
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errors.email) {
                  setErrors({ ...errors, email: undefined });
                }
              }}
              placeholder="you@example.com"
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                background: 'rgba(30, 30, 50, 0.6)',
                border: errors.email ? '2px solid #ff4444' : '2px solid rgba(0, 212, 255, 0.3)',
                borderRadius: '10px',
                color: '#ffffff',
                fontSize: '0.95rem',
                transition: 'all 0.3s ease',
                boxSizing: 'border-box',
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = '#00d4ff';
                e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 212, 255, 0.3)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                if (!errors.email) {
                  e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.3)';
                }
              }}
            />
            {errors.email && (
              <p style={{
                color: '#ff4444',
                fontSize: '0.85rem',
                marginTop: '0.4rem',
              }}>
                ⚠️ {errors.email}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{
              display: 'block',
              marginBottom: '0.5rem',
              color: '#e0e0e0',
              fontWeight: 600,
              fontSize: '0.95rem',
            }}>
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (errors.password) {
                  setErrors({ ...errors, password: undefined });
                }
              }}
              placeholder="••••••••"
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                background: 'rgba(30, 30, 50, 0.6)',
                border: errors.password ? '2px solid #ff4444' : '2px solid rgba(0, 212, 255, 0.3)',
                borderRadius: '10px',
                color: '#ffffff',
                fontSize: '0.95rem',
                transition: 'all 0.3s ease',
                boxSizing: 'border-box',
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = '#00d4ff';
                e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 212, 255, 0.3)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                if (!errors.password) {
                  e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.3)';
                }
              }}
            />
            {errors.password && (
              <p style={{
                color: '#ff4444',
                fontSize: '0.85rem',
                marginTop: '0.4rem',
              }}>
                ⚠️ {errors.password}
              </p>
            )}
          </div>

          {/* General Error */}
          {errors.general && (
            <div style={{
              background: 'rgba(255, 68, 68, 0.1)',
              border: '1px solid rgba(255, 68, 68, 0.3)',
              borderRadius: '8px',
              padding: '0.75rem 1rem',
              marginBottom: '1rem',
              color: '#ff4444',
              fontSize: '0.9rem',
            }}>
              {errors.general}
            </div>
          )}

          {/* Login Button */}
          <button
            type="submit"
            disabled={isLoading}
            style={{
              width: '100%',
              padding: '0.85rem',
              background: isLoading
                ? 'rgba(0, 212, 255, 0.3)'
                : 'linear-gradient(135deg, #00d4ff, #a855f7)',
              border: 'none',
              borderRadius: '10px',
              color: 'white',
              fontWeight: 700,
              fontSize: '1rem',
              cursor: isLoading ? 'not-allowed' : 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: !isLoading ? '0 8px 25px rgba(0, 212, 255, 0.3)' : 'none',
              opacity: isLoading ? 0.7 : 1,
            }}
            onMouseEnter={(e) => {
              if (!isLoading) {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 12px 35px rgba(0, 212, 255, 0.4)';
              }
            }}
            onMouseLeave={(e) => {
              if (!isLoading) {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 212, 255, 0.3)';
              }
            }}
          >
            {isLoading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        {/* Divider */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          margin: '1.5rem 0',
        }}>
          <div style={{
            flex: 1,
            height: '1px',
            background: 'rgba(255, 255, 255, 0.1)',
          }} />
          <span style={{
            color: '#999',
            fontSize: '0.85rem',
            whiteSpace: 'nowrap',
          }}>
            New User?
          </span>
          <div style={{
            flex: 1,
            height: '1px',
            background: 'rgba(255, 255, 255, 0.1)',
          }} />
        </div>

        {/* Signup Link */}
        <Link to="/signup" style={{
          display: 'block',
          width: '100%',
          padding: '0.85rem',
          background: 'rgba(168, 85, 247, 0.2)',
          border: '2px solid rgba(168, 85, 247, 0.5)',
          borderRadius: '10px',
          color: '#a855f7',
          textDecoration: 'none',
          fontWeight: 600,
          fontSize: '1rem',
          textAlign: 'center',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
        }}
          onMouseEnter={(e) => {
            const el = e.currentTarget;
            el.style.background = 'rgba(168, 85, 247, 0.3)';
            el.style.borderColor = '#a855f7';
            el.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget;
            el.style.background = 'rgba(168, 85, 247, 0.2)';
            el.style.borderColor = 'rgba(168, 85, 247, 0.5)';
            el.style.transform = 'translateY(0)';
          }}
        >
          Create Account
        </Link>

        {/* Footer */}
        <p style={{
          textAlign: 'center',
          marginTop: '1.5rem',
          fontSize: '0.85rem',
          color: '#666',
        }}>
          By signing in, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default Login;
