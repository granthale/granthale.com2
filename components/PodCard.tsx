import Image from "next/image"  

const PodCard = () => {
  return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex">
      <div
        className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        title="Dot"
      ><Image src="/images/boat.png" height={100} width={100} alt="boat"/></div>
      <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-gray-900 font-bold text-xl mb-2">
            Can coffee make you a better developer?
          </div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div className="flex items-center">
          <Image
            className="rounded-full mr-4"
            width={50}
            height={50}
            src="/images/boat.png"
            alt="boat"
          />
          <div className="text-sm">
            <p className="text-gray-900 leading-none">Grant Hale & Sharad Doshi</p>
            <p className="text-gray-600">Aug 18</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodCard;
