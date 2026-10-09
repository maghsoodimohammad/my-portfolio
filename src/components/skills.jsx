    


const skills = () => {
  return (
  
<section id="skills" className="bg-[#F8F7F4] px-4 py-16 lg:px-10 lg:py-20">
  <div className="mx-auto w-full max-w-4xl">

    {/* Section heading */}
    <h1 className="text-[26px] font-semibold tracking-tight text-[#252525] font-['Heebo'] pb-3 mb-10 border-b border-[#D8D3C8]">
      Skills
    </h1>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      {/* Frontend */}
      <div className="rounded-xl border border-[#D8D3C8] bg-[#EFEEE9] p-6">
        <h2 className="text-lg font-semibold text-[#252525] mb-5 font-['Heebo']">
          Frontend Development
        </h2>

        {[
          { name: "HTML", level: "100%" },
          { name: "CSS", level: "90%" },
          { name: "JavaScript", level: "80%" },
          { name: "React", level: "60%" },
          { name: "TypeScript", level: "40%" },
        ].map((skill) => (
          <div key={skill.name} className="mb-4 last:mb-0">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-[#444444]">
                {skill.name}
              </span>
              <span className="text-xs text-[#737373]">
                {skill.level}
              </span>
            </div>

            <div className="h-1.5 w-full rounded-full bg-[#D8D3C8]">
              <div
                className="h-1.5 rounded-full bg-[#557568]"
                style={{ width: skill.level }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Styling */}
      <div className="rounded-xl border border-[#D8D3C8] bg-[#EFEEE9] p-6">
        <h2 className="text-lg font-semibold text-[#252525] mb-5 font-['Heebo']">
          Styling & Design
        </h2>

        <div className="flex flex-wrap gap-2">
          {[
            "Tailwind CSS",
            "Responsive Design",
            "Figma",
            "Flexbox",
            "CSS Grid",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-[#D8D3C8] bg-[#F8F7F4] px-3 py-2 text-sm text-[#557568] transition-colors duration-200 hover:bg-[#557568] hover:text-white"
            >
              {skill}
            </span>
          ))}
        </div>

        <p className="mt-5 text-sm leading-6 text-[#737373]">
          Building clean, responsive interfaces with a focus on usability
          and consistent design.
        </p>
      </div>

      {/* Tools */}
      <div className="rounded-xl border border-[#D8D3C8] bg-[#EFEEE9] p-6 md:col-span-2">
        <h2 className="text-lg font-semibold text-[#252525] mb-5 font-['Heebo']">
          Tools & Workflow
        </h2>

        <div className="flex flex-wrap gap-3">
          {["Git", "GitHub", "VS Code", "npm"].map((tool) => (
            <span
              key={tool}
              className="rounded-lg bg-[#F8F7F4] border border-[#D8D3C8] px-4 py-3 text-sm text-[#444444] transition-all duration-200 hover:-translate-y-1 hover:border-[#557568] hover:text-[#557568]"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

    </div>
  </div>
</section>


  )
}

export default skills
