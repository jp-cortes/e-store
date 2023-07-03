import { NextResponse } from "next/server";
import { endPoints } from "../../../../services/queries/endPoints";

export async function GET(context: { params }) {
    const id = params.id;
    const response = await fetch(`${endPoints.products.getProduct(id)}`);
    const data = await response.json();
    return NextResponse.json({ data });
}