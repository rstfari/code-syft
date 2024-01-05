const Logo = (props: { headText: string }) => {
  return (
    <h1 className=" flex-grow text-7xl text-gray-300">code-syft/{props.headText}/</h1>
  )
}

export default Logo;