'use client';
import { useState } from 'react';
import SectionHeader from '@/components/ui/SectionHeader';
import './home.css'; 

const RESIDENTIAL_VIDEOS = [
  { id: 'res-1', label: '', src: "/images/r-1.mp4" },
  { id: 'res-2', label: '', src: "/images/r-2.mp4" },
  { id: 'res-3', label: '', src: "/images/r-3.mp4" },
  { id: 'res-4', label: '', src: "/images/r-4.mp4" },
];

export default function ResidentialProjects() {
  // Only one video can be unmuted at a time; null = all muted
  const [unmuteId, setUnmuteId] = useState(null);

  const toggleMute = (id) => {
    setUnmuteId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="section-sm" id="residential-projects">
      <div className="container">
        <SectionHeader
          tag="Residential Projects"
          title="Rooftop solar for homes across Gujarat."
          accent={['homes']}
          lead="PM Surya Ghar-approved installations for individual homes, bungalows and villas — zero hassle, fully handled."
          align="center"
        />
        <div className="video-grid-row mt-5 reveal">
          {RESIDENTIAL_VIDEOS.map((v) => {
            const isUnmuted = unmuteId === v.id;
            return (
              <div key={v.id} className="video-placeholder-card">
                {v.src ? (
                  <>
                    <video
                      src={v.src}
                      className="video-bg"
                      autoPlay
                      muted={!isUnmuted}
                      loop
                      playsInline
                    />
                    {/* Mute / Unmute toggle button */}
                    <button
                      className={`video-mute-btn${isUnmuted ? ' unmuted' : ''}`}
                      onClick={() => toggleMute(v.id)}
                      aria-label={isUnmuted ? 'Mute video' : 'Unmute video'}
                      title={isUnmuted ? 'Mute' : 'Unmute'}
                    >
                      {isUnmuted ? (
                        /* Speaker ON icon */
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                          <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                          <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                        </svg>
                      ) : (
                        /* Speaker OFF / muted icon */
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                          <line x1="23" y1="9" x2="17" y2="15" />
                          <line x1="17" y1="9" x2="23" y2="15" />
                        </svg>
                      )}
                    </button>
                  </>
                ) : (
                  <div className="video-play-icon">
                    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                      <circle cx="22" cy="22" r="22" fill="rgba(255,255,255,0.15)" />
                      <circle cx="22" cy="22" r="18" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                      <polygon points="18,14 32,22 18,30" fill="#F5C518" />
                    </svg>
                  </div>
                )}
                <div className="video-label">{v.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
