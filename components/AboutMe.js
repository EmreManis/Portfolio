import { Fragment } from "react";

import Card from "../shared/Card";

const AboutMe = () => {
  return (
    <Fragment>
      <div>
        <div className="flex flex-col slide-in-top items-center">
          <h1 className="font-extrabold poppins24">Emre Manış</h1>
          <p className="poppins20">1987 Antalya/Turkey</p>
          <p className="poppins20">Self-starting Web Developer</p>
        </div>
        <div className="flex justify-around mt-8 slit-in-vertical">
          <Card color={"bg-fuchsia-700 p-2"}>
            <p className="font-extrabold text-yellow-200 poppins20 pb-2">Front End</p>
            <ul>
              <li className="text-yellow-50">Highly skilled in HTML/CSS/JavaScript</li>
              <li className="text-yellow-50">
                <span className="font-semibold text-yellow-200 text-lg">CSS</span> - Sass, Bootstrap,
                Tailwind, BEM etc..
              </li>
              <li className="text-yellow-50">
                <span className="font-semibold text-yellow-200 text-lg">Framework</span> - React,React
                Native, Redux
              </li>
              <li className="text-yellow-50">
                <span className="font-semibold text-yellow-200 text-lg">Mock Up</span> - Working
                knowledge of Photoshop Adobe XD
              </li>
              <li className="text-yellow-50">
                <span className="font-semibold text-yellow-200 text-lg">Design</span> - UI & UX design
                rules
              </li>
            </ul>
          </Card>
          <Card color={"bg-fuchsia-700 p-2"}>
            <p className="font-extrabold text-yellow-200 poppins20 pb-2">Back End</p>
            <ul>
              <li className="text-yellow-50">
                <span className="font-semibold text-yellow-200 text-lg">Lang</span> - Nodejs - Mvc &
                Rest api etc..
              </li>
              <li className="text-yellow-50">
                <span className="font-semibold text-yellow-200 text-lg">SQL</span> - MongoDB, Mysql
              </li>
            </ul>
          </Card>
          <Card color={"bg-fuchsia-700 p-2"}>
            <p className="font-extrabold text-yellow-200 poppins20 pb-2">Software Management</p>
            <ul>
              <li className="text-yellow-50">Github</li>
              <li className="text-yellow-50">Bitbucket</li>
              <li className="text-yellow-50">Confluence</li>
            </ul>
          </Card>
        </div>
      </div>
      <div className="flex flex-col items-center mt-8 slide-in-bottom">
        <div>
          <p className="font-extrabold">What can I do ?</p>
          <ul>
            <li>
              Implementing web design and development principles to build stable
              software
            </li>
            <li>Bringing mock-ups to life using the concepts</li>
            <li>
              Monitoring website performance and rectifying related issues
            </li>
            <li>Providing guidance and troubleshooting support to clients</li>
            <li>
              Maintaining an organized workflow using a project management tools
            </li>
            <li>
              Testing to identify bugs and technical issues before and after
              deploying
            </li>
            <li>Documenting bug reports and any code changes</li>
          </ul>
        </div>
        <div className="mt-8 pl-4">
          <p className="font-extrabold">Abilities</p>
          <p>
            Friendly, collaborative and be able to function well in team
            Analytical, Innovative,
          </p>
          <p>  Creative , Adaptable</p>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutMe;
