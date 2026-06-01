import { profileData, technicalSkills } from '../data/portfolioData';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import '../styles/Profile.css';

function Profile() {
  return (
    <section className="profile">
      <div className="profile-container">
        <div className="profile-header">
          <div className="profile-intro">
            <div className="profile-avatar">
              <img src="/Profilepic.jpeg" alt={profileData.name} className="avatar-image" />
            </div>
            <div className="profile-hero">
              <span className="profile-pill">Full Stack Developer</span>
              <h1 className="profile-name">{profileData.name}</h1>
              <p className="profile-title">{profileData.title}</p>
              <p className="profile-tagline">{profileData.bio}</p>
              <div className="profile-meta">
                <div className="meta-item">
                  <strong>Location</strong>
                  <span>{profileData.location}</span>
                </div>
                <div className="meta-item">
                  <strong>Internship Ready</strong>
                  <span>2026</span>
                </div>
                <div className="meta-item">
                  <strong>Skills</strong>
                  <span>{profileData.skills.length}+</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="profile-content">
          <div className="profile-card profile-bio">
            <h2>About Me</h2>
            <p>{profileData.about}</p>
          </div>

          <div className="profile-card">
            <h3>Contact</h3>
            <div className="info-item">
              <span className="info-label">Email</span>
              <a href={`mailto:${profileData.email}`}>{profileData.email}</a>
            </div>
            <div className="info-item">
              <span className="info-label">Phone</span>
              <p>{profileData.phone}</p>
            </div>
            <div className="info-item">
              <span className="info-label">Location</span>
              <p>{profileData.location}</p>
            </div>
          </div>

          <div className="profile-card">
            <h3>Connect</h3>
            <div className="social-links profile-social">
              <a href={profileData.social.github} target="_blank" rel="noopener noreferrer" className="social-btn">
                <FaGithub /> GitHub
              </a>
              <a href={profileData.social.linkedin} target="_blank" rel="noopener noreferrer" className="social-btn">
                <FaLinkedin /> LinkedIn
              </a>
              <a href={profileData.social.leetcode} target="_blank" rel="noopener noreferrer" className="social-btn">
                <SiLeetcode /> LeetCode
              </a>
            </div>
          </div>

          <div className="profile-card">
            <h3>Skills</h3>
            <div className="skills-grid">
              {profileData.skills.map((skill, index) => (
                <span key={index} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="profile-card">
            <h3>Tools & Frameworks</h3>
            <div className="skills-grid">
              {technicalSkills.tools.map((tool, index) => (
                <span key={index} className="skill-tag">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
