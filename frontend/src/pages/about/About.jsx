import React from 'react';
import StoryImage from "../../images/acv.svg";
import Bhumi from "../../images/bhumiground.jpg";
import Team1 from "../../images/tm1.jpg";
import Team2 from "../../images/tm2.jpg";
import Team3 from "../../images/tm3.jpg";
import Team4 from "../../images/tm4.jpg";
import Team5 from "../../images/tm5.jpg";
import Team6 from "../../images/tm6.jpg";
import Team7 from "../../images/tm7.jpg";
import Team8 from "../../images/tm8.jpg";
import "./about.css";

const About = () => {
  return (
    <>
      <section className="about_achievement">
        <div className="container about_achievement-container">
          <div className="about_achievement-left">
            <img src={Bhumi} alt="" />
          </div>
          <div className="about_achievement-right">
            <h1>Achievements</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque veniam hic sint molestiae voluptatum assumenda, ratione repellat consequatur veritatis. Quidem eligendi vitae harum vero. Blanditiis optio consequuntur quo quidem veritatis.
            </p>
            <div className="achievement_cards">
              <article className="achievement_card">
                <span className="achievement_icon">
                  <i className="uil uil-video"></i>
                </span>
                <h3>450+</h3>
                <p>Courses</p>
              </article>

              <article className="achievement_card">
                <span className="achievement_icon">
                  <i className="uil uil-users-alt"></i>
                </span>
                <h3>79,000+</h3>
                <p>Students</p>
              </article>

              <article className="achievement_card">
                <span className="achievement_icon">
                  <i className="uil uil-trophy"></i>
                </span>
                <h3>26+</h3>
                <p>Awards</p>
              </article>
            </div>
          </div>
        </div>
      </section>
      <section class="team">
        <h2>Meet Our Teams</h2>
        <div class="container team_container">
            <article class="team_member">
                <div class="team_member-image">
                    <img src={Team1} alt="" />
                </div>
                <div class="team_member-info">
                    <h4>Shatte Tutor</h4>
                    <p>Expert Tutor</p>
                </div>
                <div class="team_member-socials">
                    <a href="https://instagram.com" target="_blank"><i class="uil uil-instagram"></i></a>
                    <a href="https://twitter.com" target="_blank"><i class="uil uil-twitter-alt"></i></a>
                    <a href="https://linkedin.com" target="_blank"><i class="uil uil-linkedin-alt"></i></a>
                </div>
            </article>

            <article class="team_member">
                <div class="team_member-image">
                   <img src={Team2} alt="" />
                </div>
                <div class="team_member-info">
                    <h4>Alice Brandon</h4>
                    <p>Expert Tutor</p>
                </div>
                <div class="team_member-socials">
                    <a href="https://instagram.com" target="_blank"><i class="uil uil-instagram"></i></a>
                    <a href="https://twitter.com" target="_blank"><i class="uil uil-twitter-alt"></i></a>
                    <a href="https://linkedin.com" target="_blank"><i class="uil uil-linkedin-alt"></i></a>
                </div>
            </article>

            <article class="team_member">
                <div class="team_member-image">
                    <img src={Team3} alt="" />
                </div>
                <div class="team_member-info">
                    <h4>Belle Brandon</h4>
                    <p>Expert Tutor</p>
                </div>
                <div class="team_member-socials">
                    <a href="https://instagram.com" target="_blank"><i class="uil uil-instagram"></i></a>
                    <a href="https://twitter.com" target="_blank"><i class="uil uil-twitter-alt"></i></a>
                    <a href="https://linkedin.com" target="_blank"><i class="uil uil-linkedin-alt"></i></a>
                </div>
            </article>

            <article class="team_member">
                <div class="team_member-image">
                    <img src={Team4} alt="" />
                </div>
                <div class="team_member-info">
                    <h4>Williams John</h4>
                    <p>Expert Tutor</p>
                </div>
                <div class="team_member-socials">
                    <a href="https://instagram.com" target="_blank"><i class="uil uil-instagram"></i></a>
                    <a href="https://twitter.com" target="_blank"><i class="uil uil-twitter-alt"></i></a>
                    <a href="https://linkedin.com" target="_blank"><i class="uil uil-linkedin-alt"></i></a>
                </div>
            </article>

            <article class="team_member">
                <div class="team_member-image">
                    <img src={Team5} alt="" />
                </div>
                <div class="team_member-info">
                    <h4>Jeniffer Lopez</h4>
                    <p>Expert Tutor</p>
                </div>
                <div class="team_member-socials">
                    <a href="https://instagram.com" target="_blank"><i class="uil uil-instagram"></i></a>
                    <a href="https://twitter.com" target="_blank"><i class="uil uil-twitter-alt"></i></a>
                    <a href="https://linkedin.com" target="_blank"><i class="uil uil-linkedin-alt"></i></a>
                </div>
            </article>

            <article class="team_member">
                <div class="team_member-image">
                   <img src={Team6} alt="" />
                </div>
                <div class="team_member-info">
                    <h4>Edward Cullen</h4>
                    <p>Expert Tutor</p>
                </div>
                <div class="team_member-socials">
                    <a href="https://instagram.com" target="_blank"><i class="uil uil-instagram"></i></a>
                    <a href="https://twitter.com" target="_blank"><i class="uil uil-twitter-alt"></i></a>
                    <a href="https://linkedin.com" target="_blank"><i class="uil uil-linkedin-alt"></i></a>
                </div>
            </article>

            <article class="team_member">
                <div class="team_member-image">
                   <img src={Team7} alt="" />
                </div>
                <div class="team_member-info">
                    <h4>Taylor Swift</h4>
                    <p>Expert Tutor</p>
                </div>
                <div class="team_member-socials">
                    <a href="https://instagram.com" target="_blank"><i class="uil uil-instagram"></i></a>
                    <a href="https://twitter.com" target="_blank"><i class="uil uil-twitter-alt"></i></a>
                    <a href="https://linkedin.com" target="_blank"><i class="uil uil-linkedin-alt"></i></a>
                </div>
            </article>

            <article class="team_member">
                <div class="team_member-image">
                    <img src={Team8} alt="" />
                </div>
                <div class="team_member-info">
                    <h4>John Doe</h4>
                    <p>Expert Tutor</p>
                </div>
                <div class="team_member-socials">
                    <a href="https://instagram.com" target="_blank"><i class="uil uil-instagram"></i></a>
                    <a href="https://twitter.com" target="_blank"><i class="uil uil-twitter-alt"></i></a>
                    <a href="https://linkedin.com" target="_blank"><i class="uil uil-linkedin-alt"></i></a>
                </div>
            </article>
        </div>
    </section>

      <section className="vision">
        <div className="container">
          <h2>Vision</h2>
          <p>
            To transform education and foster a socially conscious generation that actively contributes to the community.
          </p>
        </div>
      </section>

      <section className="mission">
        <div className="container">
          <h2>Mission</h2>
          <p>
            Our mission is to provide quality education and support to underprivileged children, empowering them to break the cycle of poverty and become change-makers in their communities.
          </p>
        </div>
      </section>

      <section className="values">
        <div className="container">
          <h2>Values</h2>
          <div className="values_list">
            <div className="value_item">
              <h3>Empowerment</h3>
              <p>Empowering individuals to realize their full potential and make a positive impact on society.</p>
            </div>
            <div className="value_item">
              <h3>Equality</h3>
              <p>Promoting equality and inclusivity in all aspects of education and opportunity.</p>
            </div>
            <div className="value_item">
              <h3>Community</h3>
              <p>Fostering a sense of belonging and collaboration within the community to create a supportive environment for learning and growth.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
