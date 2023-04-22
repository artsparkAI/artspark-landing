'use client'

import { useState } from 'react'
import Image from 'next/image'
import TestimonialImage from '@/public/images/video-testimonial.jpg'
import Modal from '@/components/utils/modal'

export default function TestimonialsVideo() {

  const [videoModalOpen, setVideoModalOpen] = useState<boolean>(false)

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">

          {/* Video image */}
          <div className="text-center" data-aos="fade-down">
            <div className="relative inline-flex justify-center items-center">
              <Image src={TestimonialImage} width={1024} height={576} alt="Video testimonial" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900" aria-hidden="true"></div>
              <a className="absolute group" onClick={(e) => { e.preventDefault(); e.stopPropagation(); setVideoModalOpen(true); }} href="#0" aria-controls="modal">
                <svg className="w-16 h-16 sm:w-20 sm:h-20 hover:opacity-75 transition duration-150 ease-in-out" viewBox="0 0 88 88" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient x1="78.169%" y1="9.507%" x2="24.434%" y2="90.469%" id="a">
                      <stop stopColor="#EBF1F5" stopOpacity=".8" offset="0%" />
                      <stop stopColor="#EBF1F5" offset="100%" />
                    </linearGradient>
                  </defs>
                  <circle fill="url(#a)" cx="44" cy="44" r="44" />
                  <path className="fill-current text-teal-500" d="M52 44a.999.999 0 00-.427-.82l-10-7A1 1 0 0040 37V51a.999.999 0 001.573.82l10-7A.995.995 0 0052 44V44c0 .001 0 .001 0 0z" />
                </svg>
              </a>
            </div>

            {/* Modal */}
            <Modal id="modal" ariaLabel="modal-headline" show={videoModalOpen} handleClose={() => setVideoModalOpen(false)}>
              <div className="relative pb-9/16">
                <video className="absolute w-full h-full" width="1920" height="1080" loop controls>
                  <source src="/videos/video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>  
              </div>
            </Modal>

          </div>

        </div>
      </div>
    </section>
  )
}