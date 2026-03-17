import {
  Mail,
  Phone,
  MapPin,
  Dot,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0B2545] text-white pt-12 pb-6">
      <div className="container mx-auto px-6 grid md:grid-cols-5 gap-10">
        {/* LOGO + CONTACT */}
        <div>
          <figure className="font-bold text-xl">
            <img src="/logo.svg" alt="Church logo" />
          </figure>
          <p className="text-sm mt-3 leading-relaxed text-gray-400 font-inter">
            Equipping God’s people for faithful service in His kingdom since
            1991.
          </p>

          <div className="mt-4 space-y-4 text-sm font-inter">
            {/* ADDRESS */}
            <p className="flex items-start gap-3 text-gray-400">
              <MapPin size={22} className="text-[#D4A34A] shrink-0" />
              <span>
                3–5 WAGGOM Avenue, Off Agalaba Road, Osiomma, Aba, Abia State
              </span>
            </p>

            {/* PHONE */}
            <p className="flex items-center gap-3 text-gray-400">
              <Phone size={18} className="text-[#D4A34A] shrink-0" />
              <span>(555) 123-4567</span>
            </p>

            {/* EMAIL */}
            <p className="flex items-center gap-3 text-gray-400 break-all">
              <Mail size={18} className="text-[#D4A34A] shrink-0" />
              <span>info@waths.edu</span>
            </p>
          </div>
        </div>

        {/* ABOUT */}
        <div>
          <h3 className="font-semibold text-xl mb-3">About</h3>
          <ul className="space-y-2 text-sm text-gray-400 font-inter">
            <li><Link to="/about#our-story" className="hover:text-white transition-colors">Our Story</Link></li>
            <li><Link to="/about#what-drives-us" className="hover:text-white transition-colors">Mission & Vision</Link></li>
            <li><Link to="/about#leadership" className="hover:text-white transition-colors">Leadership</Link></li>
            <li><Link to="/about#accreditation" className="hover:text-white transition-colors">Accreditation</Link></li>
          </ul>
        </div>

        {/* ACADEMICS */}
        <div>
          <h3 className="font-semibold text-xl mb-3">Academics</h3>
          <ul className="space-y-2 text-sm text-gray-400 font-inter">
            <li><Link to="/academic" className="hover:text-white transition-colors">Programs</Link></li>
            <li><Link to="/academic" className="hover:text-white transition-colors">Faculty</Link></li>
            <li><Link to="/academic" className="hover:text-white transition-colors">Library</Link></li>
            <li><Link to="/academic" className="hover:text-white transition-colors">Academic Calendar</Link></li>
          </ul>
        </div>

        {/* ADMISSIONS */}
        <div>
          <h3 className="font-semibold text-xl mb-3">Admission</h3>
          <ul className="space-y-2 text-sm text-gray-400 font-inter">
            <li><Link to="/admission#online-application" className="hover:text-white transition-colors">Apply Now</Link></li>
            <li><Link to="/admission" className="hover:text-white transition-colors">Tuition & Aid</Link></li>
            <li><Link to="/admission" className="hover:text-white transition-colors">Visit Campus</Link></li>
            <li><Link to="/admission" className="hover:text-white transition-colors">International Students</Link></li>
          </ul>
        </div>

        {/* RESOURCES */}
        <div>
          <h3 className="font-semibold text-xl mb-3">Resources</h3>
          <ul className="space-y-2 text-sm text-gray-400 font-inter">
            <li><a href="https://portal.waths.com.ng/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Student Portal</a></li>
            <li><Link to="/" className="hover:text-white transition-colors">Alumni</Link></li>
            <li><Link to="/" className="hover:text-white transition-colors">Events</Link></li>
            <li><Link to="/news-updates" className="hover:text-white transition-colors">News & Media</Link></li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-10 border-t border-gray-600 pt-6" />

      {/* Bottom */}
      <div className="container mx-auto px-6 mt-10 text-sm text-gray-400 flex flex-wrap justify-between font-inter">
        <p>{new Date().getFullYear()} Bible School. All Rights Reserved</p>

        <div className="flex space-x-2">
          <Link to="/" className="hover:text-white transition-colors">Privacy Policy</Link> <Dot />
          <Link to="/" className="hover:text-white transition-colors">Terms of Use</Link> <Dot />
          <Link to="/" className="hover:text-white transition-colors">Accessibility</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
