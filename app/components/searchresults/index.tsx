import PaginationButtons from "../paginationbuttons";

export default function SearchResults({results}) {
    
  return (
    <div className="w-full">
        <p className="text-white text-center">
          Results: {results.searchInformation.formattedTotalResults} in {results.searchInformation.formattedSearchTime} seconds.
        </p>

        {results.items?.map((result) => (
          <div key={result.link} className="text-white mb-4 w-11/12 mx-auto text-xs bg-slate-600 bg-opacity-10 p-4 rounded-lg sm:w-9/12 md:w-9/12 sm:text-sm lg:w-7/12">
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
