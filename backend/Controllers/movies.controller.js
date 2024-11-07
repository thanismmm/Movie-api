const Movie = require("../Module/movie.module");

const MovieIndex = async (req, res) => {
  try {
    const Getmovies = await Movie.find();
    res.json(Getmovies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const movieCreate = async (req, res) => {
  console.log(req.body);

  const newMovie = new Movie({
    title: req.body.title,
    desc: req.body.desc,
  });

  try {
    const movie = await newMovie.save();
    return res.status(201).json(movie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const movieFind = async (req, res) => {
  try {
    const findMovie = await Movie.findById(req.params.id);

    if (findMovie == null) {
      return res.status(404).json("You Searched Movie Not Found");
    } else {
      res.json(findMovie);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const movieUpdate = async (req, res) => {
  try {
    const updateMovie = await Movie.findByIdAndUpdate(
      { _id: req.params.id },
      {
        title: req.body.title,
        desc: req.body.desc,
      },
      {
        new: true,
      }
    );

    res.status(200).json(updateMovie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const movieDelete = async (req, res) => {
  const movieId = req.params.id;

  try {
    await Movie.deleteOne({ _id: movieId });
    res.json({ message: "Movie Deleted!test" });
  } catch (error) {
    if (error) throw error;
  }
};

// Exporting the functions as modules
module.exports = {
  MovieIndex,
  movieCreate,
  movieUpdate,
  movieDelete,
  movieFind,
};
