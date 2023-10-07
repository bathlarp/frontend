import { FunctionComponent, useEffect, useState } from 'react';

import { backgroundColorMap, ColorTypes } from '../../_themes/theme.types';

interface LoaderProps {
  fillColour?: ColorTypes;
  overlay?: boolean;
}

export const Loader: FunctionComponent<LoaderProps> = ({
  fillColour = 'primary-dark',
  overlay = true,
}) => {
  const fill = backgroundColorMap[fillColour];

  const [show, setShow] = useState(false);

  useEffect(() => {
    const startLoader = setTimeout(() => setShow(true), 300);
    return () => {
      clearTimeout(startLoader);
      if (show) {
        setTimeout(() => setShow(false), 300);
      }
    };
  }, [show]);

  return (
    <div role={'status'} aria-live={'assertive'}>
      {show && (
        <div
          className={`grid grid-cols-1 grid-rows-1 place-items-center ${
            overlay ? 'z-30 h-screen w-screen bg-standout opacity-50' : ''
          }`}
        >
          <div
            className={`grid h-20 w-20 grid-cols-3 grid-rows-1 gap-3 ${
              overlay ? 'z-50' : ''
            }`}
          >
            <div
              className={`${fill} h-full animate-loader-start rounded-full motion-reduce:animate-none`}
            />
            <div
              className={`${fill} h-full animate-loader-middle rounded-full motion-reduce:animate-none`}
            />
            <div
              className={`${fill} h-full animate-loader-end rounded-full motion-reduce:animate-none`}
            />
          </div>
          <p className="sr-only">Content is loading...</p>
        </div>
      )}
    </div>
  );
};
