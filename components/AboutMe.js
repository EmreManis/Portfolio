import Link from "next/link";
import Image from "next/image";

import tatilbudur from "../public/tatilbudur.jpg";
import rocknride from "../public/rocknride.png";
import alparslan_kulakac from "../public/alparslan_kulakac.jpg";

const AboutMe = () => {
  return (
    <div>
      <div>
        <div className="flex flex-col slide-in-top items-center mr-64">
          <h1 className="poppinsBold poppins24 text-sky-700 mt-4">
            Emre Manış
          </h1>
          <p className="poppins20 ">1987 Antalya/Turkey</p>
          <p className="poppins20 ">Self-starting Web Developer</p>
        </div>
        <div className="flex justify-around mt-8 slit-in-vertical p-8">
          <div className="cardSize">
            <p className="poppinsBold text-sky-700 poppins20 pb-1">Front End</p>
            <ul>
              <li>Highly skilled in HTML/CSS/JavaScript</li>
              <li>
                <span className="poppinsBold text-sky-700 text-lg">CSS</span> -
                Sass, Bootstrap, Tailwind, BEM etc..
              </li>
              <li>
                <span className="poppinsBold text-sky-700 text-lg">
                  Framework
                </span>{" "}
                - React,React Native, Redux
              </li>
              <li>
                <span className="poppinsBold text-sky-700 text-lg">
                  Mock Up
                </span>{" "}
                - Working knowledge of Photoshop Adobe XD
              </li>
              <li>
                <span className="poppinsBold text-sky-700 text-lg">Design</span>{" "}
                - UI & UX design rules
              </li>
            </ul>
          </div>
          <div className="basis-1/3">
            <p className="poppinsBold text-sky-700 poppins20 pb-1">
              What can I do ?
            </p>
            <ul>
              <li>
                Implementing web design and development principles to build
                stable software
              </li>
              <li>Bringing mock-ups to life using the concepts</li>
              <li>
                Monitoring website performance and rectifying related issues
              </li>
              <li>Providing guidance and troubleshooting support to clients</li>
              <li>
                Maintaining an organized workflow using a project management
                tools
              </li>
              <li>
                Testing to identify bugs and technical issues before and after
                deploying
              </li>
              <li>Documenting bug reports and any code changes</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-around mt-8 slide-in-bottom p-8">
        <div className="cardSize">
          <p className="poppinsBold text-sky-700 poppins20 pb-1">Back End</p>
          <ul>
            <li>
              <span className="poppinsBold text-sky-700 text-lg">Lang</span> -
              Nodejs Mvc & Rest api etc..
            </li>
            <li>
              <span className="poppinsBold text-sky-700 text-lg">SQL</span> -
              MongoDB, Mysql
            </li>
          </ul>
          <p className="poppinsBold text-sky-700 poppins20 py-1">
            Software Management
          </p>
          <ul>
            <li>Github</li>
            <li>Bitbucket</li>
            <li>Confluence</li>
          </ul>
        </div>
        <div className="flex flex-col basis-1/3">
          <div className="flex">
            <div className="basis-1/2">
              <p className="poppinsBold text-sky-700 poppins20 pb-1">
                Abilities
              </p>
              <p>
                Friendly, collaborative and be able to function well in team
                Analytical, Innovative, Creative, Adaptable
              </p>
            </div>
            <div className="ml-2">
              <p className="poppinsBold poppins20 pb-1 text-sky-700">
                Contact me
              </p>
              <Link href="mailto:emremn07@gmail.com">
                <a className="poppinsSemiBold" target="_blank">
                  emremn07@gmail.com
                </a>
              </Link>
            </div>
          </div>
          <div className="mt-2">
            <p className="poppinsBold poppins20 pb-1 text-sky-700">
              Look at my github
            </p>
            <Link href="https://github.com/EmreManis">
              <a className="poppinsSemiBold" target="_blank">
                https://github.com/EmreManisRocknRide
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="slide-in-bottom">
        <h1 className="poppinsBold poppins20 pb-1 text-center text-sky-700">
          Projects
        </h1>
        <div className="flex justify-evenly mt-4">
          <div>
            <Link href="http://rocknride.s3-website-us-east-1.amazonaws.com">
              <a
                className="flex flex-col pb-1"
                target="_blank"
              >
                <Image
                  src={rocknride}
                  alt="code project1"
                  height={400}
                  width={210}
                />
                <span className="mt-4 poppinsSemiBold underline text-center text-sky-600">ROCKNRIDE</span>
              </a>
            </Link>
          </div>
          <div>
            <Link href="/tatilBudur">
              <a
                className="flex flex-col pb-1"
                target="_blank"
              >
                <Image
                  src={tatilbudur}
                  alt="code project1"
                  height={400}
                  width={210}
                />
                <span className="mt-4 poppinsSemiBold underline text-center text-sky-600">TATILBUDUR COMPETITION</span>  
              </a>
            </Link>
          </div>
          <div>
            <Link href="/spearfishing">
              <a
                className="flex flex-col pb-1"
                target="_blank"
              >
                <Image
                  src={alparslan_kulakac}
                  alt="code project1"
                  height={400}
                  width={210}
                />
                <span className="mt-4 poppinsSemiBold underline text-center text-sky-600">SPEARFISHING</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
