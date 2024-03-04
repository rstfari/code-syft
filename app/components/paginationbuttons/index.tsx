import { useRouter } from "next/navigation"
import Link from "next/link"




export default function PaginationButtons() {
    const router = useRouter();
    return (
        <div>
            {startingIndex >= 10 && (
                <Link href={`/results?term=${router.query.term}&start=${startingIndex - 10}`}>
                    <p>Previous</p>
                </Link>
            )}

            <Link href={`/results?term=${router.query.term}&start=${startingIndex + 10}`}>
                <p>Next</p>
            </Link>
        </div>
    )
}