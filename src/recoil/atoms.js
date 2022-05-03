import { atom } from 'recoil';

const userInfoState = atom({
  key: 'UserInfoState',
  default: {
    username: 'pankaiming',
    avatarUrl:
      'https://pic4.zhimg.com/v2-f4e82f8c19d97bad1699edfc61e782c9_im.jpg?source=32738c0c',
    gender: 'male',
    email: 'pankaiming@mail.cn',
    birthday: '1996-01-01',
    description: '我是一个大帅比',
  },
});

export { userInfoState };
