import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { IconSearch } from '../icons';
import { getSearchParam } from '../utils';
import MovieCard from '../components/MovieCard';
import cn from 'classnames';

function RadioGroup({ title, options, value, onChange, name }) {
  return (
    <div className="flex items-center gap-2">
      <div className="font-bold mr-4 w-18 text-right">{title}：</div>
      <div className="flex gap-2">
        {options.map((option, index) => (
          <div className="w-24 not-first:w-18 text-center">
            <label
              key={index}
              className={cn(
                'px-2 py-1 cursor-pointer rounded w-max text-center',
                {
                  'bg-blue-300 border-light-50 text-gray-50':
                    value === option.value,
                }
              )}
            >
              {option.label}
              <input
                className="hidden"
                type="radio"
                name={name}
                value={option.value}
                onChange={e => onChange(e.target.value)}
              />
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Search() {
  const navigate = useNavigate();
  const location = useLocation();
  const search = new URLSearchParams(location.search).get('q');

  const [searchString, setSearchString] = useState(search);
  const [category, setCategory] = useState(null);
  const [district, setDistrict] = useState(null);
  const [language, setLanguage] = useState(null);
  const [searchResult, setSearchResult] = useState([]);

  const searchChange = e => {
    navigate('/search' + getSearchParam(searchString));
  };

  const handleKeyDown = e => {
    if (e.key.toUpperCase() === 'ENTER') {
      searchChange();
    }
  };

  useEffect(() => {
    if (searchString !== search) {
      setSearchString(search);
    }
    setSearchResult([
      {
        id: 1,
        title: '电影1',
        coverUrl: 'https://picsum.photos/200/300',
        description: '电影1描述',
      },
      {
        id: 2,
        title: '电影2',
        coverUrl: 'https://picsum.photos/200/300',
        description: '电影1描述',
      },
      {
        id: 3,
        title: '电影3',
        coverUrl: 'https://picsum.photos/200/300',
        description: '电影1描述',
      },
      {
        id: 4,
        title: '电影4',
        coverUrl: 'https://picsum.photos/200/300',
        description: '电影1描述',
      },
    ]);
    // TODO: ajax 获取搜索信息
  }, [search, location.search]);

  return (
    <div className="bg-light-400">
      {/* top */}
      <div className="py-5">
        <div className="flex w-5/12 min-w-[600px] mx-auto">
          <input
            type="text"
            placeholder="输入搜索"
            className="flex-1 block p-3 h-10 rounded-lg bg-gray-600 outline-none border border-r-0 bg-light-50 shadow"
            style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
            value={searchString}
            onChange={e => setSearchString(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            className="flex justify-center items-center p-1 w-18 hover:bg-gray-500 bg-gray-600 rounded-lg border border-gray-400 text-gray-100"
            style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
            onClick={() => searchChange()}
          >
            <IconSearch style={{ fontSize: 24 }} />
          </button>
        </div>

        {/* filter */}
        <div className="px-68 py-4 mt-4 space-y-4">
          <RadioGroup
            title="类型"
            name="category"
            options={[
              { label: '爱情', value: '爱情' },
              { label: '战争', value: '战争' },
              { label: '悬疑', value: '悬疑' },
              { label: '剧情', value: '剧情' },
              { label: '犯罪', value: '犯罪' },
              { label: '惊悚', value: '惊悚' },
              { label: '动画', value: '动画' },
              { label: '灾难', value: '灾难' },
            ]}
            value={category}
            onChange={value => setCategory(value)}
          />
          <RadioGroup
            title="上映地区"
            name="district"
            options={[
              { label: '中国大陆', value: '中国大陆' },
              { label: '美国', value: '美国' },
              { label: '日本', value: '日本' },
              { label: '韩国', value: '韩国' },
              { label: '香港', value: '香港' },
              { label: '台湾', value: '台湾' },
            ]}
            value={district}
            onChange={value => setDistrict(value)}
          />
          <RadioGroup
            title="语言"
            name="language"
            options={[
              { label: '汉语普通话', value: '汉语普通话' },
              { label: '英语', value: '英语' },
              { label: '日语', value: '日语' },
              { label: '韩语', value: '韩语' },
              { label: '泰语', value: '泰语' },
              { label: '粤语', value: '粤语' },
            ]}
            value={language}
            onChange={value => setLanguage(value)}
          />
        </div>
      </div>

      {/* bottom */}
      <div className="px-36 py-8  bg-[rgb(55,65,81)]">
        <div className="grid grid-cols-3 gap-3">
          {searchResult.map(movie => (
            <MovieCard
              movie={movie}
              onClick={id => navigate('/movie-detail/' + id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
