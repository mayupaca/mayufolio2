function SkillLevel({ level }) {
  const totalCircles = 6;
  const circles = [];

  for (let i = 0; i < totalCircles; i++) {
    circles.push(
      <span key={i} className={i < level ? "text-[#AF9221] text-3xl ml-2" : "text-gray-400 text-3xl ml-2"}>
        ●
      </span>
    );
  }

  return <div className="flex">{circles}</div>;
}

export default SkillLevel;
