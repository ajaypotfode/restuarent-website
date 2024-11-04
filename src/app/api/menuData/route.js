import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { FoodItem } from "@/models/foodItem";
import { connectionStr } from "@/utils/db";

// get function
export async function GET() {
  let data = []
  try {
    await mongoose.connect(connectionStr)
    data = await FoodItem.find();
  } catch (error) {
    data = { success: false }
  }
  return NextResponse.json(data)
}

// post function
export async function POST(req) {
  const data = await req.json()
  let result = {}
  try {
    await mongoose.connect(connectionStr)
    const foodItem = await new FoodItem(data)
    result = await foodItem.save()
  } catch (error) {
    console.log(error);
  }
  return NextResponse.json(result)
}
