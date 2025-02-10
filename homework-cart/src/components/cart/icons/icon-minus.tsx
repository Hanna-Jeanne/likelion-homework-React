import { IconProp } from './types/icon';

function IconMinus({ size = 16, fill = '#4D4D4D' }: IconProp) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10.4346 7.72754H5.56543V8.27246H10.4346V7.72754Z" fill={fill} />
    </svg>
  );
}

export default IconMinus;
