import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Twitter,
  Dot,
  Youtube,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0B2545] text-white pt-12 pb-6">
      <div className="container mx-auto px-6 grid md:grid-cols-5 gap-10">
        {/* LOGO + CONTACT */}
        <div>
          <figure className="font-bold text-xl">
            <img src="/src/assets/icons/WATHS LOGO 2.svg" alt="Church logo" />
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
                13–5 WAGGOM Avenue, Off Agalaba Road, Osiomma, Aba, Abia State
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
            <li>Our Story</li>
            <li>Mission & Vision</li>
            <li>Leadership</li>
            <li>Accreditation</li>
          </ul>
        </div>

        {/* ACADEMICS */}
        <div>
          <h3 className="font-semibold text-xl mb-3">Academics</h3>
          <ul className="space-y-2 text-sm text-gray-400 font-inter">
            <li>Programs</li>
            <li>Faculty</li>
            <li>Library</li>
            <li>Academic Calendar</li>
          </ul>
        </div>

        {/* ADMISSIONS */}
        <div>
          <h3 className="font-semibold text-xl mb-3">Admission</h3>
          <ul className="space-y-2 text-sm text-gray-400 font-inter">
            <li>Apply Now</li>
            <li>Tuition & Aid</li>
            <li>Visit Campus</li>
            <li>International Students</li>
          </ul>
        </div>

        {/* RESOURCES */}
        <div>
          <h3 className="font-semibold text-xl mb-3">Resources</h3>
          <ul className="space-y-2 text-sm text-gray-400 font-inter">
            <li>Student Portal</li>
            <li>Alumni</li>
            <li>Events</li>
            <li>News & Media</li>
          </ul>
        </div>
      </div>

      {/* Newsletter */}
      <div className="container mx-auto px-6 mt-10 border-t border-gray-600 pt-6">
        <h3 className="font-semibold text-xl">Stay Connected</h3>
        <p className="text-sm mb-3 text-gray-400 font-inter">
          Subscribe to our newsletter for updates and ministry resources
        </p>

        <div className="flex items-center gap-3 font-inter">
          <input
            type="email"
            className="w-full md:w-96 px-4 py-2 rounded-lg bg-transparent border border-gray-500 text-white"
            placeholder="Your email address"
          />
          <button className="px-6 py-2 bg-[#D4A95E] text-white rounded-lg font-inter">
            Subscribe
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 mt-6">
          <Twitter className="bg-white/20 p-2 rounded-full" size={40} />
          <Instagram className="bg-white/20 p-2 rounded-full" size={40} />
          <Youtube className="bg-white/20 p-2 rounded-full" size={40} />
        </div>
      </div>

      {/* Bottom */}
      <div className="container mx-auto px-6 mt-10 text-sm text-gray-400 flex flex-wrap justify-between font-inter">
        <p>{new Date().getFullYear()} Bible School. All Rights Reserved</p>

        <div className="flex space-x-2">
          <p>Privacy Policy</p> <Dot />
          <p>Terms of Use</p> <Dot />
          <p>Accessibility</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
