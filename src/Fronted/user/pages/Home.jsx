import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// import UserHeader from "../Component/UserHeader";
import Beaner from "../Component/Beaner";
import MovieRow from "../Component/MovieRow";

import movieRequests from "../../Api/movieRequests";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");

    if (!currentUser) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="bg-[#111] min-h-screen text-white overflow-x-hidden">

      {/* Header */}
      {/* <UserHeader /> */}

      {/* Banner */}
      <Beaner />

      {/* Movie Rows */}
      <div className="pb-10">

        <MovieRow
          title="🔥 Trending Now"
          fetchUrl={movieRequests.fetchTrending}
        />

        <MovieRow
          title="💥 Action"
          fetchUrl={movieRequests.fetchAction}
        />

        <MovieRow
          title="😂 Comedy"
          fetchUrl={movieRequests.fetchComedy}
        />

        <MovieRow
          title="👻 Horror"
          fetchUrl={movieRequests.fetchHorror}
        />

        <MovieRow
          title="❤️ Romance"
          fetchUrl={movieRequests.fetchRomance}
        />

        <MovieRow
          title="🕵 Thriller"
          fetchUrl={movieRequests.fetchThriller}
        />

      </div>

    </div>
  );
};

export default Home;