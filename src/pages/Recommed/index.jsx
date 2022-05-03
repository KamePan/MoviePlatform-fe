import { useNavigate } from 'react-router';
import MovieCard from '../../components/MovieCard';

import './index.css';

const movieInfo = [
  {
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
    doubanUrl: 'https://movie.douban.com/subject/26683290/',
    coverUrl: 'src/assets/p2395733377.webp',
    description:
      '《你的名字。》（日语：君の名は。）是日本动画家新海诚编剧与执导、于2016年8月26日在日本首映的动画电影。影片由田中将贺担任人物设计、作画导演为安藤雅司、剧中音乐则由摇滚乐队RADWIMPS负责制作，影星神木隆之介与上白石萌音分别为片中男女主角配音。本作是新海诚第一次采用制作委员会方式的作品。该片上映后连霸日本数周票房冠军，并获得西班牙锡切斯电影节最佳动画长片奖等电影奖荣誉。衍生作品《小说 你的名字。》荣获2017年SUGOI JAPAN Award娱乐小说部门首奖。',
  },
  {
    id: 1,
    title: 'Hello, World',
    rate: 9.8,
    showtime: '2021',
    length: 120,
    district: ['中国', '日本'],
    language: '日语',
    actor: ['潘恺铭', '宫水三叶'],
    director: ['新海诚'],
    othername: [],
    doubanUrl: 'https://movie.douban.com/subject/26683290/',
    coverUrl: 'src/assets/p2395733377.webp',
    description:
      '《你的名字。》（日语：君の名は。）是日本动画家新海诚编剧与执导、于2016年8月26日在日本首映的动画电影。影片由田中将贺担任人物设计、作画导演为安藤雅司、剧中音乐则由摇滚乐队RADWIMPS负责制作，影星神木隆之介与上白石萌音分别为片中男女主角配音。本作是新海诚第一次采用制作委员会方式的作品。该片上映后连霸日本数周票房冠军，并获得西班牙锡切斯电影节最佳动画长片奖等电影奖荣誉。衍生作品《小说 你的名字。》荣获2017年SUGOI JAPAN Award娱乐小说部门首奖。',
  },
  {
    id: 2,
    title: '盗梦空间',
    rate: 9.8,
    showtime: '2021',
    length: 120,
    district: ['中国', '日本'],
    language: '日语',
    actor: ['潘恺铭', '宫水三叶'],
    director: ['新海诚'],
    othername: [],
    doubanUrl: 'https://movie.douban.com/subject/26683290/',
    coverUrl: 'src/assets/p2395733377.webp',
    description:
      '《你的名字。》（日语：君の名は。）是日本动画家新海诚编剧与执导、于2016年8月26日在日本首映的动画电影。影片由田中将贺担任人物设计、作画导演为安藤雅司、剧中音乐则由摇滚乐队RADWIMPS负责制作，影星神木隆之介与上白石萌音分别为片中男女主角配音。本作是新海诚第一次采用制作委员会方式的作品。该片上映后连霸日本数周票房冠军，并获得西班牙锡切斯电影节最佳动画长片奖等电影奖荣誉。衍生作品《小说 你的名字。》荣获2017年SUGOI JAPAN Award娱乐小说部门首奖。',
  },
];

export default function Recommend() {
  const navigate = useNavigate();

  const handleClickMovie = id => {
    navigate(`/movie-detail/${id}`);
  };

  return (
    <main className="mt-4">
      <div className="mx-4 px-36">
        <div className="px-2 py-2 mb-2">
          <h1 className="text-left text-2xl text-gray-50">个人推荐</h1>
        </div>
        <div>
          <div className="grid grid-cols-3 gap-4">
            {movieInfo.map(movie => (
              <MovieCard movie={movie} onClick={handleClickMovie} />
            ))}
          </div>
        </div>
      </div>

      <div className="mx-4 px-36 mt-4">
        <div className="px-2 py-2 mb-2">
          <h1 className="text-left text-2xl text-gray-50">高分电影</h1>
        </div>
        <div>
          <div className="grid grid-cols-3 gap-4">
            {movieInfo.map(movie => (
              <MovieCard
                movie={movie}
                onClick={() => navigate('/movie-detail/' + movie.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
