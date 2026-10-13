import { useState } from "react";

function Img({ src, alt = "", className = "", fallback, style }) {
  const [bad, setBad] = useState(!src);
  if (bad) return <div className={className}>{fallback}</div>;
  return <img src={src} alt={alt} loading="lazy" onError={() => setBad(true)} className={className} style={style} />;
}

export default Img;
