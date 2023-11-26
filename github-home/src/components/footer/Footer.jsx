import React from "react";
import "./footer.styles.scss";

const Footer = () => {
  return (
    <>
      <div className="footer-section">
        <div className="footer-container">
          <div className="footer-left-content">
            <h1 className="github-footer">GitHub</h1>
            <p className="newsletter">Subscribe to our developer newsletter</p>

            <p className="tips">
              Get tips, technical guides, and best practices. Once a month.
              Right in your inbox.
            </p>
            <button className="subscribe-btn">Subscribe</button>
          </div>
          <div className="footer-right">
            <ul>
              <li>Products</li>
              <li>Feature</li>
              <li>Enterprise</li>
              <li>Developer API</li>
              <li>Partner</li>
              <li>Copilot</li>
              <li>Team</li>
              <li>Resourses</li>
              <li>ReadMaps</li>
              <li>Compare GitHub</li>
            </ul>

            <ul>
              <li>Platform</li>
              <li>Developer API</li>
              <li>Partner</li>
              <li>Electron</li>
              <li>GitHub Desktop</li>
              <li>Customer stories</li>
              <li>Blog</li>
            </ul>
            <ul>
              <li>Support</li>
              <li>Docs</li>
              <li>Premium Support</li>
              <li>Skill</li>
              <li>Status</li>
              <li>Developer API</li>
              <li>Partner</li>
            </ul>
            <ul>
              <li>Company</li>
              <li>About</li>

              <li>Careers</li>
              <li>Developer API</li>
              <li>Partner</li>
              <li>Customer stories</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-social">
        <div className="footer-left-social">
          <p>&copy; 2023 GitHub, Inc.</p>
          <p>Terms</p>
          <p>Privacy(Updated 08/2023)</p>
          <p> Sitemap</p>
          <p>What is Git?</p>
        </div>
        <div className="footer-right-social">
          <img src="https://github.githubassets.com/assets/x-023c3ca5e173.svg" alt="" />
          <img src="https://github.githubassets.com/assets/facebook-de85282d23e6.svg" alt="" />
          <img src="https://github.githubassets.com/assets/linkedin-3c0ace8edb5f.svg" alt="" />
          <img src="https://github.githubassets.com/assets/youtube-25bc21e924c8.svg" alt="" />
          <img src="https://github.githubassets.com/assets/twitch-e576606a89a7.svg" alt="" />
          <img src="https://github.githubassets.com/assets/tiktok-5d12d948d920.svg" alt="" />
          <img src="https://github.githubassets.com/assets/github-mark-9be88460eaa6.svg" alt="" />
        </div>
      </div>
    </>
  );
};

export default Footer;
