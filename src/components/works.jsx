    
const Works= () =>{
    return(
        

<section id="works" className="bg-[#F8F7F4] px-4 py-16 lg:px-10 lg:py-20">
  <div className="mx-auto w-full max-w-4xl">

    {/* Section heading */}
    <h1 className="pb-3 mb-10 text-[26px] text-center font-semibold tracking-tight text-[#252525] font-['Heebo'] border-b border-[#D8D3C8]">
      Featured works
    </h1>

    {/* Project 1 */}
    <div className="group flex flex-col lg:flex-row gap-5 lg:gap-8 pb-8 mb-8 border-b border-[#D8D3C8] transition-transform duration-300 hover:-translate-y-1">

      <img
        className="w-full aspect-video object-cover rounded-lg lg:w-[280px] lg:h-[175px] lg:shrink-0"
        src="/gym.png"
        alt="Gym landing page project"
      />

      <div className="flex flex-col flex-1">
        <h2 className="text-[22px] lg:text-[25px] font-semibold text-[#252525] font-['Heebo'] transition-colors duration-300 group-hover:text-[#557568]">
          Gym Landing Page
        </h2>

        <div className="flex items-center gap-3 mt-3">
          <span className="bg-[#557568] text-white px-3 py-1 text-xs rounded-full font-medium">
            2026
          </span>
          <span className="text-sm text-[#737373]">
            Landing Page
          </span>
        </div>

        <p className="text-[15px] leading-7 mt-4 text-[#5F5F5F]">
          A modern and energetic landing page showcasing a gym’s facilities,
          programs, and membership options. Built with a clean, responsive
          layout designed to engage visitors and encourage sign-ups.
        </p>
      </div>
    </div>

    {/* Project 2 */}
    <div className="group flex flex-col lg:flex-row gap-5 lg:gap-8 pb-8 mb-8 border-b border-[#D8D3C8] transition-transform duration-300 hover:-translate-y-1">

      <img
        className="w-full aspect-video object-cover rounded-lg lg:w-[280px] lg:h-[175px] lg:shrink-0"
        src="/login-page.png"
        alt="Login page project"
      />

      <div className="flex flex-col flex-1">
        <h2 className="text-[22px] lg:text-[25px] font-semibold text-[#252525] font-['Heebo'] transition-colors duration-300 group-hover:text-[#557568]">
          Login Page
        </h2>

        <div className="flex items-center gap-3 mt-3">
          <span className="bg-[#557568] text-white px-3 py-1 text-xs rounded-full font-medium">
            2026
          </span>
          <span className="text-sm text-[#737373]">
            UI Design
          </span>
        </div>

        <p className="text-[15px] leading-7 mt-4 text-[#5F5F5F]">
          A clean and modern login interface featuring responsive layouts
          and intuitive form elements. Designed to provide a simple,
          accessible, and user-friendly experience.
        </p>
      </div>
    </div>

    {/* Project 3 */}
    <div className="group flex flex-col lg:flex-row gap-5 lg:gap-8 pb-4 transition-transform duration-300 hover:-translate-y-1">

      <img
        className="w-full aspect-video object-cover rounded-lg lg:w-[280px] lg:h-[175px] lg:shrink-0"
        src="/camping.png"
        alt="Camping website project"
      />

      <div className="flex flex-col flex-1">
        <h2 className="text-[22px] lg:text-[25px] font-semibold text-[#252525] font-['Heebo'] transition-colors duration-300 group-hover:text-[#557568]">
          Camping Website
        </h2>

        <div className="flex items-center gap-3 mt-3">
          <span className="bg-[#557568] text-white px-3 py-1 text-xs rounded-full font-medium">
            2026
          </span>
          <span className="text-sm text-[#737373]">
            Landing Page
          </span>
        </div>

        <p className="text-[15px] leading-7 mt-4 text-[#5F5F5F]">
          A nature-inspired website for discovering camping destinations
          and outdoor experiences. Features a responsive layout that helps
          users explore locations, activities, and available campsites.
        </p>
      </div>
    </div>

  </div>
</section>


    )
}
export default Works
