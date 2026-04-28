import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import ProfileImg from './assets/profile.jpg'; // rename image simple ga petti use chey

function App() {
  const [resume, setResume] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5001/view')
      .then(res => {
        setResume(res.data.data || res.data);
      })
      .catch(err => console.error("Error fetching resume:", err));
  }, []);

  if (!resume) return <div className="loader">Loading Resume...</div>;

  return (
    <div className="resume-container">

      {/* HEADER */}
      <header className="header">
        <div className="header-left">
          <h1>{resume?.personalInfo?.name}</h1>
          <p className="role">Full Stack Developer</p>

          <div className="contact-details">
            <span>{resume?.personalInfo?.email}</span>
            <span> | {resume?.personalInfo?.mobile}</span>
          </div>

          <div className="links">
            <a href={`https://${resume?.personalInfo?.socials?.linkedin}`} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={`https://${resume?.personalInfo?.socials?.github}`} target="_blank" rel="noreferrer">GitHub</a>
            <a href={`https://${resume?.personalInfo?.socials?.portfolio}`} target="_blank" rel="noreferrer">Portfolio</a>
          </div>
        </div>

        <div className="header-right">
          <img src={ProfileImg} alt="profile" className="profile-photo" />
        </div>
      </header>

      {/* OBJECTIVE */}
      <section className="section">
        <h2 className="section-title">OBJECTIVE</h2>
        <p>
          {resume?.objective ||
            "Motivated Electronics and Communication Engineering graduate with strong skills in full-stack development, seeking an entry-level role to build scalable applications and solve real-world problems."}
        </p>
      </section>

      {/* SKILLS
      <section className="section">
        <h2 className="section-title">SKILLS</h2>

        <div className="skills-group">
          {resume?.skills?.languages?.map((skill, i) => (
            <span key={i} className="skill-tag">{skill}</span>
          ))}
          {resume?.skills?.webTech?.map((skill, i) => (
            <span key={i} className="skill-tag">{skill}</span>
          ))}
          {resume?.skills?.backend?.map((skill, i) => (
            <span key={i} className="skill-tag">{skill}</span>
          ))}
          {resume?.skills?.tools?.map((skill, i) => (
            <span key={i} className="skill-tag">{skill}</span>
          ))}
        </div>
      </section> */}

      {/* SKILLS */}
      <section className="section">
        <h2 className="section-title">SKILLS</h2>

        <div className="skills-list">

          <div className="skill-row">
            <strong>Programming Languages:</strong>
            <span>{resume?.skills?.languages?.join(", ")}</span>
          </div>

          <div className="skill-row">
            <strong>Web Technologies:</strong>
            <span>{resume?.skills?.webTech?.join(", ")}</span>
          </div>

          <div className="skill-row">
            <strong>Backend & Databases:</strong>
            <span>{resume?.skills?.backend?.join(", ")}</span>
          </div>

          <div className="skill-row">
            <strong>Developer Tools:</strong>
            <span>{resume?.skills?.tools?.join(", ")}</span>
          </div>

          <div className="skill-row">
            <strong>Core Concepts:</strong>
            <span>{resume?.skills?.coreConcepts?.join(", ")}</span>
          </div>

          <div className="skill-row">
            <strong>Soft Skills:</strong>
            <span>{resume?.skills?.softSkills?.join(", ")}</span>
          </div>

        </div>
      </section>

      {/* EDUCATION */}
      <section className="section">
        <h2 className="section-title">EDUCATION</h2>
        {resume?.education?.map((edu, i) => (
          <div key={i} className="entry">
            <div className="entry-header">
              <strong>{edu.degree} - {edu.institute}</strong>
              <span>{edu.duration}</span>
            </div>
            <p>Score: {edu.score}</p>
          </div>
        ))}
      </section>

      {/* EXPERIENCE */}
      <section className="section">
        <h2 className="section-title">EXPERIENCE</h2>
        {resume?.experience?.map((exp, i) => (
          <div key={i} className="entry">
            <div className="entry-header">
              <strong>{exp.title} - {exp.company}</strong>
              <span>{exp.duration}</span>
            </div>
            <p>{exp.description}</p>
          </div>
        ))}
      </section>

      {/* PROJECTS */}
      <section className="section">
        <h2 className="section-title">PROJECTS</h2>
        {resume?.projects?.map((proj, i) => (
          <div key={i} className="project-card">
            <h3>{proj.title}</h3>
            <p className="tech">TECH: {proj.tech.join(', ')}</p>
            <p>{proj.description}</p>
          </div>
        ))}
      </section>

      {/* ACHIEVEMENTS */}
      <section className="section">
        <h2 className="section-title">ACHIEVEMENTS</h2>
        <ul>
          <li>1st Prize in ECE Expo - IoT Sensor Automation System</li>
          <li>Smart India Hackathon 2024 Finalist</li>
        </ul>
      </section>

      {/* CERTIFICATIONS */}
      <section className="section">
        <h2 className="section-title">CERTIFICATIONS</h2>

        <ul className="certification-list">
          {resume?.certifications?.map((cert, i) => (
            <li key={i} className="certification-item">
              <span>
                <strong>{cert.title}</strong> — {cert.provider}
              </span>

              <a
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="cert-link"
              >
                Certificate
              </a>
            </li>
          ))}
        </ul>
      </section>
      {/* CODING PROFILES */}
      <section className="section">
        <h2 className="section-title">CODING PROFILES</h2>

        <ul>
          <li>
            CodeChef:{" "}
            <a
              href={resume?.codingProfiles?.codechef?.link}
              target="_blank"
              rel="noreferrer"
            >
              {resume?.codingProfiles?.codechef?.username}
            </a>
          </li>

          <li>
            LeetCode:{" "}
            <a
              href={resume?.codingProfiles?.leetcode?.link}
              target="_blank"
              rel="noreferrer"
            >
              {resume?.codingProfiles?.leetcode?.username}
            </a>
          </li>

          <li>
            GFG:{" "}
            <a
              href={resume?.codingProfiles?.gfg?.link}
              target="_blank"
              rel="noreferrer"
            >
              {resume?.codingProfiles?.gfg?.username}
            </a>
          </li>
        </ul>
      </section>

    </div>
  );
}

export default App;