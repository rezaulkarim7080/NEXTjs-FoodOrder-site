
import Image from "next/image";
import Link from "next/link";
const MovieCard = (curElem) => {

    const {id, type, title, synopsis} = curElem.jawSummary;

    return (
        <>
            <div >
                <div >
                    <Image src={curElem.jawSummary.backgroundImage.url} alt={title} width={260} height={200} />
                </div>
                <div >
                    <h2>{title.substring(0,18)}</h2>
                    <p>
                        {`${synopsis.substring(0,66)} ...`}
                    </p>

                    <Link href={`/movie/${id}`}>
                        <button className="bg-slate-400 px-3 py-2">
                            Read More
                        </button>
                    </Link>
                </div>
            </div>

        </>
    );
};

export default MovieCard;