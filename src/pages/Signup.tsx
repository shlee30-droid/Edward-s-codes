import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    } else if (!/[A-Z]/.test(formData.password)) {
      newErrors.password = 'Password must contain at least one uppercase letter';
    } else if (!/[0-9]/.test(formData.password)) {
      newErrors.password = 'Password must contain at least one number';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
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
        name: formData.name,
        email: formData.email,
        createdAt: new Date().toISOString(),
      };
      localStorage.setItem('currentUser', JSON.stringify(user));
      localStorage.setItem('isLoggedIn', 'true');

      // Redirect to home page
      navigate('/');
    } catch (error) {
      setErrors({ general: 'Signup failed. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const passwordStrength = () => {
    let strength = 0;
    if (formData.password.length >= 8) strength++;
    if (/[A-Z]/.test(formData.password)) strength++;
    if (/[0-9]/.test(formData.password)) strength++;
    if (/[!@#$%^&*]/.test(formData.password)) strength++;
    return strength;
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
        maxWidth: '480px',
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
            Join Us Today
          </h1>
          <p style={{
            color: '#999',
            fontSize: '0.95rem',
          }}>
            Create your account to start learning
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ marginBottom: '1.5rem' }}>
          {/* Name Field */}
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{
              display: 'block',
              marginBottom: '0.5rem',
              color: '#e0e0e0',
              fontWeight: 600,
              fontSize: '0.95rem',
            }}>
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                background: 'rgba(30, 30, 50, 0.6)',
                border: errors.name ? '2px solid #ff4444' : '2px solid rgba(0, 212, 255, 0.3)',
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
                if (!errors.name) {
                  e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.3)';
                }
              }}
            />
            {errors.name && (
              <p style={{
                color: '#ff4444',
                fontSize: '0.85rem',
                marginTop: '0.4rem',
              }}>
                ⚠️ {errors.name}
              </p>
            )}
          </div>

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
              name="email"
              value={formData.email}
              onChange={handleChange}
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
              name="password"
              value={formData.password}
              onChange={handleChange}
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
            {formData.password && (
              <div style={{ marginTop: '0.5rem' }}>
                <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '0.25rem' }}>
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      style={{
                        height: '4px',
                        flex: 1,
                        background: i <= passwordStrength() ? '#00d4ff' : 'rgba(255, 255, 255, 0.1)',
                        borderRadius: '2px',
                        transition: 'background 0.3s ease',
                      }}
                    />
                  ))}
                </div>
                <p style={{
                  fontSize: '0.75rem',
                  color: passwordStrength() < 3 ? '#ff8844' : '#00d4ff',
                }}>
                  {passwordStrength() < 2 && 'Weak'}
                  {passwordStrength() === 2 && 'Fair'}
                  {passwordStrength() === 3 && 'Good'}
                  {passwordStrength() === 4 && 'Strong'} password
                </p>
              </div>
            )}
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

          {/* Confirm Password Field */}
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{
              display: 'block',
              marginBottom: '0.5rem',
              color: '#e0e0e0',
              fontWeight: 600,
              fontSize: '0.95rem',
            }}>
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="••••••••"
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                background: 'rgba(30, 30, 50, 0.6)',
                border: errors.confirmPassword ? '2px solid #ff4444' : '2px solid rgba(0, 212, 255, 0.3)',
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
                if (!errors.confirmPassword) {
                  e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.3)';
                }
              }}
            />
            {errors.confirmPassword && (
              <p style={{
                color: '#ff4444',
                fontSize: '0.85rem',
                marginTop: '0.4rem',
              }}>
                ⚠️ {errors.confirmPassword}
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

          {/* Signup Button */}
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
            {isLoading ? 'Creating Account...' : 'Create Account'}
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
            Already have an account?
          </span>
          <div style={{
            flex: 1,
            height: '1px',
            background: 'rgba(255, 255, 255, 0.1)',
          }} />
        </div>

        {/* Login Link */}
        <Link to="/login" style={{
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
          Sign In
        </Link>

        {/* Footer */}
        <p style={{
          textAlign: 'center',
          marginTop: '1.5rem',
          fontSize: '0.85rem',
          color: '#666',
        }}>
          By creating an account, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default Signup;
