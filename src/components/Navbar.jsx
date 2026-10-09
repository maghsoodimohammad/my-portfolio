
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const links = [
    { name: "Home", id: "home" },
    { name: "Works", id: "works" },
    { name: "Skills", id: "skills" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#F8F7F4]/90 backdrop-blur-md border-b border-[#D8D3C8]/60" >
      <div className="relative flex items-center justify-between px-4 py-4 md:px-8 lg:px-12">


        <a
          href="#home"
         className="text-xl font-bold text-[#252525] hover:text-[#405C50]"
        >
          MGH
        </a>

      
        <div className="hidden md:flex items-center gap-6 lg:gap-8 font-medium text-[18px] font-['Heebo']">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`transition-colors duration-200 ${
                activeSection === link.id
                  ? "text-[#405C50]"
                  : "text-gray-700 hover:text-[#405C50]"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

    
        <button
          className="md:hidden p-2 text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>


        {menuOpen && (
          <div className="absolute top-full right-4 left-4 flex flex-col gap-1 rounded-xl border border-gray-200 bg-white p-3 shadow-lg md:hidden">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMenuOpen(false)}
                className={`rounded-lg px-4 py-3 font-medium transition-colors ${
                  activeSection === link.id
                    ? "bg-red-50 text-[#405C50]"
                    : "text-gray-700 hover:bg-gray-50 hover:text-[#405C50]"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;