import { client, db } from "@/app/api/route";

db();
const Design = client.db("DesignDevs").collection("Design");

export const GET = async (req, res) => {
  try {
    const category = req?.url?.split("/design/category/")[1];
    const design = await Design?.find({ category: category }).toArray();
    console.log(category);
    return Response.json(
      {
        success: true,
        message: "Successfully design with category",
        data: design,
      },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      {
        success: false,
        message: error.message,
        data: false,
      },
      { status: 500 }
    );
  }
};
