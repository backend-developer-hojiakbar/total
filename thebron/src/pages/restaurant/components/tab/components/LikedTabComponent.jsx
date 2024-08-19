import LikedCard from "./LikedCard";

const LikedTabComponent = () => {
  const pr = Array.from({ length: 5 }, (_, i) => i);

  return (
    <div>
      {pr.map((_, i) => (
        <LikedCard key={i} />
      ))}
    </div>
  );
};

export default LikedTabComponent;
