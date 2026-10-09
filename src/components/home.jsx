    
const Home= () =>{
    return(

       
<div className="flex flex-col lg:flex-row-reverse items-center justify-center gap-8 lg:gap-16 max-w-5xl mx-auto px-5 py-16 lg:py-24">
  <div className="shrink-0">
    <img
      src="/IMG_1521.JPG"
      alt="Mohammad"
     className="w-[180px] h-[180px] lg:w-[243px] lg:h-[243px] rounded-full object-cover border-4 border-white shadow-sm shrink-0"
    />
  </div>

 
  <div className="w-full lg:flex-1 lg:pr-10">
    <h1 className="text-[32px] lg:text-[44px] font-bold leading-tight tracking-tight text-[#252525] text-center lg:text-left">
      Hi, I am Mohammad,
      <br />
      Front-end Developer
    </h1>

    <p className="text-base leading-7 text-[#737373] mt-5 max-w-xl">
      I enjoy combining creativity, problem-solving, and technology to build clean,
      responsive, and user-friendly websites. I’m currently focused on developing my skills
      in React, JavaScript, and Tailwind CSS while building projects
      that turn ideas and designs into functional web experiences.
    </p>

    <div className="flex justify-center lg:justify-start">
      <button className="mt-6 rounded-md bg-[#557568] hover:bg-[#405C50] text-white px-6 py-3 font-medium transition-colors duration-200">
        Download Resume
      </button>
    </div>
  </div>

</div>
    )
}
export default Home
