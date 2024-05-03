interface ButtonProps {
  text: string;
  color?: "white" | string;
  bgColor?: "violet" | string;
  type: "button";
  isSubmitting?: boolean;
}

export default function Button(props: ButtonProps) {
  return (
    <button
      type={props.type}
      disabled={props.isSubmitting}
      style={{ background: props.bgColor}}
      className={`bg-${props.bgColor} text-sm text-${props.color} font-semibold p-3 rounded-xl uppercase hover:bg-${props.bgColor}-800`}
    >
      {props.text}
    </button>
  );
}
