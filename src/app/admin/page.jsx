import React from "react";
import Styles from "./adminPage.module.css";
import Link from "next/link";
import RemoveBtn from "@/components/removeBtn/RemoveBtn";
import Image from "next/image";

const getEvents = async () => {
	try {
		const res = await fetch("http://localhost:3000/api/events", {
			cache: "no-store",
		});
		if (!res.ok) {
			throw new Error("Erreur lors du fetching events");
		}
		const data = res.json();
		return data;
	} catch (error) {
		console.log("Erreur lors du fetching des evenements", error);
	}
};

const adminPage = async () => {
	const events = await getEvents();
	return (
		<div className={Styles.container}>
			<div className={Styles.containerTitleButton}>
				<h1 style={{ fontWeight: "bold" }}>Admin - Liste des événements</h1>
				<div>
					<Link href="/admin/addEvent" className={Styles.button}>
						Ajouter
					</Link>
				</div>
			</div>

			<table className={Styles.table}>
				<thead>
					<tr>
						<th>Title</th>
						<th>Description</th>
						<th>Date</th>
						<th>Plus d'info</th>
						<th />
					</tr>
				</thead>
				<tbody>
					{events?.events?.map((element) => (
						<tr key={element._id}>
							<td>
								<div style={{ display: "flex", gap: "5px" }}>
									<Image
										src={`/events/${element.src}`}
										height={50}
										width={50}
									/>
									<div>{element.title}</div>
								</div>
							</td>
							<td>{element.description1.split('.')[0]}</td>
							<td>{element.sideTitle3}</td>
							<td>{element.sideTitle5}</td>
							<td>
								<RemoveBtn id={element._id} />
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default adminPage;
