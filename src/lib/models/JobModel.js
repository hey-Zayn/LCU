const mongoose = require('mongoose');

/**
 * Job Schema
 * - Does NOT store applicants directly.
 * - To get which applicant applied for which job, use the CareerApplication (CareerModel.js) collection,
 *   which has a 'job' field referencing this Job.
 * - To get how many applicants applied for a job, aggregate/count CareerApplication by job.
 * - See static methods below for convenience.
 */
const JobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    department: {
      type: String,
      trim: true,
    },
    location: {
      type: String,
      trim: true,
    },
    type: {
      type: String,
      enum: ['Full-time', 'Part-time', 'Contract', 'Internship', 'Remote'],
      default: 'Full-time',
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    requirements: [
      {
        type: String,
        trim: true,
      },
    ],
    responsibilities: [
      {
        type: String,
        trim: true,
      },
    ],
    salaryRange: {
      min: {
        type: Number,
        min: 0,
      },
      max: {
        type: Number,
        min: 0,
      },
      currency: {
        type: String,
        trim: true,
        default: 'USD',
      },
    },
    postedBy: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      enum: ['open', 'closed', 'paused'],
      default: 'open',
    },
    applicationDeadline: {
      type: Date,
    },
  },
  { timestamps: true }
);



module.exports = mongoose.models.Job || mongoose.model('Job', JobSchema);
