const ProjectPage = () => {
  return (
    <div className="flex flex-col lg:flex-row flex-wrap justify-center lg:justify-between items-center p-4 m-5 gap-5">
      <div className="card bg-base-100 w-full lg:w-96 shadow-sm">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Student Evaluation System</h2>
          <p className="text-justify">
            The student evaluation system collects feedback from students to
            assess teacher performance. It ensures fair and transparent
            evaluations. The system helps improve teaching quality and enhances
            the learning experience.
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-sm btn-neutral btn-outline">
              View Project
            </button>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 w-full lg:w-96 shadow-sm">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Chat App</h2>
          <p className="text-justify">
            The chat app enables real-time messaging between users. It provides
            a secure and user-friendly platform for communication. The app
            enhances connectivity and supports seamless interactions.
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-sm btn-neutral btn-outline">
              View Project
            </button>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 w-full lg:w-96 shadow-sm">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Blog App</h2>
          <p className="text-justify">
            The blog app allows users to create, share, and read blog posts. It
            provides a platform for expressing ideas and engaging with an
            audience. The app enhances content sharing and community
            interaction.
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-sm btn-neutral btn-outline">
              View Project
            </button>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 w-full lg:w-96 shadow-sm">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">E-Commerce</h2>
          <p className="text-justify">
            The e-commerce app enables users to browse, buy, and sell products
            online. It offers a secure and convenient shopping experience. The
            app streamlines transactions and connects buyers with sellers.
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-sm btn-neutral btn-outline">
              View Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
