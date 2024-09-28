const Hero = ({title="Become a React Dev", subtitle="Find the react job that suits your skill set"}) => {
  return (
    <>
      <section className="bg-blue-700 text-white flex items-center justify-center h-screen">
        <div className="text-center">
          <h1
            className="text-5xl   
 font-bold mb-4"
          >
            { title }
          </h1>
          <p className="text-2xl font-semibold">{subtitle}</p>
        </div>
      </section>
    </>
  );
};

export default Hero;
