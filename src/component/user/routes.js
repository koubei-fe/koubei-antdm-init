import Login from './Login';
export default [
  {
    path: 'user/login',
    component: Login,
  },
  {
    path: 'user/logout',
    onEnter: (nextState, replace) => replace('/user/login'),
  },
];
