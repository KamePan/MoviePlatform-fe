import { useState, useEffect } from 'react';
import { Avatar } from 'antd';
import { useRecoilValue } from 'recoil';
import { userInfoState } from '../../recoil/atoms';
import { Link } from 'react-router-dom';

import './index.css';

const movieInfo = {
  id: 0,
  title: '你的名字。',
  rate: 9.8,
  showtime: '2021',
  length: 120,
  district: ['中国', '日本'],
  language: '日语',
  actor: ['潘恺铭', '宫水三叶'],
  director: ['新海诚'],
  othername: [],
  url: 'https://movie.douban.com/subject/26683290/',
  coverUrl: '/src/assets/p2395733377.webp',
  comment:
    '《你的名字》将会毫无悬念成为今年的日影票房冠军。仅仅在首映前两周内的票房增长速度，已超过了过往十年所有的动画作品。包括宫崎骏的《起风了》《悬崖上的金鱼》和名侦探柯南、哆啦A梦剧场版等等。而到现在为止，总票房已达到100亿日元。',
};

function InfoItem({ title, value }) {
  return (
    <div className="flex items-center mb-2">
      <div className="text-gray-600 text-sm font-bold">{title}：</div>
      <div>{value}</div>
    </div>
  );
}

export default function Person() {
  const userInfo = useRecoilValue(userInfoState);

  return (
    <main>
      <div className="flex items-start gap-4 w-11/12 mx-auto my-4">
        {/* Left */}
        <div className="flex-grow-0 bg-white px-6 py-4 rounded">
          <div className="flex items-center gap-3">
            <Avatar src={userInfo.avatarUrl} size={50} />
            <div className="text-lg font-bold">{userInfo.username}</div>
          </div>
          <div>
            <div className="my-5">
              <InfoItem title="性别" value={userInfo.gender} />
              <InfoItem title="邮箱" value={userInfo.email} />
              <InfoItem title="生日" value={userInfo.birthday} />
            </div>
            <div className="space-y-2">
              <div className="text-base font-bold">个人简介</div>
              <div>{userInfo.description}</div>
            </div>
            <div className="mt-5 space-y-2">
              <div className="text-base font-bold">评分统计</div>
              <div className="space-y-1">
                <div>评分电影：6</div>
                <div>平均评分：4.5</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="flex-1  py-4 px-6 bg-white rounded">
          <div className="flex justify-between py-3">
            <div className="text-lg font-bold">我看过的电影</div>
            <div className="space-x-1">
              <button>按评分</button>
              <span>|</span>
              <button>按时间</button>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {new Array(8).fill(movieInfo).map(movie => (
              <Link
                to={`/movie-detail/${movie.id}`}
                className="hover:text-gray-700"
              >
                <div className="flex gap-4 p-4 border rounded shadow-sm">
                  <img
                    className="w-42 object-contain"
                    src={movie.coverUrl}
                    alt="cover"
                  />
                  <div className="py-4 text-xs space-y-2">
                    <div className="text-base font-bold">{movie.title}</div>
                    <div className="font-bold">
                      评分：<span className="text-blue-500">{movie.rate}</span>
                    </div>
                    <div className="space-y-1">
                      <div className="font-bold">评价</div>
                      <div className="line-clamp-6 pr-3">{movie.comment}</div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
