import { Fragment } from "react";

import Head from "next/head";
import Script from "next/script";

import SearchSection from "../components/sections/searchSection/SearchSection";
import InfoSection from "../components/sections/infoSlideSection/InfoSection";
import NextSeason from "../components/sections/nextSeasonSection/NextSeason";
import TourSection from "../components/sections/tourSection/TourSection";
import OtelSection from "../components/sections/alternativeOtelSection/OtelSection";
import CampaignForm from "../components/sections/campaignSection/CampaignForm";
import AppsSection from "../components/sections/appsSection/AppsSection";
import QuestionSection from "../components/sections/questionSection/QuestionSection";
import Banner from "../components/banner/Banner";
import Layout from "../components/layout/Layout";

const API_KEY = process.env.GOOGLE_MAP_API_KEY;

function TatilBudur() {
  return (
    <Fragment>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      </Head>
      <Script
        strategy="beforeInteractive"
        src={`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places&query=shaheen%20public`}
      ></Script>
      <p className="text-center text-xl text-red-700 poppinsBold">
        !!! Proje does not pixel-perfect,it has only 1 breakpoint(640px (set your browser
        size smaller then 640px to see responsive design)).
      </p>
      <Layout>
        <SearchSection />
        <InfoSection />
        <Banner />
        <NextSeason />
        <div className="block md:hidden">
          <AppsSection />
        </div>
        <TourSection />
        <OtelSection />
        <CampaignForm />
        <div className="hidden md:block">
          <AppsSection />
        </div>
        <QuestionSection />
      </Layout>
    </Fragment>
  );
}

export default TatilBudur;
