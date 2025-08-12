// lib/models/Contact.js
import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  company: { type: String },
  phone: { type: String, required: true },
  service: { type: String },
  source: { type: String },
  message: { type: String },
  pageUrl: { type: String },
  location: { type: String },
  verified: { type: Boolean, default: true }, // Mark as verified since they passed verification
  createdAt: { type: Date, default: Date.now }
});

export const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);