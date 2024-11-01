import Image from "next/image";
import React from "react";
import Card from "./components/recent-post-card";

function HomePage() {
  return (
    <>
      <div className="hero-section">
        <div className="container">
          <div className="main">
            <div className="text-container">
              <h1 className="main-text">
                Hi, I am John, Creative Technologist
              </h1>
              <p className="main-para">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <button className="btn">Download Resume</button>
            </div>

            <div>
              <div className="mb-10">
                <Image
                  src="/assets/images/image.jpg"
                  width={300}
                  height={300}
                  
                  alt="Hero"
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="recent-post">
        <div className="container">
          <div className="main">
            <div className="heading">
              <h3>Recent Post</h3>
              <button className="view-btn">View All</button>
            </div>

            <div className="card-parent">
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </div>

      <div className="featured-section">
        <div className=" container">
          <div className="main">
            <div className="main-heading">
              <h3>Featured Works</h3>
            </div>

            <div className="card-parent">
              <div className="card">
                <Image
                  src="/assets/images/Rectangle 30.jpg"
                  width={245}
                  height={180}
                  alt="Featured 1"
                ></Image>
                <div className="card-content">
                  <h2>Designing Dashboards</h2>

                  <div className="badge-parent">
                    <div className="badge">
                      <p>2020</p>
                    </div>
                    <p>Dashboard</p>
                  </div>
                  <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
              </div>

              <div className="card">
                <Image
                  src="/assets/images/Rectangle 32.jpg"
                  width={245}
                  height={180}
                  alt="Featured 1"
                ></Image>
                <div className="card-content">
                  <h2>Designing Dashboards</h2>

                  <div className="badge-parent">
                    <div className="badge">
                      <p>2020</p>
                    </div>
                    <p>Dashboard</p>
                  </div>
                  <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
              </div>

              <div className="card">
                <Image
                  src="/assets/images/Rectangle 34.jpg"
                  width={245}
                  height={180}
                  alt="Featured 1"
                ></Image>
                <div className="card-content">
                  <h2>Designing Dashboards</h2>

                  <div className="badge-parent">
                    <div className="badge">
                      <p>2020</p>
                    </div>
                    <p>Dashboard</p>
                  </div>
                  <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
