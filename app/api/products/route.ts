import { NextResponse } from "next/server";
import { endPoints } from "../../../services/queries/endPoints";

export async function GET() {
    const response = await fetch(`${endPoints.products.allProducts}`);
    const data = await response.json();
    return NextResponse.json({ data });
}