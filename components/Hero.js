import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero-container">
      <Image src='/profilepic.jpeg' className="profile-img" width={300} height={300} alt="Profile pic" objectFit="contain"/>
      <div className="hero-text">
        <h1><span className="span">Hey, I&apos;m Sonam Jamtsho 👋</span></h1>
        <p>
          <span className="span">I&apos;m a Fullstack web developer.</span>
        </p><br/><br/><br/>
      </div>
    </div>
  )
}

export default Hero;