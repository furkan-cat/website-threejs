export default function WorkIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="ionicon"
      viewBox="0 0 512 512"
      fill="#000"
      {...props}
    >
      <title>Code Working</title>
      <circle cx="256" cy="256" r="26" />
      <circle cx="346" cy="256" r="26" />
      <circle cx="166" cy="256" r="26" />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="40"
        d="M160 368L32 256l128-112M352 368l128-112-128-112"
      />
    </svg>
  );
}
