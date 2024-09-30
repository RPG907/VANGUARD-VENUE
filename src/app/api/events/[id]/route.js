import { NextResponse } from "next/server";
import { connectToDB } from "../../../../../libs/connectionMongodb";
import { Event } from "../../../../../libs/models";

export async function GET(req, { params }) {
	const { id } = params;
	connectToDB();
	const event = await Event.findOne({ _id: id });
	return NextResponse.json({ event }, { status: 200 });
}

export async function PUT(req, { params }) {
	const { id } = params;
	connectToDB();
	const {
		title: title,
		title2: title2,
		src: src,
		altImg: altImg,
		sideTitle2: sideTitle2,
		sideTitle3: sideTitle3,
		sideTitle4: sideTitle4,
		sideTitle5: sideTitle5,
		sideTitle6: sideTitle6,
		sideTitle7: sideTitle7,
		textbouton1: textbouton1,
		textbouton2: textbouton2,
		description1: description1,

	} = await req.json();

	await Event.findByIdAndUpdate(id, {
		title,
		title2,
		src,
		altImg,
		sideTitle2,
		sideTitle3,
		sideTitle4,
		sideTitle5,
		sideTitle6,
		sideTitle7,
		textbouton1,
		textbouton2,
		description1
	});
	return NextResponse.json({ message: "Event updated" }, { status: 200 });
}
