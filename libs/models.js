import mongoose, { Schema } from "mongoose";

const eventSchema = new Schema(
	{
		title: String,
		title2: String,
		src: String,
		altImg: String,
		sideTitle2: String,
		sideTitle3: String,
		sideTitle4: String,
		sideTitle5: String,
		sideTitle6: String,
		sideTitle7: String,
		textbouton1: String,
		textbouton2: String,
		description1: String,
	},
	{ timestamps: true }
);

export const Event =
	mongoose.models?.Event || mongoose.model("Event", eventSchema);
