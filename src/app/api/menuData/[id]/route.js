import { FoodItem } from "@/models/foodItem"
import { connectionStr } from "@/utils/db"
import mongoose from "mongoose"
const { NextResponse } = require("next/server")

export async function PUT(req,res) {
     const itemId= res.params.id
     const id={_id:itemId}
     const data = await req.json()
     let result={}
   try {
      await mongoose.connect(connectionStr)
     //  const result = await  FoodItem.findOneAndUpdate({_id:itemId},data)
      result = await  FoodItem.findOneAndUpdate(id,data)
   } catch (error) {
     result={result:"error"}
   }
     return NextResponse.json(result)
}

export async function GET(req,res) {
     const itemId= res.params.id
     const id={_id:itemId}
     let result = {}
   try {
      await mongoose.connect(connectionStr)
       result= await FoodItem.findById(id)
   } catch (error) {
      result={result:"error"}
   }
     return NextResponse.json(result)
}

export async function DELETE(req,res) {
  const itemId= res.params.id
  const id={_id:itemId}
  let result={}
  try {
    await mongoose.connect(connectionStr)
    result=await FoodItem.deleteOne(id)
  } catch (error) {
    result={result:"error"}
  }
  return NextResponse.json(result)
}