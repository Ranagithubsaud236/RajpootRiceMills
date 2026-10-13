

const Grain = ({ c, size = 120, rotate = 0 }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" aria-hidden="true">
    <defs><linearGradient id={"g" + c[0]} x1="0" x2="1"><stop offset="0" stopColor={c[0]} /><stop offset="1" stopColor={c[1]} /></linearGradient></defs>
    {[[30,40,-30],[60,30,10],[85,55,40],[45,70,-10],[72,84,25],[28,92,-45],[58,58,60]].map(([x, y, r], i) => (
      <ellipse key={i} cx={x} cy={y} rx="26" ry="6.5" fill={`url(#g${c[0]})`} stroke={c[1]} strokeWidth=".6" transform={`rotate(${r + rotate} ${x} ${y})`} />
    ))}
  </svg>
);

export default Grain;
