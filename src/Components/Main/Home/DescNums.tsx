// import { descNums } from '@/Components/Shared/Consts';

// const DescNums = () => {
//   return (
//     <div className="flex px-10 xs:px-16 sm:px-5 md:px-0 gap-5 flex-wrap items-center md:flex-nowrap text-center justify-center md:justify-around mt-10">
//       {descNums.map((descNum, index) => (
//         <div
//           className="rounded-3xl shadow-xl p-6 md:px-2 lg:w-1/5 w-xl bg-[#ffffffd1] min-h-[100px]"
//           key={index}
//         >
//           <h3 className="lg:text-4xl text-2xl font-bold mb-2">{descNum.num}</h3>
//           <p className="lg:text-base text-sm">{descNum.text}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default DescNums;


import { descNums } from '@/Components/Shared/Consts';

const DescNums = () => {
  return (
    <div className="flex px-10 xs:px-16 sm:px-5 md:px-0 gap-5 flex-wrap items-center md:flex-nowrap text-center justify-center md:justify-around mt-10">
      {descNums.map((descNum, index) => (
        <div
          className="rounded-3xl shadow-xl p-6 md:px-2 lg:w-1/5 w-xl bg-[#ffffffd1] min-h-[130px]"
          key={index}
        >
          <h3 className="lg:text-5xl text-3xl font-extrabold mb-4 text-blue-700">{descNum.num}</h3>
          <p className="lg:text-lg text-base font-semibold ">{descNum.text}</p>
        </div>
      ))}
    </div>
  );
};

export default DescNums;