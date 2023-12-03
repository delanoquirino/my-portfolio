interface ProjectTagProps{
    name: string,
    onClick: (newTag: string) => void,
    isSelected: boolean
}

export const ProjectTag = ({ name, onClick, isSelected }: ProjectTagProps) => {
  const buttonStyles = isSelected
    ? "text-white bg-cyan-500 "
    : "text-white hover:text-cyan-500";
  return (
    <button
      className={`${buttonStyles} rounded-full px-4 py-2 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};
