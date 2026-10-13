"use client";

import { motion, type Variants } from "motion/react";
import { FadeIn } from "@/components/Animateitem";
import { MinProgress } from "@/components/ProgressBlock";

type ProgressItem = {
  id: string | number;
  title: React.ReactNode;
  count: number;
};

const RichText = ({
  content,
  className,
}: {
  content?: string;
  className?: string;
}) => {
  if (!content) return null;

  if (/<\/?[a-z][\\s\\S]*>/i.test(content)) {
    return (
      <div
        className={className}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  }

  return <div className={className}>{content}</div>;
};

export const SecondSection = ({ sub, list }: { sub: string; list: any[] }) => {
  return (
    <div className="mb-[10px] md:mb-[50px]">
      <FadeIn className="text-[32px] leading-[33px] md:text-[48px] md:leading-[68px] text-center font-semibold mb-[38px] md:mb-[17px] text-[#000000]">
        Survey of consumption
      </FadeIn>
      <FadeIn className="text-[12px] leading-[14px] md:text-[14px] md:leading-[21px] text-center  mb-[28px] md:mb-[52px] text-[#000000]">
        {sub}
      </FadeIn>
      <section id="progress" className="mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[10px]  md:gap-x-[55px]  gap-y-[10px] md:gap-y-[55px] rounded-3xl">
          {list.map((i) => (
            <FadeIn key={i.id}>
              <div className="country-card w-full h-full  rounded-2xl pb-[30px] md:pb-[26px] overflow-hidden">
                <div className="mx-auto px-[50px] md:px-[45px]">
                  <CircularProgress value={i.count} id={i.id} />
                </div>
                <div className="flex items-center flex-col">
                  <div className="font-semibold text-[30px] leading-[36px] mb-[11px] md:mb-[9px] md:text-[32px] md:leading-[36px] text-[#000000]">
                    {i.name ?? `${i.count}%`}
                  </div>
                  <RichText
                    className="text-[#000000] text-[14px] leading-[24px] text-center"
                    content={i.title}
                  />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
};
export const CircularProgress = ({
  value = 43,
  id,
}: {
  value: number;
  id: number;
}) => {
  const r = 81.2262;
  const circumference = 2 * Math.PI * r;
  const strokeDashoffset = circumference - (circumference * value) / 100;
  const draw: Variants = {
    hidden: { strokeDashoffset: circumference },
    visible: {
      strokeDashoffset,
      transition: {
        strokeDashoffset: { type: "spring", duration: 1.5, bounce: 0 },
      },
    },
  };
  // 第一个svg

  // 第二个svg
  // 第三个dvg
  return (
    <>
      <div className="relative country-card-progress">
        {id === 1 && (
          <motion.svg
            className="comment-progress"
            initial="hidden"
            whileInView="visible"
            viewBox="0 0 232 232"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Mask group">
              <mask
                id="mask0_2091_1020"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={232}
                height={232}
              >
                <rect
                  id="Rectangle 801"
                  x="0.304688"
                  width="231.628"
                  height="231.628"
                  fill="#D9D9D9"
                />
              </mask>
              <g mask="url(#mask0_2091_1020)">
                <g id="Group 794" filter="url(#filter0_d_2091_1020)">
                  <path
                    id="Ellipse 271"
                    d="M116.118 29.4531C163.814 29.4531 202.478 68.118 202.479 115.813C202.479 163.509 163.814 202.174 116.118 202.174C68.4227 202.174 29.7578 163.509 29.7578 115.813C29.7578 68.118 68.4227 29.4532 116.118 29.4531Z"
                    fill="#F6F8FF"
                    stroke="#E1E7F4"
                  />
                  <circle
                    id="Ellipse 264"
                    cx="116.117"
                    cy="115.816"
                    r="74.2262"
                    fill="#E4ECFF"
                  />
                  <circle
                    id="Ellipse 266"
                    cx="116.12"
                    cy="115.815"
                    r="67.909"
                    fill="url(#paint0_linear_2091_1020)"
                  />
                  <g id="Ellipse 270" filter="url(#filter1_dii_2091_1020)">
                    <circle
                      cx="116.119"
                      cy="115.814"
                      r="50.537"
                      fill="url(#paint1_linear_2091_1020)"
                    />
                  </g>
                  <g id="Group 804" transform="rotate(270 116 116)">
                    <path
                      id="Vector"
                      d="M113.385 119.184H119.264C123.737 119.184 127.375 122.838 127.375 127.363V127.954C127.375 128.03 127.371 128.122 127.129 128.273C126.838 128.455 126.327 128.626 125.545 128.754C123.993 129.007 121.804 129.028 119.264 129.028H113.385C110.837 129.028 108.651 129.025 107.098 128.78C106.316 128.657 105.81 128.489 105.523 128.308C105.291 128.161 105.273 128.062 105.273 127.954V127.363L105.284 126.941C105.502 122.613 109.052 119.184 113.385 119.184ZM116.029 102.602C119.366 102.602 122.083 105.329 122.083 108.708C122.083 112.088 119.365 114.814 116.029 114.814C112.797 114.814 110.147 112.255 109.984 109.022L109.976 108.708C109.976 105.328 112.694 102.602 116.029 102.602Z"
                      stroke="#3B61B8"
                      strokeWidth={2}
                    />
                    <path
                      id="Ellipse 280"
                      d="M115.997 102.602C119.37 102.602 122.104 105.335 122.104 108.708C122.104 112.081 119.37 114.815 115.997 114.815C112.625 114.815 109.891 112.081 109.891 108.708C109.891 105.336 112.625 102.602 115.997 102.602Z"
                      stroke="#3B61B8"
                      strokeWidth={2}
                    />
                  </g>
                </g>
                <motion.circle
                  cx="50%"
                  cy="50%"
                  r={r}
                  fill="transparent"
                  stroke="url(#paint2_linear_2091_1020)"
                  strokeWidth="14"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={circumference}
                  variants={draw}
                />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_d_2091_1020"
                x="-0.742188"
                y="4.95312"
                width="233.721"
                height="233.723"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy={6} />
                <feGaussianBlur stdDeviation={15} />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.812388 0 0 0 0 0.849877 0 0 0 0 0.90236 0 0 0 0.6 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_2091_1020"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_2091_1020"
                  result="shape"
                />
              </filter>
              <filter
                id="filter1_dii_2091_1020"
                x="57.582"
                y="59.2773"
                width="121.074"
                height="121.074"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx={2} dy={4} />
                <feGaussianBlur stdDeviation={5} />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.760488 0 0 0 0 0.815807 0 0 0 0 0.905371 0 0 0 0.3 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_2091_1020"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_2091_1020"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy={4} />
                <feGaussianBlur stdDeviation={5} />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2={-1}
                  k3={1}
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect2_innerShadow_2091_1020"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy={-4} />
                <feGaussianBlur stdDeviation={6} />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2={-1}
                  k3={1}
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.7 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect2_innerShadow_2091_1020"
                  result="effect3_innerShadow_2091_1020"
                />
              </filter>
              <linearGradient
                id="paint0_linear_2091_1020"
                x1="116.12"
                y1="47.9062"
                x2="142.573"
                y2="183.724"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F8FAFF" />
                <stop offset={1} stopColor="#E9ECFF" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_2091_1020"
                x1="96.7728"
                y1="75.1478"
                x2="131.912"
                y2="150.164"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop offset={1} stopColor="#DAE8FF" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_2091_1020"
                x1="87.2645"
                y1={31}
                x2="19.3484"
                y2="166.667"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00133F" />
                <stop offset="0.60932" stopColor="#3B61B8" />
                <stop offset={1} stopColor="#4F85FF" />
              </linearGradient>
            </defs>
          </motion.svg>
        )}

        {id === 2 && (
          <motion.svg
            className="comment-progress"
            initial="hidden"
            whileInView="visible"
            viewBox="0 0 234 234"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Group 1410134686">
              <mask
                id="mask0_2091_1045"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={234}
                height={234}
              >
                <rect
                  id="Rectangle 801"
                  x="0.539062"
                  width="233.258"
                  height="233.258"
                  fill="#D9D9D9"
                />
              </mask>
              <g mask="url(#mask0_2091_1045)">
                <g id="Group 794" filter="url(#filter0_d_2091_1045)">
                  <path
                    id="Ellipse 271"
                    d="M117.167 29.6602C165.2 29.6602 204.139 68.5987 204.139 116.632C204.139 164.665 165.2 203.604 117.167 203.604C69.1338 203.603 30.1953 164.665 30.1953 116.632C30.1954 68.5988 69.1339 29.6603 117.167 29.6602Z"
                    fill="#F6F8FF"
                    stroke="#E1E7F4"
                  />
                  <circle
                    id="Ellipse 264"
                    cx="117.167"
                    cy="116.632"
                    r="74.7487"
                    fill="#E4ECFF"
                  />
                  <circle
                    id="Ellipse 266"
                    cx="117.168"
                    cy="116.629"
                    r="68.3871"
                    fill="url(#paint0_linear_2091_1045)"
                  />
                  <g id="Ellipse 270" filter="url(#filter1_dii_2091_1045)">
                    <circle
                      cx="117.166"
                      cy="116.635"
                      r="50.8927"
                      fill="url(#paint1_linear_2091_1045)"
                    />
                    <circle
                      cx="117.166"
                      cy="116.635"
                      r="50.7427"
                      stroke="white"
                      strokeWidth="0.3"
                      strokeLinecap="round"
                    />
                  </g>
                  <g id="Group 805" transform="rotate(270 117 117)">
                    <rect
                      id="Rectangle 696"
                      x="102.883"
                      y="104.91"
                      width="26.6272"
                      height="23.4464"
                      rx={5}
                      stroke="#3B61B8"
                      strokeWidth={2}
                    />
                    <rect
                      id="Rectangle 697"
                      x="102.28"
                      y="111.464"
                      width="27.832"
                      height="0.795199"
                      rx="0.3976"
                      stroke="#3B61B8"
                      strokeWidth="0.795199"
                    />
                    <rect
                      id="Rectangle 698"
                      x="118.98"
                      y="121.804"
                      width="5.56639"
                      height="0.795199"
                      rx="0.3976"
                      stroke="#3B61B8"
                      strokeWidth="0.795199"
                    />
                  </g>
                </g>
              </g>
              <motion.circle
                cx="50%"
                cy="50%"
                r={r}
                fill="transparent"
                stroke="url(#paint2_linear_2091_1020)"
                strokeWidth="14"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={circumference}
                variants={draw}
              />
            </g>
            <defs>
              <filter
                id="filter0_d_2091_1045"
                x="-0.304688"
                y="5.16016"
                width="234.943"
                height="234.945"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy={6} />
                <feGaussianBlur stdDeviation={15} />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.812388 0 0 0 0 0.849877 0 0 0 0 0.90236 0 0 0 0.6 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_2091_1045"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_2091_1045"
                  result="shape"
                />
              </filter>
              <filter
                id="filter1_dii_2091_1045"
                x="58.2734"
                y="59.7422"
                width="121.785"
                height="121.785"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx={2} dy={4} />
                <feGaussianBlur stdDeviation={5} />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.760488 0 0 0 0 0.815807 0 0 0 0 0.905371 0 0 0 0.3 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_2091_1045"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_2091_1045"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy={4} />
                <feGaussianBlur stdDeviation={5} />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2={-1}
                  k3={1}
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect2_innerShadow_2091_1045"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy={-4} />
                <feGaussianBlur stdDeviation={6} />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2={-1}
                  k3={1}
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.7 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect2_innerShadow_2091_1045"
                  result="effect3_innerShadow_2091_1045"
                />
              </filter>
              <linearGradient
                id="paint0_linear_2091_1045"
                x1="117.168"
                y1="48.2422"
                x2="143.808"
                y2="185.016"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F8FAFF" />
                <stop offset={1} stopColor="#E9ECFF" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_2091_1045"
                x1="97.6838"
                y1="75.6822"
                x2="133.07"
                y2="151.226"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop offset={1} stopColor="#DAE8FF" />
              </linearGradient>
            </defs>
          </motion.svg>
        )}

        {id === 3 && (
          <motion.svg
            className="comment-progress"
            initial="hidden"
            whileInView="visible"
            viewBox="0 0 234 234"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Group 1410134687">
              <mask
                id="mask0_2091_1070"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={234}
                height={234}
              >
                <rect
                  id="Rectangle 801"
                  x="0.203125"
                  width="233.257"
                  height="233.257"
                  fill="#D9D9D9"
                />
              </mask>
              <g mask="url(#mask0_2091_1070)" transform="rotate(270 117 117)">
                <g id="Group 794" filter="url(#filter0_d_2091_1070)">
                  <path
                    id="Ellipse 271"
                    d="M116.831 29.6562C164.864 29.6563 203.803 68.595 203.803 116.628C203.803 164.661 164.864 203.6 116.831 203.6C68.7981 203.6 29.8595 164.661 29.8594 116.628C29.8594 68.5949 68.798 29.6562 116.831 29.6562Z"
                    fill="#F6F8FF"
                    stroke="#E1E7F4"
                  />
                  <circle
                    id="Ellipse 264"
                    cx="116.83"
                    cy="116.631"
                    r="74.7484"
                    fill="#E4ECFF"
                  />
                  <circle
                    id="Ellipse 266"
                    cx="116.832"
                    cy="116.629"
                    r="68.3868"
                    fill="url(#paint0_linear_2091_1070)"
                  />
                  <g id="Ellipse 270" filter="url(#filter1_dii_2091_1070)">
                    <circle
                      cx="116.83"
                      cy="116.627"
                      r="50.8925"
                      fill="url(#paint1_linear_2091_1070)"
                    />
                    <circle
                      cx="116.83"
                      cy="116.627"
                      r="50.7425"
                      stroke="white"
                      strokeWidth="0.3"
                      strokeLinecap="round"
                    />
                  </g>
                  <g id="Frame" clipPath="url(#clip0_2091_1070)">
                    <path
                      id="Vector"
                      d="M115.861 104.156V129.102"
                      stroke="#3B61B8"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      id="Vector_2"
                      d="M122.097 106.426C122.097 106.426 116.411 106.426 113.593 106.426C110.775 106.426 108.49 108.71 108.49 111.528C108.49 114.346 110.775 116.631 113.593 116.631"
                      stroke="#3B61B8"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      id="Vector_3"
                      d="M109.625 126.834C109.625 126.834 115.311 126.834 118.129 126.834C120.947 126.834 123.232 124.549 123.232 121.731C123.232 118.913 120.947 116.629 118.129 116.629H113.594"
                      stroke="#3B61B8"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </g>
              </g>
              <motion.circle
                cx="50%"
                cy="50%"
                r={r}
                fill="transparent"
                stroke="url(#paint2_linear_2091_1020)"
                strokeWidth="14"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={circumference}
                variants={draw}
                whileInView={{ strokeDashoffset }}
              />
            </g>
            <defs>
              <filter
                id="filter0_d_2091_1070"
                x="-0.640625"
                y="5.15625"
                width="234.943"
                height="234.941"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy={6} />
                <feGaussianBlur stdDeviation={15} />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.812388 0 0 0 0 0.849877 0 0 0 0 0.90236 0 0 0 0.6 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_2091_1070"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_2091_1070"
                  result="shape"
                />
              </filter>
              <filter
                id="filter1_dii_2091_1070"
                x="57.9375"
                y="59.7344"
                width="121.785"
                height="121.785"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx={2} dy={4} />
                <feGaussianBlur stdDeviation={5} />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.760488 0 0 0 0 0.815807 0 0 0 0 0.905371 0 0 0 0.3 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_2091_1070"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_2091_1070"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy={4} />
                <feGaussianBlur stdDeviation={5} />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2={-1}
                  k3={1}
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect2_innerShadow_2091_1070"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy={-4} />
                <feGaussianBlur stdDeviation={6} />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2={-1}
                  k3={1}
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.7 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect2_innerShadow_2091_1070"
                  result="effect3_innerShadow_2091_1070"
                />
              </filter>
              <linearGradient
                id="paint0_linear_2091_1070"
                x1="116.832"
                y1="48.2422"
                x2="143.471"
                y2="185.016"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F8FAFF" />
                <stop offset={1} stopColor="#E9ECFF" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_2091_1070"
                x1="97.3477"
                y1="75.6743"
                x2="132.734"
                y2="151.218"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop offset={1} stopColor="#DAE8FF" />
              </linearGradient>
              <clipPath id="clip0_2091_1070">
                <rect
                  width="27.2134"
                  height="27.2134"
                  fill="white"
                  transform="translate(102.254 103.023)"
                />
              </clipPath>
            </defs>
          </motion.svg>
        )}
      </div>
    </>
  );
};

const draw: Variants = {
  hidden: { pathLength: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { type: "spring", duration: 1.5, bounce: 0 },
    },
  },
};

export const MinProgressItem = ({ list }: { list: ProgressItem[] }) => {
  return (
    <div className="grid grid-cols-1 gap-[10px] md:grid-cols-2 md:gap-[30px] lg:grid-cols-3 text-[#000000]">
      {list.map((item, index) => (
        <FadeIn key={item.id} delay={index * 0.1}>
          <div className="flex h-full flex-col justify-between rounded-2xl bg-[#F0F5FF] p-[20px] md:min-h-[121px] md:px-[24px] md:py-[15px]">
            <div className="mb-[12px]">{item.title}</div>
            <div className="flex items-center">
              <MinProgress value={item.count} />
              <span className="px-[12px] text-[22px] font-medium md:px-[14px] md:text-[28px]">
                {item.count}%
              </span>
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  );
};

export const SurveyItem = ({ id }: { id: string }) =>
  id === "Mexico" ? (
    <motion.svg
      className="h-auto w-full"
      viewport={{ once: false, amount: 0.3 }}
      initial="hidden"
      whileInView="visible"
      viewBox="0 0 489 254"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group 1410135536">
        <rect
          id="Rectangle 569"
          width="488.063"
          height="253.181"
          rx={16}
          fill="#F0F5FF"
        />
        <g id="Mask group">
          <mask
            id="mask0_2218_333"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x={0}
            y={0}
            width={489}
            height={254}
          >
            <path
              id="Rectangle 570"
              d="M0 16C0 7.16345 7.16344 0 16 0H472.063C480.9 0 488.063 7.16344 488.063 16V237.181C488.063 246.018 480.9 253.181 472.063 253.181H16C7.16343 253.181 0 246.018 0 237.181V16Z"
              fill="#F0F5FF"
            />
          </mask>
          <g mask="url(#mask0_2218_333)">
            <g id="Group 772">
              <path
                id="Ellipse 252"
                opacity="0.6"
                d="M453.621 148.164C505.603 148.164 547.661 188.321 547.661 237.756C547.661 287.191 505.603 327.347 453.621 327.347C401.639 327.346 359.582 287.191 359.582 237.756C359.582 188.321 401.639 148.164 453.621 148.164Z"
                fill="white"
                fillOpacity="0.2"
                stroke="url(#paint0_linear_2218_333)"
                strokeWidth={2}
              />
              <path
                id="Ellipse 254"
                opacity="0.3"
                d="M549.074 24.7344C601.057 24.7344 643.114 64.8909 643.114 114.326C643.114 163.761 601.056 203.917 549.074 203.917C497.092 203.917 455.035 163.761 455.035 114.326C455.035 64.891 497.092 24.7346 549.074 24.7344Z"
                fill="white"
                fillOpacity="0.2"
                stroke="url(#paint1_linear_2218_333)"
                strokeWidth={2}
              />
              <path
                id="Ellipse 253"
                opacity="0.6"
                d="M34.4453 148.164C86.4276 148.164 128.485 188.321 128.485 237.756C128.485 287.191 86.4275 327.347 34.4453 327.347C-17.5366 327.346 -59.5935 287.191 -59.5938 237.756C-59.5938 188.321 -17.5368 148.164 34.4453 148.164Z"
                fill="white"
                fillOpacity="0.2"
                stroke="url(#paint2_linear_2218_333)"
                strokeWidth={2}
              />
              <path
                id="Ellipse 255"
                opacity="0.3"
                d="M-61.0117 24.7344C-9.0294 24.7344 33.0283 64.8909 33.0283 114.326C33.0281 163.761 -9.02955 203.917 -61.0117 203.917C-112.994 203.917 -155.051 163.761 -155.051 114.326C-155.051 64.891 -112.994 24.7346 -61.0117 24.7344Z"
                fill="white"
                fillOpacity="0.2"
                stroke="url(#paint3_linear_2218_333)"
                strokeWidth={2}
              />
              <g id="Ellipse 250" filter="url(#filter0_d_2218_333)">
                <ellipse
                  cx="158.955"
                  cy="51.8225"
                  rx="107.49"
                  ry="102.459"
                  fill="url(#paint4_linear_2218_333)"
                  fillOpacity="0.5"
                  shapeRendering="crispEdges"
                />
                <path
                  d="M158.955 -49.6367C217.814 -49.6367 265.445 -4.16735 265.445 51.8223C265.445 107.812 217.814 153.282 158.955 153.282C100.096 153.282 52.4648 107.812 52.4648 51.8223C52.465 -4.16738 100.097 -49.6367 158.955 -49.6367Z"
                  stroke="url(#paint5_linear_2218_333)"
                  strokeWidth={2}
                  shapeRendering="crispEdges"
                />
              </g>
              <g id="Ellipse 251" filter="url(#filter1_d_2218_333)">
                <ellipse
                  cx="329.107"
                  cy="51.8225"
                  rx="107.49"
                  ry="102.459"
                  fill="url(#paint6_linear_2218_333)"
                  fillOpacity="0.5"
                  shapeRendering="crispEdges"
                />
                <path
                  d="M329.107 -49.6367C387.966 -49.6367 435.598 -4.16735 435.598 51.8223C435.598 107.812 387.966 153.282 329.107 153.282C270.249 153.282 222.617 107.812 222.617 51.8223C222.617 -4.16738 270.249 -49.6367 329.107 -49.6367Z"
                  stroke="url(#paint7_linear_2218_333)"
                  strokeWidth={2}
                  shapeRendering="crispEdges"
                />
              </g>
              <g id="Ellipse 249" filter="url(#filter2_d_2218_333)">
                <ellipse
                  cx="245.276"
                  cy="193.845"
                  rx="97.5297"
                  ry="93.3605"
                  fill="url(#paint8_linear_2218_333)"
                  shapeRendering="crispEdges"
                />
                <path
                  d="M245.275 101.484C298.629 101.484 341.806 142.876 341.806 193.845C341.806 244.813 298.629 286.205 245.275 286.205C191.922 286.205 148.746 244.813 148.746 193.845C148.746 142.876 191.922 101.485 245.275 101.484Z"
                  stroke="url(#paint9_linear_2218_333)"
                  strokeWidth={2}
                  shapeRendering="crispEdges"
                />
              </g>
            </g>
          </g>
        </g>
        <path
          id="PÃ¡gina de inicio"
          opacity="0.9"
          d="M205.099 173.44C205.269 174.379 205.653 175.104 206.251 175.616C206.869 176.107 207.691 176.352 208.715 176.352C210.037 176.352 210.997 175.808 211.595 174.72C212.192 173.611 212.491 171.755 212.491 169.152C212 169.835 211.307 170.368 210.411 170.752C209.536 171.136 208.587 171.328 207.563 171.328C206.197 171.328 204.96 171.051 203.851 170.496C202.763 169.92 201.899 169.077 201.259 167.968C200.619 166.837 200.299 165.472 200.299 163.872C200.299 161.504 201.003 159.627 202.411 158.24C203.819 156.832 205.739 156.128 208.171 156.128C211.2 156.128 213.333 157.099 214.571 159.04C215.829 160.981 216.459 163.904 216.459 167.808C216.459 170.581 216.213 172.853 215.723 174.624C215.253 176.395 214.432 177.739 213.259 178.656C212.107 179.573 210.528 180.032 208.523 180.032C206.944 180.032 205.6 179.733 204.491 179.136C203.381 178.517 202.528 177.717 201.931 176.736C201.355 175.733 201.024 174.635 200.939 173.44H205.099ZM208.491 167.68C209.6 167.68 210.475 167.339 211.115 166.656C211.755 165.973 212.075 165.056 212.075 163.904C212.075 162.645 211.733 161.675 211.051 160.992C210.389 160.288 209.483 159.936 208.331 159.936C207.179 159.936 206.261 160.299 205.579 161.024C204.917 161.728 204.587 162.667 204.587 163.84C204.587 164.971 204.907 165.899 205.547 166.624C206.208 167.328 207.189 167.68 208.491 167.68ZM234.794 160.064L226.282 180H221.738L230.314 160.576H219.37V156.736H234.794V160.064ZM239.973 180.224C239.163 180.224 238.491 179.979 237.957 179.488C237.445 178.976 237.189 178.347 237.189 177.6C237.189 176.853 237.445 176.235 237.957 175.744C238.491 175.232 239.163 174.976 239.973 174.976C240.763 174.976 241.413 175.232 241.925 175.744C242.437 176.235 242.693 176.853 242.693 177.6C242.693 178.347 242.437 178.976 241.925 179.488C241.413 179.979 240.763 180.224 239.973 180.224ZM245.854 162.816C245.96 160.683 246.707 159.04 248.094 157.888C249.502 156.715 251.347 156.128 253.63 156.128C255.187 156.128 256.52 156.405 257.63 156.96C258.739 157.493 259.571 158.229 260.126 159.168C260.702 160.085 260.99 161.131 260.99 162.304C260.99 163.648 260.638 164.789 259.934 165.728C259.251 166.645 258.43 167.264 257.47 167.584V167.712C258.707 168.096 259.667 168.779 260.35 169.76C261.054 170.741 261.406 172 261.406 173.536C261.406 174.816 261.107 175.957 260.51 176.96C259.934 177.963 259.07 178.752 257.918 179.328C256.787 179.883 255.422 180.16 253.822 180.16C251.411 180.16 249.448 179.552 247.934 178.336C246.419 177.12 245.619 175.328 245.534 172.96H249.886C249.928 174.005 250.28 174.848 250.942 175.488C251.624 176.107 252.552 176.416 253.726 176.416C254.814 176.416 255.646 176.117 256.222 175.52C256.819 174.901 257.118 174.112 257.118 173.152C257.118 171.872 256.712 170.955 255.902 170.4C255.091 169.845 253.832 169.568 252.126 169.568H251.198V165.888H252.126C255.155 165.888 256.67 164.875 256.67 162.848C256.67 161.931 256.392 161.216 255.838 160.704C255.304 160.192 254.526 159.936 253.502 159.936C252.499 159.936 251.72 160.213 251.166 160.768C250.632 161.301 250.323 161.984 250.238 162.816H245.854ZM264.434 162.4C264.434 160.779 264.903 159.509 265.842 158.592C266.802 157.675 268.029 157.216 269.522 157.216C271.015 157.216 272.231 157.675 273.17 158.592C274.13 159.509 274.61 160.779 274.61 162.4C274.61 164.043 274.13 165.323 273.17 166.24C272.231 167.157 271.015 167.616 269.522 167.616C268.029 167.616 266.802 167.157 265.842 166.24C264.903 165.323 264.434 164.043 264.434 162.4ZM284.978 157.6L272.402 180H268.05L280.594 157.6H284.978ZM269.49 159.904C268.317 159.904 267.73 160.736 267.73 162.4C267.73 164.085 268.317 164.928 269.49 164.928C270.066 164.928 270.514 164.725 270.834 164.32C271.154 163.893 271.314 163.253 271.314 162.4C271.314 160.736 270.706 159.904 269.49 159.904ZM278.482 175.168C278.482 173.525 278.951 172.256 279.89 171.36C280.85 170.443 282.077 169.984 283.57 169.984C285.063 169.984 286.269 170.443 287.186 171.36C288.125 172.256 288.594 173.525 288.594 175.168C288.594 176.811 288.125 178.091 287.186 179.008C286.269 179.925 285.063 180.384 283.57 180.384C282.055 180.384 280.829 179.925 279.89 179.008C278.951 178.091 278.482 176.811 278.482 175.168ZM283.538 172.672C282.322 172.672 281.714 173.504 281.714 175.168C281.714 176.853 282.322 177.696 283.538 177.696C284.733 177.696 285.33 176.853 285.33 175.168C285.33 173.504 284.733 172.672 283.538 172.672Z"
          fill="#000000"
        />
        <path
          id="PÃ¡gina de inicio_2"
          d="M31.5903 52.8884C30.5637 52.8884 29.6397 52.7124 28.8183 52.3604C27.997 51.9937 27.3517 51.4804 26.8823 50.8204C26.413 50.1604 26.1783 49.3904 26.1783 48.5104H28.8623C28.921 49.1704 29.1777 49.713 29.6323 50.1384C30.1017 50.5637 30.7543 50.7764 31.5903 50.7764C32.4557 50.7764 33.1303 50.571 33.6143 50.1604C34.0983 49.735 34.3403 49.1924 34.3403 48.5324C34.3403 48.019 34.1863 47.601 33.8783 47.2784C33.585 46.9557 33.211 46.7064 32.7563 46.5304C32.3163 46.3544 31.7003 46.1637 30.9083 45.9584C29.911 45.6944 29.097 45.4304 28.4663 45.1664C27.8503 44.8877 27.3223 44.4624 26.8823 43.8904C26.4423 43.3184 26.2223 42.5557 26.2223 41.6024C26.2223 40.7224 26.4423 39.9524 26.8823 39.2924C27.3223 38.6324 27.9383 38.1264 28.7303 37.7744C29.5223 37.4224 30.439 37.2464 31.4803 37.2464C32.9617 37.2464 34.1717 37.6204 35.1103 38.3684C36.0637 39.1017 36.5917 40.1137 36.6943 41.4044H33.9223C33.8783 40.847 33.6143 40.3704 33.1303 39.9744C32.6463 39.5784 32.0083 39.3804 31.2163 39.3804C30.4977 39.3804 29.911 39.5637 29.4563 39.9304C29.0017 40.297 28.7743 40.825 28.7743 41.5144C28.7743 41.9837 28.9137 42.3724 29.1923 42.6804C29.4857 42.9737 29.8523 43.2084 30.2923 43.3844C30.7323 43.5604 31.3337 43.751 32.0963 43.9564C33.1083 44.235 33.9297 44.5137 34.5603 44.7924C35.2057 45.071 35.7483 45.5037 36.1883 46.0904C36.643 46.6624 36.8703 47.4324 36.8703 48.4004C36.8703 49.1777 36.6577 49.911 36.2323 50.6004C35.8217 51.2897 35.213 51.847 34.4063 52.2724C33.6143 52.683 32.6757 52.8884 31.5903 52.8884ZM54.5037 40.4144C55.457 40.4144 56.3077 40.6124 57.0557 41.0084C57.8184 41.4044 58.4124 41.991 58.8377 42.7684C59.2777 43.5457 59.4977 44.4844 59.4977 45.5844V52.7344H57.0117V45.9584C57.0117 44.873 56.7404 44.0444 56.1977 43.4724C55.655 42.8857 54.9144 42.5924 53.9757 42.5924C53.037 42.5924 52.289 42.8857 51.7317 43.4724C51.189 44.0444 50.9177 44.873 50.9177 45.9584V52.7344H48.4317V45.9584C48.4317 44.873 48.1604 44.0444 47.6177 43.4724C47.075 42.8857 46.3344 42.5924 45.3957 42.5924C44.457 42.5924 43.709 42.8857 43.1517 43.4724C42.609 44.0444 42.3377 44.873 42.3377 45.9584V52.7344H39.8297V40.6124H42.3377V41.9984C42.7484 41.4997 43.269 41.111 43.8997 40.8324C44.5304 40.5537 45.205 40.4144 45.9237 40.4144C46.8917 40.4144 47.757 40.6197 48.5197 41.0304C49.2824 41.441 49.869 42.035 50.2797 42.8124C50.6464 42.079 51.2184 41.4997 51.9957 41.0744C52.773 40.6344 53.609 40.4144 54.5037 40.4144ZM61.8531 46.6184C61.8531 45.401 62.1024 44.323 62.6011 43.3844C63.1144 42.4457 63.8037 41.7197 64.6691 41.2064C65.5491 40.6784 66.5171 40.4144 67.5731 40.4144C68.5264 40.4144 69.3551 40.605 70.0591 40.9864C70.7777 41.353 71.3497 41.815 71.7751 42.3724V40.6124H74.3051V52.7344H71.7751V50.9304C71.3497 51.5024 70.7704 51.979 70.0371 52.3604C69.3037 52.7417 68.4677 52.9324 67.5291 52.9324C66.4877 52.9324 65.5344 52.6684 64.6691 52.1404C63.8037 51.5977 63.1144 50.8497 62.6011 49.8964C62.1024 48.9284 61.8531 47.8357 61.8531 46.6184ZM71.7751 46.6624C71.7751 45.8264 71.5991 45.1004 71.2471 44.4844C70.9097 43.8684 70.4624 43.399 69.9051 43.0764C69.3477 42.7537 68.7464 42.5924 68.1011 42.5924C67.4557 42.5924 66.8544 42.7537 66.2971 43.0764C65.7397 43.3844 65.2851 43.8464 64.9331 44.4624C64.5957 45.0637 64.4271 45.7824 64.4271 46.6184C64.4271 47.4544 64.5957 48.1877 64.9331 48.8184C65.2851 49.449 65.7397 49.933 66.2971 50.2704C66.8691 50.593 67.4704 50.7544 68.1011 50.7544C68.7464 50.7544 69.3477 50.593 69.9051 50.2704C70.4624 49.9477 70.9097 49.4784 71.2471 48.8624C71.5991 48.2317 71.7751 47.4984 71.7751 46.6624ZM80.1072 42.3724C80.4739 41.7564 80.9579 41.2797 81.5592 40.9424C82.1752 40.5904 82.9012 40.4144 83.7372 40.4144V43.0104H83.0992C82.1166 43.0104 81.3686 43.2597 80.8552 43.7584C80.3566 44.257 80.1072 45.1224 80.1072 46.3544V52.7344H77.5992V40.6124H80.1072V42.3724ZM88.9686 42.6584V49.3684C88.9686 49.823 89.0712 50.153 89.2766 50.3584C89.4966 50.549 89.8632 50.6444 90.3766 50.6444H91.9166V52.7344H89.9366C88.8072 52.7344 87.9419 52.4704 87.3406 51.9424C86.7392 51.4144 86.4386 50.5564 86.4386 49.3684V42.6584H85.0086V40.6124H86.4386V37.5984H88.9686V40.6124H91.9166V42.6584H88.9686ZM96.7361 42.3944C97.1615 41.837 97.7408 41.3677 98.4741 40.9864C99.2075 40.605 100.036 40.4144 100.96 40.4144C102.016 40.4144 102.977 40.6784 103.842 41.2064C104.722 41.7197 105.411 42.4457 105.91 43.3844C106.409 44.323 106.658 45.401 106.658 46.6184C106.658 47.8357 106.409 48.9284 105.91 49.8964C105.411 50.8497 104.722 51.5977 103.842 52.1404C102.977 52.6684 102.016 52.9324 100.96 52.9324C100.036 52.9324 99.2148 52.749 98.4961 52.3824C97.7775 52.001 97.1908 51.5317 96.7361 50.9744V58.4984H94.2281V40.6124H96.7361V42.3944ZM104.106 46.6184C104.106 45.7824 103.93 45.0637 103.578 44.4624C103.241 43.8464 102.786 43.3844 102.214 43.0764C101.657 42.7537 101.055 42.5924 100.41 42.5924C99.7795 42.5924 99.1781 42.7537 98.6061 43.0764C98.0488 43.399 97.5941 43.8684 97.2421 44.4844C96.9048 45.1004 96.7361 45.8264 96.7361 46.6624C96.7361 47.4984 96.9048 48.2317 97.2421 48.8624C97.5941 49.4784 98.0488 49.9477 98.6061 50.2704C99.1781 50.593 99.7795 50.7544 100.41 50.7544C101.055 50.7544 101.657 50.593 102.214 50.2704C102.786 49.933 103.241 49.449 103.578 48.8184C103.93 48.1877 104.106 47.4544 104.106 46.6184ZM115.408 40.4144C116.332 40.4144 117.154 40.6124 117.872 41.0084C118.606 41.4044 119.178 41.991 119.588 42.7684C120.014 43.5457 120.226 44.4844 120.226 45.5844V52.7344H117.74V45.9584C117.74 44.873 117.469 44.0444 116.926 43.4724C116.384 42.8857 115.643 42.5924 114.704 42.5924C113.766 42.5924 113.018 42.8857 112.46 43.4724C111.918 44.0444 111.646 44.873 111.646 45.9584V52.7344H109.138V36.4544H111.646V42.0204C112.072 41.507 112.607 41.111 113.252 40.8324C113.912 40.5537 114.631 40.4144 115.408 40.4144ZM128.683 52.9324C127.539 52.9324 126.505 52.6757 125.581 52.1624C124.657 51.6344 123.931 50.901 123.403 49.9624C122.875 49.009 122.611 47.909 122.611 46.6624C122.611 45.4304 122.883 44.3377 123.425 43.3844C123.968 42.431 124.709 41.6977 125.647 41.1844C126.586 40.671 127.635 40.4144 128.793 40.4144C129.952 40.4144 131.001 40.671 131.939 41.1844C132.878 41.6977 133.619 42.431 134.161 43.3844C134.704 44.3377 134.975 45.4304 134.975 46.6624C134.975 47.8944 134.697 48.987 134.139 49.9404C133.582 50.8937 132.819 51.6344 131.851 52.1624C130.898 52.6757 129.842 52.9324 128.683 52.9324ZM128.683 50.7544C129.329 50.7544 129.93 50.6004 130.487 50.2924C131.059 49.9844 131.521 49.5224 131.873 48.9064C132.225 48.2904 132.401 47.5424 132.401 46.6624C132.401 45.7824 132.233 45.0417 131.895 44.4404C131.558 43.8244 131.111 43.3624 130.553 43.0544C129.996 42.7464 129.395 42.5924 128.749 42.5924C128.104 42.5924 127.503 42.7464 126.945 43.0544C126.403 43.3624 125.97 43.8244 125.647 44.4404C125.325 45.0417 125.163 45.7824 125.163 46.6624C125.163 47.9677 125.493 48.9797 126.153 49.6984C126.828 50.4024 127.671 50.7544 128.683 50.7544ZM143.571 40.4144C144.524 40.4144 145.375 40.6124 146.123 41.0084C146.885 41.4044 147.479 41.991 147.905 42.7684C148.33 43.5457 148.543 44.4844 148.543 45.5844V52.7344H146.057V45.9584C146.057 44.873 145.785 44.0444 145.243 43.4724C144.7 42.8857 143.959 42.5924 143.021 42.5924C142.082 42.5924 141.334 42.8857 140.777 43.4724C140.234 44.0444 139.963 44.873 139.963 45.9584V52.7344H137.455V40.6124H139.963V41.9984C140.373 41.4997 140.894 41.111 141.525 40.8324C142.17 40.5537 142.852 40.4144 143.571 40.4144ZM162.852 46.3764C162.852 46.831 162.822 47.2417 162.764 47.6084H153.502C153.575 48.5764 153.934 49.3537 154.58 49.9404C155.225 50.527 156.017 50.8204 156.956 50.8204C158.305 50.8204 159.258 50.2557 159.816 49.1264H162.522C162.155 50.241 161.488 51.1577 160.52 51.8764C159.566 52.5804 158.378 52.9324 156.956 52.9324C155.797 52.9324 154.756 52.6757 153.832 52.1624C152.922 51.6344 152.204 50.901 151.676 49.9624C151.162 49.009 150.906 47.909 150.906 46.6624C150.906 45.4157 151.155 44.323 151.654 43.3844C152.167 42.431 152.878 41.6977 153.788 41.1844C154.712 40.671 155.768 40.4144 156.956 40.4144C158.1 40.4144 159.119 40.6637 160.014 41.1624C160.908 41.661 161.605 42.365 162.104 43.2744C162.602 44.169 162.852 45.203 162.852 46.3764ZM160.234 45.5844C160.219 44.6604 159.889 43.9197 159.244 43.3624C158.598 42.805 157.799 42.5264 156.846 42.5264C155.98 42.5264 155.24 42.805 154.624 43.3624C154.008 43.905 153.641 44.6457 153.524 45.5844H160.234ZM173.543 42.3944C173.968 41.837 174.547 41.3677 175.281 40.9864C176.014 40.605 176.843 40.4144 177.767 40.4144C178.823 40.4144 179.783 40.6784 180.649 41.2064C181.529 41.7197 182.218 42.4457 182.717 43.3844C183.215 44.323 183.465 45.401 183.465 46.6184C183.465 47.8357 183.215 48.9284 182.717 49.8964C182.218 50.8497 181.529 51.5977 180.649 52.1404C179.783 52.6684 178.823 52.9324 177.767 52.9324C176.843 52.9324 176.021 52.749 175.303 52.3824C174.584 52.001 173.997 51.5317 173.543 50.9744V58.4984H171.035V40.6124H173.543V42.3944ZM180.913 46.6184C180.913 45.7824 180.737 45.0637 180.385 44.4624C180.047 43.8464 179.593 43.3844 179.021 43.0764C178.463 42.7537 177.862 42.5924 177.217 42.5924C176.586 42.5924 175.985 42.7537 175.413 43.0764C174.855 43.399 174.401 43.8684 174.049 44.4844C173.711 45.1004 173.543 45.8264 173.543 46.6624C173.543 47.4984 173.711 48.2317 174.049 48.8624C174.401 49.4784 174.855 49.9477 175.413 50.2704C175.985 50.593 176.586 50.7544 177.217 50.7544C177.862 50.7544 178.463 50.593 179.021 50.2704C179.593 49.933 180.047 49.449 180.385 48.8184C180.737 48.1877 180.913 47.4544 180.913 46.6184ZM197.055 46.3764C197.055 46.831 197.026 47.2417 196.967 47.6084H187.705C187.778 48.5764 188.138 49.3537 188.783 49.9404C189.428 50.527 190.22 50.8204 191.159 50.8204C192.508 50.8204 193.462 50.2557 194.019 49.1264H196.725C196.358 50.241 195.691 51.1577 194.723 51.8764C193.77 52.5804 192.582 52.9324 191.159 52.9324C190 52.9324 188.959 52.6757 188.035 52.1624C187.126 51.6344 186.407 50.901 185.879 49.9624C185.366 49.009 185.109 47.909 185.109 46.6624C185.109 45.4157 185.358 44.323 185.857 43.3844C186.37 42.431 187.082 41.6977 187.991 41.1844C188.915 40.671 189.971 40.4144 191.159 40.4144C192.303 40.4144 193.322 40.6637 194.217 41.1624C195.112 41.661 195.808 42.365 196.307 43.2744C196.806 44.169 197.055 45.203 197.055 46.3764ZM194.437 45.5844C194.422 44.6604 194.092 43.9197 193.447 43.3624C192.802 42.805 192.002 42.5264 191.049 42.5264C190.184 42.5264 189.443 42.805 188.827 43.3624C188.211 43.905 187.844 44.6457 187.727 45.5844H194.437ZM205.639 40.4144C206.592 40.4144 207.443 40.6124 208.191 41.0084C208.954 41.4044 209.548 41.991 209.973 42.7684C210.398 43.5457 210.611 44.4844 210.611 45.5844V52.7344H208.125V45.9584C208.125 44.873 207.854 44.0444 207.311 43.4724C206.768 42.8857 206.028 42.5924 205.089 42.5924C204.15 42.5924 203.402 42.8857 202.845 43.4724C202.302 44.0444 202.031 44.873 202.031 45.9584V52.7344H199.523V40.6124H202.031V41.9984C202.442 41.4997 202.962 41.111 203.593 40.8324C204.238 40.5537 204.92 40.4144 205.639 40.4144ZM224.92 46.3764C224.92 46.831 224.891 47.2417 224.832 47.6084H215.57C215.643 48.5764 216.003 49.3537 216.648 49.9404C217.293 50.527 218.085 50.8204 219.024 50.8204C220.373 50.8204 221.327 50.2557 221.884 49.1264H224.59C224.223 50.241 223.556 51.1577 222.588 51.8764C221.635 52.5804 220.447 52.9324 219.024 52.9324C217.865 52.9324 216.824 52.6757 215.9 52.1624C214.991 51.6344 214.272 50.901 213.744 49.9624C213.231 49.009 212.974 47.909 212.974 46.6624C212.974 45.4157 213.223 44.323 213.722 43.3844C214.235 42.431 214.947 41.6977 215.856 41.1844C216.78 40.671 217.836 40.4144 219.024 40.4144C220.168 40.4144 221.187 40.6637 222.082 41.1624C222.977 41.661 223.673 42.365 224.172 43.2744C224.671 44.169 224.92 45.203 224.92 46.3764ZM222.302 45.5844C222.287 44.6604 221.957 43.9197 221.312 43.3624C220.667 42.805 219.867 42.5264 218.914 42.5264C218.049 42.5264 217.308 42.805 216.692 43.3624C216.076 43.905 215.709 44.6457 215.592 45.5844H222.302ZM230.314 42.6584V49.3684C230.314 49.823 230.417 50.153 230.622 50.3584C230.842 50.549 231.209 50.6444 231.722 50.6444H233.262V52.7344H231.282C230.153 52.7344 229.288 52.4704 228.686 51.9424C228.085 51.4144 227.784 50.5564 227.784 49.3684V42.6584H226.354V40.6124H227.784V37.5984H230.314V40.6124H233.262V42.6584H230.314ZM238.082 42.3724C238.448 41.7564 238.932 41.2797 239.534 40.9424C240.15 40.5904 240.876 40.4144 241.712 40.4144V43.0104H241.074C240.091 43.0104 239.343 43.2597 238.83 43.7584C238.331 44.257 238.082 45.1224 238.082 46.3544V52.7344H235.574V40.6124H238.082V42.3724ZM243.181 46.6184C243.181 45.401 243.431 44.323 243.929 43.3844C244.443 42.4457 245.132 41.7197 245.997 41.2064C246.877 40.6784 247.845 40.4144 248.901 40.4144C249.855 40.4144 250.683 40.605 251.387 40.9864C252.106 41.353 252.678 41.815 253.103 42.3724V40.6124H255.633V52.7344H253.103V50.9304C252.678 51.5024 252.099 51.979 251.365 52.3604C250.632 52.7417 249.796 52.9324 248.857 52.9324C247.816 52.9324 246.863 52.6684 245.997 52.1404C245.132 51.5977 244.443 50.8497 243.929 49.8964C243.431 48.9284 243.181 47.8357 243.181 46.6184ZM253.103 46.6624C253.103 45.8264 252.927 45.1004 252.575 44.4844C252.238 43.8684 251.791 43.399 251.233 43.0764C250.676 42.7537 250.075 42.5924 249.429 42.5924C248.784 42.5924 248.183 42.7537 247.625 43.0764C247.068 43.3844 246.613 43.8464 246.261 44.4624C245.924 45.0637 245.755 45.7824 245.755 46.6184C245.755 47.4544 245.924 48.1877 246.261 48.8184C246.613 49.449 247.068 49.933 247.625 50.2704C248.197 50.593 248.799 50.7544 249.429 50.7544C250.075 50.7544 250.676 50.593 251.233 50.2704C251.791 49.9477 252.238 49.4784 252.575 48.8624C252.927 48.2317 253.103 47.4984 253.103 46.6624ZM261.853 42.6584V49.3684C261.853 49.823 261.956 50.153 262.161 50.3584C262.381 50.549 262.748 50.6444 263.261 50.6444H264.801V52.7344H262.821C261.692 52.7344 260.827 52.4704 260.225 51.9424C259.624 51.4144 259.323 50.5564 259.323 49.3684V42.6584H257.893V40.6124H259.323V37.5984H261.853V40.6124H264.801V42.6584H261.853ZM268.389 39.0064C267.934 39.0064 267.553 38.8524 267.245 38.5444C266.937 38.2364 266.783 37.855 266.783 37.4004C266.783 36.9457 266.937 36.5644 267.245 36.2564C267.553 35.9484 267.934 35.7944 268.389 35.7944C268.829 35.7944 269.203 35.9484 269.511 36.2564C269.819 36.5644 269.973 36.9457 269.973 37.4004C269.973 37.855 269.819 38.2364 269.511 38.5444C269.203 38.8524 268.829 39.0064 268.389 39.0064ZM269.621 40.6124V52.7344H267.113V40.6124H269.621ZM278.172 52.9324C277.028 52.9324 275.994 52.6757 275.07 52.1624C274.146 51.6344 273.42 50.901 272.892 49.9624C272.364 49.009 272.1 47.909 272.1 46.6624C272.1 45.4304 272.371 44.3377 272.914 43.3844C273.456 42.431 274.197 41.6977 275.136 41.1844C276.074 40.671 277.123 40.4144 278.282 40.4144C279.44 40.4144 280.489 40.671 281.428 41.1844C282.366 41.6977 283.107 42.431 283.65 43.3844C284.192 44.3377 284.464 45.4304 284.464 46.6624C284.464 47.8944 284.185 48.987 283.628 49.9404C283.07 50.8937 282.308 51.6344 281.34 52.1624C280.386 52.6757 279.33 52.9324 278.172 52.9324ZM278.172 50.7544C278.817 50.7544 279.418 50.6004 279.976 50.2924C280.548 49.9844 281.01 49.5224 281.362 48.9064C281.714 48.2904 281.89 47.5424 281.89 46.6624C281.89 45.7824 281.721 45.0417 281.384 44.4404C281.046 43.8244 280.599 43.3624 280.042 43.0544C279.484 42.7464 278.883 42.5924 278.238 42.5924C277.592 42.5924 276.991 42.7464 276.434 43.0544C275.891 43.3624 275.458 43.8244 275.136 44.4404C274.813 45.0417 274.652 45.7824 274.652 46.6624C274.652 47.9677 274.982 48.9797 275.642 49.6984C276.316 50.4024 277.16 50.7544 278.172 50.7544ZM293.059 40.4144C294.012 40.4144 294.863 40.6124 295.611 41.0084C296.374 41.4044 296.968 41.991 297.393 42.7684C297.818 43.5457 298.031 44.4844 298.031 45.5844V52.7344H295.545V45.9584C295.545 44.873 295.274 44.0444 294.731 43.4724C294.188 42.8857 293.448 42.5924 292.509 42.5924C291.57 42.5924 290.822 42.8857 290.265 43.4724C289.722 44.0444 289.451 44.873 289.451 45.9584V52.7344H286.943V40.6124H289.451V41.9984C289.862 41.4997 290.382 41.111 291.013 40.8324C291.658 40.5537 292.34 40.4144 293.059 40.4144ZM309.453 42.3724C309.82 41.7564 310.304 41.2797 310.905 40.9424C311.521 40.5904 312.247 40.4144 313.083 40.4144V43.0104H312.445C311.462 43.0104 310.714 43.2597 310.201 43.7584C309.702 44.257 309.453 45.1224 309.453 46.3544V52.7344H306.945V40.6124H309.453V42.3724ZM314.552 46.6184C314.552 45.401 314.802 44.323 315.3 43.3844C315.814 42.4457 316.503 41.7197 317.368 41.2064C318.248 40.6784 319.216 40.4144 320.272 40.4144C321.226 40.4144 322.054 40.605 322.758 40.9864C323.477 41.353 324.049 41.815 324.474 42.3724V40.6124H327.004V52.7344H324.474V50.9304C324.049 51.5024 323.47 51.979 322.736 52.3604C322.003 52.7417 321.167 52.9324 320.228 52.9324C319.187 52.9324 318.234 52.6684 317.368 52.1404C316.503 51.5977 315.814 50.8497 315.3 49.8964C314.802 48.9284 314.552 47.8357 314.552 46.6184ZM324.474 46.6624C324.474 45.8264 324.298 45.1004 323.946 44.4844C323.609 43.8684 323.162 43.399 322.604 43.0764C322.047 42.7537 321.446 42.5924 320.8 42.5924C320.155 42.5924 319.554 42.7537 318.996 43.0764C318.439 43.3844 317.984 43.8464 317.632 44.4624C317.295 45.0637 317.126 45.7824 317.126 46.6184C317.126 47.4544 317.295 48.1877 317.632 48.8184C317.984 49.449 318.439 49.933 318.996 50.2704C319.568 50.593 320.17 50.7544 320.8 50.7544C321.446 50.7544 322.047 50.593 322.604 50.2704C323.162 49.9477 323.609 49.4784 323.946 48.8624C324.298 48.2317 324.474 47.4984 324.474 46.6624ZM333.224 42.6584V49.3684C333.224 49.823 333.327 50.153 333.532 50.3584C333.752 50.549 334.119 50.6444 334.632 50.6444H336.172V52.7344H334.192C333.063 52.7344 332.198 52.4704 331.596 51.9424C330.995 51.4144 330.694 50.5564 330.694 49.3684V42.6584H329.264V40.6124H330.694V37.5984H333.224V40.6124H336.172V42.6584H333.224ZM349.594 46.3764C349.594 46.831 349.565 47.2417 349.506 47.6084H340.244C340.317 48.5764 340.677 49.3537 341.322 49.9404C341.967 50.527 342.759 50.8204 343.698 50.8204C345.047 50.8204 346.001 50.2557 346.558 49.1264H349.264C348.897 50.241 348.23 51.1577 347.262 51.8764C346.309 52.5804 345.121 52.9324 343.698 52.9324C342.539 52.9324 341.498 52.6757 340.574 52.1624C339.665 51.6344 338.946 50.901 338.418 49.9624C337.905 49.009 337.648 47.909 337.648 46.6624C337.648 45.4157 337.897 44.323 338.396 43.3844C338.909 42.431 339.621 41.6977 340.53 41.1844C341.454 40.671 342.51 40.4144 343.698 40.4144C344.842 40.4144 345.861 40.6637 346.756 41.1624C347.651 41.661 348.347 42.365 348.846 43.2744C349.345 44.169 349.594 45.203 349.594 46.3764ZM346.976 45.5844C346.961 44.6604 346.631 43.9197 345.986 43.3624C345.341 42.805 344.541 42.5264 343.588 42.5264C342.723 42.5264 341.982 42.805 341.366 43.3624C340.75 43.905 340.383 44.6457 340.266 45.5844H346.976Z"
          fill="#000000"
        />
        <g id="Group 1410135537">
          <path
            id="Ellipse 322"
            d="M131 210C131 195.226 133.91 180.597 139.564 166.948C145.217 153.299 153.504 140.897 163.95 130.45C174.397 120.004 186.799 111.717 200.448 106.064C214.097 100.41 228.726 97.5 243.5 97.5C258.274 97.5 272.903 100.41 286.552 106.064C300.201 111.717 312.603 120.004 323.05 130.45C333.496 140.897 341.783 153.299 347.436 166.948C353.09 180.597 356 195.226 356 210"
            stroke="#F6F8FF"
            strokeWidth={22}
            strokeLinecap="round"
          />
          <path
            id="Ellipse 323"
            d="M131 210C131 195.226 133.91 180.597 139.564 166.948C145.217 153.299 153.504 140.897 163.95 130.45C174.397 120.004 186.799 111.717 200.448 106.064C214.097 100.41 228.726 97.5 243.5 97.5C258.274 97.5 272.903 100.41 286.552 106.064C300.201 111.717 312.603 120.004 323.05 130.45C333.496 140.897 341.783 153.299 347.436 166.948C353.09 180.597 356 195.226 356 210"
            stroke="#CEDAF1"
            strokeWidth={13}
            strokeLinecap="round"
          />
          <motion.path
            variants={draw}
            id="Ellipse 324"
            d="M131.001 210C131.001 195.226 133.911 180.597 139.565 166.948C145.218 153.299 153.505 140.897 163.952 130.45C174.398 120.004 186.8 111.717 200.449 106.064C214.099 100.41 228.728 97.5 243.501 97.5C258.275 97.5 272.904 100.41 286.553 106.064C300.202 111.717 312.604 120.004 323.051 130.45C333.497 140.897 341.784 153.299 347.438 166.948C351.49 176.731 354.133 187.018 355.305 197.5"
            stroke="url(#paint10_linear_2218_333)"
            strokeWidth={13}
            strokeLinecap="round"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d_2218_333"
          x="41.4648"
          y="-58.6367"
          width="234.98"
          height="224.918"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={2} />
          <feGaussianBlur stdDeviation={5} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.811765 0 0 0 0 0.85098 0 0 0 0 0.901961 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2218_333"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2218_333"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_2218_333"
          x="211.617"
          y="-58.6367"
          width="234.98"
          height="224.918"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={2} />
          <feGaussianBlur stdDeviation={5} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.811765 0 0 0 0 0.85098 0 0 0 0 0.901961 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2218_333"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2218_333"
            result="shape"
          />
        </filter>
        <filter
          id="filter2_d_2218_333"
          x="127.746"
          y="80.4844"
          width="235.059"
          height="226.723"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={10} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.811765 0 0 0 0 0.85098 0 0 0 0 0.901961 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2218_333"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2218_333"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_2218_333"
          x1="453.622"
          y1="147.164"
          x2="453.622"
          y2="328.347"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E6E9F5" />
          <stop offset={1} stopColor="#E6E9F5" stopOpacity="0.25" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_2218_333"
          x1="549.075"
          y1="23.7344"
          x2="549.075"
          y2="204.917"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E6E9F5" />
          <stop offset={1} stopColor="#E6E9F5" stopOpacity="0.25" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_2218_333"
          x1="34.4458"
          y1="147.164"
          x2="34.4458"
          y2="328.347"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E6E9F5" />
          <stop offset={1} stopColor="#E6E9F5" stopOpacity="0.25" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_2218_333"
          x1="-61.0112"
          y1="23.7344"
          x2="-61.0112"
          y2="204.917"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E6E9F5" />
          <stop offset={1} stopColor="#E6E9F5" stopOpacity="0.25" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_2218_333"
          x1="158.955"
          y1="-2.76966"
          x2="158.955"
          y2="154.282"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity={0} />
          <stop offset={1} stopColor="white" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_2218_333"
          x1="188.996"
          y1="147.57"
          x2="161.958"
          y2="21.9912"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E6E9F5" />
          <stop offset={1} stopColor="#E6E9F5" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="paint6_linear_2218_333"
          x1="329.107"
          y1="-2.76966"
          x2="329.107"
          y2="154.282"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity={0} />
          <stop offset={1} stopColor="white" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_2218_333"
          x1="359.148"
          y1="147.57"
          x2="332.111"
          y2="21.9912"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E6E9F5" />
          <stop offset={1} stopColor="#E6E9F5" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="paint8_linear_2218_333"
          x1="245.276"
          y1="126.198"
          x2="245.276"
          y2="243.69"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset={1} stopColor="white" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="paint9_linear_2218_333"
          x1="245.276"
          y1="163.384"
          x2="245.276"
          y2="256.349"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E6E9F5" />
          <stop offset={1} stopColor="#E6E9F5" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient
          id="paint10_linear_2218_333"
          x1="351.5"
          y1="157.5"
          x2="132.794"
          y2="192.281"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4F85FF" />
          <stop offset="0.60932" stopColor="#3B61B8" />
          <stop offset={1} stopColor="#00133F" />
        </linearGradient>
      </defs>
    </motion.svg>
  ) : null;

export const SurveySecondItem = ({
  title,
  value,
}: {
  title: string;
  value: number;
}) => {
  return (
    <svg
      className="h-auto w-full"
      viewBox="0 0 719 373"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group 1410135412">
        <g id="Group 676">
          <g id="Group 673">
            <rect
              id="Rectangle 570"
              width={719}
              height={373}
              rx="27.975"
              fill="#F0F5FF"
            />
            <g id="Mask group">
              <g id="Mask group_2">
                <mask
                  id="mask0_81_5692"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x={0}
                  y={0}
                  width={719}
                  height={373}
                >
                  <rect
                    id="Rectangle 571"
                    width={719}
                    height={373}
                    rx="27.975"
                    fill="#F6F7F9"
                  />
                </mask>
                <g mask="url(#mask0_81_5692)">
                  <g id="Group 773">
                    <rect
                      id="Rectangle 686"
                      x="500.064"
                      y="134.046"
                      width="261.791"
                      height="173.678"
                      rx="17.4844"
                      fill="white"
                      fillOpacity="0.5"
                      stroke="url(#paint0_linear_81_5692)"
                      strokeWidth="2.33125"
                    />
                    <rect
                      id="Rectangle 691"
                      x="500.064"
                      y="-48.9564"
                      width="261.791"
                      height="173.678"
                      rx="17.4844"
                      fill="#FFFDFD"
                      fillOpacity="0.2"
                      stroke="url(#paint1_linear_81_5692)"
                      strokeWidth="2.33125"
                    />
                    <rect
                      id="Rectangle 688"
                      x="399.795"
                      y="317.05"
                      width="261.791"
                      height="173.678"
                      rx="17.4844"
                      fill="white"
                      fillOpacity="0.2"
                      stroke="url(#paint2_linear_81_5692)"
                      strokeWidth="2.33125"
                    />
                    <rect
                      id="Rectangle 689"
                      x="-1.16562"
                      y="1.16562"
                      width="261.791"
                      height="173.678"
                      rx="17.4844"
                      transform="matrix(-1 0 0 1 217.77 315.885)"
                      fill="white"
                      fillOpacity="0.2"
                      stroke="url(#paint3_linear_81_5692)"
                      strokeWidth="2.33125"
                    />
                    <rect
                      id="Rectangle 687"
                      x="-1.16562"
                      y="1.16562"
                      width="261.791"
                      height="173.678"
                      rx="17.4844"
                      transform="matrix(-1 0 0 1 217.77 132.881)"
                      fill="white"
                      fillOpacity="0.5"
                      stroke="url(#paint4_linear_81_5692)"
                      strokeWidth="2.33125"
                    />
                    <rect
                      id="Rectangle 690"
                      x="-1.16562"
                      y="1.16562"
                      width="261.791"
                      height="173.678"
                      rx="17.4844"
                      transform="matrix(-1 0 0 1 318.04 -50.1221)"
                      fill="white"
                      fillOpacity="0.2"
                      stroke="url(#paint5_linear_81_5692)"
                      strokeWidth="2.33125"
                    />
                  </g>
                </g>
              </g>
            </g>
            <g id="Group 1410134677">
              <mask
                id="mask1_81_5692"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x={173}
                y={86}
                width={373}
                height={270}
              >
                <rect
                  id="Rectangle 797"
                  x="173.636"
                  y="86.2559"
                  width="371.728"
                  height="269.259"
                  fill="#D9D9D9"
                />
              </mask>
              <g mask="url(#mask1_81_5692)">
                <g id="Group 790" filter="url(#filter0_d_81_5692)">
                  <rect
                    id="Rectangle 685"
                    x="228.021"
                    y="133.464"
                    width="262.957"
                    height="174.844"
                    rx="18.0672"
                    fill="#F6F8FF"
                    stroke="#E1E7F4"
                    strokeWidth="1.16562"
                  />
                  <g id="Rectangle 692" filter="url(#filter1_d_81_5692)">
                    <rect
                      x="237.221"
                      y="142.206"
                      width="244.558"
                      height="157.359"
                      rx="13.9875"
                      fill="#FFFDFD"
                    />
                    <rect
                      x="238.386"
                      y="143.372"
                      width="242.227"
                      height="155.028"
                      rx="12.8219"
                      stroke="#E6E9F5"
                      strokeWidth="2.33125"
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
          <path
            id="83.2%"
            display="none"
            opacity="0.8"
            d="M301.734 231.5C301.734 234.544 301.029 237.108 299.618 239.19C298.208 241.272 296.283 242.85 293.843 243.924C291.425 244.977 288.694 245.503 285.649 245.503C282.604 245.503 279.862 244.977 277.422 243.924C274.982 242.85 273.056 241.272 271.646 239.19C270.236 237.108 269.531 234.544 269.531 231.5C269.531 229.485 269.922 227.66 270.706 226.026C271.489 224.37 272.598 222.948 274.03 221.762C275.485 220.553 277.187 219.624 279.134 218.974C281.105 218.325 283.254 218.001 285.582 218.001C288.671 218.001 291.436 218.571 293.876 219.713C296.316 220.855 298.23 222.433 299.618 224.448C301.029 226.463 301.734 228.813 301.734 231.5ZM293.607 231.097C293.607 229.463 293.272 228.03 292.6 226.799C291.928 225.567 290.988 224.616 289.779 223.944C288.57 223.273 287.171 222.937 285.582 222.937C283.97 222.937 282.571 223.273 281.384 223.944C280.198 224.616 279.269 225.567 278.597 226.799C277.948 228.03 277.623 229.463 277.623 231.097C277.623 232.753 277.948 234.186 278.597 235.395C279.246 236.582 280.175 237.488 281.384 238.115C282.593 238.742 284.015 239.055 285.649 239.055C287.283 239.055 288.694 238.742 289.88 238.115C291.067 237.488 291.984 236.582 292.634 235.395C293.283 234.186 293.607 232.753 293.607 231.097ZM300.626 208.8C300.626 211.24 299.976 213.411 298.678 215.314C297.402 217.217 295.633 218.717 293.372 219.814C291.111 220.889 288.537 221.426 285.649 221.426C282.739 221.426 280.142 220.889 277.858 219.814C275.597 218.717 273.818 217.217 272.519 215.314C271.243 213.411 270.605 211.24 270.605 208.8C270.605 205.889 271.243 203.438 272.519 201.446C273.818 199.431 275.597 197.897 277.858 196.845C280.119 195.793 282.705 195.267 285.615 195.267C288.526 195.267 291.111 195.793 293.372 196.845C295.633 197.897 297.402 199.431 298.678 201.446C299.976 203.438 300.626 205.889 300.626 208.8ZM292.533 209.068C292.533 207.613 292.242 206.337 291.66 205.24C291.1 204.121 290.305 203.248 289.276 202.621C288.246 201.994 287.026 201.681 285.615 201.681C284.205 201.681 282.985 201.983 281.955 202.587C280.925 203.192 280.131 204.043 279.571 205.139C279.011 206.236 278.732 207.546 278.732 209.068C278.732 210.568 279.011 211.878 279.571 212.997C280.131 214.094 280.925 214.956 281.955 215.583C283.007 216.21 284.239 216.523 285.649 216.523C287.059 216.523 288.279 216.21 289.309 215.583C290.339 214.956 291.134 214.094 291.693 212.997C292.253 211.878 292.533 210.568 292.533 209.068ZM318.356 216.725H323.191C325.072 216.725 326.628 216.4 327.859 215.751C329.113 215.102 330.042 214.206 330.646 213.064C331.251 211.923 331.553 210.613 331.553 209.135C331.553 207.591 331.273 206.27 330.713 205.173C330.176 204.054 329.348 203.192 328.228 202.587C327.132 201.983 325.732 201.681 324.031 201.681C322.598 201.681 321.3 201.972 320.136 202.554C318.994 203.113 318.087 203.919 317.416 204.972C316.744 206.001 316.408 207.233 316.408 208.665H308.282C308.282 206.069 308.965 203.763 310.33 201.748C311.696 199.733 313.554 198.155 315.905 197.013C318.278 195.849 320.942 195.267 323.897 195.267C327.053 195.267 329.807 195.793 332.157 196.845C334.53 197.875 336.377 199.42 337.698 201.479C339.019 203.539 339.679 206.091 339.679 209.135C339.679 210.523 339.355 211.934 338.705 213.367C338.056 214.799 337.094 216.109 335.818 217.295C334.542 218.46 332.952 219.411 331.049 220.15C329.146 220.866 326.941 221.224 324.434 221.224H318.356V216.725ZM318.356 223.038V218.605H324.434C327.299 218.605 329.74 218.941 331.754 219.612C333.792 220.284 335.448 221.213 336.724 222.4C338 223.564 338.929 224.896 339.511 226.396C340.116 227.896 340.418 229.485 340.418 231.164C340.418 233.447 340.004 235.485 339.176 237.276C338.37 239.044 337.217 240.544 335.717 241.775C334.217 243.007 332.46 243.936 330.445 244.562C328.452 245.189 326.281 245.503 323.93 245.503C321.826 245.503 319.811 245.212 317.886 244.63C315.961 244.048 314.237 243.186 312.714 242.044C311.192 240.88 309.983 239.436 309.088 237.712C308.215 235.966 307.778 233.951 307.778 231.668H315.871C315.871 233.123 316.207 234.41 316.878 235.529C317.572 236.626 318.535 237.488 319.766 238.115C321.02 238.742 322.453 239.055 324.065 239.055C325.766 239.055 327.232 238.753 328.464 238.149C329.695 237.544 330.635 236.649 331.284 235.462C331.956 234.276 332.292 232.843 332.292 231.164C332.292 229.261 331.922 227.716 331.184 226.53C330.445 225.343 329.393 224.47 328.027 223.911C326.661 223.329 325.05 223.038 323.191 223.038H318.356ZM348.746 240.801C348.746 239.548 349.171 238.496 350.022 237.645C350.873 236.772 352.026 236.335 353.481 236.335C354.958 236.335 356.111 236.772 356.939 237.645C357.79 238.496 358.215 239.548 358.215 240.801C358.215 242.055 357.79 243.107 356.939 243.958C356.111 244.809 354.958 245.234 353.481 245.234C352.026 245.234 350.873 244.809 350.022 243.958C349.171 243.107 348.746 242.055 348.746 240.801ZM399.855 238.384V244.831H367.081V239.29L382.997 221.929C384.744 219.959 386.12 218.258 387.128 216.825C388.135 215.393 388.84 214.105 389.243 212.964C389.669 211.8 389.881 210.669 389.881 209.572C389.881 208.027 389.59 206.673 389.008 205.509C388.449 204.322 387.62 203.393 386.523 202.722C385.426 202.028 384.094 201.681 382.527 201.681C380.714 201.681 379.192 202.073 377.96 202.856C376.729 203.64 375.8 204.725 375.173 206.113C374.547 207.479 374.233 209.046 374.233 210.814H366.14C366.14 207.971 366.79 205.375 368.088 203.024C369.386 200.651 371.267 198.77 373.729 197.382C376.192 195.972 379.158 195.267 382.628 195.267C385.897 195.267 388.672 195.815 390.956 196.912C393.239 198.009 394.974 199.565 396.161 201.58C397.37 203.595 397.974 205.979 397.974 208.733C397.974 210.255 397.728 211.766 397.235 213.266C396.743 214.766 396.038 216.266 395.12 217.766C394.224 219.243 393.161 220.732 391.93 222.232C390.698 223.709 389.344 225.209 387.867 226.731L377.289 238.384H399.855ZM405.832 207.927V205.341C405.832 203.483 406.235 201.793 407.041 200.27C407.847 198.748 409.022 197.528 410.567 196.61C412.111 195.692 413.969 195.233 416.141 195.233C418.38 195.233 420.26 195.692 421.782 196.61C423.327 197.528 424.502 198.748 425.308 200.27C426.114 201.793 426.517 203.483 426.517 205.341V207.927C426.517 209.74 426.114 211.408 425.308 212.93C424.525 214.452 423.361 215.672 421.816 216.59C420.294 217.508 418.424 217.967 416.208 217.967C414.014 217.967 412.134 217.508 410.567 216.59C409.022 215.672 407.847 214.452 407.041 212.93C406.235 211.408 405.832 209.74 405.832 207.927ZM411.44 205.341V207.927C411.44 208.822 411.608 209.673 411.943 210.479C412.302 211.285 412.839 211.934 413.555 212.426C414.272 212.919 415.156 213.165 416.208 213.165C417.283 213.165 418.156 212.919 418.827 212.426C419.521 211.934 420.036 211.285 420.372 210.479C420.708 209.673 420.876 208.822 420.876 207.927V205.341C420.876 204.423 420.697 203.561 420.338 202.755C420.003 201.927 419.488 201.267 418.794 200.774C418.1 200.282 417.216 200.035 416.141 200.035C415.111 200.035 414.238 200.282 413.522 200.774C412.828 201.267 412.302 201.927 411.943 202.755C411.608 203.561 411.44 204.423 411.44 205.341ZM429.405 235.462V232.843C429.405 231.007 429.808 229.328 430.614 227.806C431.442 226.284 432.629 225.064 434.173 224.146C435.718 223.228 437.576 222.769 439.748 222.769C441.986 222.769 443.867 223.228 445.389 224.146C446.934 225.064 448.098 226.284 448.881 227.806C449.687 229.328 450.09 231.007 450.09 232.843V235.462C450.09 237.298 449.687 238.977 448.881 240.499C448.098 242.022 446.945 243.242 445.423 244.159C443.9 245.077 442.031 245.536 439.815 245.536C437.621 245.536 435.74 245.077 434.173 244.159C432.629 243.242 431.442 242.022 430.614 240.499C429.808 238.977 429.405 237.298 429.405 235.462ZM435.046 232.843V235.462C435.046 236.358 435.226 237.208 435.584 238.014C435.964 238.82 436.513 239.481 437.229 239.996C437.946 240.488 438.807 240.734 439.815 240.734C440.957 240.734 441.874 240.488 442.568 239.996C443.262 239.481 443.755 238.831 444.046 238.048C444.359 237.242 444.516 236.38 444.516 235.462V232.843C444.516 231.925 444.337 231.063 443.979 230.257C443.643 229.451 443.117 228.802 442.401 228.31C441.707 227.817 440.822 227.571 439.748 227.571C438.696 227.571 437.822 227.817 437.128 228.31C436.434 228.802 435.908 229.451 435.55 230.257C435.214 231.063 435.046 231.925 435.046 232.843ZM441.762 202.923L417.887 241.137L413.757 238.753L437.632 200.539L441.762 202.923Z"
            fill="url(#paint6_linear_81_5692)"
          />
        </g>
        <path
          id="PÃ¡gina de inicio"
          display="none"
          d="M37.6875 52.0938V72H34.2559V52.0938H37.6875ZM44.8926 60.3652V72H41.5977V57.207H44.7012L44.8926 60.3652ZM44.3047 64.0566L43.2383 64.043C43.2474 62.9948 43.3932 62.0332 43.6758 61.1582C43.9674 60.2832 44.3685 59.5312 44.8789 58.9023C45.3984 58.2734 46.0182 57.7904 46.7383 57.4531C47.4583 57.1068 48.2604 56.9336 49.1445 56.9336C49.8555 56.9336 50.498 57.0339 51.0723 57.2344C51.6556 57.4258 52.1523 57.7402 52.5625 58.1777C52.9818 58.6152 53.3008 59.1849 53.5195 59.8867C53.7383 60.5794 53.8477 61.4316 53.8477 62.4434V72H50.5391V62.4297C50.5391 61.7188 50.4342 61.1582 50.2246 60.748C50.0241 60.3288 49.7279 60.0326 49.3359 59.8594C48.9531 59.6771 48.4746 59.5859 47.9004 59.5859C47.3353 59.5859 46.8294 59.7044 46.3828 59.9414C45.9362 60.1784 45.5579 60.502 45.248 60.9121C44.9473 61.3223 44.7148 61.7962 44.5508 62.334C44.3867 62.8717 44.3047 63.446 44.3047 64.0566ZM63.9922 57.207V59.6133H55.6523V57.207H63.9922ZM58.0586 53.584H61.3535V67.9121C61.3535 68.3678 61.4173 68.7188 61.5449 68.9648C61.6816 69.2018 61.8685 69.3613 62.1055 69.4434C62.3424 69.5254 62.6204 69.5664 62.9395 69.5664C63.1673 69.5664 63.3861 69.5527 63.5957 69.5254C63.8053 69.498 63.974 69.4707 64.1016 69.4434L64.1152 71.959C63.8418 72.041 63.5228 72.1139 63.1582 72.1777C62.8027 72.2415 62.3926 72.2734 61.9277 72.2734C61.1712 72.2734 60.5013 72.1413 59.918 71.877C59.3346 71.6035 58.8789 71.1615 58.5508 70.5508C58.2227 69.9401 58.0586 69.1289 58.0586 68.1172V53.584ZM73.0566 72.2734C71.9629 72.2734 70.974 72.0957 70.0898 71.7402C69.2148 71.3757 68.4674 70.8698 67.8477 70.2227C67.237 69.5755 66.7676 68.8145 66.4395 67.9395C66.1113 67.0645 65.9473 66.1211 65.9473 65.1094V64.5625C65.9473 63.4049 66.1159 62.3568 66.4531 61.418C66.7904 60.4792 67.2598 59.6771 67.8613 59.0117C68.4629 58.3372 69.1738 57.8223 69.9941 57.4668C70.8145 57.1113 71.7031 56.9336 72.6602 56.9336C73.7174 56.9336 74.6426 57.1113 75.4355 57.4668C76.2285 57.8223 76.8848 58.3236 77.4043 58.9707C77.9329 59.6087 78.3249 60.3698 78.5801 61.2539C78.8444 62.138 78.9766 63.1133 78.9766 64.1797V65.5879H67.5469V63.2227H75.7227V62.9629C75.7044 62.3704 75.5859 61.8145 75.3672 61.2949C75.1576 60.7754 74.834 60.3561 74.3965 60.0371C73.959 59.7181 73.3757 59.5586 72.6465 59.5586C72.0996 59.5586 71.612 59.6771 71.1836 59.9141C70.7643 60.1419 70.4134 60.4746 70.1309 60.9121C69.8483 61.3496 69.6296 61.8783 69.4746 62.498C69.3288 63.1087 69.2559 63.7969 69.2559 64.5625V65.1094C69.2559 65.7565 69.3424 66.3581 69.5156 66.9141C69.6979 67.4609 69.9622 67.9395 70.3086 68.3496C70.6549 68.7598 71.0742 69.0833 71.5664 69.3203C72.0586 69.5482 72.6191 69.6621 73.248 69.6621C74.041 69.6621 74.7474 69.5026 75.3672 69.1836C75.987 68.8646 76.5247 68.4134 76.9805 67.8301L78.7168 69.5117C78.3978 69.9766 77.9831 70.4232 77.4727 70.8516C76.9622 71.2708 76.3379 71.6126 75.5996 71.877C74.8704 72.1413 74.0228 72.2734 73.0566 72.2734ZM84.8555 60.0234V72H81.5605V57.207H84.7051L84.8555 60.0234ZM89.3809 57.1113L89.3535 60.1738C89.153 60.1374 88.9342 60.11 88.6973 60.0918C88.4694 60.0736 88.2415 60.0645 88.0137 60.0645C87.4486 60.0645 86.9518 60.1465 86.5234 60.3105C86.0951 60.4655 85.735 60.6934 85.4434 60.9941C85.1608 61.2858 84.9421 61.6413 84.7871 62.0605C84.6322 62.4798 84.541 62.9492 84.5137 63.4688L83.7617 63.5234C83.7617 62.5938 83.8529 61.7324 84.0352 60.9395C84.2174 60.1465 84.4909 59.4492 84.8555 58.8477C85.2292 58.2461 85.694 57.7767 86.25 57.4395C86.8151 57.1022 87.4668 56.9336 88.2051 56.9336C88.4056 56.9336 88.6198 56.9518 88.8477 56.9883C89.0846 57.0247 89.2624 57.0658 89.3809 57.1113ZM94.7129 60.3652V72H91.418V57.207H94.5215L94.7129 60.3652ZM94.125 64.0566L93.0586 64.043C93.0677 62.9948 93.2135 62.0332 93.4961 61.1582C93.7878 60.2832 94.1888 59.5312 94.6992 58.9023C95.2188 58.2734 95.8385 57.7904 96.5586 57.4531C97.2786 57.1068 98.0807 56.9336 98.9648 56.9336C99.6758 56.9336 100.318 57.0339 100.893 57.2344C101.476 57.4258 101.973 57.7402 102.383 58.1777C102.802 58.6152 103.121 59.1849 103.34 59.8867C103.559 60.5794 103.668 61.4316 103.668 62.4434V72H100.359V62.4297C100.359 61.7188 100.255 61.1582 100.045 60.748C99.8444 60.3288 99.5482 60.0326 99.1562 59.8594C98.7734 59.6771 98.2949 59.5859 97.7207 59.5859C97.1556 59.5859 96.6497 59.7044 96.2031 59.9414C95.7565 60.1784 95.3783 60.502 95.0684 60.9121C94.7676 61.3223 94.5352 61.7962 94.3711 62.334C94.207 62.8717 94.125 63.446 94.125 64.0566ZM113.553 72.2734C112.459 72.2734 111.47 72.0957 110.586 71.7402C109.711 71.3757 108.964 70.8698 108.344 70.2227C107.733 69.5755 107.264 68.8145 106.936 67.9395C106.607 67.0645 106.443 66.1211 106.443 65.1094V64.5625C106.443 63.4049 106.612 62.3568 106.949 61.418C107.286 60.4792 107.756 59.6771 108.357 59.0117C108.959 58.3372 109.67 57.8223 110.49 57.4668C111.311 57.1113 112.199 56.9336 113.156 56.9336C114.214 56.9336 115.139 57.1113 115.932 57.4668C116.725 57.8223 117.381 58.3236 117.9 58.9707C118.429 59.6087 118.821 60.3698 119.076 61.2539C119.34 62.138 119.473 63.1133 119.473 64.1797V65.5879H108.043V63.2227H116.219V62.9629C116.201 62.3704 116.082 61.8145 115.863 61.2949C115.654 60.7754 115.33 60.3561 114.893 60.0371C114.455 59.7181 113.872 59.5586 113.143 59.5586C112.596 59.5586 112.108 59.6771 111.68 59.9141C111.26 60.1419 110.91 60.4746 110.627 60.9121C110.344 61.3496 110.126 61.8783 109.971 62.498C109.825 63.1087 109.752 63.7969 109.752 64.5625V65.1094C109.752 65.7565 109.839 66.3581 110.012 66.9141C110.194 67.4609 110.458 67.9395 110.805 68.3496C111.151 68.7598 111.57 69.0833 112.062 69.3203C112.555 69.5482 113.115 69.6621 113.744 69.6621C114.537 69.6621 115.243 69.5026 115.863 69.1836C116.483 68.8646 117.021 68.4134 117.477 67.8301L119.213 69.5117C118.894 69.9766 118.479 70.4232 117.969 70.8516C117.458 71.2708 116.834 71.6126 116.096 71.877C115.367 72.1413 114.519 72.2734 113.553 72.2734ZM128.824 57.207V59.6133H120.484V57.207H128.824ZM122.891 53.584H126.186V67.9121C126.186 68.3678 126.249 68.7188 126.377 68.9648C126.514 69.2018 126.701 69.3613 126.938 69.4434C127.174 69.5254 127.452 69.5664 127.771 69.5664C127.999 69.5664 128.218 69.5527 128.428 69.5254C128.637 69.498 128.806 69.4707 128.934 69.4434L128.947 71.959C128.674 72.041 128.355 72.1139 127.99 72.1777C127.635 72.2415 127.225 72.2734 126.76 72.2734C126.003 72.2734 125.333 72.1413 124.75 71.877C124.167 71.6035 123.711 71.1615 123.383 70.5508C123.055 69.9401 122.891 69.1289 122.891 68.1172V53.584ZM141.648 60.0508V77.6875H138.354V57.207H141.389L141.648 60.0508ZM151.287 64.4668V64.7539C151.287 65.8294 151.16 66.8275 150.904 67.748C150.658 68.6595 150.289 69.457 149.797 70.1406C149.314 70.8151 148.717 71.3392 148.006 71.7129C147.295 72.0866 146.475 72.2734 145.545 72.2734C144.624 72.2734 143.818 72.1048 143.125 71.7676C142.441 71.4212 141.863 70.9336 141.389 70.3047C140.915 69.6758 140.532 68.9375 140.24 68.0898C139.958 67.2331 139.757 66.2943 139.639 65.2734V64.166C139.757 63.0814 139.958 62.097 140.24 61.2129C140.532 60.3288 140.915 59.5677 141.389 58.9297C141.863 58.2917 142.441 57.7995 143.125 57.4531C143.809 57.1068 144.606 56.9336 145.518 56.9336C146.447 56.9336 147.272 57.1159 147.992 57.4805C148.712 57.8359 149.318 58.3464 149.811 59.0117C150.303 59.668 150.672 60.4609 150.918 61.3906C151.164 62.3112 151.287 63.3366 151.287 64.4668ZM147.992 64.7539V64.4668C147.992 63.7832 147.928 63.1497 147.801 62.5664C147.673 61.974 147.473 61.4544 147.199 61.0078C146.926 60.5612 146.575 60.2148 146.146 59.9688C145.727 59.7135 145.221 59.5859 144.629 59.5859C144.046 59.5859 143.544 59.6862 143.125 59.8867C142.706 60.0781 142.355 60.347 142.072 60.6934C141.79 61.0397 141.571 61.4453 141.416 61.9102C141.261 62.3659 141.152 62.8626 141.088 63.4004V66.0527C141.197 66.709 141.384 67.3105 141.648 67.8574C141.913 68.4043 142.286 68.8418 142.77 69.1699C143.262 69.4889 143.891 69.6484 144.656 69.6484C145.249 69.6484 145.755 69.5208 146.174 69.2656C146.593 69.0104 146.935 68.6595 147.199 68.2129C147.473 67.7572 147.673 67.2331 147.801 66.6406C147.928 66.0482 147.992 65.4193 147.992 64.7539ZM160.611 72.2734C159.518 72.2734 158.529 72.0957 157.645 71.7402C156.77 71.3757 156.022 70.8698 155.402 70.2227C154.792 69.5755 154.322 68.8145 153.994 67.9395C153.666 67.0645 153.502 66.1211 153.502 65.1094V64.5625C153.502 63.4049 153.671 62.3568 154.008 61.418C154.345 60.4792 154.814 59.6771 155.416 59.0117C156.018 58.3372 156.729 57.8223 157.549 57.4668C158.369 57.1113 159.258 56.9336 160.215 56.9336C161.272 56.9336 162.197 57.1113 162.99 57.4668C163.783 57.8223 164.439 58.3236 164.959 58.9707C165.488 59.6087 165.88 60.3698 166.135 61.2539C166.399 62.138 166.531 63.1133 166.531 64.1797V65.5879H155.102V63.2227H163.277V62.9629C163.259 62.3704 163.141 61.8145 162.922 61.2949C162.712 60.7754 162.389 60.3561 161.951 60.0371C161.514 59.7181 160.93 59.5586 160.201 59.5586C159.654 59.5586 159.167 59.6771 158.738 59.9141C158.319 60.1419 157.968 60.4746 157.686 60.9121C157.403 61.3496 157.184 61.8783 157.029 62.498C156.883 63.1087 156.811 63.7969 156.811 64.5625V65.1094C156.811 65.7565 156.897 66.3581 157.07 66.9141C157.253 67.4609 157.517 67.9395 157.863 68.3496C158.21 68.7598 158.629 69.0833 159.121 69.3203C159.613 69.5482 160.174 69.6621 160.803 69.6621C161.596 69.6621 162.302 69.5026 162.922 69.1836C163.542 68.8646 164.079 68.4134 164.535 67.8301L166.271 69.5117C165.952 69.9766 165.538 70.4232 165.027 70.8516C164.517 71.2708 163.893 71.6126 163.154 71.877C162.425 72.1413 161.577 72.2734 160.611 72.2734ZM172.369 60.3652V72H169.074V57.207H172.178L172.369 60.3652ZM171.781 64.0566L170.715 64.043C170.724 62.9948 170.87 62.0332 171.152 61.1582C171.444 60.2832 171.845 59.5312 172.355 58.9023C172.875 58.2734 173.495 57.7904 174.215 57.4531C174.935 57.1068 175.737 56.9336 176.621 56.9336C177.332 56.9336 177.975 57.0339 178.549 57.2344C179.132 57.4258 179.629 57.7402 180.039 58.1777C180.458 58.6152 180.777 59.1849 180.996 59.8867C181.215 60.5794 181.324 61.4316 181.324 62.4434V72H178.016V62.4297C178.016 61.7188 177.911 61.1582 177.701 60.748C177.501 60.3288 177.204 60.0326 176.812 59.8594C176.43 59.6771 175.951 59.5859 175.377 59.5859C174.812 59.5859 174.306 59.7044 173.859 59.9414C173.413 60.1784 173.035 60.502 172.725 60.9121C172.424 61.3223 172.191 61.7962 172.027 62.334C171.863 62.8717 171.781 63.446 171.781 64.0566ZM191.209 72.2734C190.115 72.2734 189.126 72.0957 188.242 71.7402C187.367 71.3757 186.62 70.8698 186 70.2227C185.389 69.5755 184.92 68.8145 184.592 67.9395C184.264 67.0645 184.1 66.1211 184.1 65.1094V64.5625C184.1 63.4049 184.268 62.3568 184.605 61.418C184.943 60.4792 185.412 59.6771 186.014 59.0117C186.615 58.3372 187.326 57.8223 188.146 57.4668C188.967 57.1113 189.855 56.9336 190.812 56.9336C191.87 56.9336 192.795 57.1113 193.588 57.4668C194.381 57.8223 195.037 58.3236 195.557 58.9707C196.085 59.6087 196.477 60.3698 196.732 61.2539C196.997 62.138 197.129 63.1133 197.129 64.1797V65.5879H185.699V63.2227H193.875V62.9629C193.857 62.3704 193.738 61.8145 193.52 61.2949C193.31 60.7754 192.986 60.3561 192.549 60.0371C192.111 59.7181 191.528 59.5586 190.799 59.5586C190.252 59.5586 189.764 59.6771 189.336 59.9141C188.917 60.1419 188.566 60.4746 188.283 60.9121C188.001 61.3496 187.782 61.8783 187.627 62.498C187.481 63.1087 187.408 63.7969 187.408 64.5625V65.1094C187.408 65.7565 187.495 66.3581 187.668 66.9141C187.85 67.4609 188.115 67.9395 188.461 68.3496C188.807 68.7598 189.227 69.0833 189.719 69.3203C190.211 69.5482 190.771 69.6621 191.4 69.6621C192.193 69.6621 192.9 69.5026 193.52 69.1836C194.139 68.8646 194.677 68.4134 195.133 67.8301L196.869 69.5117C196.55 69.9766 196.135 70.4232 195.625 70.8516C195.115 71.2708 194.49 71.6126 193.752 71.877C193.023 72.1413 192.175 72.2734 191.209 72.2734ZM206.48 57.207V59.6133H198.141V57.207H206.48ZM200.547 53.584H203.842V67.9121C203.842 68.3678 203.906 68.7188 204.033 68.9648C204.17 69.2018 204.357 69.3613 204.594 69.4434C204.831 69.5254 205.109 69.5664 205.428 69.5664C205.656 69.5664 205.874 69.5527 206.084 69.5254C206.294 69.498 206.462 69.4707 206.59 69.4434L206.604 71.959C206.33 72.041 206.011 72.1139 205.646 72.1777C205.291 72.2415 204.881 72.2734 204.416 72.2734C203.66 72.2734 202.99 72.1413 202.406 71.877C201.823 71.6035 201.367 71.1615 201.039 70.5508C200.711 69.9401 200.547 69.1289 200.547 68.1172V53.584ZM212.332 60.0234V72H209.037V57.207H212.182L212.332 60.0234ZM216.857 57.1113L216.83 60.1738C216.63 60.1374 216.411 60.11 216.174 60.0918C215.946 60.0736 215.718 60.0645 215.49 60.0645C214.925 60.0645 214.428 60.1465 214 60.3105C213.572 60.4655 213.212 60.6934 212.92 60.9941C212.637 61.2858 212.419 61.6413 212.264 62.0605C212.109 62.4798 212.018 62.9492 211.99 63.4688L211.238 63.5234C211.238 62.5938 211.329 61.7324 211.512 60.9395C211.694 60.1465 211.967 59.4492 212.332 58.8477C212.706 58.2461 213.171 57.7767 213.727 57.4395C214.292 57.1022 214.943 56.9336 215.682 56.9336C215.882 56.9336 216.096 56.9518 216.324 56.9883C216.561 57.0247 216.739 57.0658 216.857 57.1113ZM226.77 69.0332V61.9785C226.77 61.4499 226.674 60.9941 226.482 60.6113C226.291 60.2285 225.999 59.9323 225.607 59.7227C225.225 59.513 224.742 59.4082 224.158 59.4082C223.62 59.4082 223.156 59.4993 222.764 59.6816C222.372 59.8639 222.066 60.11 221.848 60.4199C221.629 60.7298 221.52 61.0807 221.52 61.4727H218.238C218.238 60.8893 218.38 60.3242 218.662 59.7773C218.945 59.2305 219.355 58.7428 219.893 58.3145C220.43 57.8861 221.073 57.5488 221.82 57.3027C222.568 57.0566 223.406 56.9336 224.336 56.9336C225.448 56.9336 226.432 57.1204 227.289 57.4941C228.155 57.8678 228.834 58.4329 229.326 59.1895C229.827 59.9368 230.078 60.8757 230.078 62.0059V68.582C230.078 69.2565 230.124 69.8626 230.215 70.4004C230.315 70.929 230.456 71.3893 230.639 71.7812V72H227.262C227.107 71.6445 226.984 71.1934 226.893 70.6465C226.811 70.0905 226.77 69.5527 226.77 69.0332ZM227.248 63.0039L227.275 65.041H224.91C224.299 65.041 223.762 65.1003 223.297 65.2188C222.832 65.3281 222.445 65.4922 222.135 65.7109C221.825 65.9297 221.592 66.194 221.438 66.5039C221.283 66.8138 221.205 67.1647 221.205 67.5566C221.205 67.9486 221.296 68.3086 221.479 68.6367C221.661 68.9557 221.925 69.2064 222.271 69.3887C222.627 69.571 223.055 69.6621 223.557 69.6621C224.231 69.6621 224.819 69.5254 225.32 69.252C225.831 68.9694 226.232 68.6276 226.523 68.2266C226.815 67.8164 226.97 67.429 226.988 67.0645L228.055 68.5273C227.945 68.901 227.758 69.3021 227.494 69.7305C227.23 70.1589 226.883 70.569 226.455 70.9609C226.036 71.3438 225.53 71.6582 224.938 71.9043C224.354 72.1504 223.68 72.2734 222.914 72.2734C221.948 72.2734 221.087 72.082 220.33 71.6992C219.574 71.3073 218.981 70.7832 218.553 70.127C218.124 69.4616 217.91 68.7096 217.91 67.8711C217.91 67.0872 218.056 66.3945 218.348 65.793C218.648 65.1823 219.086 64.6719 219.66 64.2617C220.243 63.8516 220.954 63.5417 221.793 63.332C222.632 63.1133 223.589 63.0039 224.664 63.0039H227.248ZM240.305 57.207V59.6133H231.965V57.207H240.305ZM234.371 53.584H237.666V67.9121C237.666 68.3678 237.73 68.7188 237.857 68.9648C237.994 69.2018 238.181 69.3613 238.418 69.4434C238.655 69.5254 238.933 69.5664 239.252 69.5664C239.48 69.5664 239.699 69.5527 239.908 69.5254C240.118 69.498 240.286 69.4707 240.414 69.4434L240.428 71.959C240.154 72.041 239.835 72.1139 239.471 72.1777C239.115 72.2415 238.705 72.2734 238.24 72.2734C237.484 72.2734 236.814 72.1413 236.23 71.877C235.647 71.6035 235.191 71.1615 234.863 70.5508C234.535 69.9401 234.371 69.1289 234.371 68.1172V53.584ZM246.375 57.207V72H243.066V57.207H246.375ZM242.848 53.3242C242.848 52.8229 243.012 52.4082 243.34 52.0801C243.677 51.7428 244.142 51.5742 244.734 51.5742C245.318 51.5742 245.778 51.7428 246.115 52.0801C246.452 52.4082 246.621 52.8229 246.621 53.3242C246.621 53.8164 246.452 54.2266 246.115 54.5547C245.778 54.8828 245.318 55.0469 244.734 55.0469C244.142 55.0469 243.677 54.8828 243.34 54.5547C243.012 54.2266 242.848 53.8164 242.848 53.3242ZM249.355 64.7676V64.4531C249.355 63.3867 249.51 62.3978 249.82 61.4863C250.13 60.5658 250.577 59.7682 251.16 59.0938C251.753 58.4102 252.473 57.8815 253.32 57.5078C254.177 57.125 255.143 56.9336 256.219 56.9336C257.303 56.9336 258.27 57.125 259.117 57.5078C259.974 57.8815 260.699 58.4102 261.291 59.0938C261.883 59.7682 262.335 60.5658 262.645 61.4863C262.954 62.3978 263.109 63.3867 263.109 64.4531V64.7676C263.109 65.834 262.954 66.8229 262.645 67.7344C262.335 68.6458 261.883 69.4434 261.291 70.127C260.699 70.8014 259.979 71.3301 259.131 71.7129C258.283 72.0866 257.322 72.2734 256.246 72.2734C255.161 72.2734 254.191 72.0866 253.334 71.7129C252.486 71.3301 251.766 70.8014 251.174 70.127C250.581 69.4434 250.13 68.6458 249.82 67.7344C249.51 66.8229 249.355 65.834 249.355 64.7676ZM252.65 64.4531V64.7676C252.65 65.4329 252.719 66.0618 252.855 66.6543C252.992 67.2467 253.206 67.7663 253.498 68.2129C253.79 68.6595 254.163 69.0104 254.619 69.2656C255.075 69.5208 255.617 69.6484 256.246 69.6484C256.857 69.6484 257.385 69.5208 257.832 69.2656C258.288 69.0104 258.661 68.6595 258.953 68.2129C259.245 67.7663 259.459 67.2467 259.596 66.6543C259.742 66.0618 259.814 65.4329 259.814 64.7676V64.4531C259.814 63.7969 259.742 63.1771 259.596 62.5938C259.459 62.0013 259.24 61.4772 258.939 61.0215C258.648 60.5658 258.274 60.2103 257.818 59.9551C257.372 59.6908 256.839 59.5586 256.219 59.5586C255.599 59.5586 255.061 59.6908 254.605 59.9551C254.159 60.2103 253.79 60.5658 253.498 61.0215C253.206 61.4772 252.992 62.0013 252.855 62.5938C252.719 63.1771 252.65 63.7969 252.65 64.4531ZM269.139 60.3652V72H265.844V57.207H268.947L269.139 60.3652ZM268.551 64.0566L267.484 64.043C267.493 62.9948 267.639 62.0332 267.922 61.1582C268.214 60.2832 268.615 59.5312 269.125 58.9023C269.645 58.2734 270.264 57.7904 270.984 57.4531C271.704 57.1068 272.507 56.9336 273.391 56.9336C274.102 56.9336 274.744 57.0339 275.318 57.2344C275.902 57.4258 276.398 57.7402 276.809 58.1777C277.228 58.6152 277.547 59.1849 277.766 59.8867C277.984 60.5794 278.094 61.4316 278.094 62.4434V72H274.785V62.4297C274.785 61.7188 274.68 61.1582 274.471 60.748C274.27 60.3288 273.974 60.0326 273.582 59.8594C273.199 59.6771 272.721 59.5859 272.146 59.5859C271.581 59.5859 271.076 59.7044 270.629 59.9414C270.182 60.1784 269.804 60.502 269.494 60.9121C269.193 61.3223 268.961 61.7962 268.797 62.334C268.633 62.8717 268.551 63.446 268.551 64.0566ZM291.738 60.0234V72H288.443V57.207H291.588L291.738 60.0234ZM296.264 57.1113L296.236 60.1738C296.036 60.1374 295.817 60.11 295.58 60.0918C295.352 60.0736 295.124 60.0645 294.896 60.0645C294.331 60.0645 293.835 60.1465 293.406 60.3105C292.978 60.4655 292.618 60.6934 292.326 60.9941C292.044 61.2858 291.825 61.6413 291.67 62.0605C291.515 62.4798 291.424 62.9492 291.396 63.4688L290.645 63.5234C290.645 62.5938 290.736 61.7324 290.918 60.9395C291.1 60.1465 291.374 59.4492 291.738 58.8477C292.112 58.2461 292.577 57.7767 293.133 57.4395C293.698 57.1022 294.35 56.9336 295.088 56.9336C295.288 56.9336 295.503 56.9518 295.73 56.9883C295.967 57.0247 296.145 57.0658 296.264 57.1113ZM306.176 69.0332V61.9785C306.176 61.4499 306.08 60.9941 305.889 60.6113C305.697 60.2285 305.406 59.9323 305.014 59.7227C304.631 59.513 304.148 59.4082 303.564 59.4082C303.027 59.4082 302.562 59.4993 302.17 59.6816C301.778 59.8639 301.473 60.11 301.254 60.4199C301.035 60.7298 300.926 61.0807 300.926 61.4727H297.645C297.645 60.8893 297.786 60.3242 298.068 59.7773C298.351 59.2305 298.761 58.7428 299.299 58.3145C299.837 57.8861 300.479 57.5488 301.227 57.3027C301.974 57.0566 302.812 56.9336 303.742 56.9336C304.854 56.9336 305.839 57.1204 306.695 57.4941C307.561 57.8678 308.24 58.4329 308.732 59.1895C309.234 59.9368 309.484 60.8757 309.484 62.0059V68.582C309.484 69.2565 309.53 69.8626 309.621 70.4004C309.721 70.929 309.863 71.3893 310.045 71.7812V72H306.668C306.513 71.6445 306.39 71.1934 306.299 70.6465C306.217 70.0905 306.176 69.5527 306.176 69.0332ZM306.654 63.0039L306.682 65.041H304.316C303.706 65.041 303.168 65.1003 302.703 65.2188C302.238 65.3281 301.851 65.4922 301.541 65.7109C301.231 65.9297 300.999 66.194 300.844 66.5039C300.689 66.8138 300.611 67.1647 300.611 67.5566C300.611 67.9486 300.702 68.3086 300.885 68.6367C301.067 68.9557 301.331 69.2064 301.678 69.3887C302.033 69.571 302.462 69.6621 302.963 69.6621C303.637 69.6621 304.225 69.5254 304.727 69.252C305.237 68.9694 305.638 68.6276 305.93 68.2266C306.221 67.8164 306.376 67.429 306.395 67.0645L307.461 68.5273C307.352 68.901 307.165 69.3021 306.9 69.7305C306.636 70.1589 306.29 70.569 305.861 70.9609C305.442 71.3438 304.936 71.6582 304.344 71.9043C303.76 72.1504 303.086 72.2734 302.32 72.2734C301.354 72.2734 300.493 72.082 299.736 71.6992C298.98 71.3073 298.387 70.7832 297.959 70.127C297.531 69.4616 297.316 68.7096 297.316 67.8711C297.316 67.0872 297.462 66.3945 297.754 65.793C298.055 65.1823 298.492 64.6719 299.066 64.2617C299.65 63.8516 300.361 63.5417 301.199 63.332C302.038 63.1133 302.995 63.0039 304.07 63.0039H306.654ZM319.711 57.207V59.6133H311.371V57.207H319.711ZM313.777 53.584H317.072V67.9121C317.072 68.3678 317.136 68.7188 317.264 68.9648C317.4 69.2018 317.587 69.3613 317.824 69.4434C318.061 69.5254 318.339 69.5664 318.658 69.5664C318.886 69.5664 319.105 69.5527 319.314 69.5254C319.524 69.498 319.693 69.4707 319.82 69.4434L319.834 71.959C319.561 72.041 319.242 72.1139 318.877 72.1777C318.521 72.2415 318.111 72.2734 317.646 72.2734C316.89 72.2734 316.22 72.1413 315.637 71.877C315.053 71.6035 314.598 71.1615 314.27 70.5508C313.941 69.9401 313.777 69.1289 313.777 68.1172V53.584ZM328.775 72.2734C327.682 72.2734 326.693 72.0957 325.809 71.7402C324.934 71.3757 324.186 70.8698 323.566 70.2227C322.956 69.5755 322.486 68.8145 322.158 67.9395C321.83 67.0645 321.666 66.1211 321.666 65.1094V64.5625C321.666 63.4049 321.835 62.3568 322.172 61.418C322.509 60.4792 322.979 59.6771 323.58 59.0117C324.182 58.3372 324.893 57.8223 325.713 57.4668C326.533 57.1113 327.422 56.9336 328.379 56.9336C329.436 56.9336 330.361 57.1113 331.154 57.4668C331.947 57.8223 332.604 58.3236 333.123 58.9707C333.652 59.6087 334.044 60.3698 334.299 61.2539C334.563 62.138 334.695 63.1133 334.695 64.1797V65.5879H323.266V63.2227H331.441V62.9629C331.423 62.3704 331.305 61.8145 331.086 61.2949C330.876 60.7754 330.553 60.3561 330.115 60.0371C329.678 59.7181 329.094 59.5586 328.365 59.5586C327.818 59.5586 327.331 59.6771 326.902 59.9141C326.483 60.1419 326.132 60.4746 325.85 60.9121C325.567 61.3496 325.348 61.8783 325.193 62.498C325.048 63.1087 324.975 63.7969 324.975 64.5625V65.1094C324.975 65.7565 325.061 66.3581 325.234 66.9141C325.417 67.4609 325.681 67.9395 326.027 68.3496C326.374 68.7598 326.793 69.0833 327.285 69.3203C327.777 69.5482 328.338 69.6621 328.967 69.6621C329.76 69.6621 330.466 69.5026 331.086 69.1836C331.706 68.8646 332.243 68.4134 332.699 67.8301L334.436 69.5117C334.117 69.9766 333.702 70.4232 333.191 70.8516C332.681 71.2708 332.057 71.6126 331.318 71.877C330.589 72.1413 329.742 72.2734 328.775 72.2734Z"
          fill="black"
        />
        <text
          x="38"
          y="72"
          fill="#000000"
          fontFamily="Roboto, sans-serif"
          fontSize="28"
          fontWeight="500"
        >
          {title}
        </text>
        <text
          x="359.5"
          y="224"
          fill="url(#paint6_linear_81_5692)"
          fontFamily="Roboto, sans-serif"
          fontSize="67"
          fontWeight="500"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {value}%
        </text>
      </g>
      <defs>
        <filter
          id="filter0_d_81_5692"
          x="192.47"
          y="104.906"
          width="334.06"
          height="245.947"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="6.99375" />
          <feGaussianBlur stdDeviation="17.4844" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.812388 0 0 0 0 0.849877 0 0 0 0 0.90236 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_81_5692"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_81_5692"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_81_5692"
          x="223.233"
          y="128.219"
          width="272.533"
          height="185.334"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="6.99375" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.489478 0 0 0 0 0.512718 0 0 0 0 0.559196 0 0 0 0.15 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_81_5692"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_81_5692"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_81_5692"
          x1="498.898"
          y1="206.898"
          x2="667.032"
          y2="206.898"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E6E9F5" />
          <stop offset={1} stopColor="#E6E9F5" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="paint1_linear_81_5692"
          x1="498.898"
          y1="113.065"
          x2="541.383"
          y2="52.8382"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E6E9F5" />
          <stop offset={1} stopColor="#E6E9F5" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="paint2_linear_81_5692"
          x1="398.629"
          y1="389.902"
          x2="566.762"
          y2="389.902"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E6E9F5" />
          <stop offset={1} stopColor="#E6E9F5" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="paint3_linear_81_5692"
          x1="1.94334e-06"
          y1="15.7359"
          x2="17.4304"
          y2="62.9235"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E6E9F5" />
          <stop offset={1} stopColor="#E6E9F5" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="paint4_linear_81_5692"
          x1={0}
          y1="74.0172"
          x2="168.134"
          y2="74.0172"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E6E9F5" />
          <stop offset={1} stopColor="#E6E9F5" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="paint5_linear_81_5692"
          x1="2.57922e-06"
          y1="161.439"
          x2="48.032"
          y2="86.4575"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E6E9F5" />
          <stop offset={1} stopColor="#E6E9F5" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="paint6_linear_81_5692"
          x1="457.977"
          y1="224.178"
          x2="288.831"
          y2="283.445"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4F85FF" />
          <stop offset="0.60932" stopColor="#3B61B8" />
          <stop offset={1} stopColor="#00133F" />
        </linearGradient>
      </defs>
    </svg>
  );

  return (
    <svg
      className="h-auto w-full"
      viewBox="0 0 719 373"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group 673">
        <rect
          id="Rectangle 570"
          width={719}
          height={373}
          rx="27.975"
          fill="#F0F5FF"
        />
        <g id="Mask group">
          <g id="Mask group_2">
            <mask
              id="mask0_55_45505"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x={0}
              y={0}
              width={719}
              height={373}
            >
              <rect
                id="Rectangle 571"
                width={719}
                height={373}
                rx="27.975"
                fill="#F6F7F9"
              />
            </mask>
            <g mask="url(#mask0_55_45505)">
              <g id="Group 773">
                <rect
                  id="Rectangle 686"
                  x="500.064"
                  y="134.046"
                  width="261.791"
                  height="173.678"
                  rx="17.4844"
                  fill="white"
                  fillOpacity="0.5"
                  stroke="url(#paint0_linear_55_45505)"
                  strokeWidth="2.33125"
                />
                <rect
                  id="Rectangle 691"
                  x="500.064"
                  y="-48.9564"
                  width="261.791"
                  height="173.678"
                  rx="17.4844"
                  fill="#FFFDFD"
                  fillOpacity="0.2"
                  stroke="url(#paint1_linear_55_45505)"
                  strokeWidth="2.33125"
                />
                <rect
                  id="Rectangle 688"
                  x="399.795"
                  y="317.05"
                  width="261.791"
                  height="173.678"
                  rx="17.4844"
                  fill="white"
                  fillOpacity="0.2"
                  stroke="url(#paint2_linear_55_45505)"
                  strokeWidth="2.33125"
                />
                <rect
                  id="Rectangle 689"
                  x="-1.16562"
                  y="1.16562"
                  width="261.791"
                  height="173.678"
                  rx="17.4844"
                  transform="matrix(-1 0 0 1 217.77 315.885)"
                  fill="white"
                  fillOpacity="0.2"
                  stroke="url(#paint3_linear_55_45505)"
                  strokeWidth="2.33125"
                />
                <rect
                  id="Rectangle 687"
                  x="-1.16562"
                  y="1.16562"
                  width="261.791"
                  height="173.678"
                  rx="17.4844"
                  transform="matrix(-1 0 0 1 217.77 132.881)"
                  fill="white"
                  fillOpacity="0.5"
                  stroke="url(#paint4_linear_55_45505)"
                  strokeWidth="2.33125"
                />
                <rect
                  id="Rectangle 690"
                  x="-1.16562"
                  y="1.16562"
                  width="261.791"
                  height="173.678"
                  rx="17.4844"
                  transform="matrix(-1 0 0 1 318.04 -50.1221)"
                  fill="white"
                  fillOpacity="0.2"
                  stroke="url(#paint5_linear_55_45505)"
                  strokeWidth="2.33125"
                />
              </g>
            </g>
          </g>
        </g>
        <g id="Group 1410134677">
          <mask
            id="mask1_55_45505"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x={173}
            y={86}
            width={373}
            height={270}
          >
            <rect
              id="Rectangle 797"
              x="173.636"
              y="86.2559"
              width="371.728"
              height="269.259"
              fill="#D9D9D9"
            />
          </mask>
          <g mask="url(#mask1_55_45505)">
            <g id="Group 790" filter="url(#filter0_d_55_45505)">
              <rect
                id="Rectangle 685"
                x="228.021"
                y="133.464"
                width="262.957"
                height="174.844"
                rx="18.0672"
                fill="#F6F8FF"
                stroke="#E1E7F4"
                strokeWidth="1.16562"
              />
              <g id="Rectangle 692" filter="url(#filter1_d_55_45505)">
                <rect
                  x="237.221"
                  y="142.206"
                  width="244.558"
                  height="157.359"
                  rx="13.9875"
                  fill="#FFFDFD"
                />
                <rect
                  x="238.386"
                  y="143.372"
                  width="242.227"
                  height="155.028"
                  rx="12.8219"
                  stroke="#E6E9F5"
                  strokeWidth="2.33125"
                />
              </g>
            </g>
          </g>
        </g>
      </g>
      <text
        x="50%"
        y="235"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="Roboto, sans-serif"
        fontWeight="500"
        fontSize="47"
        fill="url(#survey-second-text-gradient)"
      >
        {value}%
      </text>
      <defs>
        <linearGradient
          id="survey-second-text-gradient"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientTransform="rotate(71.423974 0.5 0.5)"
        >
          <stop offset="0%" stopColor="#4F85FF" />
          <stop offset="61%" stopColor="#3B61B8" />
          <stop offset="100%" stopColor="#00133F" />
        </linearGradient>
        <filter
          id="filter0_d_55_45505"
          x="192.47"
          y="104.906"
          width="334.06"
          height="245.947"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="6.99375" />
          <feGaussianBlur stdDeviation="17.4844" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.812388 0 0 0 0 0.849877 0 0 0 0 0.90236 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_55_45505"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_55_45505"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_55_45505"
          x="223.233"
          y="128.219"
          width="272.533"
          height="185.334"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="6.99375" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.489478 0 0 0 0 0.512718 0 0 0 0 0.559196 0 0 0 0.15 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_55_45505"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_55_45505"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_55_45505"
          x1="498.898"
          y1="206.898"
          x2="667.032"
          y2="206.898"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E6E9F5" />
          <stop offset={1} stopColor="#E6E9F5" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="paint1_linear_55_45505"
          x1="498.898"
          y1="113.065"
          x2="541.383"
          y2="52.8382"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E6E9F5" />
          <stop offset={1} stopColor="#E6E9F5" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="paint2_linear_55_45505"
          x1="398.629"
          y1="389.902"
          x2="566.762"
          y2="389.902"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E6E9F5" />
          <stop offset={1} stopColor="#E6E9F5" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="paint3_linear_55_45505"
          x1="1.94334e-06"
          y1="15.7359"
          x2="17.4304"
          y2="62.9235"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E6E9F5" />
          <stop offset={1} stopColor="#E6E9F5" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="paint4_linear_55_45505"
          x1={0}
          y1="74.0172"
          x2="168.134"
          y2="74.0172"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E6E9F5" />
          <stop offset={1} stopColor="#E6E9F5" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="paint5_linear_55_45505"
          x1="2.57922e-06"
          y1="161.439"
          x2="48.032"
          y2="86.4575"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E6E9F5" />
          <stop offset={1} stopColor="#E6E9F5" stopOpacity={0} />
        </linearGradient>
      </defs>
    </svg>
  );
};
