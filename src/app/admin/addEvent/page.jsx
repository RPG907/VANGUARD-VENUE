"use client";
import React, { useState } from "react";
import Styles from "./addEvent.module.css";
import { useRouter } from "next/navigation";

const addEventForm = () => {
	const router = useRouter();

	const [formData, setFormData] = useState({
		title: "",
		title2: "",
		src: "",
		altImg: "",
		sideTitle2: "SHOW DATE & TIME:",
		sideTitle3: "",
		sideTitle4: "TICKET PRICE:",
		sideTitle5: "",
		sideTitle6: "",
		sideTitle7: "",
		textbouton1: "BOOK NOW",
		textbouton2: "SUBSCRIBE",
		description1: ""
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubnmit = async (e) => {
		e.preventDefault();
		try {
			const res = await fetch("http://localhost:3000/api/events/", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});
			if (res.ok) {
				console.log("event created");
				router.push("/admin");
			} else {
				console.error("Failed to create the event");
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<form className={Styles.container} onSubmit={handleSubnmit}>
				<h1 className={Styles.title}>Ajouter un nouveau événement </h1>
				<input
					type="text"
					name="title"
					placeholder="Title"
					value={formData.title}
					onChange={handleChange}
				/>
				<input
					type="text"
					name="title2"
					placeholder="Sous-titre"
					value={formData.title2}
					onChange={handleChange}
				/>
				<input
					type="text"
					name="sideTitle2"
					placeholder="Premier texte sur le côté (Titre pour la date)"
					value={formData.sideTitle2}
					onChange={handleChange}
				/>
				<input
					type="text"
					name="sideTitle3"
					placeholder="Deuxieme texte sur le côté (date)"
					value={formData.sideTitle3}
					onChange={handleChange}
				/>
				<input
					type="text"
					name="sideTitle4"
					placeholder="3e texte sur le côté"
					value={formData.sideTitle4}
					onChange={handleChange}
				/>
				<input
					type="text"
					name="sideTitle5"
					placeholder="4e texte sur le côté"
					value={formData.sideTitle5}
					onChange={handleChange}
				/>
				<input
					type="text"
					name="sideTitle6"
					placeholder="5e texte sur le côté"
					value={formData.sideTitle6}
					onChange={handleChange}
				/>
				<input
					type="text"
					name="sideTitle7"
					placeholder="6e texte sur le côté"
					value={formData.sideTitle7}
					onChange={handleChange}
				/>
				<input
					type="text"
					name="textbouton1"
					placeholder="Texte du premier bouton"
					value={formData.textbouton1}
					onChange={handleChange}
				/>
				<input
					type="text"
					name="textbouton2"
					placeholder="Texte du deuxieme bouton"
					value={formData.textbouton2}
					onChange={handleChange}
				/>
				<textarea
					type="text"
					name="description1"
					placeholder="Description"
					rows={3}
					value={formData.description1}
					onChange={handleChange}
				/>
				
				<input
					type="text"
					name="place"
					placeholder="Place"
					value={formData.place}
					onChange={handleChange}
				/>
				<input
					type="text"
					name="src"
					placeholder="Image"
					value={formData.src}
					onChange={handleChange}
				/>
				<input
					type="text"
					name="altImg"
					placeholder="Alt"
					value={formData.altImg}
					onChange={handleChange}
				/>

				<button type="submit">Sauvegarder</button>
			</form>
		</>
	);
};

export default addEventForm;
