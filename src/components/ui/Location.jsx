import { INFO } from "../../data/content";

export const PinIcon = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" />
  </svg>
);

// Address with a pin icon; opens the mill location in Google Maps.
const Location = ({ text = INFO.address, className = "" }) => (
  <a href={INFO.mapUrl} target="_blank" rel="noopener noreferrer" title="Open in Google Maps" className={`group inline-flex items-start gap-1.5 transition hover:text-gold-light ${className}`}>
    <PinIcon className="mt-px h-4 w-4 shrink-0 text-gold transition duration-300 group-hover:-translate-y-0.5 group-hover:scale-110" />
    <span className="underline-offset-2 group-hover:underline">{text}</span>
  </a>
);

export default Location;
