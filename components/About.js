
import Image from "next/image";

const About = () => {
  return (
    <div className="about-container" id="about-me">
      <h2>About Me</h2>
      <div className="flex-about">
        <div className="about-text">
          <p>
          I'm Sonam Jamtsho, a passionate full-stack web developer with a wide range of skills, including Node.js, Express.js, JavaScript, C++, Python, React.js, and Next.js. What sets me apart is my unwavering commitment to continuous learning and personal growth, a trait I believe is essential in the ever-evolving world of technology. My goal is to continually expand my knowledge and expertise as a web developer because I'm genuinely enthusiastic about this field. When I'm not immersed in code, I love to spend my free time playing football and watching my favorite football club, Liverpool play.  Additionally, I'm always eager to embrace new opportunities to work on web development projects. Collaborating with diverse teams and contributing to exciting web ventures is a prospect that truly excites me.  
          </p>
        </div>
        <div className="about-img">
          <Image src='/IMG_6137.JPG' className="profile-img" width={300} height={500}/>
        </div>
      </div>
    </div>
  )
}

export default About;