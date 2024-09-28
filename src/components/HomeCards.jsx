const HomeCards = () => {
  return (
    <>
      <section className="flex flex-wrap justify-center gap-6 py-8">
        {/* Card 1 */}
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-indigo-100">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">For Developers</div>
            <p className="text-gray-700 text-base">
              Browse our React jobs ans start our career today.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <button className="bg-blue-700 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
              Browse Job
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-100">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">For Employers</div>
            <p className="text-gray-700 text-base">
              List your job to find the perfect developer for the role.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <button className="bg-black text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
              Add Job
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeCards;
