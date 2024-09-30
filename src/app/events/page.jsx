import React from "react";
import Styles from "./events.module.css";
import Card from "@/components/card/Card";

export const getEvents = async () => {
	const res = await fetch("http://localhost:3000/api/events/");

	if (!res.ok) {
		throw new Error("Erreur lors du fetching data");
	}

	const data = await res.json();
	return data.events;
};

const Events = async () => {
	

	const eventData = await getEvents();
	
	const urlImage = `/events/`;
	return (
		<div className={Styles.container}>
			{eventData &&
				eventData.map((element) => (
					<Card {...element} src={urlImage + element?.src} id={element?._id} />
				))}
		</div>
	);
};

export default Events;
