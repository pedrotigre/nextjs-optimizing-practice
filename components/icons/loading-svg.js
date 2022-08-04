function LoadingIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{
        margin: 'auto',
        display: 'block',
      }}
      width={100}
      height={100}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <g>
        <path
          d="M50 27a23 23 0 1 0 19.224 10.372"
          fill="none"
          stroke="#414141"
          strokeWidth={12}
        />
        <path d="M49 15v24l12-12-12-12" fill="#414141" />
        <animateTransform
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          dur="1s"
          values="0 50 50;360 50 50"
          keyTimes="0;1"
        />
      </g>
    </svg>
  );
}
export default LoadingIcon;
