import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header1 from './Header1';

export const HomePage = () => {
  const navigate = useNavigate();

  function handleLoginNavigation() {
    navigate('/MainLogin');
  }

  return (
    <div className="container mx-auto p-4">
      <Header1 />

      <div className="mt-8">
        <button 
          onClick={handleLoginNavigation} 
          className="bg-blue-500 text-white px-4 py-2 rounded mb-6"
        >
          Go to Login
        </button>
        
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">Welcome to our NGO</h1>

        <div className="section" id="introduction">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Introduction</h2>
          <p className="text-lg text-gray-800 leading-7">
            Gram Urjha is a non-governmental organization (NGO) dedicated to the welfare and empowerment of students in rural areas. Recognizing the significant challenges faced by rural communities, Gram Urjha aims to bridge the educational gap and provide holistic support to ensure that every child has access to quality education and opportunities for personal growth.
          </p>
        </div>

        <div id="vision" className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Vision</h2>
          <p className="text-lg text-gray-800 leading-7">
            At Gram Urjha, our vision is to create a future where every child in rural areas has access to quality education, regardless of their socio-economic background. We envision empowered youth who are equipped with the knowledge, skills, and confidence to lead fulfilling lives and contribute positively to their communities. By focusing on education, we aim to break the cycle of poverty and provide a pathway for sustainable development in rural regions.
          </p>
        </div>

        <div id="mission" className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Mission</h2>
          <p className="text-lg text-gray-800 leading-7">
            Our mission is to bridge the educational divide in rural areas by offering comprehensive support to students. We achieve this through a variety of programs and initiatives designed to address the unique challenges faced by rural students. Our mission encompasses the following key areas:
          </p>
          <ul className="list-disc list-inside mt-4">
            <li className="text-lg text-gray-800">Educational Resources: We provide essential educational resources to students in rural areas, including textbooks, school supplies, and digital learning tools. By ensuring that students have the necessary materials, we create a conducive learning environment that fosters academic excellence.</li>
            <li className="text-lg text-gray-800">Scholarships and Financial Assistance: Many talented students in rural areas are unable to pursue their educational dreams due to financial constraints. Gram Urjha offers scholarships and financial assistance to deserving students, enabling them to continue their education without the burden of financial stress. These scholarships cover tuition fees, examination costs, and other educational expenses.</li>
            <li className="text-lg text-gray-800">Mentorship and Guidance: We believe that mentorship plays a crucial role in a student's academic and personal development. Gram Urjha connects students with experienced mentors who provide guidance, support, and encouragement. Our mentors help students navigate their educational journey, set goals, and develop essential life skills.</li>
            <li className="text-lg text-gray-800">Skill Development: In addition to academic support, we focus on the holistic development of students by offering skill development programs. These programs include vocational training, computer literacy, and language proficiency courses. By equipping students with practical skills, we enhance their employability and prepare them for future careers.</li>
          </ul>
        </div>

        <div id="programs" className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Programs and Initiatives</h2>
          <ul className="list-disc list-inside">
            <li className="text-lg text-gray-800">Community Learning Centers: Gram Urjha establishes community learning centers in rural areas where students can access educational resources, attend workshops, and participate in extracurricular activities. These centers serve as safe spaces for learning and personal growth, fostering a sense of community and collaboration.</li>
            <li className="text-lg text-gray-800">Digital Education: Recognizing the importance of digital literacy in today's world, we implement digital education programs that provide students with access to computers, internet connectivity, and online learning platforms. These initiatives help bridge the digital divide and ensure that rural students are not left behind in the technological age.</li>
            <li className="text-lg text-gray-800">Health and Nutrition: We understand that a child's education is closely linked to their health and well-being. Gram Urjha conducts health and nutrition programs to ensure that students are physically fit and ready to learn. This includes health check-ups, nutritional supplements, and awareness campaigns on hygiene and wellness.</li>
          </ul>
        </div>

        <div id="impact" className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Impact</h2>
          <p className="text-lg text-gray-800 leading-7">
            Since our inception, Gram Urjha has made a significant impact on the lives of countless students in rural areas. Our programs have resulted in improved academic performance, higher school retention rates, and increased opportunities for higher education and employment. We take pride in the success stories of our students who have overcome challenges and achieved their dreams with our support.
          </p>
        </div>
      </div>
    </div>
  )
}

export default HomePage;
