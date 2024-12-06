import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Slider({ media, type }){
  const isMovie = type === 'movie';
  const getTitle = (item) => {
    return isMovie ? item.title : item.name;
  }
  const getLink = (item) => {
    return isMovie ? `/movies/${item.id}` : `/series/${item.id}`;
  }
  const getReleaseDate = (item) => {
    return isMovie ? item.release_date : item.first_air_date;
  }

    return(
        <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="mb-10"
      >
        {media.map((movie) => (
          <SwiperSlide key={movie.id}>
            <Link href={getLink(movie)}>
              <div className="relative h-[340px] w-full group overflow-hidden rounded-lg shadow-lg">
                <img
                  src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
                  alt={getTitle(movie)}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
                />
                <div className="relative bg-black bg-opacity-100 text-white p-4">
                  <h2 className="text-xl font-bold">{getTitle(movie)}</h2>
                  <p className="text-sm">{isMovie ? 'Release Date' : 'First Air Date'} {getReleaseDate(movie)}</p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    );
}