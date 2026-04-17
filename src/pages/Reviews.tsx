import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface Review {
  id: string;
  author: string;
  email: string;
  rating: number;
  title: string;
  content: string;
  createdAt: string;
}

const Reviews: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState<{ name?: string; email: string } | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    rating: 5,
    content: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  // Load reviews and check login status on mount
  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);

    if (loggedIn) {
      const user = localStorage.getItem('currentUser');
      if (user) {
        setCurrentUser(JSON.parse(user));
      }
    }

    // Load reviews from localStorage
    const savedReviews = localStorage.getItem('reviews');
    if (savedReviews) {
      try {
        setReviews(JSON.parse(savedReviews));
      } catch (e) {
        console.error('Failed to load reviews:', e);
      }
    }
  }, []);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Review title is required';
    } else if (formData.title.trim().length < 5) {
      newErrors.title = 'Title must be at least 5 characters';
    }

    if (!formData.content.trim()) {
      newErrors.content = 'Review content is required';
    } else if (formData.content.trim().length < 10) {
      newErrors.content = 'Content must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 800));

      const newReview: Review = {
        id: Date.now().toString(),
        author: currentUser?.name || currentUser?.email || 'Anonymous',
        email: currentUser?.email || '',
        rating: formData.rating,
        title: formData.title,
        content: formData.content,
        createdAt: new Date().toISOString(),
      };

      const updatedReviews = [newReview, ...reviews];
      setReviews(updatedReviews);
      localStorage.setItem('reviews', JSON.stringify(updatedReviews));

      // Reset form
      setFormData({
        title: '',
        rating: 5,
        content: '',
      });
      setShowForm(false);
    } catch (error) {
      setErrors({ general: 'Failed to submit review. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteReview = (id: string) => {
    if (window.confirm('Are you sure you want to delete this review?')) {
      const updatedReviews = reviews.filter((review) => review.id !== id);
      setReviews(updatedReviews);
      localStorage.setItem('reviews', JSON.stringify(updatedReviews));
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const renderStars = (rating: number) => {
    return (
      <div style={{ display: 'flex', gap: '0.25rem' }}>
        {[1, 2, 3, 4, 5].map((star) => (
          <span key={star} style={{ color: star <= rating ? '#FFD700' : '#444', fontSize: '1.2rem' }}>
            ★
          </span>
        ))}
      </div>
    );
  };

  if (!isLoggedIn) {
    return (
      <div className="page reviews-page" style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 'calc(100vh - 140px)',
        padding: '2rem 1rem',
        textAlign: 'center',
      }}>
        <div style={{
          maxWidth: '500px',
          background: 'rgba(20, 20, 40, 0.8)',
          border: '1px solid rgba(0, 212, 255, 0.3)',
          borderRadius: '20px',
          padding: '3rem 2rem',
        }}>
          <h2 style={{
            fontSize: '2rem',
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, #00d4ff, #a855f7)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            🔒 Access Restricted
          </h2>
          <p style={{
            color: '#999',
            fontSize: '1.1rem',
            marginBottom: '2rem',
            lineHeight: '1.6',
          }}>
            You need to log in to view and write customer reviews.
          </p>
          <button
            onClick={() => navigate('/login')}
            style={{
              padding: '0.85rem 2rem',
              background: 'linear-gradient(135deg, #00d4ff, #a855f7)',
              border: 'none',
              borderRadius: '10px',
              color: 'white',
              fontWeight: 700,
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 8px 25px rgba(0, 212, 255, 0.3)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 12px 35px rgba(0, 212, 255, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 212, 255, 0.3)';
            }}
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="page reviews-page" style={{
      maxWidth: '1000px',
      margin: '0 auto',
      padding: '2rem 1rem',
    }}>
      {/* Header */}
      <div style={{
        textAlign: 'center',
        marginBottom: '3rem',
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: 900,
          marginBottom: '0.5rem',
          background: 'linear-gradient(135deg, #00d4ff, #a855f7)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          고객 계시판
        </h1>
        <p style={{
          color: '#999',
          fontSize: '1rem',
        }}>
          Our customers' valuable feedback and experiences
        </p>
      </div>

      {/* Write Review Button */}
      <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <button
          onClick={() => setShowForm(!showForm)}
          style={{
            padding: '0.75rem 2rem',
            background: showForm ? 'rgba(255, 68, 68, 0.2)' : 'linear-gradient(135deg, #00d4ff, #a855f7)',
            border: showForm ? '2px solid rgba(255, 68, 68, 0.5)' : 'none',
            borderRadius: '10px',
            color: showForm ? '#ff4444' : 'white',
            fontWeight: 700,
            fontSize: '1rem',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: !showForm ? '0 8px 25px rgba(0, 212, 255, 0.3)' : 'none',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          {showForm ? '✕ Cancel' : '✍️ Write a Review'}
        </button>
      </div>

      {/* Review Form */}
      {showForm && (
        <div style={{
          background: 'rgba(20, 20, 40, 0.8)',
          border: '1px solid rgba(0, 212, 255, 0.3)',
          borderRadius: '20px',
          padding: '2rem',
          marginBottom: '2rem',
        }}>
          <h3 style={{
            fontSize: '1.5rem',
            marginBottom: '1.5rem',
            color: '#00d4ff',
          }}>
            Share Your Experience
          </h3>

          <form onSubmit={handleSubmitReview}>
            {/* Title Field */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                color: '#e0e0e0',
                fontWeight: 600,
                fontSize: '0.95rem',
              }}>
                Review Title
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => {
                  setFormData({ ...formData, title: e.target.value });
                  if (errors.title) setErrors({ ...errors, title: '' });
                }}
                placeholder="e.g., Great learning experience!"
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  background: 'rgba(30, 30, 50, 0.6)',
                  border: errors.title ? '2px solid #ff4444' : '2px solid rgba(0, 212, 255, 0.3)',
                  borderRadius: '10px',
                  color: '#ffffff',
                  fontSize: '0.95rem',
                  boxSizing: 'border-box',
                  transition: 'all 0.3s ease',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#00d4ff';
                  e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 212, 255, 0.3)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                  if (!errors.title) {
                    e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.3)';
                  }
                }}
              />
              {errors.title && (
                <p style={{ color: '#ff4444', fontSize: '0.85rem', marginTop: '0.4rem' }}>
                  ⚠️ {errors.title}
                </p>
              )}
            </div>

            {/* Rating Field */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{
                display: 'block',
                marginBottom: '0.75rem',
                color: '#e0e0e0',
                fontWeight: 600,
                fontSize: '0.95rem',
              }}>
                Rating
              </label>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFormData({ ...formData, rating: star })}
                      style={{
                        fontSize: '2rem',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: star <= formData.rating ? '#FFD700' : '#444',
                        transition: 'all 0.2s ease',
                        transform: star <= formData.rating ? 'scale(1.2)' : 'scale(1)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.3)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = star <= formData.rating ? 'scale(1.2)' : 'scale(1)';
                      }}
                    >
                      ★
                    </button>
                  ))}
                </div>
                <span style={{ color: '#999', fontSize: '0.9rem' }}>
                  {formData.rating} out of 5
                </span>
              </div>
            </div>

            {/* Content Field */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                color: '#e0e0e0',
                fontWeight: 600,
                fontSize: '0.95rem',
              }}>
                Your Review
              </label>
              <textarea
                value={formData.content}
                onChange={(e) => {
                  setFormData({ ...formData, content: e.target.value });
                  if (errors.content) setErrors({ ...errors, content: '' });
                }}
                placeholder="Share your thoughts about our platform..."
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  background: 'rgba(30, 30, 50, 0.6)',
                  border: errors.content ? '2px solid #ff4444' : '2px solid rgba(0, 212, 255, 0.3)',
                  borderRadius: '10px',
                  color: '#ffffff',
                  fontSize: '0.95rem',
                  minHeight: '120px',
                  resize: 'vertical',
                  boxSizing: 'border-box',
                  transition: 'all 0.3s ease',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#00d4ff';
                  e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 212, 255, 0.3)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                  if (!errors.content) {
                    e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.3)';
                  }
                }}
              />
              {errors.content && (
                <p style={{ color: '#ff4444', fontSize: '0.85rem', marginTop: '0.4rem' }}>
                  ⚠️ {errors.content}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                width: '100%',
                padding: '0.85rem',
                background: isSubmitting
                  ? 'rgba(0, 212, 255, 0.3)'
                  : 'linear-gradient(135deg, #00d4ff, #a855f7)',
                border: 'none',
                borderRadius: '10px',
                color: 'white',
                fontWeight: 700,
                fontSize: '1rem',
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: !isSubmitting ? '0 8px 25px rgba(0, 212, 255, 0.3)' : 'none',
                opacity: isSubmitting ? 0.7 : 1,
              }}
              onMouseEnter={(e) => {
                if (!isSubmitting) {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 12px 35px rgba(0, 212, 255, 0.4)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isSubmitting) {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 212, 255, 0.3)';
                }
              }}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Review'}
            </button>
          </form>
        </div>
      )}

      {/* Reviews List */}
      <div style={{
        display: 'grid',
        gap: '1.5rem',
      }}>
        {reviews.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '3rem 1rem',
            color: '#999',
          }}>
            <p style={{ fontSize: '1.1rem' }}>No reviews yet. Be the first to share your experience! 🌟</p>
          </div>
        ) : (
          reviews.map((review) => (
            <div
              key={review.id}
              style={{
                background: 'rgba(20, 20, 40, 0.6)',
                border: '1px solid rgba(0, 212, 255, 0.2)',
                borderRadius: '15px',
                padding: '1.5rem',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = 'rgba(0, 212, 255, 0.5)';
                el.style.boxShadow = '0 8px 25px rgba(0, 212, 255, 0.1)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = 'rgba(0, 212, 255, 0.2)';
                el.style.boxShadow = 'none';
              }}
            >
              {/* Review Header */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'start',
                marginBottom: '1rem',
              }}>
                <div>
                  <h4 style={{
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    marginBottom: '0.5rem',
                    color: '#00d4ff',
                  }}>
                    {review.title}
                  </h4>
                  <p style={{
                    fontSize: '0.9rem',
                    color: '#999',
                    margin: 0,
                  }}>
                    by <strong>{review.author}</strong> • {formatDate(review.createdAt)}
                  </p>
                </div>
                {currentUser?.email === review.email && (
                  <button
                    onClick={() => handleDeleteReview(review.id)}
                    style={{
                      padding: '0.4rem 0.8rem',
                      background: 'rgba(255, 68, 68, 0.2)',
                      border: '1px solid rgba(255, 68, 68, 0.5)',
                      borderRadius: '6px',
                      color: '#ff4444',
                      cursor: 'pointer',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 68, 68, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 68, 68, 0.2)';
                    }}
                  >
                    Delete
                  </button>
                )}
              </div>

              {/* Rating */}
              <div style={{ marginBottom: '1rem' }}>
                {renderStars(review.rating)}
              </div>

              {/* Content */}
              <p style={{
                color: '#d0d0d0',
                lineHeight: '1.6',
                margin: 0,
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-word',
              }}>
                {review.content}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Reviews;
