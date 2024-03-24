import { Divider } from '@mui/material';
import Link from 'next/link';

export default function Header() {
  return (
    <div className="w-full h-full">
      <div className="w-full bg-baseClr p-10 flex justify-between lg:flex ">
        <div className="w-[60%] lg:mt-2 lg:mx-20">
          <span className="text-lg lg:text-2xl text-textClr font-bold">
            Htet Htet Portfolio
          </span>
        </div>
        <div className="w-[45%] lg:w-[30%] text-textClr lg:flex lg:mx-14">
          <div className="w-full flex flex-wrap justify-end lg:items-center">
            <span className="lg:mr-2 lg:p-2 text-lg">Home</span>
            <div className="hidden 2xl:block xl:block">
              <div className="h-14 border-r border-textClr mt-1"></div>
            </div>
          </div>
          <div className="w-full flex flex-wrap justify-end lg:items-center">
            <Link href={'http://linkedin.com/in/wei-wei-4238662b3'}>
              Linkdin
            </Link>
          </div>
          <div className="w-full flex flex-wrap justify-end lg:items-center">
            <Link href={'https://t.me/@nabiweii'}>Telegram</Link>
          </div>
          <div className="w-full flex flex-wrap justify-end lg:items-center">
            <Link href={'https://github.com/hhtetwei'}>Github</Link>
          </div>
        </div>
      </div>
      <Divider />
    </div>
  );
}
