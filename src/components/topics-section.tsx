import { 
  FaLeaf, FaFlask, FaLaptopCode, FaHeartbeat, FaRocket, 
  FaMicrochip, FaShieldAlt, FaGlobeAmericas, FaUsers, FaStar 
} from "react-icons/fa";

interface Topic {
  title: string;
  icon: React.ReactNode;
  description: string;
}

const topics: Topic[] = [
  {
    title: "Sustainable Energy & Environment",
    icon: <FaLeaf size={50} className="text-green-600" />,
    description: "Focus on renewable energy, climate solutions, and eco-friendly technologies to promote a sustainable future."
  },
  {
    title: "Materials, Nanoscience & Chemical Sciences",
    icon: <FaFlask size={50} className="text-blue-600" />,
    description: "Exploring advanced materials, nanotechnology, and chemical innovations for scientific and industrial applications."
  },
  {
    title: "Mathematics, Computing, & Simulation",
    icon: <FaLaptopCode size={50} className="text-purple-600" />,
    description: "Covers computational models, simulations, algorithms, and mathematical frameworks for problem-solving."
  },
  {
    title: "Biological, Health, Agricultural & Life Sciences",
    icon: <FaHeartbeat size={50} className="text-red-500" />,
    description: "Research in biology, healthcare, agriculture, and life sciences to improve human and environmental well-being."
  },
  {
    title: "Aerospace, Space Science & Engineering",
    icon: <FaRocket size={50} className="text-gray-600" />,
    description: "Innovations in aerospace technology, space exploration, and engineering solutions for air and space travel."
  },
  {
    title: "Electronics, Optics, & Quantum Technologies",
    icon: <FaMicrochip size={50} className="text-indigo-600" />,
    description: "Development of electronic devices, optical systems, and quantum technologies with high precision and efficiency."
  },
  {
    title: "Cybersecurity, Deep Tech & Defense Systems",
    icon: <FaShieldAlt size={50} className="text-red-700" />,
    description: "Focuses on cybersecurity, emerging defense technologies, and advanced deep-tech innovations for protection."
  },
  {
    title: "Earth Sciences & Infrastructure Engineering",
    icon: <FaGlobeAmericas size={50} className="text-teal-600" />,
    description: "Study of earth systems, environmental engineering, and infrastructure for sustainable development."
  },
  {
    title: "Humanities, Social Science, Policy & Management",
    icon: <FaUsers size={50} className="text-yellow-600" />,
    description: "Explores human society, policies, management practices, and interdisciplinary social science research."
  },
  {
    title: "Interdisciplinary & Emerging Frontiers",
    icon: <FaStar size={50} className="text-pink-500" />,
    description: "New and emerging research areas that combine multiple disciplines for innovative solutions."
  }
];

export const TopicSection = () => {
  return (
    <section id="topics" className="bg-teal-50 py-12 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8">
          Topics
        </h2>

        {/* Cards Container */}
        <div className="flex flex-wrap justify-center gap-8">
          {topics.map((topic, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center"
              style={{ flex: "1 1 300px", maxWidth: "380px" }}
            >
              <div className="mb-4">{topic.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{topic.title}</h3>
              <p className="text-gray-600 text-base">{topic.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
