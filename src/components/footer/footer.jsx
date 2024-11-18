import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/img/logo.png"
import { FacebookIcon } from '../../assets/icon/facebookIcon';
import { OkIcon } from '../../assets/icon/okIcon';
import { InstagramIcon } from '../../assets/icon/instagramIcon';
import { YoutubeIcon } from '../../assets/icon/youTube';
import { VkIcon } from '../../assets/icon/vkIcon';
import { PaymeIcon } from '../../assets/icon/paymeIcon';
import { HumoIcon } from '../../assets/icon/HumoCard';
import { UzcardIcon } from '../../assets/icon/UzCard';
import { faqs } from '../../components/faqs';
import { FaqAccordion } from '../../components/faq-accardion';
import { FaqItem } from '../../components/faq-item';              


export const Footer = () => {
  return (
    <footer className='bg-[#F5F5F6] mt-[70px] pt-6'>
      <div className="container">
        <div>
          <div className='w-[190px] flex items-center justify-center'>
            <Link className='mb-4 w-[128px]'>
              <img src={logo} alt="Gipermart logo" />
            </Link>
          </div>
          <a className=' text-[#333] text-[14px] font-medium mb-2 ' href="tel:+998332000607">
            +99 833 200-06-07
          </a>
          <p className=' text-[#333] text-[12px] mb-4 '>
            справочная служба
          </p>
          <a className=' text-[#333] text-[14px] font-medium mb-2 ' href="tel:+998332000607">
            +99 833 200-06-07
          </a>
          <p className=' text-[#333] text-[12px] mb-3 '>
            интернет-магазин
          </p>
          <p className=' text-[#333] font-semibold text-[12px] mb-4 '>
            Оставайтесь на связи
          </p>
          <div className='flex items-center gap-4 mb-6'>
            <a href="">
              <FacebookIcon />
            </a>
            <a href="">
              <OkIcon />
            </a>
            <a href="">
              <VkIcon />
            </a>
            <a href="">
              <YoutubeIcon />
            </a>
            <a href="">
              <InstagramIcon />
            </a>
          </div>
          <div className="sm:hidden">
            <FaqAccordion faqs={faqs} />
          </div>
        </div>
        <div>
          <div>
            <p></p>
          </div>
          <div>
            <p></p>
          </div>
          <div>
            <p></p>
          </div>
        </div>
      </div>
      <div className='bg-[#EAEAEA] hidden sm:block py-6'>
        <div className="container">
          <div className='flex gap-5 ic justify-between'>
            <p className='text-[#333] text-[14px]'>
              © 2022 Любое использование контента без письменного разрешения запрещено
            </p>
            <div className='flex items-center gap-6'>
              <PaymeIcon />
              <UzcardIcon />
              <HumoIcon />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
};