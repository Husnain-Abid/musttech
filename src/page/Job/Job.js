import React from 'react'
import Layout from '../../component/Layout/Layout'
import ASSET_PATHS from '../../constant'
import './Job.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ApplyFom from '../../component/subComponent/ApplyFom/ApplyFom';

export default function Job() {
  const imgRoute = ASSET_PATHS.IMG_URL
  const iconRoute = ASSET_PATHS.ICON_URL
  const serviceRoute = ASSET_PATHS.SERVICE_URL
  const navigate = useNavigate();


  const { slug } = useParams();

  console.log("slug", slug);

  const jobData = [
    {
      title: 'FULL STACK DEVELOPER',
      slug: 'fullstack-developer',
      responsibilities: [
        "Develop, test, and deploy high-quality, scalable web applications.",
        "Collaborate with cross-functional teams to define, design, and ship new features.",
        "Build responsive, user-friendly front-end applications using modern frameworks (e.g., React, Vue, Angular).",
        "Develop robust back-end services and APIs using technologies such as Node.js, Express.js, Python, or PHP.",
        "Ensure performance, quality, and responsiveness of applications.",
        "Optimize applications for speed, scalability, and security.",
        "Participate in code reviews, ensuring coding standards and best practices.",
        "Work closely with product and design teams to create a seamless user experience.",
        "Maintain and enhance existing codebases."
      ],

      requirements: [
        "Proven experience as a Full Stack Developer or similar role.",
        "Proficiency with front-end technologies such as HTML5, CSS3, JavaScript (React, Vue, Angular).",
        "Strong back-end development skills in Node.js, Express.js, Python, Ruby, or PHP.",
        "Experience with database management (MySQL, PostgreSQL, MongoDB).",
        "Familiarity with RESTful APIs, web services, and integration with third-party platforms.",
        "Strong problem-solving skills and ability to troubleshoot issues.",
        "Excellent communication skills and ability to work in a collaborative environment.",
      ],

      experience: 'Minimum 2 Year',
    },

    {
      title: 'frontend developer',
      slug: "frontend-developer",
      responsibilities: [
        "Proficient in HTML5, CSS3, and JavaScript.",
        "Experience with frameworks like React, Vue, or Angular.",
        "Familiar with responsive design and cross-browser compatibility.",
        "Knowledge of version control (Git).",
        "Understanding of RESTful APIs and basic UI/UX principles.",
      ],

      requirements: [
        "Develop responsive, user-friendly web interfaces.",
        "Collaborate with backend developers to integrate APIs.",
        "Ensure website functionality across browsers and devices.",
        "Optimize performance and scalability.",
        "Maintain and improve existing codebases.",
      ],

      experience: 'Minimum 2 Year',
    },

    {
      title: 'SALE AGENT',
      slug: 'sale-agent',
      responsibilities: [
        "Reach out to potential clients and close sales.",
        "Understand client needs and offer appropriate products/services.",
        "Build and maintain customer relationships.",
        "Follow up on leads and ensure customer satisfaction.",
        "Track and report sales metrics.",
        "Build and maintain customer relationships.",
        "Reach out to potential clients and close sales.",
        "Track and report sales metrics.",
        "Understand client needs and offer appropriate products/services.",
        "Follow up on leads and ensure customer satisfaction.",
      ],

      requirements: [
        "2+ years of experience in sales or customer service.",
        "Strong communication and negotiation skills.",
        "Ability to meet sales targets and work in a goal-driven environment.",
        "Basic knowledge of CRM software.",
        "Customer-focused with excellent problem-solving abilities.",
      ],

      experience: 'Minimum 2 Year',
    },

  ]

  const jobDetails = jobData.find(job => job.slug === slug);

  console.log(jobDetails);


  if (!jobDetails) {
    return <p>Job not found</p>;
  }



  return (
    <>
      <Layout>

        <div className='job'>
          <div className='job-title'>
            {/* <h2>FULL STACK DEVELOPER</h2> */}
            <h2>{jobDetails.title}</h2>
            {/* <p><span>MustTech Solutions</span> is looking for an <span>Full Stack Developer</span></p> */}
            <p><span>MustTech Solutions</span> is looking for an <span>{jobDetails.title}</span></p>
          </div>

          <div className='job-responsibilities'>
            <h2>Responsibilities</h2>
            <ul>
              {jobDetails.responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className='job-requirement'>
            <h2>Requirements:</h2>
            <ul>
              {jobDetails.requirements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}

            </ul>
          </div>

          <div className='job-experience'>
            <h2>Experience:</h2>
            <ul>
              <li>{jobDetails.experience}</li>
            </ul>
          </div>

        </div>
        <ApplyFom></ApplyFom>


      </Layout>
    </>
  )
}
