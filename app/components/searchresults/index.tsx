export default function SearchResults({results}) {
    
  return (
    <div>
        <p className="text-white pl-10">Results: {results.searchInformation.formattedTotalResults}</p>
    </div>
  );
};
