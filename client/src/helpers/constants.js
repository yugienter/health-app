const apiPath = {
  // authen
  login: "/auth/login",
  signUp: "/auth/sign-up", // TO-DO
  createPassword: "/auth/create-password",
  refreshToken: "/auth/refresh-token",
  logout: `/auth/logout`,
  // logout: (token) => `/auth/logout/${token}`,
  myInfo: "/auth/me",
  forgotPassword: "/auth/forgot-password",
  verifyResetPasswordToken: "/auth/verify-reset-password-token",
  resetPassword: "/auth/reset-password",

  //user
  getUserById: (id) => `/users/${id}`,
  getUsers: "/users",
};

const apiPathIgnoreAuthentication = [
  //auth
  apiPath.login,
  apiPath.createPassword,
  apiPath.verify,
];

export const router = {
  home: "/",
  signUp: "/sign-up",
  signIn: "/sign-in/:role",
  verifyEmail: "/verify-email/:token",
  createPassword: "/create-password",
  forgotPassword: `/forgot-password/:role`,
  resetPassword: `/reset-password`,
  verifyResetPasswordToken: `/verify-reset-password-token/:token`,
  forgotPasswordFnc: (role = ":role") => `/forgot-password/${role}`,
  resetPasswordSuccess: "/reset-password-success",

  // 404 page
  notFound: "*",
};

const routeIgnoreAuthentication = [
  router.signIn,
  router.resetPassword,
  router.forgotPassword,
  router.verifyResetPasswordToken,
  router.resetPasswordSuccess,
  router.signUp,
  router.createPassword,
  router.verifyEmail,
];

const UserGroups = {
  admin: "ADMIN",
  user: "USER",
};

const userRoles = {
  ADMIN: "admin",
  HOST: "user",
};

const PAGINATION = {
  PAGE: 0,
  PER_PAGE: 10,
};

const mainStyle = {
  gutter: { xs: 8, sm: 16, md: 24, lg: 32 },
};

export const SESSION_TIMEOUT_OPTIONS = [
  { text: "5 mins", value: 5 },
  { text: "10 mins", value: 10 },
  { text: "15 mins", value: 15 },
  { text: "30 mins", value: 30 },
  { text: "1hr", value: 60 },
  { text: "3hr", value: 180 },
  { text: "6hr", value: 360 },
  { text: "12hr", value: 720 },
  { text: "24hr", value: 1440 },
  { text: "48hr", value: 2880 },
];

export const TIME_RANGE = {
  WEEK: 7,
  HALF_MONTH: 15,
  MONTH: 30,
  TWO_MONTHS: 60,
};

export const LoginMethods = {
  GOOGLE: "Google",
  ACCOUNT: "Account",
  FACEBOOK: "Facebook",
};

const dateFormat = "DD MMM YYYY";

export const constants = {
  platform: "web-client",
  api: {
    path: apiPath,
    pathIgnoreAuthentication: apiPathIgnoreAuthentication,
    statusCode: {
      SUCCESS: 200,
      SUCCESS_: 201,
      BAD_REQUEST: 400,
      UNAUTHORIZED: 401,
      FORBIDDEN: 403,
      NOT_FOUND: 404,
      CONFLICT: 409,
      INTERNAL_SERVER_ERROR: 500,
    },
  },
  notificationLength: {
    LENGTH_SHORT: 3,
    LENGTH_LONG: 6,
  },
  router,
  routeIgnoreAuthentication,
  UserGroups,
  userRoles,
  PAGINATION,
  mainStyle,
  FILE_TYPES: ".jpeg,.jpg,.png,.mp4,.webm,.ogv,.m3u8",
  dateFormat,
};
