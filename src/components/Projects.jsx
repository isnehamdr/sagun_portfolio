import React from "react";

const projects = [
  {
    id: 1,
    name: "Apex Tower",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
  },
  {
    id: 2,
    name: "Studio Bag",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c",
  },
  {
    id: 3,
    name: "Floral Mood",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f",
  },
  {
    id: 4,
    name: "Reading Corner",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
  },
  {
    id: 5,
    name: "Portrait One",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  },
  {
    id: 6,
    name: "Camera Day",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
  },
  {
    id: 7,
    name: "Soft Light",
    image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df",
  },
  {
    id: 8,
    name: "Quiet Frame",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
  },
  {
    id: 9,
    name: "Golden Hour",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742",
  },
];

const ImageCard = ({ src, name, height }) => (
  <div className={`relative overflow-hidden ${height} group`}>
    <img
      src={`${src}?auto=format&fit=crop&w=900&q=80`}
      alt={name}
      className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
    <div className="absolute bottom-3 left-3 text-white text-sm opacity-0 group-hover:opacity-100 transition">
      {name}
    </div>
  </div>
);

const Projects = () => {
  return (
   <section id ="projects" className="bg-[#fefef3]  py-12 fontFamily: 'Playfair Display'">
      <div className="px-46">
        <div className="flex justify-between mb-8">
          <h2 className="text-4xl md:text-5xl italic text-[#b06b47] ">
            Projects
          </h2>
          <button className="text-xs uppercase tracking-[0.2em]">
            Book Me
          </button>
        </div>

        {/* 3 Columns Layout */}
        <div className="flex gap-4">

          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-4 w-1/3">
            <ImageCard src={projects[0].image} name={projects[0].name} height="h-[540px]" />
            <ImageCard src={projects[1].image} name={projects[1].name} height="h-[420px]" />
            <ImageCard src={projects[2].image} name={projects[2].name} height="h-[320px]" />
          </div>

          {/* MIDDLE COLUMN (TALLEST) */}
          <div className="flex flex-col gap-4 w-1/3">
            <ImageCard src={projects[3].image} name={projects[3].name} height="h-[450px]" />
            <ImageCard src={projects[4].image} name={projects[4].name} height="h-[450px]" />
            <ImageCard src={projects[5].image} name={projects[5].name} height="h-[450px]" />
          </div>

          {/* RIGHT COLUMN (SMALLER TOTAL HEIGHT) */}
          <div className="flex flex-col gap-4 w-1/3">
            <ImageCard src={projects[6].image} name={projects[6].name} height="h-[400px]" />
            <ImageCard src={projects[7].image} name={projects[7].name} height="h-[400px]" />
            <ImageCard src={projects[8].image} name={projects[8].name} height="h-[400px]" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;