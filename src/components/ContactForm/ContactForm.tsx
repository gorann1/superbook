import type { FC } from 'react';

const ContactForm: FC = () => {
  // Handles the submit event on form submit.
  // Handles the submit event on form submit.
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    // Get data from the form.
    const data = {
      first: event.target.first.value,
      last: event.target.last.value,
    };

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data);

    // API endpoint where we send form data.
    const endpoint = '/api/form';

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options);

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json();
    alert(`Is this your full name: ${result.data}`);
  };
  return (
    // We pass the event to the handleSubmit() function on submit.
    <form
      onSubmit={handleSubmit}
      className="mb-4 rounded bg-white px-8 pt-6 pb-8 shadow-md"
    >
      <div class="mb-4">
        <label
          htmlFor="first"
          className="mb-2 block text-sm font-bold text-gray-700"
        >
          First Name
        </label>
        <input
          type="text"
          id="first"
          name="first"
          required
          className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
        />
      </div>
      <div class="mb-6">
        <label
          htmlFor="last"
          className="mb-2 block text-sm font-bold text-gray-700"
        >
          Last Name
        </label>
        <input
          type="text"
          id="last"
          name="last"
          required
          className="focus:shadow-outline mb-3 w-full appearance-none rounded border border-red-500 py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
        />
        <p class="text-xs italic text-red-500">Please choose a lastname.</p>
      </div>
      <div class="flex items-center justify-between">
        <button
          class="focus:shadow-outline rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
