interface CardProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const CardHome = ({ title, description, icon }: CardProps) => {
  return (
    <div className="md:w-[400px] w-[300px] md:h-[500px] h-[450px] rounded-[20px] shadow-xl hover:scale-105 duration-300 transtion ">
      <div className="py-[90px] px-[20px]">
        <div className="text-center gap-y-5">
          <p className="w-full flex items-center justify-center text-3xl font-sans font-semibold">{title}</p>
        </div>
        <div className="flex justify-center py-4">{icon}</div>
        <div className="px-6 text-center text-xl">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CardHome;
