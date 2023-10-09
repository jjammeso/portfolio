
import Image from "next/image";

const About = () => {
  return (
    <div className="about-container" id="about-me">
      <br/><br/>
      <div className="flex-about">
        <div className="about-text">
        <h2>About Me</h2>
          <p>
          I&apos;m Sonam Jamtsho, a passionate full-stack web developer with a wide range of skills, including Node.js, Express.js, JavaScript, C++, Python, React.js, and Next.js. What sets me apart is my unwavering commitment to continuous learning and personal growth, a trait I believe is essential in the ever-evolving world of technology. My goal is to continually expand my knowledge and expertise as a web developer because I&apos;m genuinely enthusiastic about this field. When I&apos;m not immersed in code, I love to spend my free time playing football and watching my favorite football club, Liverpool play.  Additionally, I&apos;m always eager to embrace new opportunities to work on web development projects. Collaborating with diverse teams and contributing to exciting web ventures is a prospect that truly excites me.  
          </p>
        </div>
        
        <div className="about-img">
          <Image src='/web.png' className="profile-img" width={300} height={500}/>
        </div>
      </div>
    </div>
  )
}

export default About;