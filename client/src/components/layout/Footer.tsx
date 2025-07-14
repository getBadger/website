// import { Link } from 'wouter';
// import { Facebook, Twitter, Linkedin, Github } from 'lucide-react';

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-neutral-900">
//       <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
//         <div className="xl:grid xl:grid-cols-3 xl:gap-8">
//           <div className="space-y-8 xl:col-span-1">
//             <Link href="/">
//               <span className="text-white font-bold text-2xl cursor-pointer">getBadger</span>
//             </Link>
//             <p className="text-gray-300 text-base">
//               Empowering affiliate marketers and online shoppers with innovative open-source tools.
//             </p>
//             <div className="flex space-x-6">
//               <a href="https://x.com/_GetBadger" className="text-gray-400 hover:text-gray-300">
//                 <span className="sr-only">Twitter</span>
//                 <Twitter className="h-6 w-6" />
//               </a>
//               <a href="https://www.linkedin.com/company/getbadgernet" className="text-gray-400 hover:text-gray-300">
//                 <span className="sr-only">LinkedIn</span>
//                 <Linkedin className="h-6 w-6" />
//               </a>
//               <a href="https://www.facebook.com/get.badger/" className="text-gray-400 hover:text-gray-300">
//                 <span className="sr-only">Facebook</span>
//                 <Facebook className="h-6 w-6" />
//               </a>
//               <a href="https://github.com/getBadger" className="text-gray-400 hover:text-gray-300">
//                 <span className="sr-only">GitHub</span>
//                 <Github className="h-6 w-6" />
//               </a>
//             </div>
//           </div>

//           <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
//             <div className="md:grid md:grid-cols-2 md:gap-8">
//               <div>
//                 <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">
//                   Solutions
//                 </h3>
//                 <ul className="mt-4 space-y-4">
//                   <li>
//                     <Link href="/tools">
//                       <a className="text-base text-gray-400 hover:text-gray-300">
//                         Affiliate Tools
//                       </a>
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href="/tools">
//                       <a className="text-base text-gray-400 hover:text-gray-300">
//                         Shopping Tools
//                       </a>
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href="/tools">
//                       <a className="text-base text-gray-400 hover:text-gray-300">
//                         Analytics
//                       </a>
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href="/tools">
//                       <a className="text-base text-gray-400 hover:text-gray-300">
//                         Integration APIs
//                       </a>
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//               <div className="mt-12 md:mt-0">
//                 <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">
//                   Support
//                 </h3>
//                 <ul className="mt-4 space-y-4">
//                   <li>
//                     <a href="#" className="text-base text-gray-400 hover:text-gray-300">
//                       Documentation
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#" className="text-base text-gray-400 hover:text-gray-300">
//                       Knowledge Base
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#" className="text-base text-gray-400 hover:text-gray-300">
//                       API References
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#" className="text-base text-gray-400 hover:text-gray-300">
//                       Community
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             <div className="md:grid md:grid-cols-2 md:gap-8">
//               <div>
//                 <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">
//                   Company
//                 </h3>
//                 <ul className="mt-4 space-y-4">
//                   <li>
//                     <Link href="/about">
//                       <a className="text-base text-gray-400 hover:text-gray-300">
//                         About
//                       </a>
//                     </Link>
//                   </li>
//                   <li>
//                     <a href="#" className="text-base text-gray-400 hover:text-gray-300">
//                       Careers
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#" className="text-base text-gray-400 hover:text-gray-300">
//                       Partners
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#" className="text-base text-gray-400 hover:text-gray-300">
//                       Blog
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//               <div className="mt-12 md:mt-0">
//                 <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">
//                   Legal
//                 </h3>
//                 <ul className="mt-4 space-y-4">
//                   <li>
//                     <a href="#" className="text-base text-gray-400 hover:text-gray-300">
//                       Privacy
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#" className="text-base text-gray-400 hover:text-gray-300">
//                       Terms
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#" className="text-base text-gray-400 hover:text-gray-300">
//                       Copyright
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#" className="text-base text-gray-400 hover:text-gray-300">
//                       Security
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="mt-12 border-t border-gray-700 pt-8">
//           <p className="text-base text-gray-400 text-center">
//             &copy; {currentYear} getBadger. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import { Github, Heart, Coffee, HeartHandshake } from "lucide-react";
import Logo from "../Logo";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <Logo
              logoUrl="https://i.imgur.com/Zbv8Xwb.png"
              width={50}
              height={50}
            />
            <p className="text-gray-600 text-center md:text-left max-w-sm">
              Providing open source tools for savvy shoppers and affiliate
              marketers. Transparency by the people, for the people.
            </p>
          </div>

          <div className="flex flex-col gap-4 ">
            <h3 className="font-bold text-lg">Links</h3>
            <div className="flex flex-col gap-2">
              <a
                href="/"
                className="hover:text-orange-500 hover:text-orange-500 flex flex-col transition-colors "
              >
                Home
              </a>
              <a
                href="/about"
                className="hover:text-orange-500 hover:text-orange-500 flex flex-col transition-colors "
              >
                About
              </a>
              <a
                href="/how"
                className="hover:text-orange-500 hover:text-orange-500 flex flex-col transition-colors "
              >
                How it Works
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4 ">
            <h3 className="font-bold text-lg">Support Us</h3>
            <div className="flex flex-col gap-2">
              <a
                href="https://github.com/orgs/getBadger/repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500 hover:text-orange-500 transition-colors flex flex-col items-center gap-2"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              {/* <a
                href="https://patreon.com/getBadger?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500 hover:text-orange-500 transition-colors flex flex-col items-center gap-2"
              >
                <HeartHandshake className="w-4 h-4" />
                <span>Patreon</span>
              </a> */}
              {/* <a
                href="https://buymeacoffee.com/getbadger"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500 hover:text-orange-500 transition-colors flex flex-col items-center gap-2"
              >
                <Coffee className="w-4 h-4" />
                <span>Buy Me A Coffee</span>
              </a> */}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Badger. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
