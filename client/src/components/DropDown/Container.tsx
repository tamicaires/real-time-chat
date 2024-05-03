interface ContainerProps {
  dropDownActive: boolean;
  children?: JSX.Element;
}

export function Container(props: ContainerProps) {
  return (
    <div className="relative ">
      {props.dropDownActive && (
        <div className="absolute top-0 right-0  bg-secondary-dark-bg shadow-lg py-1 rounded-md">
          {props.children}
          <div className="px-24"></div>
        </div>
      )}
    </div>
  );
}
