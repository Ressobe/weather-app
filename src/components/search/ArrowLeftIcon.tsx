export default function ArrowLeftIcon({
  width,
  className,
}: {
  width: string;
  className: string;
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={`${width}`}
      className={`${className}`}
      viewBox='0 0 24 24'
      id='left-arrow'
    >
      <path d='M11,17a1,1,0,0,1-.71-.29l-4-4a1,1,0,0,1,0-1.41l4-4a1,1,0,0,1,1.41,1.41L8.41,12l3.29,3.29A1,1,0,0,1,11,17Z'></path>
      <path d='M17,13H7a1,1,0,0,1,0-2H17a1,1,0,0,1,0,2Z'></path>
    </svg>
  );
}