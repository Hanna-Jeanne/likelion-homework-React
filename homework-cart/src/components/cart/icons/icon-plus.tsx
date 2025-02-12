import { IconProp } from './types/icon';

function IconPlus({ size = 16, fill = '#4D4D4D' }: IconProp) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.72754 11.6826H8.29004V8.27246H11.6826V7.70996H8.29004V4.31738H7.72754V7.70996H4.31738V8.27246H7.72754V11.6826Z"
        fill={fill}
      />
    </svg>
  );
}

export default IconPlus;
