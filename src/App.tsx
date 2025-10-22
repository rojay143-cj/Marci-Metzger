import { useState, useEffect } from 'react';
import { Home, MapPin, Phone, Mail, Facebook, Linkedin, Instagram, Award, Users, DollarSign, Building2, TrendingUp, Clock, Menu, X, Image as ImageIcon } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      url: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Luxury Home Exterior',
      category: 'Residential'
    },
    {
      url: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Modern Kitchen',
      category: 'Interior'
    },
    {
      url: 'https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Elegant Living Room',
      category: 'Interior'
    },
    {
      url: 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Spacious Bedroom',
      category: 'Interior'
    },
    {
      url: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Beautiful Property',
      category: 'Residential'
    },
    {
      url: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Desert Property',
      category: 'Residential'
    },
    {
      url: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Modern Architecture',
      category: 'Commercial'
    },
    {
      url: 'https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Contemporary Home',
      category: 'Residential'
    },
    {
      url: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Family Home',
      category: 'Residential'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <Home className="w-8 h-8 text-emerald-600" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Marci Metzger</h1>
                <p className="text-xs text-gray-600">Pahrump Realtor</p>
              </div>
            </div>

            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">About</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">Services</button>
              <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">Gallery</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">Contact</button>
            </div>

            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-4 space-y-3">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left text-gray-700 hover:text-emerald-600 transition-colors font-medium py-2">Home</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left text-gray-700 hover:text-emerald-600 transition-colors font-medium py-2">About</button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left text-gray-700 hover:text-emerald-600 transition-colors font-medium py-2">Services</button>
              <button onClick={() => scrollToSection('gallery')} className="block w-full text-left text-gray-700 hover:text-emerald-600 transition-colors font-medium py-2">Gallery</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-gray-700 hover:text-emerald-600 transition-colors font-medium py-2">Contact</button>
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/mtn%20falls%20pond.jpg')`,
          }}
        />
        <div className="relative z-10 text-center text-white px-4">
          <div className="mb-6">
            <img
              src="https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/blob-6c0c2e0.png"
              alt="Marci Metzger"
              className="w-32 h-32 rounded-full mx-auto border-4 border-white shadow-2xl object-cover mb-6"
            />
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">MARCI METZGER</h2>
          <p className="text-2xl md:text-3xl mb-8 text-emerald-400 font-light">Pahrump Realtor</p>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Nearly 3 Decades of Real Estate Excellence in Pahrump, Nevada
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-xl"
            >
              Get In Touch
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white px-8 py-4 rounded-lg text-lg font-semibold transition-all"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center transform hover:scale-105 transition-transform">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">90+</h3>
              <p className="text-gray-600 font-medium">Clients Helped in 2021</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center transform hover:scale-105 transition-transform">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">$28.5M</h3>
              <p className="text-gray-600 font-medium">In Sales Closed</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center transform hover:scale-105 transition-transform">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">30 Years</h3>
              <p className="text-gray-600 font-medium">Real Estate Experience</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/photo-5db79f9.jpg"
                alt="Marci Metzger Professional"
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Your Trusted Real Estate Partner
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                With nearly three decades of experience in the real estate industry, I've dedicated my career to helping clients in Pahrump, Nevada find their perfect property and achieve their real estate goals.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                My commitment to excellence and personalized service has resulted in helping nearly 90 clients in 2021 alone, closing over $28.5 million in sales. Whether you're buying your first home, selling a property, or looking for investment opportunities, I bring the expertise and dedication needed to make your real estate journey smooth and successful.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 text-emerald-600">
                  <Phone className="w-5 h-5" />
                  <span className="text-lg font-semibold">(206) 919-6886</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Comprehensive Real Estate Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From residential to commercial properties, I offer complete real estate solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
              <div className="bg-emerald-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Home className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Residential Real Estate</h3>
              <p className="text-gray-600 leading-relaxed">
                Expert guidance in buying and selling residential properties, from starter homes to luxury estates.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
              <div className="bg-emerald-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Building2 className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Commercial Real Estate</h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive commercial property services for investors and business owners looking to expand.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
              <div className="bg-emerald-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Buyer Guidance</h3>
              <p className="text-gray-600 leading-relaxed">
                Personalized assistance to help buyers find the perfect property that meets their needs and budget.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
              <div className="bg-emerald-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Seller Guidance</h3>
              <p className="text-gray-600 leading-relaxed">
                Strategic marketing and pricing expertise to help sellers maximize their property's value.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
              <div className="bg-emerald-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Property Investment</h3>
              <p className="text-gray-600 leading-relaxed">
                Expert analysis and guidance for investors seeking profitable real estate opportunities.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
              <div className="bg-emerald-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Local Expertise</h3>
              <p className="text-gray-600 leading-relaxed">
                Deep knowledge of the Pahrump market and surrounding areas to give you the best advantage.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Property Gallery
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our stunning collection of properties and interiors in the Pahrump area
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                onClick={() => setSelectedImage(image.url)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white text-lg font-semibold mb-1">{image.title}</p>
                    <p className="text-emerald-400 text-sm">{image.category}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-emerald-600 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ImageIcon className="w-5 h-5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-emerald-400 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Gallery preview"
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

<section id="contact" className="py-20 bg-gradient-to-b from-emerald-50 to-emerald-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Let's Start Your Real Estate Journey
      </h2>
      <p className="text-xl text-gray-700">
        Contact me today for personalized real estate services
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Contact Info */}
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
              <MapPin className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
              <p className="text-gray-600">3190 HW-160, Suite F<br />Pahrump, Nevada 89048</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
              <Phone className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
              <a href="tel:+12069196886" className="text-emerald-600 hover:text-emerald-700 text-lg font-medium">
                (206) 919-6886
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
              <Clock className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Office Hours</h4>
              <p className="text-gray-600">8:00 AM - 7:00 PM<br />Daily</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <h4 className="font-semibold text-gray-900 mb-4">Follow Me</h4>
          <div className="flex space-x-4">
            <a href="#" className="bg-emerald-100 hover:bg-emerald-200 w-12 h-12 rounded-lg flex items-center justify-center transition-colors">
              <Facebook className="w-6 h-6 text-emerald-600" />
            </a>
            <a href="#" className="bg-emerald-100 hover:bg-emerald-200 w-12 h-12 rounded-lg flex items-center justify-center transition-colors">
              <Instagram className="w-6 h-6 text-emerald-600" />
            </a>
            <a href="#" className="bg-emerald-100 hover:bg-emerald-200 w-12 h-12 rounded-lg flex items-center justify-center transition-colors">
              <Linkedin className="w-6 h-6 text-emerald-600" />
            </a>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
              placeholder="(206) 919-6886"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all resize-none"
              placeholder="Tell me about your real estate needs..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 rounded-lg transition-colors shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>

    {/* Google Map Embed */}
    <div className="mt-16 rounded-2xl overflow-hidden shadow-xl border border-gray-200">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3207.619714174626!2d-115.9966895!3d36.209262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8e6379dc96e4f%3A0xe04f60e1a4b798c9!2s3190%20NV-160%20Suite%20F%2C%20Pahrump%2C%20NV%2089048%2C%20USA!5e0!3m2!1sen!2sph!4v1729585902744!5m2!1sen!2sph"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Home className="w-8 h-8 text-emerald-400" />
                <div>
                  <h3 className="text-xl font-bold">Marci Metzger</h3>
                  <p className="text-sm text-gray-400">Pahrump Realtor</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Your trusted real estate partner with nearly 30 years of experience serving Pahrump, Nevada.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><button onClick={() => scrollToSection('home')} className="hover:text-emerald-400 transition-colors">Home</button></li>
                <li><button onClick={() => scrollToSection('about')} className="hover:text-emerald-400 transition-colors">About</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-emerald-400 transition-colors">Services</button></li>
                <li><button onClick={() => scrollToSection('gallery')} className="hover:text-emerald-400 transition-colors">Gallery</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-emerald-400 transition-colors">Contact</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>(206) 919-6886</span>
                </li>
                <li className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-emerald-400 mt-1" />
                  <span>3190 HW-160, Suite F<br />Pahrump, Nevada 89048</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  <span>8:00 AM - 7:00 PM Daily</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Marci Metzger Real Estate. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
