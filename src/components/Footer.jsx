import { FaFacebook, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // const links = [
  //   {
  //     title: "Company",
  //     items: [
  //       { name: "About", href: "#about" },
  //       { name: "Contact", href: "#contact" },
  //     ],
  //   },
    
  // ];

  const socialLinks = [
    { 
      icon: <FaFacebook className="w-5 h-5" />, 
      href: "#", 
      label: "Facebook" 
    },
    { 
      icon: <FaTwitter className="w-5 h-5" />, 
      href: "#", 
      label: "Twitter" 
    },
    { 
      icon: <FaGithub className="w-5 h-5" />, 
      href: "#", 
      label: "GitHub" 
    },
  ];

  return (
    <footer className="bg-[#016A70] text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Logo and Tagline - Centered */}
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <img 
              src="https://imgs.search.brave.com/ZI0s0MEB4yimj6W9TVmor3h7Vjje0bjM9G18_fnS3Ic/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9keW5h/bWljLmJyYW5kY3Jv/d2QuY29tL2Fzc2V0/L2xvZ28vZTU0NmYw/MzMtNzIzNC00YmRi/LWJjYmEtZDJhMzFk/NjdmMjBlL2xvZ28t/c2VhcmNoLWdyaWQt/MXg_bG9nb1RlbXBs/YXRlVmVyc2lvbj0x/JnY9NjM3NjU5NzEw/MTA5MTAwMDAw" 
              alt="Company Logo" 
              className="h-10 w-10"
              width={40}
              height={40}
            />
            {/* <span className="text-xl font-semibold">bgremover</span> */}
          </div>
          <p className="text-[#FFFFDD]/80 text-center max-w-md">
            Simple tagline about your company or product.
          </p>
        </div>

        {/* Links - Centered Grid
        <div className="flex justify-center mb-8">
          <div className="grid grid-cols-2 gap-8 md:gap-16">
            {links.map((section, index) => (
              <div key={index} className="text-center md:text-left">
                <h3 className="text-lg font-bold mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <a 
                        href={item.href} 
                        className="text-[#FFFFDD]/80 hover:text-[#D2DE32] transition-colors duration-200"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div> */}

        {/* Social Icons - Centered */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="text-white hover:text-[#D2DE32] transition-colors duration-200 text-xl"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright - Centered */}
        <div className="border-t border-[#FFFFDD]/20 pt-8 text-center">
          <p className="text-[#FFFFDD]/60 text-sm">
            © {currentYear} bgremover. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;