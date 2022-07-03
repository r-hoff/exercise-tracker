import mongoose from 'mongoose';

// Connect to to the database
mongoose.connect('mongodb://localhost:27017/exercises_db', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.once('open', () => {
  console.log('Successfully connected to database.');
});
mongoose.set('useCreateIndex', true);

// Define the exercise schema
const exerciseSchema = mongoose.Schema({
  name: { type: String, required: true },
  reps: { type: Number, required: true },
  weight: { type: Number, required: true },
  unit: { type: String, required: true },
  date: { type: String, required: true },
});

// Compile the model from the exercise schema
const Exercise = mongoose.model('Exercise', exerciseSchema);

/**
 * Create and store an exercise entry.
 * @param {String} name
 * @param {Number} reps
 * @param {Number} weight
 * @param {String} unit
 * @param {String} date
 * @returns A promise. Resolves to the JSON object for the document created by calling save
 */
export const createExercise = async (name, reps, weight, unit, date) => {
  const exercise = new Exercise({
    name: name,
    reps: reps,
    weight: weight,
    unit: unit,
    date: date,
  });
  return exercise.save();
};

/** retrieve exercises based on filter.
 * @param {Object} filter
 * @returns
 */
export const findExercises = async (filter) => {
  const query = Exercise.find(filter);
  return query.exec();
};

/**
 * Replace the name, reps, weight, unit, and/or date properties of the exercise with the id value provided
 * @param {ObjectId} _id
 * @param {String} name
 * @param {Number} reps
 * @param {Number} weight
 * @param {String} unit
 * @param {String} date
 * @returns A promise. Resolves to the number of documents items
 */
export const replaceExercise = async (_id, name, reps, weight, unit, date) => {
  const result = await Exercise.replaceOne({ _id: _id }, { name: name, reps: reps, weight: weight, unit: unit, date: date });
  return result.nModified;
};

/**
 * Delete the exercise with provided id value
 * @param {ObjectId} _id
 * @returns A promise. Resolves to the count of deleted items
 */
export const deleteExercise = async (_id) => {
  const result = await Exercise.deleteOne({ _id: _id });
  return result.n;
};
