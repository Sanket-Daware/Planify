import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="bg-indigo-600 p-2 rounded-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-900">PLANIFY</span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 font-medium">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 font-medium">Pricing</a>
              <a href="#about" className="text-gray-600 hover:text-gray-900 font-medium">About</a>
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center gap-4">
              <button 
                onClick={() => navigate('/login')}
                className="text-gray-700 hover:text-gray-900 font-medium px-4 py-2"
              >
                Login
              </button>
              <button 
                onClick={() => navigate('/register')}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-2.5 rounded-lg transition-colors"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-28 px-4 sm:px-6 lg:px-12" style={{ backgroundColor: '#E3EBF4' }}>
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center max-w-6xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 rounded-full mb-8">
              <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
              <span className="text-sm font-medium text-indigo-700">Exhibition Management Platform</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Find the right organizer.{' '}
              <span className="text-indigo-600">Manage exhibitors.</span>{' '}
              Execute a successful exhibition.
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              The all-in-one platform for exhibition organizers and exhibitors. Plan, coordinate, and execute world-class exhibitions with ease.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16">
              <button 
                onClick={() => navigate('/register')}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-10 py-4 rounded-lg text-lg transition-colors flex items-center gap-2 shadow-lg shadow-indigo-200 w-full sm:w-auto"
              >
                Organizer Login
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <button className="bg-white hover:bg-gray-50 text-indigo-600 font-semibold px-10 py-4 rounded-lg text-lg border-2 border-indigo-600 transition-colors shadow-lg w-full sm:w-auto">
                Exhibitor Explore
              </button>
            </div>
          </div>

          {/* Feature Icons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-12 max-w-6xl mx-auto">
            <div className="flex flex-col items-center gap-3">
              <div className="bg-indigo-100 p-4 rounded-xl">
                <svg className="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <p className="text-sm text-gray-700 font-medium">Easy Setup</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="bg-teal-100 p-4 rounded-xl">
                <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <p className="text-sm text-gray-700 font-medium">Team Collaboration</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="bg-purple-100 p-4 rounded-xl">
                <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <p className="text-sm text-gray-700 font-medium">Analytics</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="bg-blue-100 p-4 rounded-xl">
                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <p className="text-sm text-gray-700 font-medium">Secure</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 bg-gray-50">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 lg:gap-16 text-center">
            <div>
              <div className="bg-indigo-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-5xl font-bold text-gray-900 mb-3">500+</h3>
              <p className="text-gray-600 font-medium text-lg">Exhibitions</p>
            </div>
            <div>
              <div className="bg-teal-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <svg className="w-10 h-10 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-5xl font-bold text-gray-900 mb-3">10K+</h3>
              <p className="text-gray-600 font-medium text-lg">Exhibitors</p>
            </div>
            <div>
              <div className="bg-purple-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-5xl font-bold text-gray-900 mb-3">$50M+</h3>
              <p className="text-gray-600 font-medium text-lg">Revenue Managed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-12 bg-white">
        <div className="max-w-[1400px] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5 leading-tight">
              Everything you need to run <span className="text-indigo-600">successful exhibitions</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From planning to execution, PLANIFY provides all the tools organizers and exhibitors need in one platform.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 lg:p-8 rounded-2xl border border-gray-200 hover:shadow-xl hover:border-indigo-200 transition-all duration-300">
              <div className="bg-indigo-100 w-14 h-14 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Exhibition Management</h3>
              <p className="text-gray-600 leading-relaxed">
                Create and manage multiple exhibitions with comprehensive scheduling and tracking tools.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 lg:p-8 rounded-2xl border border-gray-200 hover:shadow-xl hover:border-teal-200 transition-all duration-300">
              <div className="bg-teal-100 w-14 h-14 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Stall Booking</h3>
              <p className="text-gray-600 leading-relaxed">
                Visual stall layouts with real-time availability. Book and manage stalls effortlessly.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 lg:p-8 rounded-2xl border border-gray-200 hover:shadow-xl hover:border-purple-200 transition-all duration-300">
              <div className="bg-purple-100 w-14 h-14 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Team Coordination</h3>
              <p className="text-gray-600 leading-relaxed">
                Assign roles, manage tasks, and coordinate with your entire exhibition team.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-6 lg:p-8 rounded-2xl border border-gray-200 hover:shadow-xl hover:border-blue-200 transition-all duration-300">
              <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Payment Processing</h3>
              <p className="text-gray-600 leading-relaxed">
                Secure payment collection from exhibitors with automated invoicing and receipts.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white p-6 lg:p-8 rounded-2xl border border-gray-200 hover:shadow-xl hover:border-pink-200 transition-all duration-300">
              <div className="bg-pink-100 w-14 h-14 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Communication Hub</h3>
              <p className="text-gray-600 leading-relaxed">
                Built-in messaging for seamless communication between organizers and exhibitors.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white p-6 lg:p-8 rounded-2xl border border-gray-200 hover:shadow-xl hover:border-yellow-200 transition-all duration-300">
              <div className="bg-yellow-100 w-14 h-14 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Analytics & Reports</h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive dashboards with revenue tracking, attendance metrics, and insights.
              </p>
            </div>

            {/* Feature 7 */}
            <div className="bg-white p-6 lg:p-8 rounded-2xl border border-gray-200 hover:shadow-xl hover:border-indigo-200 transition-all duration-300">
              <div className="bg-indigo-100 w-14 h-14 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Task Management</h3>
              <p className="text-gray-600 leading-relaxed">
                Kanban-style boards to track pre-event, on-site, and post-event tasks.
              </p>
            </div>

            {/* Feature 8 */}
            <div className="bg-white p-6 lg:p-8 rounded-2xl border border-gray-200 hover:shadow-xl hover:border-teal-200 transition-all duration-300">
              <div className="bg-teal-100 w-14 h-14 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Role-Based Access</h3>
              <p className="text-gray-600 leading-relaxed">
                Secure access control for organizers, exhibitors, and team members.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-12 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to transform your exhibition management?
          </h2>
          <p className="text-lg sm:text-xl text-indigo-100 mb-10">
            Join hundreds of organizers who trust PLANIFY to deliver exceptional exhibitions.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-10">
            <button 
              onClick={() => navigate('/register')}
              className="bg-white hover:bg-gray-100 text-indigo-600 font-semibold px-10 py-4 rounded-lg text-lg transition-colors shadow-xl w-full sm:w-auto"
            >
              Start Free Trial →
            </button>
            <button className="bg-indigo-700 hover:bg-indigo-800 text-white font-semibold px-10 py-4 rounded-lg text-lg border-2 border-white/20 transition-colors w-full sm:w-auto">
              Schedule Demo
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-indigo-100">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
              </svg>
              <span className="font-medium">Free 14-day trial</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
              </svg>
              <span className="font-medium">No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
              </svg>
              <span className="font-medium">Full platform access</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            {/* Column 1 */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-indigo-600 p-2 rounded-lg">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <span className="text-lg font-bold text-white">PLANIFY</span>
              </div>
              <p className="text-sm text-gray-400 mb-5">
                The complete exhibition planning and coordination platform.
              </p>
              <div className="flex gap-3">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-base">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Updates</a></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-base">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-base">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>© 2026 PLANIFY. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
