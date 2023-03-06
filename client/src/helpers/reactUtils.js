import { message } from "antd";
import { IconToastWarning, IconToastSuccess } from "views/components/Icon";
import { utils } from "./utils";

function emailValidator(rule, value, callback) {
  if (!value) return callback();

  const isInvalidEmail = !utils.validateEmail(value);
  if (isInvalidEmail) {
    callback("Email is invalid");
  } else {
    callback();
  }
}

function passwordVaidator(rule, value, callback) {
  if (!value) return callback();

  const isInvalidPassword = !utils.validatePassword(value);
  if (value.length < 8 || isInvalidPassword) {
    callback("Password is invalid");
  } else {
    callback();
  }
}

function urlValidator(rule, value, callback) {
  if (!value) return callback();

  const isInvalidUrl = !utils.validateUrl(value);
  if (isInvalidUrl) {
    callback("Url is invalid");
  } else {
    callback();
  }
}

function messageWarn({ content }) {
  message.warn({ content, icon: <IconToastWarning /> });
}

function messageSuccess({ content }) {
  message.success({ content, icon: <IconToastSuccess /> });
}

export const ReactUtils = {
  emailValidator,
  passwordVaidator,
  messageWarn,
  messageSuccess,
  urlValidator,
};
