export const usernameValidate = {
  required: {
    value: true,
    message: "Please enter username",
  },
  minLength: {
    value: 6,
    message: "Username must be at least 6 characters long",
  },
  pattern: {
    value: /^[a-zA-Z0-9]+$/,
    message: "Username must be alphanumeric",
  },
};

export const FnameValidate = {
  required: {
    value: true,
    message: "Please enter name",
  },
  minLength: {
    value: 3,
    message: "Name must be at least 6 characters long",
  },
  pattern: {
    value: /^[a-z ,.'-]+$/i,
    message: "Please enter a valid name",
  },
};

export const emailValidate = {
  required: {
    value: true,
    message: "Please enter an email address",
  },
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: "Email address is not valid",
  },
};

export const passwordValidate = {
  required: {
    value: true,
    message: "Please enter password",
  },
  minLength: {
    value: 6,
    message: "Password must be at least 6 characters long",
  },
};

export const nameValidate = {
  required: {
    value: true,
    message: "Please enter name",
  },
  minLength: {
    value: 6,
    message: "Name must be at least 6 characters long",
  },
  pattern: {
    value: /^([A-Za-z]+).*$|^([\u4E00-\u4FFF]+).*$/,
    message: "Name must be alphanumeric",
  },
};

export const ageValidate = {
  required: {
    value: true,
    message: "Please enter age",
  },
  pattern: {
    value: /^(?:[2-9][0-9])$/,
    message: "Age must be between 20 => 99 years",
  },
};

export const genderValidate = {
  required: {
    value: true,
    message: "Please choose gender",
  },
};

export const photoValidate = {
  required: {
    value: true,
    message: "Please choose photo",
  },
};

export const phoneValidate = {
  required: {
    value: true,
    message: "Please enter phone number",
  },
  pattern: {
    value: /^01[0125][0-9]{8}$/,
    message: "Please enter a valid phone number",
  },
};

export const IDValidate = {
  required: {
    value: true,
    message: "Please enter your id",
  },
  pattern: {
    value: /^([1-9]{1})([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{2})[0-9]{3}([0-9]{1})[0-9]{1}$/,
    message: "Please enter a valid ID",
  },
};


export const ageChildValidate = {
  required: {
    value: true,
    message: "Please enter age",
  },
  pattern: {
    value: /^(3?[3-9]|[3-9][3-9]|[3][3-9][3-9]|12)$/,
    message: "Age must be between 3 => 12 years",
  },
};