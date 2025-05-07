import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

// Animation presets
const fadeUp = {
  hidden: { y: 60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const slideLeft = {
  hidden: { x: -60, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, ease: "easeInOut" },
  },
};

const slideRight = {
  hidden: { x: 60, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, ease: "easeInOut" },
  },
};

const jumping = (delay = 0) => ({
  initial: { y: 0 },
  animate: {
    y: [10, -10, 10],
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop",
      delay,
    },
  },
});

const Navbar = () => {
  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center bg-white shadow-sm">
      <div className="text-2xl font-bold text-gray-900">June</div>

      {/* Desktop Links */}
      <ul className="hidden md:flex items-center space-x-6 text-gray-700 font-medium">
        {[
          "Product",
          "Pricing",
          "Customers",
          "Content",
          "Change Log",
          "Login",
        ].map((item) => (
          <li key={item} className="px-7">
            <a
              href="#"
              className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gray-800 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* Desktop CTA Buttons */}
      <div className="hidden md:flex items-center space-x-4">
        <button className="bg-black text-white px-4 py-2 rounded-md border-2 font-medium border-transparent hover:bg-white hover:text-black hover:border-black hover:border-2">
          Get started
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button className="text-gray-700 text-2xl">☰</button>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <motion.section
      className="w-full px-6 pt-16 pb-24 bg-white text-center"
      variants={fadeUp}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="text-4xl md:text-7xl font-black text-gray-900 leading-tight max-w-4xl mx-auto font-balloon drop-shadow-[1px_1px_0_#000]"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
      >
        A dashboard for each of our Customers
      </motion.h1>

      <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
        Product analytics designed for Customer Success and Account
        Management.
      </p>

      <div className="mt-8 flex justify-center space-x-4">
        <button
          className="border-[#1c1650] text-[#1c1650] px-10 py-3 rounded-xl font-medium border-2 transition-all duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#4C4037]"
        >
          Get started
        </button>
        <button
          className="bg-[#1c1650] text-white px-5 py-3 rounded-xl font-medium flex items-center space-x-3 border-2 border-[#1c1650] transition-all duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#4C4037]"
        >
          <span className="mr-4">Get a Demo</span>
          <span className="bg-white text-[#1c1650] rounded-full p-2">
            <FaArrowRight className="text-[1rem]" />
          </span>
        </button>
      </div>

      <motion.img
        src="https://www.june.so/_next/image?url=%2Fcompany-page%2Fhero-asset.png&w=3840&q=75"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
      />
    </motion.section>
  );
};


const TrustedBy = () => {
  return (
    <motion.section
    className="w-full bg-gray-50 py-12 px-6 text-center"
    variants={fadeUp}
    initial="hidden"
    animate="visible"
  >
    <motion.h2
      className="text-lg font-semibold text-gray-500 mb-6"
      variants={fadeUp}
      whileInView="visible"
      initial="hidden"
      animate="visible"
      viewport={{ once: true }}
    >
      Trusted by the fastest growing SaaS companies
    </motion.h2>
      <div className="flex flex-wrap justify-center items-center gap-8 max-w-4xl mx-auto">
        
        <img
          src="https://www.june.so/logos-q3/attio.svg"
          alt="Attio"
          className="h-8"
        />
        
        <img
          src="https://www.june.so/logos-q3/causal.svg"
          alt="Causal"
          className="h-8"
        />
        
        <img
          src="https://www.june.so/logos-q3/humaans.svg"
          alt="Humaans"
          className="h-6"
        />
        
        <img
          src="https://www.june.so/logos-q3/knack.svg"
          alt="Knack"
          className="h-8"
        />
        
        <img
          src="https://www.june.so/logos-q3/reveal.svg"
          alt="Reveal"
          className="h-6"
        />
        
        <img
          src="https://www.june.so/logos-q3/railway.svg"
          alt="Railway"
          className="h-8"
        />
        
        <img
          src="https://www.june.so/logos-q3/rootly.svg"
          alt="Rootly"
          className="h-6"
        />
        
        <img
          src="https://www.june.so/logos-q3/snackmagic.svg"
          alt="SnackMagic"
          className="h-8"
        />
        
        <img
          src="https://www.june.so/logos-q3/tacto.svg"
          alt="Stravito"
          className="h-6"
        />
        
        <img
          src="https://www.june.so/logos-q3/tacto.svg"
          alt="Tacto"
          className="h-6"
        />
        
        <img
          src="https://www.june.so/logos-q3/vessl.svg"
          alt="VesslAi"
          className="h-8"
        />
        
        <img
          src="https://www.june.so/logos-q3/xano.svg"
          alt="Xano"
          className="h-6"
        />
        
      </div>
      
    </motion.section>
  );
};

function Cards() {
  return (
    <div>
      
      <h3 className="text-2xl md:text-4xl text-center font-bold text-gray-900 leading-tight max-w-4xl mx-auto">
        Don't let a $50k churn catch you by surprise 
      </h3>
      
      <p className="mt-6 text-lg md:text-xl text-center text-gray-600 max-w-2xl mx-auto">
        Monitor your customers and find out who needs help 
      </p>
      
      <br />
      
      <br />
      
      <img src="https://www.june.so/_next/image?url=%2Fauto-generated-reports%2Fgenerated-table.png&w=3840&q=75" />
      
      <br />
      
      <br />
      
      <br />
      
      <br />
      
      <h3 className="text-2xl md:text-4xl text-center font-bold text-gray-900 leading-tight max-w-4xl mx-auto">
        Improve your customer retention in 4 steps 
      </h3>
      
      <p className="mt-6 text-lg md:text-xl text-center text-gray-600 max-w-2xl mx-auto">
        Don't reinvent the wheel. 
      </p>
      
      <p className="mt-6 text-lg md:text-xl text-center text-gray-600 max-w-2xl mx-auto">
        Adopt proven retention strategies from the industry. 
      </p>
      
      <motion.div 
      class="m-10 w-90% bg-green-200 h-72 rounded-lg overflow-hidden flex flex-col md:flex-row p-6 text-white shadow-lg "
      variants={slideRight}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      >
        
        <div class="flex-1">
          <p class="text-sm mb-1 text-green-700">Analyse</p>
          
          <h2 class="text-green-700 text-3xl font-bold mb-2">
            Find what leads to happy customers
          </h2>
          
          <p class="text-green-700">
            Use analytics to find out what makes customers stick
            around and retain 
          </p>
          
        </div>
        
        <div class="mt-4 md:mt-0 md:ml-6 flex-shrink-0 h-full w-full md:w-64">
          
          <img
            src="https://www.june.so/home/use-case/analytics.png"
            alt="Card Image"
            class="h-full object-contain"
          />
          
        </div>
        
      </motion.div>
      
      <motion.div 
      class="m-10 w-90% bg-rose-200 h-72 rounded-lg overflow-hidden flex flex-col md:flex-row p-6 text-white shadow-lg"
      variants={slideLeft}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      >
        
        <div class="flex-1">
          <p class="text-sm mb-1 text-red-900">Compute</p>
          
          <h2 class="text-red-900 text-3xl font-bold mb-2">
            Define a customer health score
          </h2>
          
          <p class="text-red-900">
           Start measuring the health of your customers based on
            their activity and engagement 
          </p>
        </div>
     
        <div class="mt-4 md:mt-0 md:ml-6 flex-shrink-0 h-full w-full md:w-64">
        
          <img
            src="https://www.june.so/home/use-case/health-score.png"
            alt="Card Image"
            class="h-full object-contain"
          />
 
        </div>
      
      </motion.div>

      <motion.div class="m-10 w-90% bg-sky-200 h-72 rounded-lg overflow-hidden flex flex-col md:flex-row p-6 text-white shadow-lg"
      variants={slideRight}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}>
    
        <div class="flex-1">
    <p class="text-sm mb-1 text-blue-900">Take action</p>
      
          <h2 class="text-blue-900 text-3xl font-bold mb-2">
            Stay on top of churn
          </h2>
      
          <p class="text-blue-900">
          Stop getting surprised by churn. Plan ahead and act before
            it's too lat
          </p>
      
        </div>

        <div class="mt-4 md:mt-0 md:ml-6 flex-shrink-0 h-full w-full md:w-64">
      
          <img
            src="https://www.june.so/home/use-case/monitor.png"
            alt="Card Image"
            class="h-full object-contain"
          />
        </div>
    
      </motion.div>
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <h3 className="text-4xl md:text-6xl text-center font-bold text-gray-900 leading-tight max-w-4xl mx-auto">
          How to get started
        </h3>
        <div className="mt-12 gap-12 items-start w-full max-w-5xl mx-auto">
          {/* Left Block */}
          <div className="relative flex flex-col items-center text-center mt-12">
            <div className="flex items-center space-x-4">
              <h3 className="text-2xl font-bold text-gray-900">
                Already have a tool in place?{" "}
              </h3>
            </div>
            <p className="mt-4 text-lg md:text-xl text-center text-gray-600 max-w-2xl mx-auto">
              Set up June with our easy to add snippet. It takes{" "}
              <span className="font-semibold text-blue-600">
                less than 30 minutes
              </span>{" "}
              and we give your engineer everything they need to get started
              quickly and{" "}
              <a href="#" className="text-blue-600 font-semibold">
                securely
              </a>
              .
            </p>
            <p className="mt-4 text-lg text-gray-600">
              We can provide both a SOC 2 report and can help you make sure you
              are GDPR compliant.
            </p>

            {/* Positioned Images */}
            <img
              src="https://www.june.so/home/get-started/avatar2.svg"
              alt="Left Image 1"
              className="absolute -top-10 -left-10 w-24 h-24 object-contain float-fast"
              style={{ animation: 'floatFast 2s ease-in-out infinite' }}
            />
            <img
              src="https://www.june.so/home/get-started/gdpr.svg"
              alt="Left Image 2"
              className="absolute top-0 -right-10 w-24 h-24 object-contain"
              style={{ animation: 'floatFast 2s ease-in-out infinite' }}
            />
          </div>
      {/* Right Block */}
          <div className="relative flex flex-col items-center text-center mt-12">
            <div className="flex items-center space-x-4">
              <h3 className="text-2xl font-bold text-gray-900">
                Is June your first product analytics tool?
              </h3>
            </div>
            <p className="mt-4 text-lg md:text-xl text-center text-gray-600 max-w-2xl mx-auto">
              Set up June with our easy to add snippet. It takes{" "}
              <span className="font-semibold text-blue-600">
                less than 30 minutes
              </span>{" "}
              and we give your engineer everything they need to get started
              quickly and{" "}
              <a href="#" className="text-blue-600 font-semibold">
                securely
              </a>
              .
            </p>
            <p className="mt-4 text-lg text-gray-600">
              We can provide both a SOC 2 report and can help you make sure you
              are GDPR compliant.
            </p>

            {/* Positioned Images */}
            <img
              src="https://www.june.so/home/get-started/avatar1.svg"
              alt="Right Image 1"
              className="absolute -top-10 -left-10 w-24 h-24 object-contain"
              style={{ animation: 'floatFast 2s ease-in-out infinite' }}
            />
            <img
              src="https://www.june.so/home/get-started/avatar3.svg"
              alt="Right Image 2"
              className="absolute top-1/2 -right-10 w-24 h-24 object-contain"
              style={{ animation: 'floatFast 2s ease-in-out infinite' }}
            />
          </div>
        </div>
        {/* Snippet Section */}
        <div className="relative mt-20 text-center">
          {/* Rotated code block */}
          <div className="inline-block transform -rotate-6 bg-[#1B1536] px-10 py-8 rounded-xl text-white text-2xl md:text-4xl font-bold shadow-lg hover:scale-110">
            <span className="text-purple-400">analytics.track</span>(
            <span className="text-blue-300">'Customer Inbox'</span>)
          </div>

          {/* Arrow below */}
          <div className="mt-6 flex justify-center">
            <img
              src="https://www.june.so/home/get-started/easy-to-add.svg"
              alt="arrow"
            />
          </div>
        </div>
        {/* Logos and Testimonial */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-10">
            Loved by fast growing companies
          </h3>

          {/* Top Row Images */}
          <div className="flex justify-center gap-6 mb-6">
            <img
              src="/path-to/image-top-1.png"
              alt="Top 1"
              className="w-12 h-12 object-contain"
            />
            <img
              src="/path-to/image-top-2.png"
              alt="Top 2"
              className="w-12 h-12 object-contain"
            />
            <img
              src="/path-to/image-top-3.png"
              alt="Top 3"
              className="w-12 h-12 object-contain"
            />
          </div>

          {/* Circle Layout */}
          <div className="flex justify-center items-center gap-6">
            {/* Left Vertical Images */}
            <div className="flex flex-col justify-between gap-4">
              <img
                src="/path-to/image-left-1.png"
                alt="Left 1"
                className="w-10 h-10 object-contain"
              />
              <img
                src="/path-to/image-left-2.png"
                alt="Left 2"
                className="w-10 h-10 object-contain"
              />
              <img
                src="/path-to/image-left-3.png"
                alt="Left 3"
                className="w-10 h-10 object-contain"
              />
            </div>

            {/* Testimonial Block */}
            <div className="bg-[#1B1536] text-white p-6 rounded-xl max-w-md w-full">
              <p className="text-xl font-semibold">
                “We're faster at identifying upsell opportunities thanks to
                June”
              </p>
              <div className="mt-4 flex items-center justify-center space-x-3">
                <img
                  src="https://d3dyfaf3iutrxo.cloudfront.net/thumbnail/user/65a6ed2908524b56ad76fb9c2e5e5c7a.jpeg"
                  alt="Aditya"
                  className="w-10 h-10 rounded-full"
                />
                <span className="text-sm text-gray-300">
                  Made By Aditya Bhardwaj
                </span>
              </div>
            </div>

            {/* Right Vertical Images */}
            <div className="flex flex-col justify-between gap-4">
              <img
                src="/path-to/image-right-1.png"
                alt="Right 1"
                className="w-10 h-10 object-contain"
              />
              <img
                src="/path-to/image-right-2.png"
                alt="Right 2"
                className="w-10 h-10 object-contain"
              />
              <img
                src="/path-to/image-right-3.png"
                alt="Right 3"
                className="w-10 h-10 object-contain"
              />
            </div>
          </div>

          {/* Bottom Row Images */}
          <div className="flex justify-center gap-6 mt-6">
            <img
              src="/path-to/image-bottom-1.png"
              alt="Bottom 1"
              className="w-12 h-12 object-contain"
            />
            <img
              src="/path-to/image-bottom-2.png"
              alt="Bottom 2"
              className="w-12 h-12 object-contain"
            />
            <img
              src="/path-to/image-bottom-3.png"
              alt="Bottom 3"
              className="w-12 h-12 object-contain"
            />
          </div>
        </div>
      </div>

    </div>
  );
}

const LandingSection = () => {
  return (
    <div className="bg-gradient-to-b from-white to-blue-50 min-h-screen flex flex-col justify-between">
      {/* Main Content */}
      <div className="p-8">
        {/* Top: Meeting card */}
        <div className="bg-[#6A5AE0] rounded-2xl overflow-hidden flex flex-col md:flex-row p-6 py-24 text-white shadow-lg">
          <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-2">Let's meet for 30 mins</h2>
            <p className="text-white/90">
              We're here to help you provide an exceptional experience to your
              customers.
            </p>
            <button className="bg-white text-[#6A5AE0] mt-6 px-5 py-3 rounded-xl font-medium flex items-center transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 shadow-md w-max">
              <span className="mr-3">Book a demo</span>
              <span className="bg-[#6A5AE0] text-white rounded-full p-2">
                <FaArrowRight className="text-sm" />
              </span>
            </button>
          </div>

          <div className="mt-6 md:mt-0 md:ml-6 w-full md:w-80">
            <img
              src="https://www.june.so/footer/onboarding-cloud.svg"
              alt="Flight Ticket"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Bottom: Updates + Articles */}
        <div className="bg-white mt-6 rounded-xl shadow border p-6 flex flex-col md:flex-row gap-6">
          {/* Product Updates */}
          <div className="flex-1">
            <h3 className="font-semibold text-gray-700 flex items-center gap-2 mb-2">
              <span className="bg-blue-100 text-blue-500 p-1 rounded">📘</span>
              Latest product updates
            </h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>
                SQL computed traits -{" "}
                <span className="text-gray-400">2 May</span>
              </li>
              <li>
                Custom Objects are now in Beta -{" "}
                <span className="text-gray-400">25 Apr</span>
              </li>
              <li>
                Get together and fix bugs -{" "}
                <span className="text-gray-400">18 Apr</span>
              </li>
            </ul>
          </div>

          {/* Articles */}
          <div className="flex-1">
            <h3 className="font-semibold text-gray-700 flex items-center gap-2 mb-2">
              <span className="bg-purple-100 text-purple-500 p-1 rounded">
                📄
              </span>
              Latest articles
            </h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>
                How to Align Your Customer Success Models With Real Customer
                Behavior - <span className="text-gray-400">30 Apr</span>
              </li>
              <li>
                Making Product Usage Count: How Behavioral Segmentation Boosts
                SaaS Retention and Expansion -{" "}
                <span className="text-gray-400">25 Apr</span>
              </li>
              <li>
                Churn Prediction Model: How to Use Customer Data to Spot Risk
                Before It's Too Late -{" "}
                <span className="text-gray-400">16 Apr</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Navbar */}
      <footer className="text-center py-6 px-4 text-sm text-gray-700 flex flex-wrap justify-center gap-x-8 gap-y-4 border-t border-gray-200">
        <a href="#">Blog</a>
        <a href="#">Docs</a>
        <a href="#">Attio integration</a>
        <a href="#">Privacy</a>
        <a href="#">Security</a>
        <a href="#">HubSpot integration</a>
        <a href="#">Benchmarks</a>
        <a href="#">Salesforce integration</a>
        <a href="#">Terms</a>
      </footer>
    </div>
  );
};

const Home = () => {
  return (
    <div>

      <Navbar />
      <Hero />
      <TrustedBy />
      <br />
      <br />
      <Cards />
      <LandingSection />
    </div>
  );
};

export default Home;
