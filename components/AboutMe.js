import { Fragment } from "react";

import Link from "next/link";

import Card from "../shared/Card";

const AboutMe = () => {
  return (
    <Fragment>
      <div>
        <div className="flex flex-col slide-in-top items-center">
          <h1 className="poppinsBold poppins24 text-fuchsia-700 mt-4">
            Emre Manış
          </h1>
          <p className="poppins20 ">1987 Antalya/Turkey</p>
          <p className="poppins20 ">
            Self-starting Web Developer
          </p>
        </div>
        <div className="flex justify-evenly mt-8 slit-in-vertical">
          <Card color={"bg-fuchsia-700 p-2"}>
            <p className="poppinsBold text-yellow-200 poppins20 pb-1">
              Front End
            </p>
            <ul>
              <li className="text-yellow-50 ">
                Highly skilled in HTML/CSS/JavaScript
              </li>
              <li className="text-yellow-50 ">
                <span className="poppinsBold text-yellow-200 text-lg">CSS</span>{" "}
                - Sass, Bootstrap, Tailwind, BEM etc..
              </li>
              <li className="text-yellow-50 ">
                <span className="poppinsBold text-yellow-200 text-lg">
                  Framework
                </span>{" "}
                - React,React Native, Redux
              </li>
              <li className="text-yellow-50 ">
                <span className="poppinsBold text-yellow-200 text-lg">
                  Mock Up
                </span>{" "}
                - Working knowledge of Photoshop Adobe XD
              </li>
              <li className="text-yellow-50 ">
                <span className="poppinsBold text-yellow-200 text-lg">
                  Design
                </span>{" "}
                - UI & UX design rules
              </li>
            </ul>
          </Card>
          <div className="basis-1/3">
            <p className="poppinsBold text-fuchsia-700 poppins20 pb-1">
              What can I do ?
            </p>
            <ul>
              <li>
                Implementing web design and development principles to build
                stable software
              </li>
              <li>
                Bringing mock-ups to life using the concepts
              </li>
              <li>
                Monitoring website performance and rectifying related issues
              </li>
              <li>
                Providing guidance and troubleshooting support to clients
              </li>
              <li>
                Maintaining an organized workflow using a project management
                tools
              </li>
              <li>
                Testing to identify bugs and technical issues before and after
                deploying
              </li>
              <li>
                Documenting bug reports and any code changes
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-evenly mt-8 slide-in-bottom">
        <Card color={"bg-fuchsia-700 p-2"}>
          <p className="poppinsBold text-yellow-200 poppins20 pb-1">Back End</p>
          <ul>
            <li className="text-yellow-50 ">
              <span className="poppinsBold text-yellow-200 text-lg">Lang</span>{" "}
              - Nodejs - Mvc & Rest api etc..
            </li>
            <li className="text-yellow-50 ">
              <span className="poppinsBold text-yellow-200 text-lg">SQL</span> -
              MongoDB, Mysql
            </li>
          </ul>
          <p className="poppinsBold text-yellow-200 poppins20 py-1">
            Software Management
          </p>
          <ul>
            <li className="text-yellow-50 ">Github</li>
            <li className="text-yellow-50 ">Bitbucket</li>
            <li className="text-yellow-50 ">Confluence</li>
          </ul>
        </Card>
        <div className="flex flex-col basis-1/3">
          <div className="flex">
            <div className="basis-1/2">
              <p className="poppinsBold text-fuchsia-700 poppins20 pb-1">
                Abilities
              </p>
              <p>
                Friendly, collaborative and be able to function well in team
                Analytical, Innovative, Creative , Adaptable
              </p>
            </div>
            <div>
              <h1 className="poppinsBold poppins20 pb-1 text-fuchsia-700">
                Projects
              </h1>
              <div className="flex flex-col">
                <Link href="/tatilBudur">
                  <a target="_blank">
                    Tatil Budur Competition
                  </a>
                </Link>
                <Link href="http://rocknride.s3-website-us-east-1.amazonaws.com">
                  <a target="_blank">
                    RocknRide
                  </a>
                </Link>
                <Link href="/spearfishing">
                  <a target="_blank">
                    Spearfishing
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-2">
            <p className="poppinsBold poppins20 pb-1 text-fuchsia-700">
              For more look to my github
            </p>
            <Link href="https://github.com/EmreManis">
              <a target="_blank">
                https://github.com/EmreManisRocknRide
              </a>
            </Link>
            <p className="poppinsBold poppins20 pb-1 text-fuchsia-700">
              Contact me
            </p>
            <Link href="mailto:emremn07@gmail.com">
              <a target="_blank">
                emremn07@gmail.com
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutMe;
