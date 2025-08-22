import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    await connectDB();

    const user = await User.findOne({ email });
    if (!user) {
      return new Response(JSON.stringify({ message: "User not found" }), { status: 400 });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return new Response(JSON.stringify({ message: "Invalid credentials" }), { status: 401 });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    return new Response(JSON.stringify({ token }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Error logging in" }), { status: 500 });
  }
}
