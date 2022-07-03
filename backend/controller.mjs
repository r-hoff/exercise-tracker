import * as exercises from './model.mjs';
import express from 'express';

const PORT = 3000;
const app = express();

app.use(express.static('public'));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// create new exercise
app.post('/exercises', (req, res) => {
  exercises
    .createExercise(req.body.name, req.body.reps, req.body.weight, req.body.unit, req.body.date)
    .then((exercise) => {
      res.status(201).json(exercise);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

// retrieve exercises
app.get('/exercises', (req, res) => {
  let filter = {};
  if (req.query.name !== undefined) {
    filter.name = req.query.name;
  } else if (req.query.reps !== undefined) {
    filter.reps = req.query.reps;
  } else if (req.query.weight !== undefined) {
    filter.weight = req.query.weight;
  } else if (req.query.unit !== undefined) {
    filter.unit = req.query.unit;
  } else if (req.query.date !== undefined) {
    filter.date = req.query.date;
  }
  exercises
    .findExercises(filter)
    .then((exercises) => {
      res.json(exercises);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

// replace (update) exercise
app.put('/exercises/:_id', (req, res) => {
  exercises
    .replaceExercise(req.params._id, req.body.name, req.body.reps, req.body.weight, req.body.unit, req.body.date)
    .then((numUpdated) => {
      if (numUpdated === 1) {
        res.json({
          name: req.body.name,
          reps: req.body.reps,
          weight: req.body.weight,
          unit: req.body.unit,
          date: req.body.date,
        });
      } else {
        res.status(304).json({ Error: 'Resource not modified.' });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

// delete exercise
app.delete('/exercises/:_id', (req, res) => {
  exercises
    .deleteExercise(req.params._id)
    .then((numDeleted) => {
      if (numDeleted === 1) {
        res.status(204).json();
      } else {
        res.status(404).json({ Error: 'Resource not found.' });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
});
