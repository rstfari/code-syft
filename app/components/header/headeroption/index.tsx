export default function HeaderOption(props: {
  icon: any;
  title: string;
  selected: any;
}) {
  return (
    <div
      className={`flex items-center space-x-1 text-gray-300 border-b-4 border-transparent hover:text-red-700 hover:border-red-700 py-1 cursor-pointer ${
        props.selected && "text-red-700 border-red-700"
      } lg:text-xl`}
    >
      {props.icon}
      <p className="hidden sm:inline-flex">{props.title}</p>
    </div>
  );
}
