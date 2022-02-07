import { Fragment } from "react";

import Link from "next/link";

import AboutMe from "../components/AboutMe";

function HomePage() {
  return (
    <Fragment>
      <AboutMe />
      <div className="fade-in">
        <h1 className="font-extrabold poppins24">Projects</h1>
        <div>
          <Link href="/tatilBudur">
            <a target="_blank">Tatil Budur Competition</a>
          </Link>
          <Link href="http://rocknride.s3-website-us-east-1.amazonaws.com">
            <a target="_blank">RocknRide</a>
          </Link>
          <Link href="/spearfishing">
            <a target="_blank">Spearfishing</a>
          </Link>
        </div>
      </div>
    </Fragment>
  );
}

export default HomePage;
