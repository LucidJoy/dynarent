import Image from "next/image";
import { useTheme } from "next-themes";
import Link from "next/link";

import images from "../assets";
import Button from "./Button";

const FooterLinks = ({ heading, items, extraClasses }) => (
  <div className={`flex-1 justify-start items-start ${extraClasses}`}>
    <h3 className='font-poppins dark:text-white text-nft-black-1 font-semibold text-xl mb-10'>
      {heading}
    </h3>
    {items.map((item, index) => (
      <p
        key={item + index}
        className='font-poppins dark:text-white text-nft-black-1 font-normal text-base cursor-pointer dark:hover:text-nft-gray-1 hover:text-nft-black-1 my-3'
      >
        {item}
      </p>
    ))}
  </div>
);

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className='flexCenter flex-col border-t dark:border-nft-black-1 border-nft-gray-1 sm:py-8 py-16'>
      <div className='w-full minmd:w-4/5 flex flex-row md:flex-col sm:px-4 px-16'>
        <div className='flexStart flex-1 flex-col'>
          <div className='flexCenter cursor-pointer sm:pt-4'>
            <Link href='/'>
              <div
                className='white-glassmorphism pt-2 pr-2 pl-2 pb-[0.2rem] hover:cursor-pointer mr-3'
                style={{ borderRadius: "12px" }}
              >
                <Image
                  src={images.divvyLogo}
                  objectFit='contain'
                  width={24}
                  height={24}
                  alt='logo'
                />
              </div>
            </Link>
            <p className=' dark:text-white text-nft-dark font-semibold text-lg ml-1'>
              DynaRent
            </p>
          </div>
          <p className='font-poppins dark:text-white text-nft-black-1 font-semibold text-base mt-6'>
            Get the latest updates
          </p>
          <div className='flexBetween md:w-full minlg:w-557 w-357 mt-6 dark:bg-nft-black-2 bg-white border dark:border-nft-black-2 border-nft-gray-2 rounded-md'>
            <input
              type='email'
              placeholder='Your Email'
              className='h-full flex-1 w-full dark:bg-nft-black-2 bg-white px-4 rounded-md font-poppins dark:text-white text-nft-black-1 font-normal text-xs minlg:text-lg outline-none'
            />
            <div className='flex-initial'>
              <Button
                btnName='Email me'
                btnType='primary'
                classStyles='rounded-md'
              />
            </div>
          </div>
        </div>

        <div className='flex-1 flexBetweenStart flex-wrap ml-10 md:ml-0 md:mt-8'>
          <FooterLinks
            heading='DynaRent'
            items={["How it Works", "Contact Us"]}
          />
          <FooterLinks
            heading='Support'
            items={["Help Center", "Terms of service"]}
            extraClasses='ml-4'
          />
        </div>
      </div>

      <div className='flexCenter w-full mt-5 border-t dark:border-nft-black-1 border-nft-gray-1 sm:px-4 px-16'>
        <div className='flexBetween flex-row w-full minmd:w-4/5 sm:flex-col mt-7'>
          <p className='font-poppins dark:text-white text-nft-black-1 font-semibold text-base'>
          DynaRent, Inc. All Rights Reserved
          </p>
          <div className='flex flex-row sm:mt-4'>
            {[
              images.instagram,
              images.twitter,
              images.telegram,
              images.discord,
            ].map((image, index) => (
              <div className='mx-2 cursor-pointer' key={`image ${index}`}>
                <Image
                  src={image}
                  key={index}
                  objectFit='contain'
                  width={24}
                  height={24}
                  alt='social'
                  className={theme === "light" ? "filter invert" : undefined}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
