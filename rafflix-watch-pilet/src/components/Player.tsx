import * as React from "react";
import { PlayerProps } from "../models/prototypes";
import {useEffect} from "react";

export const Player: React.FC<PlayerProps> = (props) => {
    const [trailerId, setTrailerId] = React.useState("");

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/${props.media_type}/${props.video_id}/videos?api_key=87dfa1c669eea853da609d4968d294be`)
            .then(res => res.json())
            .then(data => {
                setTrailerId(data.results[0].key);
            })
    })

    return (
        <div>
            <iframe
                className="Player"
                width="560"
                height="315"
                src={`https://www.youtube-nocookie.com/embed/${trailerId}?autoplay=1`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    )
};
