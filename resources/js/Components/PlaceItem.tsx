import { Place } from "@/types";
import { useState } from "react";
import PlaceDropdown from "./PlaceDropdown";

export default function PlaceItem({ place }: { place: Place }) {
    const [isExpanded, setIsExpanded] = useState(false)

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded)
    }
	return (
		<div className="mb-4 overflow-hidden bg-white shadow-sm sm:rounded-lg">
			<div className="p-6 text-gray-900 flex gap-8">
				<div className="flex-1">
                    <h2 className="text-2xl mb-2">{place.name}</h2>
                    {(place.description || '').length > 200 && (
                        <>
                            <p> {isExpanded ? place.description : `${(place.description || '').slice(0, 200)}...`}</p>
                            <button onClick={toggleReadMore} className="text-amber-600 hover:underline">
                                {isExpanded ? 'Read Less' : 'Read More'}
                            </button>
                        </>
                    )}
                    {(place.description || '').length <= 200 && (
                        <p>{place.description}</p>
                    )}
                </div>
                <div>
                    <PlaceDropdown place={place} />
                </div>
			</div>
		</div>
	);
}
