import { NextResponse } from 'next/server';
import connectDB from '@/lib/config/db';
import CareerApplication from '@/lib/models/CareerModel';
import cloudinary from '@/lib/utils/cloudinary';

// All input fields are now optional to avoid 400 errors for missing/invalid fields


cloudinary.config({
  cloud_name:  "dd9j33dja",
  api_key:  "329347982555784",
  api_secret:  "4avhppvyg6hTcbXYBH4cTKjiDK8",
  secure: true
});

export async function POST(req) {
  try {
    await connectDB();

    let data = {};
    let pictureUrl = undefined;
    let cvUrl = undefined;

    const contentType = req.headers.get('content-type') || '';
    if (contentType.includes('multipart/form-data')) {
      // Handle multipart/form-data for file upload
      const formData = await req.formData();

      // Extract all fields
      data.firstName = formData.get('firstName');
      data.lastName = formData.get('lastName');
      data.email = formData.get('email');
      data.phone = formData.get('phone');
      data.address = formData.get('address');
      data.postcode = formData.get('postcode');
      data.city = formData.get('city');
      data.country = formData.get('country');
      data.education = formData.get('education');
      data.experience = formData.get('experience');
      data.role = formData.get('role');
      data.expectedSalary = formData.get('expectedSalary');
      data.currentlyWorking = formData.get('currentlyWorking') === 'true' || formData.get('currentlyWorking') === true;
      data.comfortableWithLocation = formData.get('comfortableWithLocation') === 'true' || formData.get('comfortableWithLocation') === true;
      data.acceptTerms = formData.get('acceptTerms') === 'true' || formData.get('acceptTerms') === true;
      data.jobName = formData.get('jobName'); // Add jobName field

      // Handle picture upload
      const picture = formData.get('picture');
      if (picture && typeof picture !== 'string' && picture.size > 0) {
        const imageBuffer = await picture.arrayBuffer();
        const buffer = Buffer.from(imageBuffer);

        pictureUrl = await new Promise((resolve, reject) => {
          const uploadStream = cloudinary.uploader.upload_stream(
            {
              resource_type: 'auto',
              folder: 'career-applicants'
            },
            (error, result) => {
              if (error) {
                console.error('Cloudinary upload error:', error);
                reject(new Error('Failed to upload image to Cloudinary'));
              } else {
                resolve(result.secure_url);
              }
            }
          );
          uploadStream.end(buffer);
        });
      }

      // Handle CV upload (PDF)
      const cv = formData.get('cv');

      // Debug: log what we get for cv
      if (!cv) {
        console.log('CV is undefined or null:', cv);
      } else {
        console.log('CV typeof:', typeof cv, 'CV:', cv);
        if (typeof cv !== 'string') {
          console.log('CV name:', cv.name, 'CV size:', cv.size, 'CV type:', cv.type);
        }
      }

      if (cv && typeof cv !== 'string' && cv.size > 0) {
        // Check file type (should be PDF)
        const cvType = cv.type || '';
        if (!cvType.includes('pdf')) {
          return NextResponse.json(
            { error: 'CV must be a PDF file.' },
            { status: 400 }
          );
        }

        // Convert file to buffer
        const cvBuffer = await cv.arrayBuffer();
        const buffer = Buffer.from(cvBuffer);

        // Upload to Cloudinary as raw resource (for PDF)
        cvUrl = await new Promise((resolve, reject) => {
          const uploadStream = cloudinary.uploader.upload_stream(
            {
              resource_type: 'raw', // Use 'raw' for non-image files like PDF
              folder: 'career-applicants-cv',
              format: 'pdf'
            },
            (error, result) => {
              if (error) {
                console.error('Cloudinary CV upload error:', error);
                reject(new Error('Failed to upload CV to Cloudinary: ' + error.message));
              } else {
                resolve(result.secure_url);
              }
            }
          );
          uploadStream.end(buffer);
        });
      } else {
        if (cv && typeof cv !== 'string') {
          // If file exists but size is 0
          console.log('CV file exists but size is 0:', cv.size);
        }
      }
    } else {
      // Fallback: JSON body (no file upload)
      try {
        data = await req.json();
        pictureUrl = data.picture || undefined;
        cvUrl = data.cv || undefined;
        // Add jobName from JSON body if present
        data.jobName = data.jobName;
      } catch (parseError) {
        return NextResponse.json(
          { error: 'Invalid JSON in request body' },
          { status: 400 }
        );
      }
    }

    // Create new career application with whatever data is provided
    const application = await CareerApplication.create({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      address: data.address,
      postcode: data.postcode,
      city: data.city,
      country: data.country,
      education: data.education,
      experience: data.experience,
      role: data.role,
      expectedSalary: data.expectedSalary,
      currentlyWorking: data.currentlyWorking,
      comfortableWithLocation: data.comfortableWithLocation,
      acceptTerms: data.acceptTerms,
      picture: pictureUrl,
      cv: cvUrl,
      jobName: data.jobName, // Add jobName to the document
    });

    // Debug: log what we are saving for cv
    console.log('Saved application.cv:', application.cv);

    return NextResponse.json(
      { message: 'Application submitted successfully', application },
      { status: 201 }
    );
  } catch (error) {
    console.log('Error in POST /api/career:', error);
    return NextResponse.json(
      { error: error.message || 'Something went wrong' },
      { status: 500 }
    );
  }
}




export async function GET(req) {
  try {
    await connectDB();

    // Parse query parameters
    const { searchParams } = new URL(req.url);

    // If ?job=JOB_ID is provided, filter by job
    const jobId = searchParams.get('job');
    // If ?populate=1, populate job details
    const populateJob = searchParams.get('populate') === '1';
    // If ?countByJob=1, return applicant counts per job
    const countByJob = searchParams.get('countByJob') === '1';

    if (countByJob) {
      // Return applicant counts per job (aggregation)
      const counts = await CareerApplication.aggregate([
        { $group: { _id: "$job", applicantCount: { $sum: 1 } } }
      ]);
      return NextResponse.json({ counts }, { status: 200 });
    }

    // Build query
    const query = {};
    if (jobId) {
      query.job = jobId;
    }

    let q = CareerApplication.find(query);
    if (populateJob) {
      q = q.populate('job');
    }

    const applications = await q.exec();

    return NextResponse.json(
      { applications },
      { status: 200 }
    );
  } catch (error) {
    console.log('Error in GET /api/career:', error);
    return NextResponse.json(
      { error: error.message || 'Something went wrong' },
      { status: 500 }
    );
  }
}





/**
 * Step-by-step guidance to add email verification to your career/job application form:
 * 
 * 1. **Frontend:**
 *    - Add an input field for the applicant's email and a "Send Verification Code" button.
 *    - When the user enters their email and clicks the button, make a POST request to `/api/sendVerification` with the email.
 *    - The backend (see below) will generate a code, send it to the email, and return a response.
 *    - Show an input field for the user to enter the verification code they received.
 *    - Store the code (or a verification token) in the frontend state (do NOT show it to the user).
 *    - When the user submits the application, include the email and the code they entered.
 * 
 * 2. **Backend:**
 *    - Create an API route (e.g., `/api/sendVerification`) that:
 *        - Accepts an email, generates a random code, stores it temporarily (in-memory, Redis, or DB) with an expiry, and sends it to the email.
 *        - You already have a sample in `src/app/api/sendVerification/route.js`.
 *    - When the user submits the application (to `/api/career`), require both the email and the code.
 *    - On the backend, check that the code matches the one sent to that email and is not expired.
 *    - Only proceed with the application if the code is valid.
 * 
 * 3. **Verification Code Storage:**
 *    - For a simple demo, you can use an in-memory object (not recommended for production).
 *    - For production, use a fast store like Redis or a database with expiry.
 * 
 * 4. **Example: In-memory code store (for demo only):**
 *    - At the top of your `route.js`:
 *        const verificationCodes = {};
 *    - When sending a code:
 *        verificationCodes[email] = { code, expires: Date.now() + 10 * 60 * 1000 }; // 10 min expiry
 *    - When verifying:
 *        Check if verificationCodes[email] exists, code matches, and not expired.
 *        If valid, delete verificationCodes[email].
 * 
 * 5. **Security:**
 *    - Never send the code back to the frontend.
 *    - Always expire codes after a short time.
 *    - Rate-limit sending codes to prevent abuse.
 * 
 * 6. **User Experience:**
 *    - Show clear messages for "code sent", "code invalid", "code expired", etc.
 *    - Allow resending the code if needed.
 * 
 * 7. **References:**
 *    - See your `src/app/api/sendVerification/route.js` for sending emails.
 *    - See your `src/app/api/applications/route.js` for how to send emails and handle requests.
 * 
 * 8. **Next Steps:**
 *    - Implement the code storage and verification logic in your `/api/career` POST handler.
 *    - Update your frontend form to require code verification before allowing submission.
 * 
 * If you want a code example for the backend verification logic, let me know!
 */
