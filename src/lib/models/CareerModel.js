const mongoose = require('mongoose');

// Career Application Schema: Each application references a Job and contains applicant details
const CareerApplicationSchema = new mongoose.Schema(
  {
    firstName: { type: String, trim: true },
    lastName: { type: String, trim: true },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        'Please fill a valid email address',
      ],
    },
    phone: { type: String, trim: true },
    address: { type: String, trim: true },
    postcode: { type: String, trim: true },
    city: { type: String, trim: true },
    country: { type: String, trim: true },
    education: { type: String, trim: true },
    experience: { type: String, trim: true },
    role: { type: String, trim: true },
    expectedSalary: { type: String, trim: true },
    currentlyWorking: { type: Boolean },
    comfortableWithLocation: { type: Boolean },
    acceptTerms: { type: Boolean },
    // New field to upload applicant's picture (store as URL or file reference)
    picture: { type: String, trim: true }, // URL or file path to uploaded picture
    cv: { 
      type: String, 
      trim: true,
      // Only allow PDF files (should be enforced at upload, but noted here for clarity)
      match: [/\.pdf$/i, 'Only PDF files are allowed for CV uploads'],
    }, // URL or file path to uploaded PDF CV
    // New field: job name
    jobName: { type: String, trim: true }, // Name of the job applied for
    status: {
      type: String,
      enum: ['pending', 'reviewed', 'interview', 'rejected', 'accepted'],
      default: 'pending',
    },
   
  },
  { timestamps: true }
);

module.exports = mongoose.models.CareerApplication ||
  mongoose.model('CareerApplication', CareerApplicationSchema);
