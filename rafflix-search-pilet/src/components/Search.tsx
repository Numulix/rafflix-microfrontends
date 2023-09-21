import * as React from "react";
import {SearchProps} from "../models/prototypes";
import {debounce} from "../utils/debounce";

export const Search: React.FC<SearchProps> = (props) => {
    const apiKey = "87dfa1c669eea853da609d4968d294be";

    const [searchTerm, setSearchTerm] = React.useState("");

    const handleKeyUp = React.useCallback(
        (e) => {
            if (!searchTerm) {
                props.onSearchChange(null);
                return;
            }

            handleSearch(searchTerm);
        },
        [searchTerm, props.onSearchChange]
    );

    const handleSearch = React.useCallback(
        debounce((value) => {
            props.onSearchChange(`search/multi?query=${value}&api_key=${apiKey}`)
        }, 500),
        []
    );

    const handleChange = React.useCallback((e) => {
        setSearchTerm(e.target.value);
    }, []);

    return (
        <div id="search" className="Search">
            <input
                onChange={handleChange}
                onKeyUp={handleKeyUp}
                onFocus={handleKeyUp}
                type="search"
                placeholder="Search for a title..."
                value={searchTerm}
            />
        </div>
    );
};