import PlaceItem from "@/Components/PlaceItem";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PaginatedData, Place } from "@/types";
import { Head } from "@inertiajs/react";

export default function Index({ places }: { places: PaginatedData<Place> }) {
	return (
		<AuthenticatedLayout
			header={
				<h2 className="text-xl font-semibold leading-tight text-gray-800">
					Places
				</h2>
			}
		>
			<Head title="Dashboard" />

			<div className="py-12">
				<div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
					{places.data.map((place) => (
						<PlaceItem place={place} key={place.id}/>
					))}
				</div>
			</div>
		</AuthenticatedLayout>
	);
}
