import { useSearchParams } from "next/navigation"
import Link from "next/link"



export default function PaginationButtons() {
    return (
        <div className="text-white">
            <div className="flex text-red-700 w-3/12 items-center m-auto justify-evenly mb-4 pb-10 pt-5">
                <button>Previous</button>
                <button>Next</button>
            </div>
        </div>
    )
}