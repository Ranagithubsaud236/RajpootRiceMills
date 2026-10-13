

function Cert({ k }) {
  if (k === 0) return <div className="flex h-full w-32 flex-col border-2 border-blue-700 bg-white text-center text-[10px] font-bold"><div className="bg-blue-700 py-1 text-white">REGISTERED</div><div className="grid flex-1 place-items-center bg-blue-200 text-4xl text-blue-700">QA</div><div className="bg-blue-700 py-0.5 text-white">INTERNATIONAL</div><div className="py-1 text-sm">HACCP<br /><span className="text-[9px]">MANAGEMENT</span></div></div>;
  if (k === 1) return <div className="flex h-full w-56 border-2 border-blue-700 bg-white"><div className="flex w-3/5 flex-col items-center justify-center bg-blue-200 text-3xl font-bold text-blue-700">QA<span className="mt-1 bg-blue-700 px-1 text-[9px] text-white">INTERNATIONAL</span><span className="mt-1 px-1 text-[8px] text-stone-700">ACCREDITED · BS EN ISO 9001:2008</span></div><div className="flex flex-1 flex-col items-center justify-center bg-indigo-950 text-center text-[9px] font-bold text-amber-300"><div className="text-2xl">♛</div><div className="text-lg text-lime-300">✔</div>UKAS<br />QUALITY<br />MANAGEMENT</div></div>;
  return (
    <div className={`relative h-full w-32 border p-3 text-center font-display text-[9px] italic text-stone-600 ${k === 2 ? "border-blue-400 bg-blue-50" : "border-amber-300 bg-amber-50"}`}>
      Certificate of Registration<div className="my-2 text-xl text-red-700">♛</div>
      {[90, 100, 80, 95, 70, 85, 60].map((w, n) => <div key={n} className="mx-auto mb-1.5 h-[3px] rounded bg-stone-400/60" style={{ width: `${w}%` }} />)}
      <div className="absolute bottom-3 left-3 h-6 w-6 rounded-full bg-red-600 shadow" />
    </div>
  );
}

export default Cert;
