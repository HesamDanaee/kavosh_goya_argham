interface styles {
  text: string;
  padding: string;
  margin: string;
  bg: string;
  color: string;
  rounded: string;
  size: string;
  hover: string;
  rest?: string;
  onClick?: () => void;
}

export default function Button({
  text,
  padding,
  margin,
  bg,
  color,
  rounded,
  size,
  hover,
  rest,
  onClick,
}: styles) {
  return (
    <button
      className={`${bg} ${color} ${size} ${padding} ${margin} ${rounded} ${hover} ${rest} transition duration-100 ease-out`}
      onClick={onClick}
      type="submit"
    >
      {text}
    </button>
  );
}
