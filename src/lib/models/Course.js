// src/models/Course.js
import mongoose from 'mongoose';

const syllabusItemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  items: {
    type: [String],
    required: true,
    validate: {
      validator: function(v) {
        return v.length > 0;
      },
      message: 'Syllabus items cannot be empty'
    }
  }
});

const instructorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  bio: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});

const courseSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^[a-z0-9-]+$/, 'ID can only contain lowercase letters, numbers and hyphens']
  },
  title: {
    type: String,
    required: [true, 'Course title is required'],
    trim: true,
    maxlength: [100, 'Title cannot exceed 100 characters']
  },
  shortDescription: {
    type: String,
    required: [true, 'Short description is required'],
    trim: true,
    maxlength: [200, 'Short description cannot exceed 200 characters']
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    trim: true
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: {
      values: ['Programming', 'Data', 'Design', 'Marketing', 'IT Infrastructure'],
      message: 'Invalid category'
    }
  },
  image: {
    type: String,
    required: [true, 'Image URL is required'],
    // validate: {
    //   validator: function(v) {
    //     return /\.(jpg|jpeg|png|webp)$/i.test(v);
    //   },
    //   message: 'Image URL must end with .jpg, .jpeg, .png, or .webp'
    // }
  },
  duration: {
    type: String,
    required: [true, 'Duration is required'],
    match: [/^\d+\s(weeks|months|days|hours)$/, 'Duration format should be like "12 weeks" or "3 months"']
  },
  level: {
    type: String,
    required: true,
    enum: {
      values: ['Beginner', 'Intermediate', 'Advanced', 'Beginner to Advanced', 'All Levels'],
      message: 'Invalid level'
    }
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: [0, 'Price cannot be negative']
  },
  oldPrice: {
    type: Number,
    // validate: {
    //   validator: function(v) {
    //     return v > this.price;
    //   },
    //   message: 'Old price must be greater than current price'
    // }
  },
  rating: {
    type: Number,
    default: 4.5,
    min: [0, 'Rating cannot be less than 0'],
    max: [5, 'Rating cannot exceed 5']
  },
  students: {
    type: Number,
    default: 0,
    min: [0, 'Student count cannot be negative']
  },
  exercises: {
    type: Number,
    default: 0,
    min: [0, 'Exercise count cannot be negative']
  },
  features: {
    type: [String],
    default: [],
    validate: {
      validator: function(v) {
        return v.length > 0;
      },
      message: 'At least one feature is required'
    }
  },
  audience: {
    type: [String],
    default: [],
    validate: {
      validator: function(v) {
        return v.length > 0;
      },
      message: 'At least one audience description is required'
    }
  },
  jobTitles: {
    type: [String],
    default: [],
    validate: {
      validator: function(v) {
        return v.length > 0;
      },
      message: 'At least one job title is required'
    }
  },
  syllabus: {
    type: [syllabusItemSchema],
    required: [true, 'Syllabus is required'],
    validate: {
      validator: function(v) {
        return v.length > 0;
      },
      message: 'At least one syllabus section is required'
    }
  },
  instructor: {
    type: instructorSchema,
    required: [true, 'Instructor information is required']
  },
  status: {
    type: String,
    enum: {
      values: ['open', 'close'],
      message: 'Status must be either "open" or "close"'
    },
    default: 'open',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    immutable: true
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, {
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Update the updatedAt field before saving
courseSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

// Add a text index for search functionality
courseSchema.index({
  title: 'text',
  shortDescription: 'text',
  description: 'text',
  category: 'text'
});

// Virtual property for discount percentage
courseSchema.virtual('discountPercentage').get(function() {
  if (!this.oldPrice) return 0;
  return Math.round(((this.oldPrice - this.price) / this.oldPrice) * 100);
});

// Query helper for popular courses
courseSchema.query.popular = function() {
  return this.where('rating').gte(4.5).where('students').gte(1000);
};

// Static method to get courses by category
courseSchema.statics.findByCategory = function(category) {
  return this.find({ category });
};

// Instance method to enroll a student
courseSchema.methods.enrollStudent = function() {
  this.students += 1;
  return this.save();
};

const Course = mongoose.models.Course || mongoose.model("Course", courseSchema);

export default Course;
