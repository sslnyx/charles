import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import Radio from "../../components/Radio";
import circle4 from "/img/register/circle-4.svg";
import downArrow from "/img/register/chevron-down-solid.svg";
import { ReactSVG } from "react-svg";

const RegisterForm = () => {
  const options = [
    "Google Search",
    "BuzzBuzzHome",
    "Social Media",
    "WeChat",
    "Signage",
    "Walk by / Drive by",
    "Realtor",
    "Friends / Family",
    "Other",
  ];

  const navigate = useNavigate();

  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState(null);

  const submitHandler = async (ev) => {
    ev.preventDefault();
    setSubmitting(true);
    setErrors(null);

    const formData = new FormData(ev.target);

    // Display the values
    for (var [key, value] of formData) {
      console.log(key + ": " + value);
    }

    try {
      const response = await fetch(import.meta.env.VITE_APP_API_URL, {
        method: "POST",
        headers: {
          //   "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
        body: formData,
      });

      const responseData = await response.json();

      response.ok
        ? (setSubmitting(false),
          console.log(responseData),
          (window.location = "/thankyou"))
        : // navigate("/thankyou"))
          (setSubmitting(false), setErrors(responseData.errors));
    } catch (error) {
      //   const errorData = await error.json();
      console.log(error);
    }
  };
  return (
    <section className="pb-0 relative">
      <img
        src={circle4}
        className="pointer-events-none absolute -top-[150px] right-0 w-[400px] md:w-[55%] max-w-none"
      />
      <div className="container bg-awhite py-[100px] flex flex-col items-center">
        <h2 className="mb-10 text-center font-bold">REGISTER NOW</h2>

        <form onSubmit={submitHandler} className="max-w-[600px] w-full">
          <p className="uppercase text-right text-sm">* Required field</p>

          <Input
            label="FIRST NAME*"
            type="text"
            name="first_name"
            errors={errors}
            required
          />

          <Input
            label="LAST NAME*"
            type="text"
            name="last_name"
            errors={errors}
            required
          />
          <Input
            label="EMAIL*"
            type="email"
            name="email"
            errors={errors}
            required
          />
          <Input label="PHONE" type="tel" name="phone" errors={errors} />
          <Input
            required
            label="POSTAL CODE*"
            type="text"
            name="postal_code"
            errors={errors}
          />

          <div className="flex items-start md:items-center flex-col md:flex-row mb-5">
            <label className="uppercase whitespace-nowrap mr-10 mb-2 md:mb-0">
              How did you hear about us?*
            </label>

            <div className="relative flex items-center justify-center w-full">
              <select
                required
                name="source"
                defaultValue=""
                className="w-full appearance-none md:max-w-[400px] px-5 py-2 border-2 border-brown rounded-[22px] bg-transparent"
              >
                <option disabled value="">
                  Please select...
                </option>
                {options.map((option, i) => (
                  <option value={option} key={i}>
                    {option}
                  </option>
                ))}
              </select>

              <ReactSVG
                className="absolute right-[20px] w-[15px] h-auto fill-brown"
                src={downArrow}
              />

            </div>

          </div>

          <Radio label="Are you a realtor? *" name="realtor" errors={errors} />

          <Radio
            label="Are you working with a realtor? *"
            name="working_with_a_realtor"
            errors={errors}
          />

          <Input
            label="if yes, realtor's name"
            type="text"
            name="realtors_name"
          ></Input>

          <div className="flex flex-col mb-5">
            <label className="mb-2">COMMENTS</label>
            <textarea
              className="w-full bg-transparent border-2 border-brown rounded-[22px] px-5 py-3"
              name="comments"
              rows="5"
            ></textarea>
          </div>

          <div className="mb-10 relative">
            <label className="flex items-start">
              <input
                required
                name="consent"
                className="form-check-input mt-[3px] appearance-none rounded-full text-brown min-h-[16px] min-w-[16px] w-4 h-4 border-2 focus:ring-1 focus:ring-brown bg-transparent checked:bg-brown checked:border-brown focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="checkbox"
              />
              <small>
                Please click here to confirm consent to receive communications
                from The Charles or its affiliates*
              </small>

              {errors ? (
                <small className="absolute -bottom-[18px] text-red-500">
                  {errors.consent}
                </small>
              ) : (
                ""
              )}
            </label>
          </div>

          {!submitting ? (
            <div className="text-center">
              <button
                className="bg-gray text-2xl font-bold text-brown px-10 py-2"
                type="submit"
              >
                <span>SUBMIT</span>
              </button>
            </div>
          ) : (
            <div class="flex justify-center items-center">
              <div
                class="spinner-grow text-brown inline-block w-8 h-8 bg-current rounded-full opacity-0"
                role="status"
              >
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default RegisterForm;
