import { ObjectId } from "mongodb";
import {client, db } from "../../route"

db();
const Design = client.db("DesignDevs").collection("Design");

export const GET = async (req, res) => {
    try {
        const url = new URL(req?.url);
        const id = url?.searchParams.get("id")
    console.log(id)
        const oneFle = await Design.findOne({_id:new ObjectId(id)});
        return Response.json({
            success:true,
            message: "success",
            data: oneFle
        },{status: 200,})
    } catch (error) {
        return Response.json({
            success:false,
            message: error.message,
            data:[]
        }, {status:500})
    }
}