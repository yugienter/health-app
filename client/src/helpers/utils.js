import { notification } from "antd";
import { constants } from "./constants";
import _ from "lodash";

const showNotification = ({
  variant = "success",
  message = "",
  description = "",
  duration = constants.notificationLength.LENGTH_LONG,
  key,
  callback,
}) => {
  notification[variant]({ message, description, duration, key });
  if (callback) callback();
};

const validateEmail = (email) => {
  // return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/.test(email);
  return /^[_a-z0-9-]+(\.[_a-z0-9-]+)*(\+[a-z0-9-]+)?@[a-z0-9-]+(\.[a-z0-9-]+)*$/i.test(
    email
  );
  // this allow the "+" sign in string email
  // yugienter.nguyen@gmail.com - true
  // yugienter.nguyen+1@gmail.com - true
  // yugienter.nguyen+@gmail.com - false
  // yugienter.nguyen/!@#$@gmail.com - false
};

const validatePassword = (password = "") => {
  return password.match(/^(?=.*[0-9])(?=.*[a-zA-Z])/); // at least one number or symbol
};

const validateUrl = (url) => {
  const expression =
    /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
  const regex = new RegExp(expression);
  return url.match(regex);
};

export const utils = {
  showNotification,
  validatePassword,
  validateEmail,
  validateUrl,
};
