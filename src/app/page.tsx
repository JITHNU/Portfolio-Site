"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import BackgroundParticles from "./BackgroundParticles";
import clsx from "clsx";
import { ArrowUp } from "lucide-react";
import Image from "next/image";


function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setIsVisible(true);
      else setIsVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </>
  );
}

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const isDark = theme === "dark";

  const toggleTheme = () => setTheme(isDark ? "light" : "dark");

  const skills = [
    { name: "Pro", value: 100 },
    { name: "Web", value: 100 },
    { name: "Tools", value: 90 },
    { name: "Libraries", value: 85 },
    { name: "Soft", value: 100 },
  ];

  const projects = [
    { 
      title: "Fruad Detection App with GNNs", 
      desc: "Built a fraud detection system using GraphSAGE (GNN) with a Streamlit web app for manual & bulk CSV predictions. Features include interactive visualizations (histogram, ROC curve, confusion matrix) and downloadable results.", 
      demo: "https://fraud-detection-k9th4vbrnxark9okngx2dx.streamlit.app/",
      tech: ["python", "streamlit", "pytorch", "pandas", "seaborn", "matplotlib", "NumPy", "GNNs"] 
    },
    { 
      title: "Sentiment Analysis Web App", 
      desc: "Developed a sentiment analysis web application using Streamlit and NLTK, trained a machine learning model to classify text sentiment, Integrated seaborn and matplotlib for data visualization, improving insights.", 
      demo: "https://jithnuka-sentimateapp.hf.space/",
      tech: ["python", "streamlit", "nltk", "nlp", "Scikit-learn", "matplotlib", "Seaborn", "pandas", "hugginface"] 
    },
    { 
      title: "Churn Prediction System", 
      desc: "Developed a machine learning-based customer churn prediction application for a telecom company to identify at-risk customers and optimize retention strategies.", 
      demo: "https://github.com/JITHNU/churn-api.git",
      tech: ["react", "javascript", "python", "sql", "machinelearning", "flask", "railway", "git"]
    },
    { 
      title: "Epic Talk – Official Podcast Website", 
      desc: "Designed and developed the official website for Epic Talk, a science-focused podcast platform. The site features engaging sections like psychology talks, university playlists, live discussion registration, and listener feedback.", 
      demo: "https://epictalk.kesug.com/?i=1",
      tech: ["html", "css", "javascript", "bootstrap", "php", "SQL", "git"]
    },
    { 
      title: "Movie Recommendation System", 
      desc: "Developed a personalised movie recommendation system that provides movie suggestions based on user preferences and historical data.", 
      demo: "https://movie-recommendation-bgmsvvqrrpzeeni7vwxxc5.streamlit.app/",
      tech: ["python", "jupyter", "streamlit", "google"]
    },
    { 
      title: "Time Series Sales Forecasting Dashboard – Power BI", 
      desc: "Designed and developed an interactive Power BI dashboard by cleaning retail sales data, applying built-in time series forecasting, and visualizing key metrics with filters, drill-throughs, and KPIs for dynamic trend analysis and presentation.", 
      demo: "https://app.powerbi.com/groups/me/reports/aa35d58d-c960-4044-89f6-3200062ebd3d?pbi_source=PowerPoint",
      tech: ["powerbi", "DAX", "datacleaning", "forecasting", "timeseries"]
    },
  ];


  const experiences = [
    { year: "2023 - 2026", role: "Bachelor of Science in Statistics & Computer Science", desc: "University of Kelaniya" },
    { year: "2023 - 2026", role: "Bachelor of Information Technology", desc: "University of Colombo School of Computing | Completed Diploma in IT" },
    { year: "2007 - 2021", role: "GCE Advanced Level-Physical Science Stream", desc: "Rahula College - Matara" },
    { year: "2024 - 2025", role: "Junior Treasurer", desc: "Statistics & Computer Science Students Association" },
    { year: "2024 - 2025", role: "Chairperson - Project Aduren Eliyata", desc: "Leo Club of University of Kelaniya" },
    { year: "2024 - 2025", role: "Treasurer - Project MediaSpark", desc: "Rotaract Club of University of Kelaniya" },
  ];

  return (
    <main
      className={clsx(
        "relative min-h-screen overflow-x-hidden",
        isDark ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      )}
    >
      {/* Background */}
      <BackgroundParticles />

      {/* Navbar */}
      <nav
        className={clsx(
          "fixed absolute top-0 left-0 w-full flex justify-between items-center px-6 py-2 z-20 backdrop-blur-md shadow-md transition-colors",
          isDark ? "bg-gray-900/90" : "bg-white"
        )}
      >
        <h1 className="text-xl font-bold tracking-wide text-gray-900 dark:text-cyan-400">Code. Learn. Innovate.</h1>
        <ul className="flex gap-6 items-center">
          <li><a href="#skills" className="hover:text-cyan-500">Skills</a></li>
          <li><a href="#projects" className="hover:text-cyan-500">Projects</a></li>
          <li><a href="#experience" className="hover:text-cyan-500">Education</a></li>
          <li><a href="#contact" className="hover:text-cyan-500">Contact</a></li>
          <li><a href="/Jithnuka_Weerasinghe_CV.pdf" download className="px-4 py-2 bg-cyan-500 text-white rounded-full shadow-md hover:bg-cyan-600 transition">Resume</a></li>
          <li>
            <motion.button
              onClick={toggleTheme}
              className={clsx(
                "w-9 h-9 rounded-full flex items-center justify-center transition-colors shadow-md",
                isDark ? "bg-gray-800 text-yellow-400" : "bg-yellow-400 text-gray-800"
              )}
              whileTap={{ rotate: 360 }}
              whileHover={{ scale: 1.1 }}
            >
              <AnimatePresence mode="wait">
                {isDark ? (
                  <motion.span key="moon" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    🌙
                  </motion.span>
                ) : (
                  <motion.span key="sun" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    ☀️
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </li>
        </ul>
      </nav>

      {/* Hero */}
      <section className="relative z-10 flex flex-col md:flex-row items-center justify-center min-h-screen px-40">
        <motion.div
          className="flex-1 flex flex-col items-center md:items-start text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4"><br></br><br></br>
            {`Hi, I'm `} <span className="text-cyan-500">Jithnuka Weerasinghe</span></h1>
          <h2 className={clsx("text-2xl md:text-3xl font-medium mb-6", isDark ? "text-gray-300" : "text-gray-700")}>
            <Typewriter
              words={["AI/ML Enthusiast", "Aspiring Data Scientist", "Web Devoloper", "Turning Data into Insights"]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>
          <p className={clsx("max-w-xl mb-6", isDark ? "text-gray-300" : "text-gray-700")}>
            I'm a dedicated 3rd year undergraduate student pursuing a degree in Statistics and Computer Science, with a
            strong passion for data science and software development. I enjoy uncovering insights from data and using
            technology to solve real-world problems. With a solid foundation in statistical modeling and programming.<br></br>
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <a href="#projects" className="px-6 py-3 bg-cyan-500 text-white font-semibold rounded-lg shadow hover:bg-cyan-600">
              View Projects
            </a>
            <a
              href="#contact"
              className={clsx(
                "px-6 py-3 rounded-lg border font-semibold",
                isDark ? "border-gray-400 hover:bg-gray-700" : "border-gray-400 hover:bg-gray-200"
              )}
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Image 
            src="/profile.jpg" 
            alt="Jithnuka" 
            width={256} 
            height={256} 
            className="rounded-full"
          />
        </motion.div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-10 px-1 max-w-6xl mx-auto text-center">
        <h2 className={`text-4xl font-bold mb-12 ${isDark ? "text-white" : "text-gray-900"}`}>Skills</h2>
        <div className="grid grid-cols-5 md:grid-cols-5 gap-5">
          {skills.map((skill) => (
            <div key={skill.name}>
              <CircularProgressbar
                value={skill.value}
                text={`${skill.name}`}
                styles={buildStyles({
                  pathColor: "#06b6d4",
                  textColor: isDark ? "#fff" : "#333",
                  trailColor: isDark ? "#555" : "#e0e0e0",
                })}
              />
            </div>
          ))}
        </div>
      </section>
          
      {/* Projects */}
      <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className={`text-4xl font-bold text-center mb-12 ${isDark ? "text-white" : "text-gray-900"}`}>Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((proj) => (
            <motion.div
              key={proj.title}
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(6,182,212,0.4)' }}
              className={`p-6 rounded-xl border ${isDark ? "bg-gray-800/50 border-gray-700" : "bg-white/40 border-gray-200"}`}
            >
              <h3 className={`text-2xl font-semibold mb-3 ${isDark ? "text-white" : "text-gray-900"}`}>{proj.title}</h3>
              <p className={`${isDark ? "text-gray-300" : "text-gray-700"} mb-3`}>{proj.desc}</p>
              <div className="flex gap-2 mt-2">
                {proj.tech.map((t) => (
                  <img
                    key={t}
                    src={`https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/${t.toLowerCase()}.svg`}
                    alt={t}
                    className="w-6 h-6"
                  />
                ))}
              </div>
              <a href={proj.demo} className="text-cyan-500 hover:underline mt-2 inline-block">
                Live Demo →
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className={`text-4xl font-bold text-center mb-12 ${isDark ? "text-white" : "text-gray-900"}`}>
          Education & Experience
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {experiences.map((exp) => (
            <motion.div
              key={exp.role}
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(6,182,212,0.4)' }}
              className={`flex-1 p-6 rounded-xl border shadow-md ${
                isDark ? "bg-gray-800/50 border-gray-700" : "bg-white/40 border-gray-200"
              }`}
            >
              <p className="text-cyan-500 font-semibold">{exp.year}</p>
              <h3 className={`text-xl font-bold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>{exp.role}</h3>
              <p className={isDark ? "text-gray-300" : "text-gray-700"}>{exp.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 text-center max-w-3xl mx-auto">
        <h2 className={`text-4xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}>Get in Touch</h2>
        <p className={isDark ? "text-gray-300" : "text-gray-700"}>
          Feel free to reach out via email or LinkedIn, or send me a message here!
        </p>

        <form
          className="flex flex-col gap-4 mt-6"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget as HTMLFormElement;
            const name = (form.elements.namedItem("name") as HTMLInputElement).value;
            const email = (form.elements.namedItem("email") as HTMLInputElement).value;
            const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

            window.location.href = `mailto:jithnukaweerasingha@gmail.com?subject=Message from ${name}&body=${encodeURIComponent(
              message + "\n\nFrom: " + email
            )}`;
          }}
        >
          <input type="text" name="name" placeholder="Your Name" required className="px-4 py-2 border rounded-lg" />
          <input type="email" name="email" placeholder="Your Email" required className="px-4 py-2 border rounded-lg" />
          <textarea name="message" placeholder="Your Message" rows={5} required className="px-4 py-2 border rounded-lg" />
          <button type="submit" className="px-6 py-3 bg-cyan-500 text-white font-semibold rounded-lg shadow hover:bg-cyan-400">
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer
        className={`py-3 text-center mt-10 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 ${
          isDark ? "text-gray-400 border-t border-gray-700" : "text-gray-500 border-t border-gray-200"
        }`}
      >
        <p>© {new Date().getFullYear()} Jithnuka Weerasinghe. All rights reserved. 🚀</p>

        <div className="flex gap-4 ">
          <a href="https://github.com/JITHNU" target="_blank" className="hover:text-cyan-500 transition-colors">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/github.svg" alt="GitHub" className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/jithnuka-weerasinghe/" target="_blank" className="hover:text-cyan-500 transition-colors">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
          </a>
          <a href="mailto:jithnukaweerasingha@gmail.com" className="hover:text-cyan-500 transition-colors">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/maildotru.svg" alt="Email" className="w-6 h-6" />
          </a>
          <a href="https://www.instagram.com/__.jithnuka.__?igsh=MXdncXBoczJpaTV2ZA%3D%3D&utm_source=qr" target="_blank" className="hover:text-cyan-500 transition-colors">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/instagram.svg" alt="Instagram" className="w-6 h-6" />
          </a>
          <a href="https://www.facebook.com/JithnukaWeerasinghe" target="_blank" className="hover:text-cyan-500 transition-colors">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/facebook.svg" alt="Facebook" className="w-6 h-6" />
          </a>
        </div>
      </footer>
      <ScrollToTop />
    </main>
  );
}
