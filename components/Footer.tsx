import React from 'react';
import Logo from '../app/public/logo.png'
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-white text-black py-8 bottom-0 w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Logo and Social Media */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <Image src={Logo} className='h-50 w-60' alt='logo'/>
            <div className="flex space-x-4 mt-12">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={30} className="text-black hover:text-gray-400" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30} className="text-black hover:text-gray-400" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} className="text-black hover:text-gray-400" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={30} className="text-black hover:text-gray-400" />
              </a>
              <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
              <FaTiktok size={30} className="text-black hover:text-gray-400" />
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube size={30} className="text-black hover:text-gray-400" />
              </a>
            </div>
          </div>
          
          {/* Column 1 */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h5 className="font-bold mb-4">Company</h5>
            <ul>
              <li className="mb-2"><a href="/about" className="hover:text-gray-400">About Us</a></li>
              <li className="mb-2"><a href="/careers" className="hover:text-gray-400">Careers</a></li>
              <li className="mb-2"><a href="/contact" className="hover:text-gray-400">Contact</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h5 className="font-bold mb-4">Support</h5>
            <ul>
              <li className="mb-2"><a href="/help" className="hover:text-gray-400">Help Center</a></li>
              <li className="mb-2"><a href="/privacy" className="hover:text-gray-400">Privacy Policy</a></li>
              <li className="mb-2"><a href="/terms" className="hover:text-gray-400">Terms of Service</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h5 className="font-bold mb-4">Resources</h5>
            <ul>
              <li className="mb-2"><a href="/blog" className="hover:text-gray-400">Blog</a></li>
              <li className="mb-2"><a href="/faq" className="hover:text-gray-400">FAQ</a></li>
              <li className="mb-2"><a href="/support" className="hover:text-gray-400">Support</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Trasken Services All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
