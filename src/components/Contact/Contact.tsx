export const Contact = () => {
  return (
    <section className="  bg-blue-100 ">
      <form className="py-8 px-8 mx-8 my-8 bg-white rounded   main">
        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            htmlFor="username"
          >
            Name
          </label>
          <input
            className="py-2 px-3 w-full leading-tight text-gray-700 rounded border shadow appearance-none focus:outline-none "
            id="username"
            type="text"
            placeholder="Name"
          />
        </div>
        <div className="mb-6">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="py-2 px-3 mb-3 w-full leading-tight text-gray-700 rounded border border-red-500 shadow appearance-none focus:outline-none "
            id="email"
            type="email"
            placeholder="name@email.com"
          />
          <p className="text-xs italic text-red-500">Please choose an email.</p>
        </div>

        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            htmlFor="username"
          >
            Message
          </label>
          <textarea
            className="py-2 px-3 w-full leading-tight text-gray-700 rounded border shadow appearance-none focus:outline-none "
            id="username"
            placeholder="Name"
          />
        </div>
        <div className="flex justify-between items-center">
          <button
            className="py-2 px-4 font-bold text-white bg-blue-500 hover:bg-blue-700 rounded focus:outline-none "
            type="button"
          >
            Send
          </button>
        </div>
      </form>
    </section>
  );
};
