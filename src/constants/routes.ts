const ROUTES = {
  LOGIN: '/',
  ACCOUNTS: '/accounts',
  USERS: '/users',
  USER_INFO: '/accounts/user/:userId' || '/users/user/:userId',
  NOT_FOUND: '/page-not-found',
  ALL: '*',
};

export default ROUTES;
