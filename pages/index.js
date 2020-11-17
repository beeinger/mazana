import React, { useState } from "react";
import GenerateParallax from "components/GenerateParallax";
import Head from "next/head";

const sections = [
  {
    title: "Vitamin",
    photos: [
      "1.png",
      "2.jpg",
      "3.jpg",
      "4.JPG",
      "5.JPG",
      "6.JPG",
      "1.png",
      "2.jpg",
      "1.png",
      "2.jpg",
      "1.png",
      "2.jpg",
      "1.png",
      "2.jpg",
    ],
    color: "black",
  },
  {
    title: "Paulinka",
    photos: ["1.png", "2.jpg"],
    backgroundColor: "#eec4c9",
    color: "pink",
  },
  {
    title: "Kaja",
    photos: ["1.png", "2.jpg"],
    backgroundColor: "grey",
    color: "pink",
  },
  {
    title: "Ilza",
    photos: ["1.png", "2.jpg"],
    backgroundColor: "skyblue",
    color: "pink",
  },
  {
    title: "Babcia",
    photos: ["1.png", "2.jpg"],
    backgroundColor: "black",
    color: "pink",
  },
];

export default function index() {
  const [title, setTitle] = useState("Portfolio");
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <GenerateParallax sections={sections} setTitle={setTitle} />
    </>
  );
}
