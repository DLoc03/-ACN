import React from "react";
import "./AboutUs.css";
import AboutUSImage from "../../assets/about-us-image.png";
import Top_Nav from "../top-nav/topNav";
import Footer from "../footer/footer";

export default function AboutUs() {
  return (
    <div className="aboutus-container">
      <div className="header">
        <Top_Nav />
      </div>
      <div className="aboutus-main">
        <div className="aboutus-title">About Us</div>
        <div className="aboutus-row">
          <div class="about-item">
            <div className="aboutus about-img">
              <img src={AboutUSImage} alt="AboutUs"></img>
            </div>
            <div className="aboutus about-side-content">
              <p>
                Welcome to our corner of tranquility amidst the misty highlands
                of Da Lat. We are passionate purveyors of the art of coffee,
                nestled in the heart of this picturesque town.
              </p>
              <h2>Our Story</h2>
              <p>
                Born from a love for both Da Lat's serene landscapes and the
                aromatic embrace of freshly brewed coffee, our journey began
                with a simple desire – to create a haven where people could
                unwind and savor the finer moments of life. With a blend of
                dedication and a sprinkle of creativity, we transformed this
                aspiration into reality.
              </p>
              <h2>What Sets Us Apart</h2>
              <p>
                In a city known for its enchanting scenery, we strive to stand
                out not just for our scenic locale, but for the unparalleled
                experience we offer. Each cup of coffee is crafted with
                precision and care, sourced from the finest beans meticulously
                selected to ensure every sip tantalizes the senses.{" "}
              </p>
            </div>
          </div>
          <div class=".post-about-item">
            <div>
              <h2>Our Philosophy</h2>
              <p>
                At our core lies a commitment to excellence, not just in the
                beverages we serve, but in the atmosphere we cultivate. Our
                space is more than just a café; it's a sanctuary where
                conversations flow freely, friendships blossom, and moments are
                cherished. We believe in fostering connections, whether it's
                between friends catching up over a cup of joe or travelers
                exchanging stories from their adventures.
              </p>
              <h2>Our Community</h2>
              <p>
                We are proud to be more than just a business – we are a part of
                the vibrant tapestry that is Da Lat. From supporting local
                artisans to championing sustainability practices, we are
                dedicated to giving back to the community that has welcomed us
                with open arms.
              </p>
              <h2>Join Us</h2>
              <p>
                So, whether you're a coffee aficionado seeking your next
                caffeine fix or a wanderer in search of a respite from the
                bustling streets, come join us in our pursuit of the perfect
                cup. Together, let's create moments to remember amidst the misty
                allure of Da Lat. Thank you for being a part of our story.
              </p>
              <p className="link-contact">
                <p className="link link-1">[Contact Information],</p>
                <p className="link link-2">[Social Media Links]</p>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
