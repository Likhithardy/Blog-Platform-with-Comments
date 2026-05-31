import "../app.css";

function Home() {

  const blogs = [

    {
      title: "The Future of AI",
      description:
        "Artificial Intelligence is transforming industries and daily life.",

      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995",

      fullText:
        "Artificial Intelligence is changing the future of healthcare, education, business and technology. AI helps companies automate tasks, improve productivity and create smarter applications for users around the world.",
    },

    {
      title: "Travel The World",
      description:
        "Explore amazing beaches, mountains and dream destinations.",

      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",

      fullText:
        "Traveling allows people to explore different cultures, foods and beautiful destinations. From beaches to snowy mountains, every journey creates unforgettable memories and exciting adventures.",
    },

    {
      title: "Modern Web Development",
      description:
        "Learn React, Node.js and modern UI design.",

      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085",

      fullText:
        "Modern web development focuses on responsive design, fast performance and interactive user experiences. Technologies like React and Node.js make websites more dynamic and powerful.",
    },

    {
      title: "Healthy Lifestyle",
      description:
        "Fitness, food and healthy habits for a better life.",

      image:
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061",

      fullText:
        "A healthy lifestyle includes balanced nutrition, regular exercise and proper sleep. Healthy habits improve mental health, increase energy and help people live happier lives.",
    },

    {
      title: "Photography Tips",
      description:
        "Master photography with simple professional techniques.",

      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",

      fullText:
        "Photography is an art that captures emotions and memories. Learning lighting, angles and editing techniques can help beginners take professional-quality photos.",
    },

    {
      title: "Startup Success",
      description:
        "How young entrepreneurs are building successful startups.",

      image:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902",

      fullText:
        "Successful startups focus on solving real-world problems with innovation and creativity. Young entrepreneurs use technology and smart marketing to grow businesses rapidly.",
    }

  ];

  return (

    <div>

      {/* NAVBAR */}

      <nav className="navbar">

        <h1 className="logo">
          Ritisha's Blog 🚀
        </h1>

        <div className="nav-links">

          <a href="/">Home</a>

          <a href="/">Blogs</a>

          <a href="/">Categories</a>

          <a href="/">Login</a>

        </div>

      </nav>

      {/* HERO SECTION */}

      <section className="hero">

        <div className="hero-content">

          <h1>
            Share Your Stories <br />
            With The World 🌍
          </h1>

          <p>
            Write blogs, inspire people and grow your audience.
          </p>

          <button
            className="hero-btn"
            onClick={() => {
              document
                .getElementById("write-section")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Start Writing
          </button>

        </div>

      </section>

      {/* BLOG SECTION */}

      <section className="blogs-section">

        <h2 className="section-title">
          Trending Blogs 🔥
        </h2>

        <div className="blog-grid">

          {blogs.map((blog, index) => (

            <div className="blog-card" key={index}>

              <img src={blog.image} alt="" />

              <div className="blog-content">

                <h3>{blog.title}</h3>

                <p>{blog.description}</p>

                <button
                  className="read-btn"
                  onClick={() =>
                    alert(
                      `${blog.title}\n\n${blog.fullText}\n\nThanks for reading on Ritisha's Blog 🚀`
                    )
                  }
                >
                  Read More
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* FEATURES */}

      <section className="features-section">

        <h2 className="section-title">
          Why Choose Ritisha's Blog?
        </h2>

        <div className="features-grid">

          <div className="feature-card">

            <h3>✍ Easy Writing</h3>

            <p>
              Create blogs quickly with a clean editor.
            </p>

          </div>

          <div className="feature-card">

            <h3>🌍 Global Audience</h3>

            <p>
              Reach readers from around the world.
            </p>

          </div>

          <div className="feature-card">

            <h3>🔥 Trending Topics</h3>

            <p>
              Discover the latest trends and ideas.
            </p>

          </div>

        </div>

      </section>

      {/* WRITE BLOG SECTION */}

      <section
        className="write-section"
        id="write-section"
      >

        <h2 className="section-title">
          Write Your Blog ✍
        </h2>

        <div className="write-container">

          <input
            type="text"
            placeholder="Enter Blog Title"
            className="blog-input"
          />

          <textarea
            placeholder="Write your amazing blog here..."
            className="blog-textarea"
          ></textarea>

          <button className="publish-btn">
            Publish Blog 🚀
          </button>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="footer">

        © 2026 Ritisha's Blog | Built with React 💙

      </footer>

    </div>
  );
}

export default Home;