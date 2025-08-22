import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    console.log("Request received");
    await connectDB();
    const body = await req.json();
    console.log("Request body:", body);

    const { name, email, password } = body;

    const existingUser = await User.findOne({ email });
    console.log("Existing user:", existingUser);

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Password hashed");

    const newUser = await User.create({ name, email, password: hashedPassword });
    console.log("New user created:", newUser);

    return new Response(JSON.stringify({ message: "User registered successfully", user: newUser }), { status: 201 });
  } catch (err) {
    console.error("Register API error:", err);
    return new Response(JSON.stringify({ error: "Server error", detail: err.message }), { status: 500 });
  }
}

