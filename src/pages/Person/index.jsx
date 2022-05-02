import { Avatar } from "antd";

import './index.css';

const movieInfo = {
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
};


export default function Person() {
    return (
        <main className="person-page">
            <div className="person-card">
                <div className="person-info">
                    个人信息
                </div>
            </div>
            <div className="movies">
                {new Array(8).fill(movieInfo).map(movie => (
                    <div className="item-card">
                        <img src={movie.coverUrl} alt="cover" />
                        <div className="details">
                            <h2>{movie.title}</h2>
                            <p>这里是简介</p>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    )
}