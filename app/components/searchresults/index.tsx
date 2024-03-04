import PaginationButtons from "../paginationbuttons";

export default function SearchResults({results}) {
    
  return (
    <div>
        <p className="text-white pl-10">
          Results: {results.searchInformation.formattedTotalResults} in {results.searchInformation.formattedSearchTime} seconds.
        </p>

        {results.items?.map((result) => (
          <div key={result.link} className="text-white mb-8">
            <div className="group">
              <a href={result.link} className="text-gray-500 text-sml">
                {result.formattedUrl}
              </a>
              <a href={result.link}>
                <h2 className="text-xl text-red-700 font-bold group-hover:underline">{result.title}</h2>
              </a>
            </div>

            <p>{result.snippet}</p>
          </div>
        ))}

        {/* <PaginationButtons /> */}
    </div>
  );
};
