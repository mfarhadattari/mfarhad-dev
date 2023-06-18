import react from '../assets/skills/react.svg'
import express from '../assets/skills/expressjs-icon.svg'
import node from '../assets/skills/node.svg'
import mongodb from '../assets/skills/mongodb.svg'

const Skills = () => {
  return (
    <section className="container mx-auto  my-20">
      <h1 className="text-center text-4xl">SKILLS</h1>
      <div className='w-fit mx-auto flex gap-5 mt-10'>
        <div className="border rounded-lg p-5 w-52 h-52 text-2xl flex flex-col items-center justify-center">
          <img src={react} alt="" />
          <h2>React</h2>
        </div>
        <div className="border rounded-lg p-5 w-52 h-52 text-2xl flex flex-col items-center justify-center">
          <img src={express} alt="" />
          <h2>Express</h2>
        </div>
        <div className="border rounded-lg p-5 w-52 h-52 text-2xl flex flex-col items-center justify-center">
          <img src={node} alt="" />
          <h2>Node</h2>
        </div>
        <div className="border rounded-lg p-5 w-52 h-52 text-2xl flex flex-col items-center justify-center">
          <img src={mongodb} alt="" />
          <h2>Mongo DB</h2>
        </div>
      </div>
    </section>
  );
};

export default Skills;
