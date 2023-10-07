import { SVGIconProps } from '../icon.types';

const Player = ({ className, title }: SVGIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
    >
      {!!title && <title>{title}</title>}
      <path d="M6.45711 18.954L15.0208 10.3903L13.6066 8.97608L5.04289 17.5398L6.45711 18.954ZM12.1924 7.56186L10.7782 6.14765L12.1924 4.73344L13.9602 6.5012L16.7886 3.67278C17.1791 3.28225 17.8123 3.28225 18.2028 3.67278L20.3241 5.7941C20.7146 6.18462 20.7146 6.81779 20.3241 7.20831L17.4957 10.0367L19.2635 11.8045L17.8492 13.2187L16.435 11.8045L7.24264 20.9969H3V16.7543L12.1924 7.56186Z"></path>
    </svg>
  );
};

export default Player;
