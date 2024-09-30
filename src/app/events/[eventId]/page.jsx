import React from "react";
import Styles from "./eventDetails.module.css";
import eventData from "../../../data/dataEvents.json";
import TemplatePage from "@/components/templatePage/TemplatePage";
import Link from "next/link";

const getEventById = async (id) => {
	const res = await fetch(`http://localhost:3000/api/events/${id}`);

	if (!res.ok) {
		throw new Error("Erreur lors du fetching data");
	}

	const data = await res.json();
	return data.event;
};

const EventDetails = async ({ params }) => {
	const event = await getEventById(params.eventId);
	return (
		<div className={Styles.container}>
			<Link key={event.id} href="/events">
				Retour a la liste
			</Link>
			{event ? (
				<>
					<TemplatePage
						title={event.title}
						title2={event.title2}
						description1={event.description1}
						src={event.src}
						altImg={event.altImg}
						sidetitle2={event.sideTitle2}
						sidetitle3={event.sideTitle3}
						sidetitle4={event.sideTitle4}
						sidetitle5={event.sideTitle5}
						sidetitle6={event.sideTitle6}
						sidetitle7={event.sideTitle7}
						textbouton1={event.textbouton1}
						textbouton2={event.textbouton2}
					/>
				</>
			) : (
				<div className={Styles.titre}>
					L'evenement {params.eventId} n'existe pas
				</div>
			)}
		</div>
	);
};

export default EventDetails;
