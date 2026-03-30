import { NextResponse } from "next/server";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";

// Initialize client once (Singleton pattern)
// In Amplify/Production, it automatically detects credentials from the Service Role
const client = new DynamoDBClient({
  region: process.env.REGION || "ap-south-1",
});

const docClient = DynamoDBDocumentClient.from(client);

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Basic Validation
    if (!data.name || !data.phone || !data.machine) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    const params = {
      TableName: process.env.DYNAMODB_TABLE_NAME,
      Item: {
        id: crypto.randomUUID(),
        createdAt: new Date().toISOString(),
        name: data.name,
        phone: data.phone,
        email: data.email || "N/A",
        machine: data.machine,
        status: "NEW", // Useful for your admin dashboard later
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