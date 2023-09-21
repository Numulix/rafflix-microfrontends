import * as React from "react";
import {SearchExtensionProps} from "../models/prototypes";
import useDismiss from "../utils/useDismiss";
import {Search} from "./Search";
import {SearchResults} from "./SearchResults";

export const SearchExtension: React.FC<SearchExtensionProps> = ({MovieTile}) => {
    const [searchUrl, setSearchUrl] = React.useState("");
    const [resultsVisible, setResultsVisible] = React.useState(false);
    const wrapperRef = React.useRef(null);

    useDismiss(() => setResultsVisible(false), wrapperRef);

    const doSearch = React.useCallback((url: String) => {
        setSearchUrl(url);
        setResultsVisible(!!url);
    }, []);

    return (
        <div ref={wrapperRef} className="SearchContainer">
            <Search onSearchChange={doSearch} />
            {resultsVisible && (
                <SearchResults searchUrl={searchUrl} MovieTile={MovieTile} />
            )}
        </div>
    );
};