"use client"
import Head from 'next/head';
import './page.css';
import { Typewriter } from 'react-simple-typewriter'
import { Menu, X, PenTool } from "lucide-react";
import { IdCard } from 'lucide-react';
import { QrCode } from 'lucide-react';
import { Share2 } from 'lucide-react';
import { Goal } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Github } from 'lucide-react';
import { Mail } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>About Us - Digital Visiting Card Generator</title>
        <meta name="description" content="Learn more about the Digital Visiting Card Generator and our mission to revolutionize networking." />
      </Head>

      {/* Header Section */}
      <header className="bg-black text-white pt-20 flex flex-col">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-blue-600 ">Revolutionizing Networking with Digital Visiting Cards</p>
        </div>
        <div className="bg-black h-auto w-100% grid lg:grid-cols-5 justify-evenly items-center">
                {/* heading inside her section */}
                <div className='my-20 mx-4 sm:mx-10 col-span-5 lg:col-span-3 justify-between '>
                  <div className='heroHeading'>
                    <h1 
                      className="text-4xl sm:text-[50px] md:text-[60px] lg:text-[60px]
                        text-white 
                        font-bold
                        sm:leading-snug
                        ">
                        <span style={{ color: 'white', fontWeight: 'bold' }}>
                          {/* Style will be inherited from the parent element */}
                          <Typewriter
                          words={[ 'Create', 'Customize', 'Download']}
                          loop={true}
                          cursor
                          cursorStyle={<span style={{ color: 'blue', cursorStyle:'|' }}>|</span>}
                          typeSpeed={150}
                          deleteSpeed={50}
                          delaySpeed={1500}
                        />
                      </span> & Share Digital Business Cards in Minutes
                    </h1>
                  </div>
                </div>
                {/* card animation */}
                <div className='h-[400px] w-[400px] ml-20 mt-20 lg:col-span-2 hidden lg:block justify-self-center align-self-center '>
                  <div className="card ">
                    <div className="content">
                      <div className="innercard">
                        <label className="avatar"><PenTool className="h-8 w-8 m-4 text-blue-600" /></label>
                        <label className="info">
                          <span className="info-1"></span>
                          <span className="info-2"></span>
                        </label>
                        <div className="content-1 p-4"> <span className="m-6 text-4xl font-bold text-gray-600">CardCraft</span> </div>
                        <div className="content-2"></div>
                      </div>
                    </div>
                  </div>
                </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
              <div className='w-[100%] flex justify-center items-center'>
                  <IdCard className='text-blue-600 h-12 w-12'/>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Customizable Cards</h3>
              <p className="text-gray-600">
                Create personalized business cards with your name, job title, company logo, and more. Choose from a variety of templates, colors, and fonts.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
              <div className='w-[100%] flex justify-center items-center'>
                <QrCode className='text-blue-600 h-12 w-12'/>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">QR Code Integration</h3>
              <p className="text-gray-600">
                Each card comes with a unique QR code. Scan it to access a landing page with your contact details or download a vCard instantly.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
              <div className='w-[100%] flex justify-center items-center'>
                <Share2 className='text-blue-600 h-12 w-12'/>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Easy Sharing</h3>
              <p className="text-gray-600">
                Share your digital card via WhatsApp, email, LinkedIn, or by copying the link. You can also download it as an image or PDF.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className='flex '>
              <span><Goal className='text-blue-600 h-8 w-8 sm:h-10 sm:w-10' /></span>
              <span className=" text-xl sm:text-3xl font-bold text-gray-800 mb-6 pl-2 ">Our Mission</span>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
            At Digital Visiting Card Generator, our mission is to revolutionize the way professionals exchange contact information. We strive to provide an innovative, paperless solution that enables users to create, customize, and share digital business cards effortlessly. By integrating QR codes, seamless sharing options, and downloadable formats, we make networking faster, smarter, and more sustainable. Our goal is to empower individuals and businesses with a modern, efficient, and eco-friendly alternative to traditional business cards.
            </p>
          </div>
          <div>
            <div className='flex '>
              <span><Goal className='text-blue-600 h-8 w-8 sm:h-10 sm:w-10' /></span>
              <span className=" text-xl sm:text-3xl font-bold text-gray-800 mb-6 pl-2 ">Our Vision</span>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
            We envision a world where digital business cards become the new standard for professional networking. Our platform aims to lead this transformation by offering cutting-edge technology that simplifies and enhances the way contact information is shared. We are committed to continuous innovation, ensuring that professionals across industries can connect seamlessly and leave lasting impressions. Through our efforts, we aspire to reduce paper waste, support digital-first interactions, and create a smarter, more connected business ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* last Section */}
      <section className=" bg-black mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2">
        <div className='flex justify-center items-center'>
          <p className="text-center text-gray-100 leading-relaxed mb-6">
            behind the digital <strong>Digital Visiting card generator,</strong> team of passiniate developers 
            and designers dedicated to creating tools that simplify your professional life. we are consistantly 
            working to improve our platform and adding new features to meet your needs. 
          </p>
        </div>
        <div className='flex justify-center items-center'>
          <button className='h-10 sm:h-12 w-[200px] border-2 border-blue-600 hover:bg-blue-600 hover:text-white rounded-3xl text-white'>Contact Us</button>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Digital Visiting Card Generator. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}