import { SVGIconProps } from '../icon.types';

const Rank = ({ className, title }: SVGIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
    >
      {!!title && <title>{title}</title>}
      <path d="M8.00488 5.00293H11.0049V14.0029H8.00488V17.0029H6.00488V14.0029H3.00488V5.00293H6.00488V2.00293H8.00488V5.00293ZM5.00488 7.00293V12.0029H9.00488V7.00293H5.00488ZM18.0049 10.0029H21.0049V19.0029H18.0049V22.0029H16.0049V19.0029H13.0049V10.0029H16.0049V7.00293H18.0049V10.0029ZM15.0049 12.0029V17.0029H19.0049V12.0029H15.0049Z"></path>
    </svg>
  );
};

export default Rank;
