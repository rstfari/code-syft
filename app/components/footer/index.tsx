"use client"
import Link from "next/link"

const github = <Link href="https://github.com/rstfari">Fari</Link>

const Foot = () => {
  return (
    <div className="text-gray-300 absolute bottom-0 py-1 bg-stone-950 w-full text-center text-sm">
      <p>created by {github}</p>
    </div>
  )
}

export default Foot;