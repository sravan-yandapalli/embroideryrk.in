import { NextResponse } from "next/server";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";

export const dynamic = "force-dynamic";

// Explicitly providing the credentials to bypass Next.js isolation
const client = new DynamoDBClient({
  region: process.env.REGION || "ap-south-1",
  credentials: {
    accessKeyId: process.env.APP_AWS_ACCESS_KEY as string,
    secretAccessKey: process.env.APP_AWS_SECRET_KEY as string,
  },
});

const docClient = DynamoDBDocumentClient.from(client);

export async function POST(req: Request) {
  try {
    const data = await req.json();

    if (!data.name || !data.phone || !data.machine) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" }, 
        { status: 400 }
      );
    }

    const params = {
      TableName: process.env.DYNAMODB_TABLE_NAME || "MachineBooking",
      Item: {
        id: crypto.randomUUID(),
        createdAt: new Date().toISOString(),
        name: data.name,
        phone: data.phone,
        email: data.email || "N/A",
        machine: data.machine,
        status: "NEW", 
      },
    };

    await docClient.send(new PutCommand(params));
    return NextResponse.json({ success: true });
    
  } catch (error: any) {
    console.error("DynamoDB Error:", error);
    return NextResponse.json(
      { success: false, message: error.message }, 
      { status: 500 }
    );
  }
}