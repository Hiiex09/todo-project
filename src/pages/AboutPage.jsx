import profilePic from "../image/Student.png";

const AboutPage = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center p-4 m-5 lg:m-20">
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center text-justify">
        <div className="w-full lg:w-3/4 m-3">
          <h1 className="text-2xl lg:text-3xl">About Me</h1>
          <p className="text-sm lg:text-base pl-1">
            Hi, I'm Devon Barangan, a passionate frontend Developer with over 5
            years of experience in full-stack development. I specialize in
            creating seamless and efficient web applications.
          </p>
        </div>
        <div className="w-full lg:w-3/4 m-3">
          <h1 className="text-2xl lg:text-3xl">Innovation</h1>
          <p className="text-sm lg:text-base pl-1">
            I strive to stay ahead of industry trends by implementing
            cutting-edge technologies and innovative solutions in every project.
          </p>
        </div>
        <div className="w-full lg:w-3/4 m-3">
          <h1 className="text-2xl lg:text-3xl">Expertise</h1>
          <p className="text-sm lg:text-base pl-1">
            With a strong foundation in computer science and a track record of
            successful projects, I bring both technical expertise and strategic
            insight to the table.
          </p>
        </div>
        <div className="w-full lg:w-3/4 m-3">
          <h1 className="text-2xl lg:text-3xl">Integrity</h1>
          <p className="text-sm lg:text-base pl-1">
            Transparency and honesty are at the core of my work ethic, ensuring
            that clients are informed and involved in every step of the
            development process.
          </p>
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <img
          src={profilePic}
          alt="pic"
          className="w-full h-auto object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default AboutPage;
