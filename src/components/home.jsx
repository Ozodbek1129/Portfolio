import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Home() {
  return (
    <div>
      <Navbar />

      <div className="w-full flex items-center flex-col py-10 font-bold ">
        <div>
          <h2 className="text-5xl">I am Ozodbek Eminov </h2>
        </div>
        <div className="w-full flex justify-around my-10 px-5 max-lg:flex-col max-lg:items-center max-lg:gap-8">
          <div>
            <h2 id="about" className=" text-3xl flex justify-center">About me</h2>
            <p>
              Hello, my name is Ozodbek, my last name is Eminov, I am 22 years
              <br />
              old, my interests are computer technology and cars, I am also
              <br />
              interested in computer coding and driving, as well as repairing
              <br />
              them. due to my interest in programming, I joined Salvation
              <br />
              Education Training Center in December 2023 and attended Bootcamp
              <br />
              Foundation course for 5 months on C, Python, GitHub and MySql I
              <br />
              acquired basic knowledge, then 5 months from June 2024 on Backend
              <br />
              javaScript Node.js, I learned Expres.js, Nest.js, TypeScript,
              <br />
              PostgresSql, MongoDb I have been studying Frontend Html, Css,
              React
              <br />
              since November 2024
            </p>
          </div>

          <div>
            <h2 id="skills" className="text-3xl flex justify-center">Skills</h2>
            <ul>
              <li>
                <div className="flex gap-5">
                  <h2>Frontend:</h2>
                  <p>HTML, CSS, JavaScript, React,</p>
                </div>
              </li>
              <li>
                <div className="flex gap-5">
                  <h2>Backend:</h2>
                  <p>Node.js, Express.js, NestJS,</p>
                </div>
              </li>
              <li>
                <div className="flex gap-5">
                  <h2>Database:</h2>
                  <p>MySQL, PostgresSql, MongoDB</p>
                </div>
              </li>
              <li>
                <div className="flex gap-5">
                  <h2 className="text-2xl">+:</h2>
                  <p className="flex items-center">C, Python, Github </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="px-5">
          <h2 id="projects" className="text-3xl my-5 flex justify-center">Projects</h2>
          <ul className="grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
            <li className="px-5 py-5 border border-black rounded-xl">
              <img src="./src/imgas/todo.png" alt="img" />
              <a
                href="https://ozodbek-todo.netlify.app"
                target="_blank"
                className="text-2xl"
              >
                Todo
              </a>
              <p>Kundalik qilinadigon ishlarnirejalashtirish uchun</p>
            </li>
            <li className="px-5 py-5 border border-black rounded-xl">
              <img src="./src/imgas/onlyshop.png" alt="img" />
              <a
                href="https://ozodbek-react-router-dom.netlify.app"
                target="_blank"
                className="text-2xl"
              >
                Onlayn shop
              </a>
              <p>
                uydan chiqmagan holda sayt orqali mahsulotlarni buyurtma berish
              </p>
            </li>
            <li className="px-5 py-5 border border-black rounded-xl">
              <img src="./src/imgas/flag.png" alt="img" />
              <a
                href="https://ozodbek-flags.netlify.app"
                target="_blank"
                className="text-2xl"
              >
                Davlatlar haqida ma'lumotlar
              </a>

              <p>
                Bu sayit orqali dunyodagi davlatlar haqida ma'lumot olishingiz
                mumkin
              </p>
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
}
