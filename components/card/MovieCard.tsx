'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Rating } from '../ui/Rating';

type MovieCardProps = {
  imageUrl: string;
  title: string;
  rating: number | string;
  trendingIndex?: number;
};

export const MovieCard = ({
  imageUrl,
  title,
  rating,
  trendingIndex,
}: MovieCardProps) => {
  // console.log(imageUrl); // Memastikan URL gambar sudah benar

  return (
    <motion.div
      className='w-full max-w-[173px] md:max-w-[216px] flex-shrink-0 cursor-pointer'
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 0.95,
        boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.2)',
      }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <div className='relative w-full aspect-[173/266] md:aspect-[216/321] overflow-hidden rounded-md md:rounded-xl'>
        {trendingIndex != null && trendingIndex !== 0 && (
          <div className='absolute top-[8px] md:top-[12px] left-[8px] md:left-[12px] w-[32px] md:w-[48px] h-[32px] md:h-[48px] p-[4.57px] md:p-[6.86px] rounded-full flex items-center justify-center backdrop-blur-[22.85714340209961px] bg-[#0A0D1299] z-1'>
            <span className='font-semibold text-[12px] md:text-[14px] leading-[16px] md:leading-[20px] text-neutral-25'>
              {trendingIndex}
            </span>
          </div>
        )}

        <Image
          src={imageUrl}
          alt={title}
          width={300}
          height={450}
          className='object-cover rounded-lg w-full h-auto'
          sizes='(max-width: 1024px) 100vw, 1024px'
          unoptimized
        />
      </div>
      <div className='mt-2 text-left'>
        <h3 className='font-semibold body-text-md md:body-text-lg leading-[24px] text-neutral-25'>
          {title}
        </h3>
        <Rating rating={rating} />
      </div>
    </motion.div>
  );
};
