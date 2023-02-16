export default {
  type: "object",
  required: ["name", "age"],
  properties: {
    name: {
      description: "Please enter your name as per your documents.",
      type: "string",
      maxLength: 5,
      minLength: 3,
    },
    age: {
      description: "Please enter your age as per your documents.",
      type: "number",
      minimum: 18,
      maximum: 25,
    },
    email: {
      description: "Please provide only gmail email address",
      type: "string",
      pattern: ".+@gmail.com$",
    },
    phoneNumber: {
      type: "string",
      pattern: "^[0-9]{10}$",
    },
  },
};
