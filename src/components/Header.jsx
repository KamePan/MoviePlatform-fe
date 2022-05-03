import { useState } from 'react';
import { Input } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { IconSearch } from '../icons';
import { Avatar } from 'antd';

import { getSearchParam } from '../utils';

export default function Header() {
  const [searchString, setSearchString] = useState('');
  const navigate = useNavigate();

  return (
    <header className="flex justify-between px-6 py-3 bg-gray-500 bg-opacity-50 text-gray-50">
      <nav className="flex items-center">
        <Link to="/" className="text-gray-50 hover:text-gray-100">
          <h1 className="text-xl text-gray-50 font-bold">首页</h1>
        </Link>
        <ul className="flex items-center ml-24 gap-8">
          <li className="relative flex items-center gap-2">
            <Input
              placeholder="输入搜索"
              className="h-8 rounded-lg bg-gray-600 text-gray-50"
              value={searchString}
              onChange={e => setSearchString(e.target.value)}
            />
            <button
              className="absolute p-1 right-2 hover:bg-gray-500 rounded-lg"
              onClick={() => navigate('/search' + getSearchParam(searchString))}
            >
              <IconSearch style={{ fontSize: 18 }} />
            </button>
          </li>
        </ul>
      </nav>
      <div className="flex items-center">
        <button title="个人中心">
          <Link to="/person">
            <Avatar
              src="https://pic4.zhimg.com/v2-f4e82f8c19d97bad1699edfc61e782c9_im.jpg?source=32738c0c"
              size={36}
            />
          </Link>
        </button>
      </div>
    </header>
  );
}
