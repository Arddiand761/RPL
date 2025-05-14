import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const steps = [
  {
    title: (name) => (
      <>
        <span className="block text-xl font-bold mb-2">
          Halo, <span className="text-red-600">{name || "User"}!</span>
        </span>
        <span className="block mb-4">Welcome to PojokKomik!</span>
        <span className="block text-gray-600 mb-8">
          Before read, let us know about yours so we can give you interesting
          comic!
        </span>
      </>
    ),
    content: null,
  },
  {
    title: () => (
      <span className="block text-xl font-bold mb-4">Let us know...</span>
    ),
    content: ({ gender, setGender, age, setAge }) => (
      <>
        <div className="mb-4">
          <div className="mb-2">I am ...</div>
          <div className="flex gap-2 flex-wrap">
            {["Male", "Female", "Secret"].map((g) => (
              <button
                key={g}
                type="button"
                className={`px-4 py-2 rounded bg-orange-200 hover:bg-orange-400 transition font-semibold ${
                  gender === g ? "bg-orange-400 text-white" : ""
                }`}
                onClick={() => setGender(g)}
              >
                {g}
              </button>
            ))}
          </div>
        </div>
        <div>
          <div className="mb-2">My age...</div>
          <div className="flex gap-2 flex-wrap">
            {["<18", "18-24", "25-35", "36-42", ">42"].map((a) => (
              <button
                key={a}
                type="button"
                className={`px-4 py-2 rounded bg-orange-200 hover:bg-orange-400 transition font-semibold ${
                  age === a ? "bg-orange-400 text-white" : ""
                }`}
                onClick={() => setAge(a)}
              >
                {a}
              </button>
            ))}
          </div>
        </div>
      </>
    ),
  },
  {
    title: () => (
      <span className="block text-xl font-bold mb-4">
        What's your favorite genre?
      </span>
    ),
    content: ({ genres, setGenres }) => (
      <>
        <div className="mb-2">Choose 3...</div>
        <div className="flex flex-wrap gap-2 mb-4">
          {[
            "Fantasy",
            "Sci-Fi",
            "Romance",
            "Horror",
            "Comedy",
            "Action",
            "Slice of Life",
          ].map((genre) => (
            <button
              key={genre}
              type="button"
              className={`px-4 py-2 rounded bg-orange-200 hover:bg-orange-400 transition font-semibold ${
                genres.includes(genre) ? "bg-orange-400 text-white" : ""
              }`}
              onClick={() => {
                if (genres.includes(genre)) {
                  setGenres(genres.filter((g) => g !== genre));
                } else if (genres.length < 3) {
                  setGenres([...genres, genre]);
                }
              }}
              disabled={!genres.includes(genre) && genres.length >= 3}
            >
              {genre}
            </button>
          ))}
        </div>
      </>
    ),
  },
];

const Intro = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [name] = useState(localStorage.getItem("username") || "User");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [genres, setGenres] = useState([]);

  const handleStart = () => {
    // Simpan data ke localStorage atau kirim ke backend jika perlu
    localStorage.setItem("intro", JSON.stringify({ gender, age, genres }));
    navigate("/home");
  };

  const handleNext = () => setStep((s) => s + 1);
  const handleSkip = () => navigate("/home");

  return (
    <div className="flex items-center justify-center min-h-screen bg-brand px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg animate-fadeInUp">
        <div className="flex flex-col items-center">
          <img
            src="/assets/Businesswoman.svg"
            alt="avatar"
            className="w-20 h-20 mb-4"
          />
          <div className="text-center mb-6">{steps[step].title(name)}</div>
          {steps[step].content &&
            steps[step].content({
              gender,
              setGender,
              age,
              setAge,
              genres,
              setGenres,
            })}
        </div>
        <div className="flex justify-between mt-8">
          <button
            className="px-6 py-2 rounded bg-gray-200 hover:bg-gray-300 transition font-semibold"
            onClick={handleSkip}
            type="button"
          >
            Skip
          </button>
          {step < steps.length - 1 ? (
            <button
              className="px-6 py-2 rounded bg-red-500 text-white font-semibold hover:bg-red-600 transition"
              onClick={handleNext}
              type="button"
              disabled={
                (step === 1 && (!gender || !age)) ||
                (step === 2 && genres.length !== 3)
              }
            >
              Start
            </button>
          ) : (
            <button
              className="px-6 py-2 rounded bg-red-500 text-white font-semibold hover:bg-red-600 transition"
              onClick={handleStart}
              type="button"
              disabled={genres.length !== 3}
            >
              Start
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
