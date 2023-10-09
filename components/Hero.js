import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero-container">
      <Image src='/profilepic.jpeg' className="profile-img" width={300} height={300} alt="Profile pic" objectFit="contain"/>
      <div className="hero-text">
        <h1>Hey, I&apos;m Sonam Jamtsho 👋</h1>
        <p>
          I&apos;m a Fullstack web developer.
        </p><br/><br/><br/>
      </div>
    </div>
  )
}

export default Hero;