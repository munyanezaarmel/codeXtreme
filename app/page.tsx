"use client";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsQuestionCircleFill } from "react-icons/bs";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./swipper.css";
import Image from "next/image";
const images = [
  { src: "/ALU_Logo 2.png", alt: "ALU Logo", width: 347, height: 149 },
  { src: "/RDB_logo 1.png", alt: "RDB Logo", width: 347, height: 149 },
  { src: "/New-mtn-logo 1.png", alt: "MTN Logo", width: 347, height: 149 },
  { src: "/mcf-logo 1.png", alt: "MCF Logo", width: 347, height: 149 },
  { src: "/strafrica 1.png", alt: "StrAfrica Logo", width: 347, height: 149 },

  { src: "/irembo 1.png", alt: "Irembo Logo", width: 347, height: 149 },
];

const faqs = [
  {
    question: "What is a hackathon?",
    answer:
      "A hackathon is an event where programmers, designers, and others collaborate intensively on software projects.",
  },
  {
    question: "What this hackathon is not.",
    answer:
      "This hackathon is not a competition. It’s a collaborative event aimed at learning and networking.",
  },
  {
    question: "What to expect!",
    answer:
      "You can expect to meet new people, learn new skills, and create something awesome.",
  },
  {
    question: "How much does it cost to attend?",
    answer: "Attendance is free for all participants.",
  },
  {
    question: "Do I need to be a student to attend?",
    answer: "No, this event is open to everyone.",
  },
  {
    question: "Where and When is the event?",
    answer: "The event will be held online on July 25-26, 2024.",
  },
  {
    question: "Is there a code of conduct?",
    answer:
      "Yes, all participants are expected to adhere to the code of conduct.",
  },
  {
    question: "What is the theme for the Hackathon?",
    answer:
      "The theme for this year's hackathon is 'Innovation for Sustainability'.",
  },
  {
    question: "Can hackers stay overnight?",
    answer: "Yes, participants can stay overnight to work on their projects.",
  },
  {
    question: "What should I carry with me to the event?",
    answer:
      "Bring your laptop, charger, and any other tools you need for development.",
  },
  {
    question:
      "A few sections are not complete, when should I check back for more?",
    answer:
      "Check back on the event website a week before the event for the latest updates.",
  },
];
export default function Home() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="font-spaceMono">
      <header className="flex items-center justify-between  font-spaceMono header-top">
        <div className="logo-container">
          <Image src="/logo.png" alt="logo" width={500} height={80} />
        </div>
        <div className="flex gap-8 button-right">
          <button className=" font-bold py-2 px-4 border border-black-500 logo ">
            Become a Sponsor
          </button>
          <button className="logo border-black-500  border font-bold  py-2 px-4">
            Become a Mentor/Coach
          </button>
        </div>
      </header>
      <div className="flex-col  logo-text logo-container ">
        <h3 className="font-normal medium-font mb-4">
          Happening in Kigali, on 24th Jan 2024
        </h3>
        <h3 className="text-4xl font-normal text-gray-custom mb-8">
          At The African Leadership University
        </h3>

        <div className="">
          <p className="font-bold text-2xl">
            Come dazzle the world with your creative mind. We'll give you the
            platform for it!
          </p>
          <p className="text-xl">
            We are bringing together student developers, junior developers,
            mentors, speakers, sponsors, and tech experts{" "}
          </p>
          <p className="text-xl">
            {" "}
            and provide them with a platform to learn about tech, build unique
            products, and share their{" "}
          </p>
          <p className="text-xl">
            experiences with the rest of the world. It’s gonna be EXQUISITE!
          </p>
        </div>
      </div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        speed={1000}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div className=" px-60 flex mt-8 gap-2">
            <button className=" text-4xl font-bold py-2 px-4 border bg-gray-custom text-white learn ">
              LEARN
            </button>
            <button className="text-xl py-2 px-4 border bg-gray-thin learn-child ">
              Attend and Learn from workshops series and speaker sessions
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="px-60 flex mt-8 gap-2">
            <button className=" text-4xl font-bold py-2 px-4 border bg-build-red text-white learn ">
              BUILD
            </button>
            <button className="text-xl py-2 px-4 border bg-b-red learn-child ">
              Collaborate with your team to Build unique products using state of
              the art technologies with full support from our mentors and
              coaches
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" px-60 flex mt-8 gap-2">
            <button className=" text-4xl font-bold py-2 px-4 border bg-black text-white learn ">
              SHARE
            </button>
            <button className="text-xl py-2 px-4 border bg-gray-thin learn-child ">
              Demo your solutions to a global audience, win special prizes from
              our sponsors and partners, and explore possibilities for future
              employment with our sponsors at The Career Fair
            </button>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="flex items-center justify-center mt-8 register-button">
        <button className=" interest border-black-500  border font-bold  py-2 px-4 mb-12">
          Register your interest Now!
        </button>
      </div>

      <div className="grid grid-cols-2 grid-rows-2 logo-container ">
        <div>
          <h3 className="font-bold text-5xl pb-2">What is CodeXtreme?</h3>
          <p className="max text-xl">
            CodeXtreme is a seasonal 4 days Hackathon that brings together
            like-minded individuals from all walks of tech to solve problems,
            network with local and international tech experts and companies, win
            prizes, and change lives with their tech solutions.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-5xl pb-2">Why should I join?</h3>
          <p className="max text-xl">
            We give you the platform to learn from the best in the industry.
            CodeXtreme is where “The Rubber Meets The Road”. Come learn from
            other hackers, build solutions with support fom our mentors, win
            amazing prizes and share your experience with the rest of the world.
          </p>
        </div>
        <div className="ml-8">
          <h1 className="huge-font font-bold ">200+</h1>
          <p className="text-5xl mb-4">Target </p>
          <p className="text-5xl">Attendance</p>
        </div>

        <div>
          <h3 className="huge-font text-red-days font-bold">3 days</h3>
          <p className="text-5xl max mb-4">Intense learning and </p>
          <p className="text-5xl max ">building.</p>
        </div>
      </div>
      <div className="ml-8">
        <h1 className="text-gray-custom font-bold huge-font logo-container day">
          1 full day
        </h1>
        <p className="text-5xl logo-container career">
          Career Fair with our sponsors.
        </p>
      </div>
      <div className="logo-container">
        <h1 className="font-bold text-5xl pb-4">Tracks</h1>
        <p className="text-xl track track-bottom">
          Our event let’s you loose and give you the chance to work on what you
          find meaningful and interesting--there are no boxes here. You can work
          ony type of solution in ling with but not limited to the current
          “Challenges” and “Emerging Technologies.{" "}
        </p>
      </div>
      <div className="grid grid-cols-4 grid-rows-2 gap-4 track-grid ">
        <div>
          <div className="border tracks flex items-center justify-center">
            <Image
              src="/climate-change 1.png"
              alt="climate change"
              width={150}
              height={150}
            />
          </div>
          <p className="text-xl pt-2">Climate Change</p>
        </div>
        <div>
          <div className="border tracks flex items-center justify-center">
            <Image
              src="/education.png"
              alt="education"
              width={150}
              height={150}
            />
          </div>
          <p className="text-xl pt-2">Education</p>
        </div>
        <div>
          <div className="border tracks flex items-center justify-center">
            <Image
              src="/health-care.png"
              alt="Health care"
              width={150}
              height={150}
            />
          </div>
          <p className="text-xl pt-2">Health Care</p>
        </div>
        <div>
          <div className="border tracks flex items-center justify-center">
            <Image
              src="/spark.png"
              alt="climate change"
              width={150}
              height={150}
            />
          </div>
          <p className="text-xl pt-2 ">Crisis & Disasters</p>
        </div>
        <div>
          <div className="border tracks flex items-center justify-center">
            <Image
              src="/production.png"
              alt="climate change"
              width={150}
              height={150}
            />
          </div>
          <p className="text-xl pt-2">Responsible Production & Consumption</p>
        </div>
        <div className="">
          <div className="border tracks flex items-center justify-center">
            <Image
              src="/logistics 1.png"
              alt="climate change"
              width={150}
              height={150}
            />
          </div>
          <p className="text-xl pt-2">Logistics</p>
        </div>
        <div>
          <div className="border tracks flex items-center justify-center">
            <Image
              src="/recycle.png"
              alt="climate change"
              width={150}
              height={150}
            />
          </div>
          <p className="text-xl pt-2">Disposal & Recycling</p>
        </div>
        <div>
          <div className="border tracks flex items-center justify-center">
            <Image
              src="/ai.png"
              alt="climate change"
              width={150}
              height={150}
            />
          </div>
          <p className="text-xl pt-2">Machine Learning and AI</p>
        </div>
      </div>

      <p className="text-center mt-8 text-3xl font-bold underline track-end">
        See More &gt;&gt;
      </p>

      <div className="logo-container ">
        <h1 className="text-5xl font-bold pb-8">Official Schedule</h1>
        <div className="flex gap-4 text-center items-center pb-12">
          <button className="schedule border bg-gray-thin font-bold">
            Day 1
          </button>
          <button className="schedule border font-bold">Day 2</button>
          <button className="schedule border font-bold">Day 3</button>
          <button className="schedule border font-bold">Day 4</button>
        </div>
        <div className="text-xl track-end">
          <ul className="list-disc pl-5 space-y-4">
            <li>Buses arrive [9:00 AM]</li>
            <li>Welcome and check-in attendees [9:00 AM]</li>
            <li>Serve breakfast [10:00 AM]</li>
            <li>Opening Ceremony [11:00 AM]</li>
            <li>Hack Begins [12:00 PM]</li>
            <li>Lunch [1:30 PM]</li>
            <li>Hack Resumes [2:30 PM]</li>
            <li>It's a Wrap [7:00 PM]</li>
            <li>Buses leave for people leaving [7:30 PM]</li>
            <li>Coffee and Snacks [8:30 PM]</li>
            <li>Hack resumes [9:00 PM]</li>
          </ul>
        </div>
      </div>
      <div className="logo-container">
        <h1 className="text-5xl font-bold mb-12">Panel</h1>
        <h1 className="text-3xl font-bold text-center mb-8">Speakers</h1>
        <div className="flex justify-center items-center gap-40 text-center mb-12">
          <div>
            <div className="circle bg-gray-thin">
              <img src="https://picsum.photos/100?random=1" alt="Judge 1" />
            </div>
            <h1 className="pt-4 text-3xl font-medium ">Speaker</h1>
          </div>
          <div>
            <div className=" circle bg-gray-thin">
              <img src="https://picsum.photos/100?random=2" alt="Judge 1" />
            </div>
            <h1 className="pt-4 text-3xl font-medium ">Speaker</h1>
          </div>
          <div>
            <div className="circle bg-gray-thin">
              <img src="https://picsum.photos/100?random=3" alt="Judge 1" />
            </div>
            <h1 className="pt-4 text-3xl font-medium ">Speaker</h1>
          </div>
        </div>
        <h1 className="text-3xl font-bold text-center mb-8">Judges</h1>
        <div className="flex items-center justify-center gap-40 text-center mb-12">
          <div>
            <div className="circle bg-gray-thin">
              <img src="https://picsum.photos/100?random=4" alt="Judge 1" />
            </div>
            <h1 className="pt-4 text-3xl font-medium ">name</h1>
          </div>
          <div>
            <div className="circle bg-gray-thin">
              <img src="https://picsum.photos/100?random=5" alt="Judge 2" />
            </div>
            <h1 className="pt-4 text-3xl font-medium ">name</h1>
          </div>
          <div>
            <div className="circle bg-gray-thin">
              <img src="https://picsum.photos/100?random=6" alt="Judge 3" />
            </div>
            <h1 className="pt-4 text-3xl font-medium ">name</h1>
          </div>
          <div>
            <div className="circle bg-gray-thin">
              <img src="https://picsum.photos/100?random=4" alt="Judge 4" />
            </div>
            <h1 className="pt-4 text-3xl font-medium ">name</h1>
          </div>
        </div>
      </div>
      <p className="text-center mt-8 text-3xl font-bold underline track-end">
        See More &gt;&gt;
      </p>
      <div className="logo-container">
        <h1 className="text-5xl font-bold prize">Prizes & Perks</h1>
        <div className="flex flex-col justify-center items-center mb-20">
          <Image
            src="/medal.png"
            alt="climate change"
            width={400}
            height={400}
          />
          <p className="mt-12 text-3xl track-end ">
            We will reveal prizes and other perks as we
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;confirm and
            finalize them.
          </p>
        </div>
      </div>
      <div className="logo-container">
        <h1 className="text-5xl font-bold mb-12">Sponsors</h1>
        <div className="ml-8">
          <div className="grid grid-cols-3 grid-rows-3">
            {images.map((image, index) => (
              <div key={index} className="w-347 h-149">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  layout="fixed"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        <h1 className="text-5xl font-bold mb-12">The Team</h1>

        <div className="flex justify-center items-center flex-col gap-2">
          <div className="circle bg-gray-thin mb-4">
            <img src="https://picsum.photos/100?random=5" alt="Judge 4" />
          </div>
          <h1 className="mb-4 text-xl">
            Cédric Murairi <br /> Lead Organizer
          </h1>
        </div>
        <div className="flex items-center justify-center gap-20">
          <div>
            <div className="circle bg-gray-thin mb-4">
              <img src="https://picsum.photos/100?random=15" alt="Judge 4" />
            </div>
            <h1 className="text-xl">
              Liplan Lekipising <br /> Hacker Experience
            </h1>
          </div>
          <div className="text-center ">
            <div className=" circle bg-gray-thin mb-4">
              <img src="https://picsum.photos/100?random=6" alt="Judge 4" />
            </div>
            <h1 className="text-xl">
              Marion Maina <br /> Operations
            </h1>
          </div>
          <div>
            <div className="circle bg-gray-thin mb-4">
              <img src="https://picsum.photos/100?random=7" alt="Judge 4" />
            </div>
            <h1 className="text-xl">
              Moses Kandundao <br />
              Logistics and Ops
            </h1>
          </div>
          <div>
            <div className="circle bg-gray-thin mb-4">
              <img src="https://picsum.photos/100?random=8" alt="Judge 4" />
            </div>
            <h1 className="text-xl">
              Moses Kandundao <br /> Logistics and Ops
            </h1>
          </div>
        </div>
      </div>
      <p className="text-center mt-8 text-3xl font-bold underline track-end">
        See More &gt;&gt;
      </p>
      <div className="logo-container">
        <h1 className="text-5xl font-bold faq-text">FAQs</h1>
        <div className="faq-box ml-8 mt-8">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-md border-gray-200">
              <button
                onClick={() => handleToggle(index)}
                className="w-full flex items-center justify-between p-4 focus:outline-none"
              >
                <span className="text-lg font-semibold flex gap-4">
                  {" "}
                  <BsQuestionCircleFill className="text-gray-custom text-3xl" />{" "}
                  {faq.question}
                </span>
                <span className="text-2xl transform transition-transform duration-200 ease-in-out">
                  {openIndex === index ? <FiChevronUp /> : <FiChevronDown />}
                </span>
              </button>
              <Transition
                show={openIndex === index}
                enter="transition-all duration-300"
                enterFrom="max-h-0 opacity-0"
                enterTo="max-h-screen opacity-100"
                leave="transition-all duration-300"
                leaveFrom="max-h-screen opacity-100"
                leaveTo="max-h-0 opacity-0"
              >
                <div className="px-4 pb-4 text-gray-700">{faq.answer}</div>
              </Transition>
            </div>
          ))}
        </div>
      </div>
      <footer className="bg-black text-white faq-end">
        <div className="footer-start pt-12">
          <h1 className="text-5xl font-bold pb-4">Where we are going next.</h1>
          <p className="text-3xl text-gray-custom font-normal pb-8">
            If you are not based in Kigali but would love to invite CodeXtreme{" "}
            <br />
            to your community next, please fill this form.
          </p>
          <p className="underline text-gray-custom text-3xl font-normal pb-20 ">
            Bring CodeXtreme to your community &gt;&gt;
          </p>
          <div className="grid grid-cols-3  gap-4 ml-4 ">
            <div className="">
              <h1 className="text-3xl font-bold mb-4">CodeXtreme</h1>
              <u className="text-gray-custom text-2xl">
                <ul className="space-y-4 ">
                  <li> Code of Conduct </li>
                  <li>Judging Criteria</li>
                  <li>Official Schedule </li>
                  <li>Become a Speaker </li>
                </ul>
              </u>
            </div>
            <div className="text-2xl ">
              <h1 className="text-3xl font-bold mb-4">For Sponsors</h1>

              <ul className="text-gray-custom ">
                <u className="">
                  <li className="mb-4">The Event</li>
                </u>
                <u>
                  <li>Perks & Packages</li>
                </u>
              </ul>
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-4"> Support</h1>
              <ul className="space-y-4 text-2xl text-gray-custom ">
                <li className="text-2xl ">
                  Email: <u>codextreme@infinitloop.io </u>
                </li>
                <li>Phone: +250787104022</li>
                <li>Whatsapp: +250737026499</li>
              </ul>
            </div>
          </div>
          <p className="text-center text-3xl text-gray-custom font-normal">
            &copy; 2023 CodeXtreme
          </p>
        </div>
      </footer>
    </div>
  );
}
