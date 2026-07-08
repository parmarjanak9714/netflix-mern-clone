import React, { useState, useEffect } from "react";
import axios from "axios";

const MovieRow = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await axios.get(
          `https://api.tvmaze.com${fetchUrl}`
        );

        setMovies(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchMovies();
  }, [fetchUrl]);

  return (
    <section className="px-5 md:px-10 py-6">

      <h2 className="text-white text-2xl font-bold mb-5">
        {title}
      </h2>

      <div className="flex gap-5 overflow-x-auto pb-3">

        {movies.map((item) => (
          <div
            key={item.show.id}
            className="min-w-[170px] md:min-w-[220px] transition duration-300 hover:scale-110 cursor-pointer"
          >

            <img
              src={item.show.image?.medium}
              alt={item.show.name}
              className="rounded-lg w-full h-[250px] md:h-[320px] object-cover shadow-xl"
            />

            <h3 className="text-white mt-3 text-center font-semibold">
              {item.show.name}
            </h3>

          </div>
        ))}

      </div>

    </section>
  );
};

export default MovieRow;