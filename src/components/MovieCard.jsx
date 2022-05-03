import { Rate } from 'antd';

export default function MovieCard(props) {
  const { movie, onClick } = props;
  return (
    <div
      className="flex-1 flex gap-4 p-4 bg-white rounded cursor-pointer shadow shadow-gray-50"
      onClick={() => onClick(movie.id)}
    >
      <img
        referrerPolicy="no-referrer"
        className="w-32"
        src={movie.coverUrl}
        alt="cover"
      />
      <div className="flex-1 w-24 px-2 text-left space-y-2">
        <h2 className="text-2xl font-bold">{movie.title}</h2>
        <Rate defaultValue={3} disabled />
        <p className="line-clamp-6 text-sm" title={movie.description}>
          {movie.description}
        </p>
      </div>
    </div>
  );
}
