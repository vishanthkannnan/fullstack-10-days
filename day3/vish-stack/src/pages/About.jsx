// src/Pages/About.jsx
import State from "./Hooks/State";
import Effect from "./Hooks/Effect";

const About = () => {
  return (
    <div className="p-4 space-y-8">
      <h1 className="text-3xl font-bold mb-4">About Page</h1>
      <State />
      <Effect />
    </div>
  );
};

export default About;
