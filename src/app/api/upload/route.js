import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request) {
  try {
    // Get the file from FormData
    const formData = await request.formData();
    const file = formData.get('file');

    if (!file || file === 'undefined') {
      return Response.json(
        { success: false, error: "No file provided" },
        { status: 400 }
      );
    }

    // Convert file to buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Upload to Cloudinary using upload_stream
    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        {
          folder: "postman-uploads",
          resource_type: "auto" // Handles images, videos, PDFs, etc.
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      ).end(buffer);
    });

    return Response.json({
      success: true,
      url: result.secure_url,
      public_id: result.public_id,
      format: result.format,
      bytes: result.bytes
    });

  } catch (error) {
    console.error("Upload error:", error);
    return Response.json(
      { 
        success: false, 
        error: "Upload failed",
        details: error.message 
      },
      { status: 500 }
    );
  }
}

// Explicitly handle unsupported methods
export async function GET() {
  return Response.json(
    { success: false, error: "Method not allowed" },
    { status: 405 }
  );
}