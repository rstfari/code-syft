const Logo = (props: { headText: string }) => {
  return (
    <h1 className="flex flex-grow text-5xl text-gray-300 text-nowrap lg:text-6xl">
      code-syft/<span className="text-red-700">{props.headText}</span>/
    </h1>
  );
};

export default Logo;
