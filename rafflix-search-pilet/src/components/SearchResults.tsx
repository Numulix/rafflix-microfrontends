import * as React from "react";
import {MovieTileProps, SearchResultsProps} from "../models/prototypes";
import {ApiData} from "../models/types";
import {createMovieTileProps, loadContent} from "../utils/helperFunctions";

export const SearchResults: React.FC<SearchResultsProps> = (props) => {
    const [mounted, setMounted] = React.useState(false);
    const [data, setData] = React.useState<ApiData>({});

    const titles = React.useMemo(() => {
        if (data.results) {
            return data.results.slice(0, 5).map((title) => {
                const movieTileProps: MovieTileProps = createMovieTileProps(title);
                return <props.MovieTile key={title.id} {...movieTileProps} />;
            });
        }

        return [];
    }, [data.results]);

    React.useEffect(() => {
        setMounted(true);
        return loadContent(props.searchUrl, setData);
    }, [props.searchUrl]);

    if (props.searchUrl) {
        return (
            <div className="SearchResults">
                <div className="TitleList" data-loaded={mounted}>
                    <div className="Title">
                        <div className="titles-wrapper">
                            {data.results ? (
                                titles
                            ) : (
                                <p style={{ color: "gray" }}> nothing was found</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return null;
}