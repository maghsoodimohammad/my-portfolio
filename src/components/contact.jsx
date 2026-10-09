    
const Contact= () =>{
    return(
       
<section
  id="contact"
  className="bg-[#F8F7F4] px-4 pt-12 pb-8"
>
  <div className="mx-auto flex w-full max-w-4xl flex-col items-center">

    {/* Social links */}
    <div className="flex items-center gap-6 mb-6">

      <a
        href="YOUR_INSTAGRAM_URL"
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram profile"
        className="transition-all duration-300 hover:-translate-y-1 hover:opacity-70"
      >
        <img
          src="/insta.png"
          alt="Instagram"
          className="h-6 w-6 object-contain"
        />
      </a>

      <a
        href="YOUR_LINKEDIN_URL"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn profile"
        className="transition-all duration-300 hover:-translate-y-1 hover:opacity-70"
      >
        <img
          src="/linkedin.png"
          alt="LinkedIn"
          className="h-6 w-6 object-contain"
        />
      </a>

    </div>

    {/* Copyright */}
    <p className="text-center text-xs tracking-wide text-[#737373] font-['Heebo']">
      Copyright © 2027 All rights reserved.
    </p>

  </div>
</section>


    )
}
export default Contact
