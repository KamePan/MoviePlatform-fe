import { useState, useEffect } from 'react';
import { Rate, Avatar } from 'antd';
import { useParams } from 'react-router';
import dayjs from 'dayjs';

function CommentItem({ comment, avatarUrl, username, rate, date }) {
  return (
    <div className="px-5 py-4 border-b">
      <div className="flex justify-between item-center px-3 py-1">
        <div className="flex items-center gap-3">
          <Avatar src={avatarUrl} size={40} />
          <span className="inline-block mr-4">{username}</span>
          <Rate disabled allowHalf defaultValue={rate} />
          <span>评分：{rate.toFixed(1)}</span>
        </div>
        <div className="text-xs flex items-center">
          {dayjs(date).format('YYYY-MM-DD HH:mm:ss')}
        </div>
      </div>
      <div className="px-4 py-3 text-xs">{comment}</div>
    </div>
  );
}

function InfoItem({ title, content }) {
  return (
    <p>
      <span className="inline-block w-18 font-bold">{title}：</span>
      <span>
        {Array.isArray(content)
          ? content.length > 0
            ? content.join('，')
            : '无'
          : content}
      </span>
    </p>
  );
}

export default function Detail() {
  const id = useParams();

  const [movieInfo, setMovieInfo] = useState({
    title: '你的名字。',
    rate: 9.8,
    showtime: '2021',
    length: 120,
    district: ['中国', '日本'],
    language: '日语',
    actor: ['潘恺铭', '宫水三叶'],
    director: ['新海诚'],
    category: ['爱情', '科幻'],
    othername: [],
    url: 'https://movie.douban.com/subject/26683290/',
    coverUrl: '/src/assets/p2395733377.webp',
    description: '好看好看真好看'.repeat(30),
  });

  const [comments, setComments] = useState(
    new Array(4).fill({
      comment: '好看好看真好看'.repeat(30),
      username: 'pankaiming',
      rate: 8,
      date: Date.now(),
      avatarUrl: 'https://avatars.githubusercontent.com/u/46376292?s=96&v=4',
    })
  );

  useEffect(() => {
    console.log({ id });
  }, []);

  return (
    <div className="px-12 py-6 w-10/12 mx-auto">
      <div className="flex gap-2 border bg-white p-4">
        {/* 图片 */}
        <img
          className="w-3/12 object-contain flex-shrink-0 object-top"
          src={movieInfo.coverUrl}
          alt="封面"
        />

        {/* 详情 */}
        <div className="p-3 bg-white">
          <h2 className="mb-4 text-2xl font-bold">{movieInfo.title}</h2>
          <InfoItem title="评分" content={movieInfo.rate} />
          <InfoItem title="语言" content={movieInfo.language} />
          <InfoItem title="演员" content={movieInfo.actor} />
          <InfoItem title="导演" content={movieInfo.director} />
          <InfoItem title="上映地区" content={movieInfo.district} />
          <InfoItem title="类型" content={movieInfo.category} />
          <InfoItem title="别名" content={movieInfo.othername} />
          {/* <InfoItem title="豆瓣链接" content={movieInfo.doubanUrl} /> */}
          <div className="mt-3">
            <a className="text-blue-500" href={movieInfo.url}>
              豆瓣链接
            </a>
          </div>
          <hr className="my-3" />
          <div>
            <div className="text-base text-green-700 mb-2">剧情简介</div>
            <p>{movieInfo.description}</p>
          </div>
        </div>

        {/* 评价 */}
        <div className="w-[260px] py-3 bg-white space-y-3 border-l">
          <div className="flex">
            <div className="flex flex-col justify-center text-center border-r">
              <div className="w-24 text-sm">我的评分</div>
              <div className="text-2xl">9.8</div>
            </div>
            <Rate
              className="px-3 flex items-center"
              disabled
              allowHalf
              defaultValue={9.8}
            />
          </div>
          <div className="px-4 py-2">
            <p>
              重要剧透：蝙蝠侠的真实身份是布鲁斯韦恩。
              这篇比较长，有一半的篇幅是剧情介绍。介意剧透的话，稍后我还会再写一篇无剧透的缩略版。
              开场是透过望远镜窥视一个大户人家的亲子互动，父慈子孝，家庭和睦。
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white">
        {comments.map(({ comment, username, rate, date, avatarUrl }, index) => (
          <CommentItem
            key={index}
            comment={comment}
            username={username}
            rate={rate}
            data={date}
            avatarUrl={avatarUrl}
          />
        ))}
      </div>
    </div>
  );
}
