import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Navbar />

      <div className="flex items-center justify-between px-6 md:px-[200px] py-4">
        <h1 className="pt-8 text-lg md:text-xl  font-extrabold"> About me</h1>
      </div>
      <div className="pt-5 px-1 md:px-[200px] min-h-[60vh]">
        <p className="h-[60vh] flex justify-center items-center font-mono text-lg">
          &nbsp;&nbsp;&nbsp;&nbsp;Welcome! I’m Rujia Yang, a strategic thinker with a passion for
          achieving the seemingly impossible. I’m someone who thrives on challenges, always striving
          to learn and grow, whether it's mastering a new skill, solving complex problems, or
          pushing the boundaries of what I thought was possible. I believe in the power of humor to
          connect, motivate, and inspire. Life's too short to be serious all the time, and I’m known
          for bringing a touch of light-heartedness to everything I do—because great things happen
          when you enjoy the journey as much as the destination. Over the years, I've honed a knack
          for turning vision into reality, tackling obstacles head-on with a blend of determination
          and creativity. My approach is simple: think big, act bold, and always be ready to adapt.
          I’m constantly learning, always improving, and never settling for just "good enough."
          Whether it’s in my professional endeavors, personal projects, or just day-to-day life, I’m
          committed to making a difference, one strategic move at a time.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default About;
