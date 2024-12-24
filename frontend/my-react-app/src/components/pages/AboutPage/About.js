import React from 'react';
import './About.css'; // Import the CSS for styling
import Portfolio_notegg from '/app/src/components/EasterEgg/Portfolio_notegg';

function About() {
  return (
    <div className="about-page-container">
      {/* About Section */}
      <div className="about-content">
        <h1 className="about-main-header orbitron-font">About ProxyAuthRequired</h1>

        
        <section className="about-intro">
          <p>
            ProxyAuthRequired is your personal launchpad into the realm of cybersecurity, combining a variety of tools—like analogy-driven explanations, daily emails, targeted test questions, and well-organized study materials—into one cohesive platform. Designed by Carter, an integration tech at Sealing Tech who thrives on making hard concepts understandable, ProxyAuthRequired encourages learners to explore content on their own terms. With its fusion of practical learning and interactive experiences, you'll move beyond rote memorization to truly grasp the why behind cybersecurity practices.
          </p>
          <p>
            The result is a fun, immersive environment where theory meets real-world practice, ensuring you grow from curious beginner to confident professional.
          </p>
        </section>

        {/* Tools Section */}
        <section className="about-tools">
          <div className="tool-column">
            <div className="tool-card">
              <h3>Xploitcraft</h3>
              <p>Xploitcraft allows you to specify a vulnerability and an evasion technique, then generates a realistic payload that attackers might use. By seeing this code in action, you gain insight into the logic and methods behind sophisticated exploits.</p>
            </div>
            <div className="tool-card">
              <h3>Log Analysis</h3>
              <p>Log Analysis equips you with the tools to interpret raw system logs and spot hidden patterns. You can dive into simulated logs, tweak complexity settings, and uncover suspicious activities that hint at breaches or policy violations. By practicing on varied datasets, you develop the skill to sift through noise, identify critical events, and piece together a coherent timeline of incidents. Over multiple sessions, you’ll refine your investigative techniques, learn which anomalies to flag, and how to draw meaningful conclusions.</p>
            </div>
          </div>

          <div className="tool-column">
            <div className="tool-card">
              <h3>AnalogyHub</h3>
              <p>AnalogyHub takes the complex world of cybersecurity and translates it into vivid, relatable metaphors. Instead of wading through dense technical jargon, you’ll discover comparisons that turn complicated protocols into familiar concepts—like comparing cryptography keys to house keys, or firewalls to castle walls. Each analogy aims to clarify, entertain, and embed the lesson into your memory. As you explore more metaphors, you’ll find it easier to understand advanced topics like zero-trust architectures or network segmentation.</p>
            </div>
            <div className="tool-card">
              <h3>GRC Wizard</h3>
              <p>GRC Wizard demystifies Governance, Risk, and Compliance frameworks, guiding you step-by-step through complex policies and standards. You can specify difficulty levels and choose particular frameworks—or let it pick one at random—to generate a focused test question. By tackling these questions, you’ll learn how to navigate regulatory mandates, implement controls, and manage risks efficiently. </p>
            </div>
          </div>


          <div className="tool-column">
            <div className="tool-card">
              <h3>Scenario Sphere</h3>
              <p>Scenario Sphere transports you into a tailored cybersecurity incident, letting you pick the threat type, skill level, and even the style of attack you want to face. Once set, it generates a realistic scenario that immerses you in the crisis, compelling you to think critically. After presenting the context, it provides four thought-provoking test questions, ensuring you truly internalize the lesson. By solving these scenario-based challenges, you sharpen your decision-making and adaptability under pressure.</p>
            </div>
            <div className="tool-card">
              <h3>Daily Cyber Brief</h3>
              <p>Daily Cyber Brief delivers curated cybersecurity news, updates, CompTIA objectives, and best practices straight to your inbox each morning. Its concise format ensures you stay informed without feeling overwhelmed—just enough to keep you aware of evolving threats and defenses. By regularly receiving these summaries, you’ll maintain a steady awareness of industry shifts, from newly discovered vulnerabilities to emerging compliance requirements.</p>
            </div>
          </div>
        </section>


        <section className="about-certifications">
          <div className="certifications-list">
            <div>
              <h3>Current Certifications ---</h3>
              <ul>
                <li>CompTIA A+</li>
                <li>CompTIA Network+</li>
                <li>CompTIA Security+</li>
                <li>CompTIA CySa+</li>
                <li>CompTIA Pentest+</li>
                <li>CompTIA CASP+</li>
                <li>Python PCEP</li>
              </ul>
            </div>
            <div>
              <h3> --- In Progress/Up Next</h3>
              <ul>
                <li>CISSP</li>
                <li>OSCP</li>
                <li>OSWA</li>
                <li>OSWE</li>
                <li>OSEP</li>
                <li>OSMR</li>
                <li>OSED</li>
              </ul>
            </div>
          </div>
        </section>


        <section className="about-links">
          <h2 className="links-title">Links</h2>
          <div className="links-container">
            <p>
              <strong className="github-title">GitHub:</strong> 
              <a className="repository-link" href="https://github.com/Yoshi2003/ProxyAuthRequired" target="_blank" rel="noopener noreferrer">Repository</a>
            </p>
            <p>
              <strong className="linkedin-title">LinkedIn:</strong> 
              <a className="linkedin-link" href="https://www.linkedin.com/in/carter-perez-ProxyAuthRequired/" target="_blank" rel="noopener noreferrer">Carter's LinkedIn</a>
            </p>
          </div>
        </section>

        {/* About Carter Section */}
        <section className="about-carter">
          <h2 className="carter-title">About Carter</h2>
          <p className="carter-description">
            I am a 21-year-old Integration Technician at Sealing Tech, driven by a passion for making cybersecurity learning accessible and enjoyable. Formerly a general manager in the fast-food industry just one year ago, I’ve since changed paths and am now pursuing a master’s degree in Cybersecurity at UMGC. I draw inspiration from my favorite show, Mr. Robot, which is the theme of this webiste. Ouside of work I enjoy studying for certifcations and a hopbby of mine is to speedrun them as it chlannges me. I also enjoy learnbing new things such as programminga dn web design, aswell as coding prgrams to streamline my daily life, As I move toward becoming a cybersecurity analyst, then a penetration tester, I hope to onde day step into  CTOP role or start my own cyber secuirty company.
          </p>
        </section>

        {/* Contact Section */}
        <section className="contact-section pulse-on-hover">
          <h2 className="section-title-glitch">Contact</h2>
          <p>Phone: <span className="purple-text">443-510-0866</span></p>
          <p>
            Email: 
            <a 
              href="mailto:CarterPerez-dev@ProxyAuthRequired.com"
              className="custom-email-link"
            >
              CarterPerez-dev@ProxyAuthRequired.com
            </a>
          </p>
        </section>

        {/* ReadMe Section */}
        <section className="readme-section pulse-on-hover">
          <h2 className="section-title-glitch">ReadMe</h2>
          <div className="readme-links">
            <a href="#" target="_blank" rel="noopener noreferrer">README.md </a>
            <a href="#" target="_blank" rel="noopener noreferrer">AWS.md </a>
            <a href="#" target="_blank" rel="noopener noreferrer">INSTALL.md </a>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="portfolio-section">
          <h2 className="section-title-glitch ">Portfolio</h2>
          <p>
            Check out my{" "}
            <a href="/Portfolio_notegg" target="_blank" rel="noopener noreferrer">
              Portfolio
            </a> 
          </p>
        </section>
      </div>

      <footer className="about-footer">
        <p>© 2025 ProxyAuthRequired. Developed and Designed by Carter Perez.</p>
      </footer>
    </div>
  );
}

export default About;

