const PREFIX = "";
const PREFIX_ADMIN = "/admin";

export const AUTH_ROUTES = {
  signIn: `${PREFIX}/sign-in`,
  forgotPassword: `${PREFIX}/forgot-password`,
  resetPassword: `${PREFIX}/reset-password`,
};

export const PRIVATE_ROUTES = {
  tutoringSessionList: `${PREFIX_ADMIN}/sessions-management`,
  studentManagement: `${PREFIX_ADMIN}/student-management`,
  tutorManagement: `${PREFIX_ADMIN}/tutor-management`,
  parentManagement: `${PREFIX_ADMIN}/parent-management`,
  studentDetail: `${PREFIX_ADMIN}/student-management/:id`,
  interestManagement: `${PREFIX_ADMIN}/interest-management`,
  tutorDetail: `${PREFIX_ADMIN}/tutor-management/:id`,
};
