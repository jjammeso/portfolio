import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero-container">
      <Image src='/IMG_6137.JPG' className="profile-img" width={300} height={300} alt="Profile pic" />
      <div className="hero-text">
        <h1>Hey, I&apos;m Sonam Jamtsho 👋</h1>
        <p>
          I&apos;m a Fullstack web developer.
        </p>
      </div>
    </div>
  )
}

export default Hero;