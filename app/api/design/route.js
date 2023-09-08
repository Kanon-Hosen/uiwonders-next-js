import { client, db } from "../route";

db();
const Design = client?.db("DesignDevs").collection("Design");

export const GET = async (req) => { 

    try {
        const design = await Design.find({}).toArray();

        return Response.json({
            success:true,
            message: "success",
            data: design
        },{status: 200,})
    } catch (error) {
        return Response.json({
            success:false,
            message: error,
            data:[]
        }, {status:500})
    }
}

export const POST = async (req) => { 
    try {
        const data = await req?.json();
        const design = await Design.insertOne(data);
        return Response.json({
            success:true,
            message: "successfully created",
            data: design
        })
    } catch (error) {
        return Response.json({
            success:false,
            message: error.message,
            data:null
        })
    }
}