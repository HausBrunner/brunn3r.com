function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-black shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-20 h-20 flex items-center justify-center">
                <img src="logo.png" className="mx-auto" />
              </div>
              <div className="text-xl font-bold text-white">Brunn3r Technologies</div>
            </div>
            <div className="hidden md:flex space-x-8">
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-my-blue hover:text-white transition-all duration-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-my-blue hover:text-white transition-all duration-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-my-blue hover:text-white transition-all duration-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-my-blue text-white py-18 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNGRkYiIGZpbGwtb3BhY2l0eT0iLjEiPjxwYXRoIGQ9Ik0zNiAzNGgxMnYxMkgzNnpNMTQgMTRoMTJ2MTJIMTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative">
              <div className="flex items-center justify-center">
                <img src="hero.png" className="h-[30rem]" />
              </div>
          {/* Need a replacement for this
         <button className="bg-white text-my-blue px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Get Started
          </button>
          */}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
            <i className="fas fa-cubes text-my-blue mr-4"></i> Technology Solutions Built on Confidence
          </h2>
          <p className="text-lg text-black mb-8 text-center max-w-3xl mx-auto">
            You need technology that works, and you need to feel confident it's secure. We provide the expertise and support to make that a reality. By combining our strategic IT guidance, industry leading security, and reliable network solutions, we give you the peace of mind to innovate and take on new challenges, knowing your technology is ready for anything.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* IT Consulting */}
            <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
              <h3 className="text-2xl font-semibold text-black mb-3 flex items-center">
                <i className="fas fa-desktop mr-3 text-my-blue"></i> IT Consulting
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">Transforming your ideas into reality with solutions built for today's business challenges.</p>

              {/* IT Consulting Sub-services */}
              <div className="space-y-3 pl-6 border-l-2 border-my-blue">
                <div className="flex items-center space-x-2">
                  <i className="fas fa-check text-my-blue"></i>
                  <p className="text-gray-600">Develop a clear roadmap for technology adoption and digital transformation.</p>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="fas fa-check text-my-blue"></i>
                  <p className="text-gray-600">Migrate, manage, and optimize your infrastructure in cloud environments.</p>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="fas fa-check text-my-blue"></i>
                  <p className="text-gray-600">Architecting seamless digital workflows for enhanced productivity.</p>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="fas fa-check text-my-blue"></i>
                  <p className="text-gray-600">Optimizing your software and tools for maximum efficiency and return on investment.</p>
                </div>
              </div>
            </div>

            {/* Risk Management */}
            <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
              <h3 className="text-2xl font-semibold text-black mb-3 flex items-center">
                <i className="fas fa-arrow-right mr-3 text-my-blue"></i> Risk Management
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">Proactive strategies to protect your assets and ensure business continuity.</p>

              {/* Risk Management Sub-services */}
              <div className="space-y-3 pl-6 border-l-2 border-my-blue">
                <div className="flex items-center space-x-2">
                  <i className="fas fa-check text-my-blue"></i>
                  <p className="text-gray-600">Protect against threats with advanced security protocols and intrusion
                        detection.</p>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="fas fa-check text-my-blue"></i>
                  <p className="text-gray-600">Ensure adherence to industry regulations and best practices.</p>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="fas fa-check text-my-blue"></i>
                  <p className="text-gray-600">Minimize downtime and data loss with robust recovery strategies.</p>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="fas fa-check text-my-blue"></i>
                  <p className="text-gray-600">Identify and mitigate security weaknesses before they are exploited.</p>
                </div>
              </div>
            </div>

            {/* Network Design */}
            <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
              <h3 className="text-2xl font-semibold text-black mb-3 flex items-center">
                <i className="fas fa-network-wired mr-3 text-my-blue"></i> Network Design
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">Building robust and scalable network infrastructures for seamless operations.</p>

              {/* Network Design Sub-services */}
              <div className="space-y-3 pl-6 border-l-2 border-my-blue">
                <div className="flex items-center space-x-2">
                  <i className="fas fa-check text-my-blue"></i>
                  <p className="text-gray-600">Design and implement robust and futur -proof network infrastructures.</p>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="fas fa-check text-my-blue"></i>
                  <p className="text-gray-600">Enhance network speed, reliability, and overall performance.</p>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="fas fa-check text-my-blue"></i>
                  <p className="text-gray-600">Implement advanced security measures to protect your network perimeter.</p>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="fas fa-check text-my-blue"></i>
                  <p className="text-gray-600">Design and deploy secure and high performance wireless networks.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

            {/* Company Info */}
            <div>
              <h2 className="text-2xl font-bold text-center text-white mb-4 flex items-center justify-left">
                <i className="fas fa-info-circle text-my-blue mr-3"></i> About Brunn3r Technologies
              </h2>
              <div className="font-medium text-gray-400 mx-auto">
                <p className="mb-2">
                  Following a corporate reduction in force that ended my previous position, I saw an opportunity to
                  build something truly my own, a company founded on the principles I believe in. That's how Brunn3r
                  Technologies was born. What started as a solo venture from a personal challenge is now a company
                  dedicated to helping other businesses succeed.
                </p>
                <p>
                  I believe in providing clear, effective, and tailored IT solutions. My mission is to empower
                  businesses with the technological foundation they need to thrive in today's digital landscape. I
                  combine expertise with a commitment to client success, ensuring your technology works for you.
                </p>
                <div className="flex justify-start">
                  <img src="signature.png" alt="signature" className="mt-4" />
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              <h4 className="text-2xl font-semibold mb-6 text-white">Contact Us</h4>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-my-blue text-white"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-my-blue text-white"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-my-blue text-white"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-my-blue text-white"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-my-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-my-blue mt-12 pt-8 text-center text-gray-400">
            <p>© 2025 Haus Brunner LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
