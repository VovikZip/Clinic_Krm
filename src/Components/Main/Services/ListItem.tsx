// import { SparklesIcon } from '@heroicons/react/20/solid';

// type Props = {
//   text: string;
// };

// const ListItem = ({ text }: Props) => {
//   return (
//     <li className="flex items-start gap-3 text-sm leading-relaxed max-w-[300px]">
//       <SparklesIcon className="h-4 w-4 text-[#2c84f7] mt-1 flex-shrink-0" />
//       <p className="text-gray-800 text-wrap break-words">{text}</p>
//     </li>
//   );
// };

// export default ListItem;

import { SparklesIcon } from '@heroicons/react/20/solid';

type Props = {
  text: string;
};

const ListItem = ({ text }: Props) => {
  return (
    <li className="flex items-start gap-1.5 text-lg leading-none max-w-[300px] py-0 border-b border-gray-200 hover:bg-gray-50">
      <SparklesIcon className="h-4 w-4 text-[#2c84f7] mt-0 flex-shrink-0" />
      <p className="text-gray-800 text-wrap break-words m-0 p-0">{text}</p>
    </li>
  );
};

export default ListItem;