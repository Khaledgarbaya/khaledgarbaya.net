import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const CustomForm = ({ status, message, onValidated }) => {
  let email;
  const submit = e => {
    e.preventDefault();
    e.stopPropagation();
    if (email && email.value.indexOf("@") > -1) {
      onValidated({
        EMAIL: email.value
      });
    }
  };
  return (
    <form onSubmit={submit}>
      {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
      {status === "error" && <div style={{ color: "red" }}>{message}</div>}
      {status === "success" && <div style={{ color: "green" }}>Thanks!</div>}
      <input
        ref={node => (email = node)}
        type="email"
        className="w-full px-3 py-2 border border-solid rounded"
        required={true}
        placeholder="me@examplemail.com"
      />
      <button className="w-full px-3 py-2 mt-4 text-white bg-teal-600 rounded">
        Start Learning!
      </button>
    </form>
  );
};
const SignupForm = () => {
  return (
    <section className="w-full max-w-md p-6 mx-auto my-2 my-4 border-t-4 border-teal-600 border-solid rounded shadow to">
      <p className="text-sm text-gray-700 p-4">
        Enjoyed the content? Receive the next one in your inbox! No spam, just
        content.
      </p>
      <MailchimpSubscribe
        url="https://statilix.us16.list-manage.com/subscribe/post?u=19b98089cf0ee082f3fef5efd&amp;id=5392031228"
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={formData => subscribe(formData)}
          />
        )}
      />
    </section>
  );
};
export default SignupForm;
