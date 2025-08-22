import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Product from "@/models/Product";

connectDB(); // MongoDB connect

export async function GET() {
  try {
    const products = await Product.find({});
    return NextResponse.json({ success: true, data: products });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const product = await Product.create(body);
    return NextResponse.json({ success: true, data: product });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
