"use client";
import React, { useEffect, useState } from "react";
import { motion, Variants } from "motion/react";

import { IconSvgProps } from "@/types";

const iconDraw: Variants = {
  hidden: { scale: 0.2 },
  visible: {
    scale: 1,
    transition: { duration: 0.7, delay: 0.1 },
  },
};

export const PayinOne = ({ ...props }) => {
  return (
    <motion.svg
      initial="hidden"
      whileInView="visible"
      {...props}
      viewBox="0 0 93 92"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group 1410135214">
        <ellipse
          id="Ellipse 304"
          cx="46.9411"
          cy="46.1396"
          rx="45.9665"
          ry="45.6357"
          fill="#fff2e9"
        />
        <motion.g variants={iconDraw} id="Frame">
          <path
            id="Vector"
            d="M53.5108 59.3855C51.6536 54.8458 52.6854 49.687 56.1934 46.179C57.4315 44.9409 58.876 44.1155 60.3204 43.4964C60.9395 43.29 61.3522 42.671 61.3522 42.0519V30.7025C61.5586 28.2263 59.495 26.3691 57.2251 26.3691H30.8119C28.3357 26.3691 26.4785 28.2263 26.4785 30.7025V61.0364C26.4785 63.3062 28.3357 65.3698 30.8119 65.3698H58.2569C58.4633 65.3698 58.4633 65.1634 58.2569 64.9571C56.1934 63.7189 54.5426 61.6554 53.5108 59.3855ZM35.9708 59.3855C34.5263 59.3855 33.4945 58.3538 33.4945 56.9093C33.4945 55.4648 34.7326 54.4331 35.9708 54.4331C37.4152 54.4331 38.447 55.4648 38.447 56.9093C38.447 58.1474 37.4152 59.3855 35.9708 59.3855ZM35.9708 51.9569C34.5263 51.9569 33.4945 50.9251 33.4945 49.4806C33.4945 48.0362 34.7326 47.0044 35.9708 47.0044C37.4152 47.0044 38.447 48.0362 38.447 49.4806C38.447 50.9251 37.4152 51.9569 35.9708 51.9569ZM45.6694 59.3855C44.2249 59.3855 42.9868 58.1474 42.9868 56.9093C42.9868 55.4648 44.2249 54.4331 45.463 54.4331C46.9075 54.4331 47.9393 55.4648 47.9393 56.9093C48.1456 58.1474 46.9075 59.3855 45.6694 59.3855ZM45.6694 51.9569C44.2249 51.9569 43.1931 50.9251 43.1931 49.4806C43.1931 48.0362 44.4312 47.0044 45.6694 47.0044C47.1138 47.0044 48.1456 48.0362 48.1456 49.4806C48.1456 50.9251 46.9075 51.9569 45.6694 51.9569ZM35.9708 41.6392C34.3199 41.6392 33.0818 40.1948 33.0818 38.5439V35.0359C33.2882 33.5915 34.5263 32.3534 35.9708 32.3534H52.0663C53.7171 32.3534 54.9553 33.5915 54.9553 35.2423V38.9566C54.7489 40.4011 53.5108 41.6392 52.0663 41.6392H35.9708Z"
            fill="#FF6600"
          />
          <path
            id="Vector_2"
            d="M69.1945 44.7336C65.0674 43.0828 60.3213 43.9082 57.226 47.0035C54.1307 50.0988 53.0989 54.6385 54.7497 58.7656C56.4006 62.8926 60.5276 65.3689 64.861 65.3689C70.8453 65.3689 75.7978 60.6227 75.7978 54.6385C76.0041 50.5115 73.3215 46.5908 69.1945 44.7336ZM70.2262 58.3529H66.5119C66.3055 58.3529 66.3055 58.3529 66.3055 58.5592V61.6545C66.3055 62.0672 66.0992 62.2736 65.6865 62.4799H65.2738C65.0674 62.4799 64.861 62.4799 64.6547 62.2736C64.4483 62.0672 64.242 61.8609 64.242 61.4482V58.3529C64.242 58.1465 64.242 58.1465 64.0356 58.1465H60.5276C60.1149 58.1465 59.7022 57.9402 59.4959 57.5275C59.2895 57.1148 59.4959 56.7021 59.9086 56.4957C60.1149 56.2893 60.3213 56.2893 60.734 56.2893H64.4483V54.8449H60.9403C60.5276 54.8449 60.3213 54.6385 60.1149 54.4322C59.9086 54.2258 59.9086 54.0195 59.9086 53.6068C59.9086 53.1941 60.3213 52.7814 60.9403 52.7814H64.0356L60.3213 49.2734C59.9086 48.8607 59.9086 48.448 60.1149 48.0352C60.3213 47.8289 60.5276 47.6225 60.734 47.6225C60.9403 47.6225 61.353 47.6225 61.5594 47.8289L61.7657 48.0352L65.4801 51.5432C66.7182 50.3051 67.9563 49.2734 69.1945 48.0352C69.6072 47.8289 69.8135 47.6225 70.2262 47.8289C70.6389 47.8289 70.8453 48.2416 71.0516 48.448C71.258 48.8607 71.0516 49.067 70.8453 49.4797C70.4326 49.8924 70.0199 50.3051 69.6072 50.5115L66.9246 52.9877H70.0199C70.6389 52.9877 71.0516 53.1941 71.0516 53.8131C71.0516 54.0195 71.0516 54.4322 70.8453 54.6385C70.6389 54.8449 70.4326 55.0512 70.2262 55.0512H66.3055V56.4957H70.0199C70.4326 56.4957 70.8453 56.9084 71.0516 57.3211C70.8453 57.7338 70.6389 58.1465 70.2262 58.3529Z"
            fill="#FF6600"
          />
        </motion.g>
      </g>
    </motion.svg>
  );
};

export const PayinTwo = ({ ...props }) => {
  return (
    <motion.svg
      initial="hidden"
      whileInView="visible"
      {...props}
      viewBox="0 0 93 93"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group 1410135215">
        <ellipse
          id="Ellipse 305"
          cx="46.5622"
          cy="46.4703"
          rx="45.9665"
          ry="45.9664"
          fill="#fff2e9"
        />
        <motion.g
          variants={iconDraw}
          id="Frame"
          clipPath="url(#clip0_2316_916)"
        >
          <path
            id="Vector"
            opacity="0.01"
            d="M22.4238 22.3262H70.0438V69.946H22.4238V22.3262Z"
            fill="#FF6600"
          />
          <path
            id="Vector_2"
            d="M49.1767 23.6824C49.0658 23.5712 48.9244 23.4954 48.7704 23.4646C48.6164 23.4338 48.4568 23.4494 48.3116 23.5094C48.1665 23.5694 48.0424 23.6711 47.9551 23.8016C47.8678 23.9322 47.8212 24.0857 47.8211 24.2427V35.0254H34.3288C34.1183 35.0254 33.9165 35.109 33.7676 35.2579C33.6188 35.4067 33.5352 35.6086 33.5352 35.8191V43.7557C33.5352 43.9662 33.6188 44.1681 33.7676 44.3169C33.9165 44.4658 34.1183 44.5494 34.3288 44.5494H68.1279C68.2849 44.5494 68.4384 44.5027 68.569 44.4154C68.6995 44.3281 68.8012 44.204 68.8612 44.0589C68.9212 43.9138 68.9368 43.7541 68.906 43.6001C68.8752 43.4461 68.7994 43.3047 68.6882 43.1938L49.1767 23.6824Z"
            fill="#FF6600"
          />
          <path
            id="Vector_3"
            d="M43.7576 68.5897C43.8685 68.7008 44.0099 68.7766 44.1639 68.8074C44.3179 68.8382 44.4776 68.8226 44.6227 68.7626C44.7678 68.7026 44.8919 68.6009 44.9792 68.4704C45.0665 68.3399 45.1131 68.1864 45.1132 68.0293V57.2466H58.6055C58.816 57.2466 59.0179 57.163 59.1667 57.0142C59.3156 56.8653 59.3992 56.6634 59.3992 56.453V48.5163C59.3992 48.3058 59.3156 48.104 59.1667 47.9551C59.0179 47.8063 58.816 47.7227 58.6055 47.7227H24.8049C24.6477 47.7224 24.494 47.7688 24.3632 47.856C24.2324 47.9431 24.1304 48.0672 24.0703 48.2124C24.0101 48.3576 23.9944 48.5174 24.0251 48.6715C24.0558 48.8257 24.1317 48.9672 24.2429 49.0782L43.7576 68.5912V68.5897Z"
            fill="#FF6600"
          />
        </motion.g>
      </g>
      <defs>
        <clipPath id="clip0_2316_916">
          <rect
            width="47.6199"
            height="47.6198"
            fill="#FF6600"
            transform="translate(22.4238 22.3262)"
          />
        </clipPath>
      </defs>
    </motion.svg>
  );
};

export const PayinThree = ({ ...props }) => {
  return (
    <motion.svg
      initial="hidden"
      whileInView="visible"
      {...props}
      viewBox="0 0 93 93"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group 1410135216">
        <ellipse
          id="Ellipse 306"
          cx="46.9411"
          cy="46.5028"
          rx="45.9665"
          ry="45.6357"
          fill="#fff2e9"
        />
        <g id="Frame">
          <motion.path
            variants={iconDraw}
            id="Vector"
            d="M45.7957 26.3301L61.4829 31.2309C61.9204 31.3675 62.3028 31.6404 62.5742 32.0097C62.8457 32.379 62.992 32.8254 62.9918 33.2837V37.0776H67.2908C67.8609 37.0776 68.4077 37.3041 68.8108 37.7072C69.2139 38.1103 69.4404 38.657 69.4404 39.2271V43.5261H41.4967V39.2271C41.4967 38.657 41.7232 38.1103 42.1263 37.7072C42.5294 37.3041 43.0761 37.0776 43.6462 37.0776H58.6928V34.8636L45.7957 30.8311L32.8986 34.8636V50.7785C32.8983 52.0945 33.2001 53.393 33.7807 54.574C34.3613 55.755 35.2053 56.7869 36.2476 57.5903L36.6538 57.8827L45.7957 64.1162L53.9252 58.5727H43.6462C43.0761 58.5727 42.5294 58.3462 42.1263 57.9431C41.7232 57.54 41.4967 56.9932 41.4967 56.4231V47.8251H69.4404V56.4231C69.4404 56.9932 69.2139 57.54 68.8108 57.9431C68.4077 58.3462 67.8609 58.5727 67.2908 58.5727L60.3694 58.5748C59.5375 59.671 58.5273 60.6383 57.3601 61.4336L45.7957 69.3202L34.2313 61.4358C32.4956 60.2524 31.0753 58.6629 30.0938 56.8056C29.1123 54.9482 28.5994 52.8793 28.5996 50.7785V33.2837C28.5999 32.8258 28.7464 32.3798 29.0178 32.011C29.2893 31.6421 29.6714 31.3696 30.1086 31.2331L45.7957 26.3301Z"
            fill="#FF6600"
          />
        </g>
      </g>
    </motion.svg>
  );
};

export const PayinFour = ({ ...props }) => {
  return (
    <motion.svg
      initial="hidden"
      whileInView="visible"
      {...props}
      viewBox="0 0 93 93"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group 1410135217">
        <ellipse
          id="Ellipse 307"
          cx="46.5622"
          cy="46.8335"
          rx="45.9665"
          ry="45.9664"
          fill="#fff2e9"
        />
        <g id="Group">
          <motion.path
            variants={iconDraw}
            id="Vector"
            d="M65.4706 44.488H59.9824C58.5268 44.488 57.1308 45.0662 56.1016 46.0954C55.0723 47.1247 54.4941 48.5206 54.4941 49.9762C54.4941 51.4318 55.0723 52.8278 56.1016 53.857C57.1308 54.8862 58.5268 55.4645 59.9824 55.4645H65.4706V60.9527C65.4706 61.6805 65.1815 62.3785 64.6669 62.8931C64.1523 63.4077 63.4543 63.6969 62.7265 63.6969H29.7969C29.0691 63.6969 28.3711 63.4077 27.8565 62.8931C27.3418 62.3785 27.0527 61.6805 27.0527 60.9527V38.9997C27.0527 38.6393 27.1237 38.2825 27.2616 37.9496C27.3995 37.6166 27.6017 37.3141 27.8565 37.0593C28.1113 36.8045 28.4138 36.6024 28.7467 36.4645C29.0797 36.3266 29.4365 36.2556 29.7969 36.2556H62.7265C63.0869 36.2556 63.4437 36.3266 63.7766 36.4645C64.1096 36.6024 64.4121 36.8045 64.6669 37.0593C64.9217 37.3141 65.1238 37.6166 65.2617 37.9496C65.3996 38.2825 65.4706 38.6393 65.4706 38.9997V44.488ZM55.8662 26.7581V33.5114H31.1689L52.0079 24.25C52.4257 24.0644 52.8833 23.9861 53.3391 24.0223C53.7948 24.0584 54.2343 24.2079 54.6177 24.4571C55.001 24.7063 55.316 25.0473 55.534 25.4491C55.752 25.851 55.8662 26.301 55.8662 26.7581ZM59.9824 47.2321H65.4706C65.831 47.232 66.1879 47.303 66.5209 47.4408C66.8539 47.5787 67.1564 47.7809 67.4113 48.0357C67.6662 48.2905 67.8683 48.593 68.0063 48.926C68.1442 49.2589 68.2152 49.6158 68.2152 49.9762C68.2152 50.3366 68.1442 50.6935 68.0063 51.0264C67.8683 51.3594 67.6662 51.6619 67.4113 51.9168C67.1564 52.1716 66.8539 52.3737 66.5209 52.5116C66.1879 52.6495 65.831 52.7204 65.4706 52.7203H59.9824C59.622 52.7204 59.2651 52.6495 58.9321 52.5116C58.5991 52.3737 58.2965 52.1716 58.0417 51.9168C57.7868 51.6619 57.5847 51.3594 57.4467 51.0264C57.3088 50.6935 57.2378 50.3366 57.2378 49.9762C57.2378 49.6158 57.3088 49.2589 57.4467 48.926C57.5847 48.593 57.7868 48.2905 58.0417 48.0357C58.2965 47.7809 58.5991 47.5787 58.9321 47.4408C59.2651 47.303 59.622 47.232 59.9824 47.2321Z"
            fill="#FF6600"
          />
        </g>
      </g>
    </motion.svg>
  );
};

export const PayinFive = ({ ...props }) => {
  const iconDraw: Variants = {
    hidden: { opacity: 0, scale: 0.5, rotate: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 180,
      transition: { duration: 1, delay: 0.1 },
    },
  };
  return (
    <motion.svg
      initial="hidden"
      whileInView="visible"
      {...props}
      viewBox="0 0 206 206"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="web3">
        <g id="Group">
          <path
            id="accent"
            d="M22.3916 13.2021H183.608C193.623 13.2021 201.754 21.3327 201.754 31.3477V49.4922H4.24609V31.3477C4.24609 21.3327 12.3766 13.2021 22.3916 13.2021Z"
            fill="#3B61B8"
            stroke="#3B61B8"
            strokeWidth="8.49212"
          />
          <path
            id="glass"
            d="M0 53.4072H206V174.32C206 186.68 195.969 196.712 183.609 196.712H22.3913C10.0313 196.712 0 186.68 0 174.32V53.4072Z"
            fill="#1d2553"
          />
          <g
            id="detail"
            filter="url(#filter0_i_1729_401)"
            data-figma-bg-blur-radius="50.9527"
          >
            <path
              d="M26.8696 40.3037C31.8162 40.3037 35.8262 36.2938 35.8262 31.3472C35.8262 26.4006 31.8162 22.3906 26.8696 22.3906C21.9231 22.3906 17.9131 26.4006 17.9131 31.3472C17.9131 36.2938 21.9231 40.3037 26.8696 40.3037Z"
              fill="white"
              fillOpacity="0.16"
            />
            <path
              d="M58.2176 40.3037C63.1643 40.3037 67.1742 36.2938 67.1742 31.3472C67.1742 26.4006 63.1643 22.3906 58.2176 22.3906C53.2709 22.3906 49.2611 26.4006 49.2611 31.3472C49.2611 36.2938 53.2709 40.3037 58.2176 40.3037Z"
              fill="white"
              fillOpacity="0.16"
            />
            <path
              d="M26.8701 26.6367C29.4714 26.637 31.5801 28.7463 31.5801 31.3477C31.5798 33.9488 29.4713 36.0574 26.8701 36.0576C24.2687 36.0576 22.1594 33.949 22.1592 31.3477C22.1592 28.7461 24.2686 26.6367 26.8701 26.6367ZM58.2178 26.6367C60.8193 26.6368 62.9277 28.7461 62.9277 31.3477C62.9275 33.949 60.8192 36.0575 58.2178 36.0576C55.6163 36.0576 53.5071 33.949 53.5068 31.3477C53.5068 28.7461 55.6161 26.6367 58.2178 26.6367Z"
              stroke="white"
              strokeWidth="8.49212"
            />
          </g>
        </g>
        <motion.g variants={iconDraw} id="group">
          <g id="Vector" filter="url(#filter1_i_1729_401)">
            <path
              d="M139.926 138.368L107.568 120.167L139.926 101.965C140.421 101.662 140.78 101.18 140.926 100.619C141.073 100.057 140.996 99.461 140.711 98.9554C140.427 98.4499 139.957 98.0744 139.401 97.9081C138.846 97.7418 138.247 97.7978 137.732 98.0641L105.242 116.34V79.8622C105.242 79.2683 105.006 78.6988 104.586 78.2789C104.166 77.859 103.597 77.623 103.003 77.623C102.409 77.623 101.839 77.859 101.419 78.2789C101 78.6988 100.764 79.2683 100.764 79.8622V116.34L68.2739 98.0641C67.7585 97.7978 67.1599 97.7418 66.6042 97.9081C66.0484 98.0744 65.5789 98.4499 65.2944 98.9554C65.01 99.461 64.9329 100.057 65.0793 100.619C65.2258 101.18 65.5843 101.662 66.0795 101.965L98.4372 120.167L66.0795 138.368C65.6487 138.611 65.3105 138.99 65.1177 139.446C64.9248 139.901 64.8882 140.408 65.0135 140.886C65.1388 141.364 65.419 141.788 65.8103 142.09C66.2016 142.393 66.6821 142.557 67.1767 142.558C67.5606 142.558 67.938 142.459 68.2716 142.269L100.764 123.993V160.471C100.764 161.065 101 161.634 101.419 162.054C101.839 162.474 102.409 162.71 103.003 162.71C103.597 162.71 104.166 162.474 104.586 162.054C105.006 161.634 105.242 161.065 105.242 160.471V123.993L137.732 142.269C138.066 142.459 138.444 142.559 138.829 142.558C139.324 142.558 139.804 142.394 140.196 142.091C140.588 141.789 140.868 141.366 140.994 140.887C141.12 140.408 141.083 139.902 140.89 139.446C140.698 138.99 140.357 138.611 139.926 138.368Z"
              fill="white"
            />
          </g>
          <g
            id="accent_2"
            filter="url(#filter2_i_1729_401)"
            data-figma-bg-blur-radius="50.9527"
          >
            <path
              d="M103 131.362C100.786 131.362 98.6215 130.705 96.7804 129.475C94.9393 128.245 93.5043 126.496 92.6569 124.451C91.8095 122.405 91.5878 120.154 92.0198 117.982C92.4518 115.81 93.5181 113.816 95.0838 112.25C96.6496 110.684 98.6444 109.618 100.816 109.186C102.988 108.754 105.239 108.976 107.285 109.823C109.33 110.67 111.079 112.105 112.309 113.946C113.539 115.788 114.196 117.952 114.196 120.166C114.192 123.135 113.012 125.98 110.913 128.079C108.814 130.178 105.969 131.358 103 131.362Z"
              fill="white"
            />
          </g>
          <g
            id="glass_2"
            filter="url(#filter3_i_1729_401)"
            data-figma-bg-blur-radius="50.9527"
          >
            <path
              d="M138.826 111.211C145.009 111.211 150.021 106.198 150.021 100.015C150.021 93.8318 145.009 88.8193 138.826 88.8193C132.642 88.8193 127.63 93.8318 127.63 100.015C127.63 106.198 132.642 111.211 138.826 111.211Z"
              fill="white"
            />
          </g>
          <g id="Vector_2" filter="url(#filter4_i_1729_401)">
            <path
              d="M138.826 142.559C138.232 142.559 137.663 142.323 137.243 141.903C136.823 141.483 136.587 140.914 136.587 140.32V100.015C136.587 99.4216 136.823 98.8521 137.243 98.4322C137.663 98.0123 138.232 97.7764 138.826 97.7764C139.42 97.7764 139.989 98.0123 140.409 98.4322C140.829 98.8521 141.065 99.4216 141.065 100.015V140.32C141.065 140.914 140.829 141.483 140.409 141.903C139.989 142.323 139.42 142.559 138.826 142.559Z"
              fill="white"
            />
          </g>
          <g
            id="glass_3"
            filter="url(#filter5_i_1729_401)"
            data-figma-bg-blur-radius="50.9527"
          >
            <path
              d="M138.826 151.514C145.009 151.514 150.021 146.502 150.021 140.319C150.021 134.136 145.009 129.123 138.826 129.123C132.642 129.123 127.63 134.136 127.63 140.319C127.63 146.502 132.642 151.514 138.826 151.514Z"
              fill="white"
            />
          </g>
          <g id="Vector_3" filter="url(#filter6_i_1729_401)">
            <path
              d="M102.999 162.711C102.504 162.71 102.024 162.546 101.632 162.244C101.24 161.942 100.96 161.518 100.834 161.04C100.708 160.561 100.745 160.055 100.938 159.599C101.131 159.143 101.469 158.764 101.9 158.521L137.726 138.369C138.241 138.103 138.84 138.047 139.396 138.213C139.951 138.379 140.421 138.755 140.705 139.26C140.99 139.766 141.067 140.362 140.92 140.924C140.774 141.485 140.415 141.967 139.92 142.27L104.094 162.422C103.761 162.612 103.383 162.711 102.999 162.711Z"
              fill="white"
            />
          </g>
          <g
            id="glass_4"
            filter="url(#filter7_i_1729_401)"
            data-figma-bg-blur-radius="50.9527"
          >
            <path
              d="M103 171.667C109.184 171.667 114.196 166.654 114.196 160.471C114.196 154.288 109.184 149.275 103 149.275C96.8172 149.275 91.8047 154.288 91.8047 160.471C91.8047 166.654 96.8172 171.667 103 171.667Z"
              fill="white"
            />
          </g>
          <g id="Vector_4" filter="url(#filter8_i_1729_401)">
            <path
              d="M102.997 162.711C102.613 162.711 102.235 162.612 101.902 162.422L66.0756 142.27C65.5805 141.967 65.2219 141.485 65.0755 140.924C64.929 140.362 65.0061 139.766 65.2906 139.26C65.575 138.755 66.0445 138.379 66.6003 138.213C67.156 138.047 67.7546 138.103 68.27 138.369L104.096 158.521C104.527 158.764 104.865 159.143 105.058 159.599C105.251 160.055 105.287 160.561 105.162 161.04C105.036 161.518 104.756 161.942 104.364 162.244C103.972 162.546 103.491 162.71 102.997 162.711Z"
              fill="white"
            />
          </g>
          <g
            id="glass_5"
            filter="url(#filter9_i_1729_401)"
            data-figma-bg-blur-radius="50.9527"
          >
            <path
              d="M67.1712 151.514C73.3544 151.514 78.3669 146.502 78.3669 140.319C78.3669 134.136 73.3544 129.123 67.1712 129.123C60.988 129.123 55.9756 134.136 55.9756 140.319C55.9756 146.502 60.988 151.514 67.1712 151.514Z"
              fill="white"
            />
          </g>
          <g id="Vector_5" filter="url(#filter10_i_1729_401)">
            <path
              d="M67.1757 142.559C66.5818 142.559 66.0123 142.323 65.5923 141.903C65.1724 141.483 64.9365 140.914 64.9365 140.32V100.015C64.9365 99.4216 65.1724 98.8521 65.5923 98.4322C66.0123 98.0123 66.5818 97.7764 67.1757 97.7764C67.7695 97.7764 68.339 98.0123 68.759 98.4322C69.1789 98.8521 69.4148 99.4216 69.4148 100.015V140.32C69.4148 140.914 69.1789 141.483 68.759 141.903C68.339 142.323 67.7695 142.559 67.1757 142.559Z"
              fill="white"
            />
          </g>
          <g
            id="glass_6"
            filter="url(#filter11_i_1729_401)"
            data-figma-bg-blur-radius="50.9527"
          >
            <path
              d="M67.1712 111.212C73.3544 111.212 78.3669 106.199 78.3669 100.016C78.3669 93.8328 73.3544 88.8203 67.1712 88.8203C60.988 88.8203 55.9756 93.8328 55.9756 100.016C55.9756 106.199 60.988 111.212 67.1712 111.212Z"
              fill="white"
            />
          </g>
          <g id="Vector_6" filter="url(#filter12_i_1729_401)">
            <path
              d="M67.175 102.253C66.6802 102.253 66.1994 102.089 65.8077 101.787C65.416 101.485 65.1355 101.061 65.0099 100.583C64.8843 100.104 64.9207 99.5973 65.1135 99.1417C65.3064 98.686 65.6447 98.307 66.0756 98.064L101.902 77.9118C102.158 77.7551 102.444 77.6518 102.742 77.6079C103.039 77.5641 103.342 77.5806 103.633 77.6565C103.924 77.7324 104.197 77.8662 104.435 78.0498C104.673 78.2334 104.872 78.4631 105.02 78.7252C105.167 78.9874 105.26 79.2765 105.293 79.5754C105.327 79.8743 105.299 80.1768 105.213 80.4649C105.127 80.753 104.984 81.0208 104.792 81.2523C104.6 81.4838 104.363 81.6743 104.096 81.8124L68.27 101.965C67.9363 102.154 67.5589 102.254 67.175 102.253Z"
              fill="white"
            />
          </g>
          <g
            id="glass_7"
            filter="url(#filter13_i_1729_401)"
            data-figma-bg-blur-radius="50.9527"
          >
            <path
              d="M103 91.0583C109.184 91.0583 114.196 86.0458 114.196 79.8626C114.196 73.6795 109.184 68.667 103 68.667C96.8172 68.667 91.8047 73.6795 91.8047 79.8626C91.8047 86.0458 96.8172 91.0583 103 91.0583Z"
              fill="white"
            />
          </g>
          <g id="Vector_7" filter="url(#filter14_i_1729_401)">
            <path
              d="M130.403 92.7114L104.095 77.913C103.58 77.6467 102.981 77.5908 102.425 77.757C101.87 77.9233 101.4 78.2988 101.116 78.8044C100.831 79.3099 100.754 79.9062 100.901 80.4675C101.047 81.0288 101.406 81.5114 101.901 81.8135L128.211 96.6142C128.669 95.1778 129.414 93.8499 130.403 92.7114Z"
              fill="white"
            />
          </g>
        </motion.g>
      </g>
      <defs>
        <filter
          id="filter0_i_1729_401"
          x="-33.0396"
          y="-28.5621"
          width="151.166"
          height="119.819"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="16.9842" />
          <feGaussianBlur stdDeviation="12.7382" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_1729_401"
          />
        </filter>
        <clipPath
          id="bgblur_0_1729_401_clip_path"
          transform="translate(33.0396 28.5621)"
        >
          <path d="M26.8696 40.3037C31.8162 40.3037 35.8262 36.2938 35.8262 31.3472C35.8262 26.4006 31.8162 22.3906 26.8696 22.3906C21.9231 22.3906 17.9131 26.4006 17.9131 31.3472C17.9131 36.2938 21.9231 40.3037 26.8696 40.3037Z" />
          <path d="M58.2176 40.3037C63.1643 40.3037 67.1742 36.2938 67.1742 31.3472C67.1742 26.4006 63.1643 22.3906 58.2176 22.3906C53.2709 22.3906 49.2611 26.4006 49.2611 31.3472C49.2611 36.2938 53.2709 40.3037 58.2176 40.3037Z" />
        </clipPath>
        <filter
          id="filter1_i_1729_401"
          x="64.9404"
          y="77.623"
          width="76.127"
          height="102.071"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="16.9842" />
          <feGaussianBlur stdDeviation="8.49212" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_1729_401"
          />
        </filter>
        <filter
          id="filter2_i_1729_401"
          x="40.852"
          y="58.018"
          width="124.297"
          height="124.297"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="16.9842" />
          <feGaussianBlur stdDeviation="12.7382" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_1729_401"
          />
        </filter>
        <clipPath
          id="bgblur_1_1729_401_clip_path"
          transform="translate(-40.852 -58.018)"
        >
          <path d="M103 131.362C100.786 131.362 98.6215 130.705 96.7804 129.475C94.9393 128.245 93.5043 126.496 92.6569 124.451C91.8095 122.405 91.5878 120.154 92.0198 117.982C92.4518 115.81 93.5181 113.816 95.0838 112.25C96.6496 110.684 98.6444 109.618 100.816 109.186C102.988 108.754 105.239 108.976 107.285 109.823C109.33 110.67 111.079 112.105 112.309 113.946C113.539 115.788 114.196 117.952 114.196 120.166C114.192 123.135 113.012 125.98 110.913 128.079C108.814 130.178 105.969 131.358 103 131.362Z" />
        </clipPath>
        <filter
          id="filter3_i_1729_401"
          x="76.6772"
          y="37.8666"
          width="124.297"
          height="124.297"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="16.9842" />
          <feGaussianBlur stdDeviation="12.7382" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_1729_401"
          />
        </filter>
        <clipPath
          id="bgblur_2_1729_401_clip_path"
          transform="translate(-76.6772 -37.8666)"
        >
          <path d="M138.826 111.211C145.009 111.211 150.021 106.198 150.021 100.015C150.021 93.8318 145.009 88.8193 138.826 88.8193C132.642 88.8193 127.63 93.8318 127.63 100.015C127.63 106.198 132.642 111.211 138.826 111.211Z" />
        </clipPath>
        <filter
          id="filter4_i_1729_401"
          x="136.587"
          y="97.7764"
          width="4.47852"
          height="61.7665"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="16.9842" />
          <feGaussianBlur stdDeviation="8.49212" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_1729_401"
          />
        </filter>
        <filter
          id="filter5_i_1729_401"
          x="76.6772"
          y="78.1703"
          width="124.297"
          height="124.297"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="16.9842" />
          <feGaussianBlur stdDeviation="12.7382" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_1729_401"
          />
        </filter>
        <clipPath
          id="bgblur_3_1729_401_clip_path"
          transform="translate(-76.6772 -78.1703)"
        >
          <path d="M138.826 151.514C145.009 151.514 150.021 146.502 150.021 140.319C150.021 134.136 145.009 129.123 138.826 129.123C132.642 129.123 127.63 134.136 127.63 140.319C127.63 146.502 132.642 151.514 138.826 151.514Z" />
        </clipPath>
        <filter
          id="filter6_i_1729_401"
          x="100.761"
          y="138.119"
          width="40.2324"
          height="41.576"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="16.9842" />
          <feGaussianBlur stdDeviation="8.49212" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_1729_401"
          />
        </filter>
        <filter
          id="filter7_i_1729_401"
          x="40.852"
          y="98.3227"
          width="124.297"
          height="124.297"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="16.9842" />
          <feGaussianBlur stdDeviation="12.7382" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_1729_401"
          />
        </filter>
        <clipPath
          id="bgblur_4_1729_401_clip_path"
          transform="translate(-40.852 -98.3227)"
        >
          <path d="M103 171.667C109.184 171.667 114.196 166.654 114.196 160.471C114.196 154.288 109.184 149.275 103 149.275C96.8172 149.275 91.8047 154.288 91.8047 160.471C91.8047 166.654 96.8172 171.667 103 171.667Z" />
        </clipPath>
        <filter
          id="filter8_i_1729_401"
          x="65.0029"
          y="138.119"
          width="40.2324"
          height="41.576"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="16.9842" />
          <feGaussianBlur stdDeviation="8.49212" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_1729_401"
          />
        </filter>
        <filter
          id="filter9_i_1729_401"
          x="5.02287"
          y="78.1703"
          width="124.297"
          height="124.297"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="16.9842" />
          <feGaussianBlur stdDeviation="12.7382" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_1729_401"
          />
        </filter>
        <clipPath
          id="bgblur_5_1729_401_clip_path"
          transform="translate(-5.02287 -78.1703)"
        >
          <path d="M67.1712 151.514C73.3544 151.514 78.3669 146.502 78.3669 140.319C78.3669 134.136 73.3544 129.123 67.1712 129.123C60.988 129.123 55.9756 134.136 55.9756 140.319C55.9756 146.502 60.988 151.514 67.1712 151.514Z" />
        </clipPath>
        <filter
          id="filter10_i_1729_401"
          x="64.9365"
          y="97.7764"
          width="4.47852"
          height="61.7665"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="16.9842" />
          <feGaussianBlur stdDeviation="8.49212" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_1729_401"
          />
        </filter>
        <filter
          id="filter11_i_1729_401"
          x="5.02287"
          y="37.8676"
          width="124.297"
          height="124.297"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="16.9842" />
          <feGaussianBlur stdDeviation="12.7382" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_1729_401"
          />
        </filter>
        <clipPath
          id="bgblur_6_1729_401_clip_path"
          transform="translate(-5.02287 -37.8676)"
        >
          <path d="M67.1712 111.212C73.3544 111.212 78.3669 106.199 78.3669 100.016C78.3669 93.8328 73.3544 88.8203 67.1712 88.8203C60.988 88.8203 55.9756 93.8328 55.9756 100.016C55.9756 106.199 60.988 111.212 67.1712 111.212Z" />
        </clipPath>
        <filter
          id="filter12_i_1729_401"
          x="64.9365"
          y="77.584"
          width="40.3711"
          height="41.6532"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="16.9842" />
          <feGaussianBlur stdDeviation="8.49212" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_1729_401"
          />
        </filter>
        <filter
          id="filter13_i_1729_401"
          x="40.852"
          y="17.7143"
          width="124.297"
          height="124.297"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="16.9842" />
          <feGaussianBlur stdDeviation="12.7382" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_1729_401"
          />
        </filter>
        <clipPath
          id="bgblur_7_1729_401_clip_path"
          transform="translate(-40.852 -17.7143)"
        >
          <path d="M103 91.0583C109.184 91.0583 114.196 86.0458 114.196 79.8626C114.196 73.6795 109.184 68.667 103 68.667C96.8172 68.667 91.8047 73.6795 91.8047 79.8626C91.8047 86.0458 96.8172 91.0583 103 91.0583Z" />
        </clipPath>
        <filter
          id="filter14_i_1729_401"
          x="100.828"
          y="77.6631"
          width="29.5742"
          height="35.9354"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="16.9842" />
          <feGaussianBlur stdDeviation="8.49212" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_1729_401"
          />
        </filter>
      </defs>
    </motion.svg>
  );
};

export const PayinSix = ({ ...props }) => {
  const iconDraw: Variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, delay: 0.1 },
    },
  };
  return (
    <motion.svg
      initial="hidden"
      whileInView="visible"
      {...props}
      viewBox="0 0 224 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group 1410135196">
        <g id="Group 1410135195">
          <g
            id="Vector"
            filter="url(#filter0_d_1729_438)"
            data-figma-bg-blur-radius={25}
          >
            <motion.path
              variants={iconDraw}
              d="M102.212 100.404C104.7 98.9673 107.523 98.211 110.396 98.211C113.269 98.211 116.092 98.9673 118.58 100.404L144.737 115.496C147.225 116.932 149.292 118.999 150.728 121.487C152.165 123.975 152.921 126.798 152.922 129.671V159.887C152.921 162.761 152.165 165.583 150.728 168.071C149.292 170.56 147.225 172.626 144.737 174.063L118.58 189.138C116.092 190.575 113.269 191.331 110.396 191.331C107.523 191.331 104.7 190.575 102.212 189.138L76.0546 174.046C73.5663 172.61 71.5 170.543 70.0634 168.055C68.6267 165.567 67.8703 162.744 67.8703 159.871V129.655C67.8703 126.781 68.6267 123.959 70.0634 121.471C71.5 118.982 73.5663 116.916 76.0546 115.479L102.212 100.42V100.404ZM4 33.0635C4.00294 30.1931 4.76067 27.3739 6.19717 24.8888C7.63366 22.4036 9.69842 20.3399 12.1843 18.9047L38.3413 3.81286C40.8297 2.37622 43.6523 1.61988 46.5256 1.61988C49.3989 1.61988 52.2216 2.37622 54.7099 3.81286L80.8669 18.9047C83.3552 20.3413 85.4215 22.4076 86.8582 24.8959C88.2948 27.3841 89.0512 30.2067 89.0512 33.0799V63.2963C89.0512 66.1696 88.2948 68.9921 86.8582 71.4804C85.4215 73.9687 83.3552 76.0349 80.8669 77.4715L54.7099 92.5634C52.2216 94 49.3989 94.7564 46.5256 94.7564C43.6523 94.7564 40.8297 94 38.3413 92.5634L12.1843 77.4552C9.69602 76.0186 7.62972 73.9523 6.19308 71.464C4.75644 68.9758 4.00007 66.1532 4 63.28V33.0635ZM134.949 33.0635C134.949 30.1903 135.705 27.3677 137.142 24.8795C138.579 22.3912 140.645 20.3249 143.133 18.8883L169.29 3.79649C171.778 2.35985 174.601 1.60352 177.474 1.60352C180.348 1.60352 183.17 2.35985 185.659 3.79649L211.816 18.8883C214.304 20.3249 216.37 22.3912 217.807 24.8795C219.244 27.3677 220 30.1903 220 33.0635V63.28C220 66.1532 219.244 68.9758 217.807 71.464C216.37 73.9523 214.304 76.0186 211.816 77.4552L185.659 92.547C183.17 93.9837 180.348 94.74 177.474 94.74C174.601 94.74 171.778 93.9837 169.29 92.547L143.133 77.4552C140.645 76.0186 138.579 73.9523 137.142 71.464C135.705 68.9758 134.949 66.1532 134.949 63.28V33.0635Z"
              fill="#1d2553"
            />
          </g>
          <path
            id="Vector_2"
            d="M102.211 2.19298C104.7 0.756334 107.522 0 110.396 0C113.269 0 116.092 0.756334 118.58 2.19298L173.087 33.6534C175.576 35.09 177.642 37.1563 179.078 39.6446C180.515 42.1328 181.272 44.9554 181.272 47.8286V110.782C181.272 113.655 180.515 116.478 179.078 118.966C177.642 121.455 175.576 123.521 173.087 124.957L118.58 156.402C116.092 157.838 113.269 158.595 110.396 158.595C107.522 158.595 104.7 157.838 102.211 156.402L47.7038 124.974C45.2156 123.537 43.1493 121.471 41.7126 118.983C40.276 116.494 39.5196 113.672 39.5195 110.799V47.8286C39.5196 44.9554 40.276 42.1328 41.7126 39.6446C43.1493 37.1563 45.2156 35.09 47.7038 33.6534L102.211 2.20935V2.19298Z"
            fill="#3B61B8"
          />
        </g>
        <path
          id="API"
          d="M96.712 85.184H82.744L80.344 92H74.632L86.584 58.592H92.92L104.872 92H99.112L96.712 85.184ZM95.176 80.72L89.752 65.216L84.28 80.72H95.176ZM133.397 68.576C133.397 70.272 132.997 71.872 132.197 73.376C131.397 74.88 130.117 76.112 128.357 77.072C126.597 78 124.341 78.464 121.589 78.464H115.541V92H110.069V58.64H121.589C124.149 58.64 126.309 59.088 128.069 59.984C129.861 60.848 131.189 62.032 132.053 63.536C132.949 65.04 133.397 66.72 133.397 68.576ZM121.589 74C123.669 74 125.221 73.536 126.245 72.608C127.269 71.648 127.781 70.304 127.781 68.576C127.781 64.928 125.717 63.104 121.589 63.104H115.541V74H121.589ZM144.088 58.64V92H138.616V58.64H144.088Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_1729_438"
          x={-21}
          y="-23.3965"
          width={266}
          height="239.728"
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
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1729_438"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1729_438"
            result="shape"
          />
        </filter>
        <clipPath
          id="bgblur_0_1729_438_clip_path"
          transform="translate(21 23.3965)"
        >
          <path d="M102.212 100.404C104.7 98.9673 107.523 98.211 110.396 98.211C113.269 98.211 116.092 98.9673 118.58 100.404L144.737 115.496C147.225 116.932 149.292 118.999 150.728 121.487C152.165 123.975 152.921 126.798 152.922 129.671V159.887C152.921 162.761 152.165 165.583 150.728 168.071C149.292 170.56 147.225 172.626 144.737 174.063L118.58 189.138C116.092 190.575 113.269 191.331 110.396 191.331C107.523 191.331 104.7 190.575 102.212 189.138L76.0546 174.046C73.5663 172.61 71.5 170.543 70.0634 168.055C68.6267 165.567 67.8703 162.744 67.8703 159.871V129.655C67.8703 126.781 68.6267 123.959 70.0634 121.471C71.5 118.982 73.5663 116.916 76.0546 115.479L102.212 100.42V100.404ZM4 33.0635C4.00294 30.1931 4.76067 27.3739 6.19717 24.8888C7.63366 22.4036 9.69842 20.3399 12.1843 18.9047L38.3413 3.81286C40.8297 2.37622 43.6523 1.61988 46.5256 1.61988C49.3989 1.61988 52.2216 2.37622 54.7099 3.81286L80.8669 18.9047C83.3552 20.3413 85.4215 22.4076 86.8582 24.8959C88.2948 27.3841 89.0512 30.2067 89.0512 33.0799V63.2963C89.0512 66.1696 88.2948 68.9921 86.8582 71.4804C85.4215 73.9687 83.3552 76.0349 80.8669 77.4715L54.7099 92.5634C52.2216 94 49.3989 94.7564 46.5256 94.7564C43.6523 94.7564 40.8297 94 38.3413 92.5634L12.1843 77.4552C9.69602 76.0186 7.62972 73.9523 6.19308 71.464C4.75644 68.9758 4.00007 66.1532 4 63.28V33.0635ZM134.949 33.0635C134.949 30.1903 135.705 27.3677 137.142 24.8795C138.579 22.3912 140.645 20.3249 143.133 18.8883L169.29 3.79649C171.778 2.35985 174.601 1.60352 177.474 1.60352C180.348 1.60352 183.17 2.35985 185.659 3.79649L211.816 18.8883C214.304 20.3249 216.37 22.3912 217.807 24.8795C219.244 27.3677 220 30.1903 220 33.0635V63.28C220 66.1532 219.244 68.9758 217.807 71.464C216.37 73.9523 214.304 76.0186 211.816 77.4552L185.659 92.547C183.17 93.9837 180.348 94.74 177.474 94.74C174.601 94.74 171.778 93.9837 169.29 92.547L143.133 77.4552C140.645 76.0186 138.579 73.9523 137.142 71.464C135.705 68.9758 134.949 66.1532 134.949 63.28V33.0635Z" />
        </clipPath>
      </defs>
    </motion.svg>
  );
};

export const PayinSeven = ({ ...props }) => {
  const item = {
    hidden: { opacity: 0, x: 200 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const, delay: 0.1 },
    },
  };
  const item2 = {
    hidden: { opacity: 0, x: -200 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const, delay: 0.1 },
    },
  };
  return (
    <motion.svg
      initial="hidden"
      whileInView="visible"
      {...props}
      viewBox="0 0 216 216"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="swap-exchange 5">
        <motion.path
          variants={item}
          id="accent"
          d="M211.499 171.005H31.5004V157.506C31.5007 156.658 31.2615 155.827 30.8102 155.109C30.3589 154.391 29.714 153.815 28.9497 153.448C28.1855 153.081 27.333 152.937 26.4905 153.033C25.6481 153.129 24.8499 153.461 24.188 153.991L1.68809 171.991C1.1514 172.423 0.720421 172.972 0.427985 173.596C0.135549 174.22 -0.0106249 174.902 0.000600986 175.591C0.0182036 176.446 0.278871 177.278 0.752096 177.989C0.884196 178.191 1.03485 178.379 1.20209 178.552C1.37725 178.742 1.56845 178.917 1.77359 179.074L24.1925 197.015C24.8541 197.544 25.6515 197.875 26.4928 197.97C27.3342 198.066 28.1854 197.922 28.9487 197.555C29.712 197.189 30.3563 196.614 30.8077 195.898C31.2591 195.181 31.4992 194.352 31.5004 193.505V180.005H211.499C212.693 180.005 213.837 179.531 214.681 178.687C215.525 177.844 215.999 176.699 215.999 175.505C215.999 174.312 215.525 173.167 214.681 172.323C213.837 171.48 212.693 171.005 211.499 171.005Z"
          fill="#3B61B8"
        />
        <motion.path
          variants={item2}
          id="accent_2"
          d="M215.895 39.5476C215.675 38.5383 215.116 37.6348 214.311 36.9871L191.811 18.9872C191.149 18.4572 190.351 18.1251 189.509 18.029C188.666 17.9329 187.814 18.0768 187.05 18.4441C186.285 18.8114 185.64 19.3872 185.189 20.1051C184.738 20.823 184.499 21.6537 184.499 22.5017V36.0016H4.49997C3.30651 36.0016 2.16192 36.4757 1.31801 37.3196C0.474103 38.1635 0 39.3081 0 40.5016C0 41.695 0.474103 42.8396 1.31801 43.6835C2.16192 44.5274 3.30651 45.0015 4.49997 45.0015H184.499V58.5014C184.498 59.3498 184.736 60.1811 185.187 60.8997C185.638 61.6182 186.283 62.1947 187.048 62.5625C187.812 62.9304 188.665 63.0747 189.508 62.9788C190.351 62.8829 191.149 62.5506 191.811 62.0204L214.23 44.1015C214.771 43.6888 215.211 43.159 215.517 42.5518C215.823 41.9447 215.988 41.276 215.999 40.5961C216.005 40.2437 215.97 39.8919 215.895 39.5476Z"
          fill="#3B61B8"
        />
        <path
          id="accent_3"
          d="M108.002 153.004C132.856 153.004 153.004 132.856 153.004 108.002C153.004 83.148 132.856 63 108.002 63C83.148 63 63 83.148 63 108.002C63 132.856 83.148 153.004 108.002 153.004Z"
          fill="url(#paint0_linear_1729_422)"
        />
        <g
          id="glass"
          filter="url(#filter0_i_1729_422)"
          data-figma-bg-blur-radius={24}
        >
          <path
            d="M108 189C152.735 189 189 152.735 189 108C189 63.2649 152.735 27 108 27C63.2649 27 27 63.2649 27 108C27 152.735 63.2649 189 108 189Z"
            fill="#1d2553"
          />
          <path
            d="M108 27.5996C152.404 27.5996 188.4 63.5963 188.4 108C188.4 152.404 152.404 188.4 108 188.4C63.5963 188.4 27.5996 152.404 27.5996 108C27.5996 63.5963 63.5963 27.5996 108 27.5996Z"
            stroke="url(#paint1_linear_1729_422)"
            strokeOpacity="0.1"
            strokeWidth="1.2"
          />
        </g>
        <path
          id="detail"
          d="M107.993 170.315C142.405 170.315 170.301 142.419 170.301 108.007C170.301 73.5953 142.405 45.6992 107.993 45.6992C73.5816 45.6992 45.6855 73.5953 45.6855 108.007C45.6855 142.419 73.5816 170.315 107.993 170.315Z"
          fill="#3B61B8"
        />
        <path
          id="Vector"
          d="M108 137C106.901 137 105.848 136.563 105.071 135.786L80.213 110.929C79.4363 110.152 79 109.098 79 108C79 106.901 79.4363 105.847 80.213 105.071L105.071 80.213C105.848 79.4363 106.901 79 108 79C109.099 79 110.152 79.4363 110.929 80.213L135.787 105.071C136.564 105.847 137 106.901 137 108C137 109.098 136.564 110.152 135.787 110.929L110.929 135.786C110.152 136.563 109.099 137 108 137Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_i_1729_422"
          x={3}
          y={3}
          width={210}
          height={210}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={8} />
          <feGaussianBlur stdDeviation={6} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_1729_422"
          />
        </filter>
        <clipPath id="bgblur_0_1729_422_clip_path" transform="translate(-3 -3)">
          <path d="M108 189C152.735 189 189 152.735 189 108C189 63.2649 152.735 27 108 27C63.2649 27 27 63.2649 27 108C27 152.735 63.2649 189 108 189Z" />
        </clipPath>
        <linearGradient
          id="paint0_linear_1729_422"
          x1="66.7501"
          y1="81.0007"
          x2="164.861"
          y2="94.6273"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8AE6CF" />
          <stop offset={1} stopColor="#7C3AE7" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1729_422"
          x1="32.0625"
          y1="34.3636"
          x2={189}
          y2="34.3636"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C8A6FF" />
          <stop offset={1} stopColor="#69CFB5" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
};

export const PayinEight = ({ ...props }) => {
  const item = {
    hidden: { opacity: 0, rotate: 0 },
    visible: {
      opacity: 1,
      rotate: 360,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const, delay: 0.1 },
    },
  };
  return (
    <motion.svg
      initial="hidden"
      whileInView="visible"
      {...props}
      viewBox="0 0 216 216"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="decentralize-api-sdk 5" clipPath="url(#clip0_1729_429)">
        <path
          id="accent"
          d="M206.544 18.8397C206.557 15.326 205.584 11.8792 203.735 8.89147C201.886 5.90369 199.235 3.4949 196.085 1.93917C192.934 0.383446 189.41 -0.256756 185.914 0.09141C182.417 0.439576 179.089 1.76213 176.307 3.90859C173.525 6.05505 171.402 8.93924 170.178 12.233C168.955 15.5267 168.68 19.0978 169.386 22.5398C170.092 25.9819 171.749 29.1567 174.171 31.7032C176.592 34.2496 179.679 36.0653 183.081 36.9437V59.1303L165.686 76.5258C165.237 76.9586 164.88 77.4764 164.634 78.049C164.388 78.6215 164.259 79.2372 164.253 79.8603C164.248 80.4834 164.366 81.1013 164.602 81.678C164.838 82.2547 165.187 82.7787 165.627 83.2193C166.068 83.6599 166.592 84.0083 167.169 84.2442C167.745 84.4802 168.363 84.5989 168.986 84.5935C169.609 84.5881 170.225 84.4586 170.798 84.2127C171.37 83.9668 171.888 83.6093 172.321 83.1611L191.091 64.3907C191.971 63.5109 192.466 62.3175 192.466 61.073V36.9437C196.484 35.9064 200.044 33.5672 202.591 30.2917C205.138 27.0161 206.528 22.989 206.544 18.8397Z"
          fill="#1d2553"
        />
        <path
          id="accent_2"
          d="M50.3116 76.5258L32.9161 59.1303V36.9437C37.3397 35.8016 41.1948 33.0854 43.7589 29.3042C46.323 25.523 47.42 20.9364 46.8443 16.4043C46.2687 11.8721 44.0598 7.70544 40.6319 4.68534C37.2039 1.66523 32.7921 -0.000976562 28.2236 -0.000976562C23.655 -0.000976562 19.2432 1.66523 15.8152 4.68534C12.3873 7.70544 10.1784 11.8721 9.60278 16.4043C9.02711 20.9364 10.1241 25.523 12.6882 29.3042C15.2523 33.0854 19.1074 35.8016 23.531 36.9437V61.0731C23.5312 62.3175 24.0258 63.5109 24.9059 64.3907L43.6763 83.1611C44.5613 84.0159 45.7467 84.4889 46.977 84.4782C48.2074 84.4675 49.3844 83.974 50.2544 83.104C51.1245 82.2339 51.618 81.0569 51.6287 79.8266C51.6394 78.5962 51.1664 77.4108 50.3116 76.5258Z"
          fill="#1d2553"
        />
        <path
          id="Vector"
          d="M122.075 0.0673828H93.9192C92.6746 0.0673828 91.481 0.56178 90.601 1.44181C89.721 2.32184 89.2266 3.51542 89.2266 4.75998V32.9155C89.2266 34.1601 89.721 35.3537 90.601 36.2337C91.481 37.1137 92.6746 37.6081 93.9192 37.6081H103.304V46.9933C103.304 48.2379 103.799 49.4315 104.679 50.3115C105.559 51.1915 106.752 51.6859 107.997 51.6859C109.241 51.6859 110.435 51.1915 111.315 50.3115C112.195 49.4315 112.69 48.2379 112.69 46.9933V37.6081H122.075C123.319 37.6081 124.513 37.1137 125.393 36.2337C126.273 35.3537 126.767 34.1601 126.767 32.9155V4.75998C126.767 3.51542 126.273 2.32184 125.393 1.44181C124.513 0.56178 123.319 0.0673828 122.075 0.0673828Z"
          fill="#1d2553"
        />
        <path
          id="Vector_2"
          d="M201.846 178.388H192.461V154.925C192.461 153.68 191.966 152.487 191.086 151.607L172.316 132.837C171.431 131.982 170.245 131.509 169.015 131.52C167.785 131.53 166.608 132.024 165.738 132.894C164.868 133.764 164.374 134.941 164.363 136.171C164.353 137.402 164.826 138.587 165.681 139.472L183.076 156.868V178.388H173.691C172.446 178.388 171.253 178.882 170.373 179.762C169.493 180.642 168.998 181.836 168.998 183.08V211.236C168.998 212.481 169.493 213.674 170.373 214.554C171.253 215.434 172.446 215.929 173.691 215.929H201.846C203.091 215.929 204.285 215.434 205.165 214.554C206.045 213.674 206.539 212.481 206.539 211.236V183.08C206.539 181.836 206.045 180.642 205.165 179.762C204.285 178.882 203.091 178.388 201.846 178.388Z"
          fill="#1d2553"
        />
        <path
          id="Vector_3"
          d="M50.3116 139.472C51.1663 138.587 51.6393 137.402 51.6286 136.171C51.6179 134.941 51.1244 133.764 50.2544 132.894C49.3843 132.024 48.2074 131.53 46.977 131.52C45.7466 131.509 44.5613 131.982 43.6762 132.837L24.9058 151.607C24.0257 152.487 23.5312 153.68 23.5309 154.925V178.388H14.1457C12.9012 178.388 11.7076 178.882 10.8276 179.762C9.94752 180.642 9.45313 181.836 9.45312 183.08V211.236C9.45313 212.481 9.94752 213.674 10.8276 214.554C11.7076 215.434 12.9012 215.929 14.1457 215.929H42.3013C43.5458 215.929 44.7394 215.434 45.6195 214.554C46.4995 213.674 46.9939 212.481 46.9939 211.236V183.08C46.9939 181.836 46.4995 180.642 45.6195 179.762C44.7394 178.882 43.5458 178.388 42.3013 178.388H32.9161V156.868L50.3116 139.472Z"
          fill="#1d2553"
        />
        <path
          id="accent_3"
          d="M112.69 179.053V169.001C112.69 167.757 112.195 166.563 111.315 165.683C110.435 164.803 109.242 164.309 107.997 164.309C106.752 164.309 105.559 164.803 104.679 165.683C103.799 166.563 103.304 167.757 103.304 169.001V179.053C98.8809 180.195 95.0258 182.911 92.4617 186.692C89.8976 190.473 88.8006 195.06 89.3762 199.592C89.9519 204.124 92.1607 208.291 95.5887 211.311C99.0166 214.331 103.428 215.997 107.997 215.997C112.566 215.997 116.977 214.331 120.405 211.311C123.833 208.291 126.042 204.124 126.618 199.592C127.193 195.06 126.096 190.473 123.532 186.692C120.968 182.911 117.113 180.195 112.69 179.053Z"
          fill="#1d2553"
        />
        <motion.path
          variants={item}
          id="glass"
          d="M185.225 95.85L162.951 94.23C161.607 88.8129 159.464 83.626 156.593 78.84L171.172 61.9677C171.842 61.193 172.194 60.1933 172.156 59.1698C172.119 58.1463 171.695 57.1751 170.97 56.4516L159.517 44.9982C158.794 44.2755 157.824 43.853 156.803 43.8155C155.781 43.7779 154.783 44.1281 154.009 44.7957L137.154 59.4C132.369 56.52 127.183 54.3662 121.765 53.0091L120.145 30.726C120.063 29.709 119.601 28.7603 118.85 28.0695C118.099 27.3787 117.115 26.9968 116.095 27H99.896C98.8706 26.9974 97.8824 27.3838 97.1308 28.0813C96.3791 28.7789 95.9201 29.7356 95.8463 30.7584L94.2263 53.0415C88.8105 54.3884 83.6243 56.5312 78.8372 59.4L61.9577 44.82C61.1836 44.1524 60.1856 43.8022 59.1641 43.8398C58.1426 43.8773 57.173 44.2998 56.45 45.0225L44.9972 56.4759C44.2723 57.1994 43.8484 58.1706 43.8108 59.1941C43.7732 60.2176 44.1248 61.2173 44.7948 61.992L59.3983 78.84C56.5156 83.6241 54.3617 88.8111 53.0077 94.23L30.7339 95.85C29.7155 95.9297 28.7648 96.3913 28.0724 97.1424C27.3799 97.8934 26.9969 98.8784 27 99.9V116.1C26.9975 117.127 27.385 118.116 28.0842 118.868C28.7835 119.62 29.7421 120.078 30.7663 120.15L53.0401 121.77C54.3863 127.186 56.529 132.373 59.3983 137.16L44.8191 154.04C44.1515 154.815 43.8013 155.813 43.8389 156.834C43.8764 157.856 44.2989 158.825 45.0215 159.548L56.4743 171.002C57.1973 171.724 58.1669 172.147 59.1884 172.185C60.2099 172.222 61.2079 171.872 61.982 171.204L78.8372 156.6C83.6221 159.481 88.8084 161.634 94.2263 162.991L95.8463 185.266C95.9259 186.284 96.3875 187.235 97.1385 187.928C97.8896 188.62 98.8745 189.003 99.896 189H116.095C117.122 189.002 118.111 188.615 118.863 187.916C119.615 187.216 120.073 186.258 120.145 185.233L121.765 162.958C127.181 161.612 132.367 159.469 137.154 156.6L154.033 171.18C154.808 171.848 155.806 172.198 156.827 172.16C157.849 172.123 158.818 171.7 159.541 170.977L170.994 159.524C171.717 158.801 172.139 157.831 172.177 156.81C172.214 155.788 171.864 154.79 171.196 154.016L156.593 137.16C159.473 132.375 161.627 127.188 162.983 121.77L185.257 120.15C186.276 120.07 187.226 119.609 187.919 118.858C188.611 118.107 188.994 117.122 188.991 116.1V99.9C188.994 98.8732 188.606 97.8838 187.907 97.132C187.208 96.3801 186.249 95.9219 185.225 95.85ZM107.996 132.3C103.19 132.3 98.4919 130.875 94.496 128.205C90.5001 125.535 87.3857 121.739 85.5465 117.299C83.7074 112.859 83.2262 107.973 84.1638 103.259C85.1014 98.5456 87.4156 94.2157 90.8138 90.8173C94.2121 87.4189 98.5417 85.1045 103.255 84.1669C107.969 83.2293 112.854 83.7105 117.294 85.5497C121.734 87.3889 125.529 90.5035 128.199 94.4996C130.869 98.4958 132.294 103.194 132.294 108C132.294 114.445 129.734 120.626 125.177 125.183C120.62 129.74 114.44 132.3 107.996 132.3Z"
          fill="#3B61B8"
        />
        <circle id="Ellipse 309" cx={108} cy={108} r={26} fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_1729_429">
          <rect width={216} height={216} fill="white" />
        </clipPath>
      </defs>
    </motion.svg>
  );
};

export const PayinNine: React.FC<IconSvgProps> = ({ ...props }) => {
  return (
    <svg
      {...props}
      width="100%"
      height="100%"
      viewBox="0 0 76 76"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group 1410135194">
        <circle
          id="Ellipse 5"
          cx="48.5724"
          cy="47.7109"
          r="22.6138"
          transform="rotate(-76.1663 48.5724 47.7109)"
          fill="#3B61B8"
        />
        <circle
          id="Ellipse 4"
          opacity="0.7"
          cx="24.3357"
          cy="24.132"
          r="22.6138"
          transform="rotate(86.9831 24.3357 24.132)"
          fill="#FF6600"
        />
      </g>
    </svg>
  );
};
