'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/Icon';
import './home.css';

/**
 * Format numbers for Followers display (e.g., 12500 -> "12.5K+")
 */
function formatFollowersCount(val) {
  if (val === undefined || val === null || val === '') return '12.5K+';
  if (typeof val === 'string') {
    if (val.includes('K') || val.includes('M') || val.includes('+')) return val;
    const parsed = parseInt(val.replace(/,/g, ''), 10);
    if (!isNaN(parsed) && parsed > 0) return formatFollowersCount(parsed);
    return val;
  }
  const num = typeof val === 'number' ? val : parseInt(val, 10);
  if (isNaN(num) || num <= 0) return '12.5K+';
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M+';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K+';
  }
  return num.toLocaleString('en-IN') + '+';
}

/**
 * Format numbers for Posts display (e.g., 156 -> "156")
 */
function formatPostsCount(val) {
  if (val === undefined || val === null || val === '') return '156';
  if (typeof val === 'string') return val;
  const num = typeof val === 'number' ? val : parseInt(val, 10);
  if (isNaN(num) || num <= 0) return '156';
  return num.toLocaleString('en-IN');
}

/**
 * Format timestamp into readable date
 */
function formatDate(timestamp) {
  if (!timestamp) return null;
  try {
    const d = new Date(timestamp);
    if (isNaN(d.getTime())) return null;
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  } catch (e) {
    return null;
  }
}

/**
 * Media Type Indicator Badge Icon
 */
function MediaTypeBadge({ mediaType }) {
  const type = (mediaType || '').toUpperCase();
  if (type === 'VIDEO' || type === 'REELS') {
    return (
      <div className="insta-post-badge" title="Video / Reel">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
    );
  }
  if (type === 'CAROUSEL_ALBUM') {
    return (
      <div className="insta-post-badge" title="Carousel Album">
        <Icon name="layers" size={14} />
      </div>
    );
  }
  return null;
}

export default function SocialProof() {
  const [data, setData] = useState({
    profile: {
      username: 'grandosolar',
      followers: 12500,
      posts: 156,
      profilePicture: '',
      profileUrl: 'https://www.instagram.com/grandosolar/',
    },
    media: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const fetchInstagramData = async () => {
      try {
        setLoading(true);
        setError(false);
        const res = await fetch('/api/instagram', {
          headers: { Accept: 'application/json' },
        });

        if (!res.ok) {
          throw new Error(`Instagram API returned HTTP status ${res.status}`);
        }

        const json = await res.json();
        if (isMounted) {
          if (json && (json.media || json.profile)) {
            setData({
              profile: {
                username: json.profile?.username || 'grandosolar',
                followers: json.profile?.followers ?? 12500,
                posts: json.profile?.posts ?? 156,
                profilePicture: json.profile?.profilePicture || '',
                profileUrl: json.profile?.profileUrl || 'https://www.instagram.com/grandosolar/',
              },
              media: Array.isArray(json.media) ? json.media : [],
            });
          }
        }
      } catch (err) {
        console.error('Error fetching Instagram data:', err);
        if (isMounted) {
          setError(true);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchInstagramData();

    return () => {
      isMounted = false;
    };
  }, []);

  const displayMedia = data.media.slice(0, 8);
  const followersFormatted = formatFollowersCount(data.profile.followers);
  const postsFormatted = formatPostsCount(data.profile.posts);

  return (
    <section className="section-sm pb-0" aria-label="Instagram Social Proof">
      <div className="container">
        <div className="insta-card reveal gap-0">
          {/* Header & Stats Section */}
          <div className="insta-card-header d-flex w-100 justify-content-between">
            <div>
              <span className="eyebrow">See our work</span>
              <h3 className="mt-2 mb-2">Real installs, real customers — on Instagram.</h3>
              <p className="mb-0" style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 520 }}>
                Follow @{data.profile.username} for site stories, reels from rooftops across Gujarat and customer testimonials.
              </p>
            </div>

            <div className="d-flex flex-wrap align-items-center gap-4">
              <div className="insta-stats">
                <div className="insta-stats-item">
                  <strong>{followersFormatted}</strong>
                  <span>Followers</span>
                </div>
                <div className="insta-stats-item">
                  <strong>{postsFormatted}</strong>
                  <span>Posts</span>
                </div>
              </div>
            </div>
          </div>

          {/* Posts Grid / Skeleton Loading / Fallback */}
          <div className="insta-posts-grid">
            {loading ? (
              // 8 Skeleton Cards while loading
              Array.from({ length: 8 }).map((_, idx) => (
                <div key={`skel-${idx}`} className="insta-skeleton-card" aria-hidden="true" />
              ))
            ) : error && displayMedia.length === 0 ? (
              // Fallback error state
              <div className="insta-fallback-container">
                <p className="mb-2" style={{ fontSize: '1rem', fontWeight: 600 }}>
                  Instagram updates are temporarily unavailable.
                </p>
                <p className="mb-0" style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)' }}>
                  You can still visit our profile directly to see our latest rooftop installations.
                </p>
              </div>
            ) : (
              // Latest 8 Instagram Posts
              displayMedia.map((post, idx) => {
                const dateStr = formatDate(post.timestamp);
                const captionText = post.caption || 'Grando Solar Instagram Post';
                const imageSrc = post.image || post.thumbnail || '/images/banner-1.png';

                return (
                  <a
                    key={post.id || `post-${idx}`}
                    href={post.permalink || 'https://www.instagram.com/grandosolar/'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="insta-post-card"
                    aria-label={`View Instagram post: ${captionText.slice(0, 60)}`}
                  >
                    <img
                      src={imageSrc}
                      alt={captionText.slice(0, 80)}
                      className="insta-post-img"
                      loading="lazy"
                    />

                    <MediaTypeBadge mediaType={post.mediaType} />

                    <div className="insta-post-overlay">
                      <p className="insta-post-caption">{captionText}</p>
                      <div className="insta-post-footer">
                        {dateStr ? <span>{dateStr}</span> : <span>@grandosolar</span>}
                        <Icon name="arrowUpRight" size={14} />
                      </div>
                    </div>
                  </a>
                );
              })
            )}
          </div>

          {/* Profile CTA Footer */}
          {/* <div className="insta-cta-footer">
            <div className="insta-cta-info">
              <Icon name="instagram" size={24} style={{ color: 'var(--gs-yellow)' }} />
              <div>
                <strong style={{ color: '#fff', fontSize: '0.95rem', display: 'block' }}>
                  Follow us on Instagram
                </strong>
                <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.82rem' }}>
                  @{data.profile.username}
                </span>
              </div>
            </div>
            <a
              href={data.profile.profileUrl || 'https://www.instagram.com/grandosolar/'}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gs"
              style={{ padding: '10px 20px', fontSize: '0.85rem' }}
            >
              Follow on Instagram
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
}

