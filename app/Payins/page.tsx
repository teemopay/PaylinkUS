import { BgText } from "@/components/Text";
import { BtnLink } from "@/components/BtnLink";
import { CardOne } from "@/components/CardOne";
import { CardFour } from "@/components/CardFour";
import { FortyEightTitle } from "@/components/Text";
import { Image } from "@heroui/image";
import { PageContanier, PageWrap } from "@/components/PageWrap";
import { Button } from "@heroui/button";
import { FadeUPText } from "@/components/Animateitem";
import GlobeBlock from "@/components/GlobeThree";

const FirstItem = () => {
  return (
    <div className="h-full w-full">
      <PageContanier className="flex-1 items-center justify-center pb-[40px] md:flex">
        <div className="flex-1 pt-[30px] md:pt-0">
          <FadeUPText className="mb-[22px] text-[32px] font-semibold leading-[37px] text-white md:mb-[33px] md:max-w-[469px] md:text-[20px] md:leading-[40px] lg:text-[33px] lg:leading-[53px] xl:text-[48px] xl:leading-[68px] 2xl:max-w-[569px]">
            Localized payment processing solutions
          </FadeUPText>
          <FadeUPText
            delay={0.1}
            className="mb-[38px] text-white md:mb-[46px] md:max-w-[420px] md:text-[16px] md:leading-[24px]"
          >
            We offer localized payment solutions to support your business
            growth.
          </FadeUPText>
          <FadeUPText delay={0.2}>
            <Button
              className="h-[30px] w-[131px] bg-[#FF6600] text-[12px] text-[#142442] md:h-[48px] md:w-[240px] md:text-[20px]"
              radius="full"
            >
              Start now
            </Button>
          </FadeUPText>
        </div>
        <GlobeBlock />
      </PageContanier>
    </div>
  );
};

export default function PayinsPage() {
  return (
    <div className="w-full cursor-pointer">
      <div className="relative bg-[url('/images/20250512-175703.png')] bg-cover bg-center bg-no-repeat">
        <FirstItem />
      </div>
      <div>
        <BgText
          title="Country-specific solutions"
          sub={
            <>
              By integrating PaylinkUS, you gain access to all major markets in
              Latin America, Asia, the Middle East.{" "}
              <span className="hidden lg:inline">
                {" "}
                <br />{" "}
              </span>{" "}
              We handle all currency conversions, payments, marketing
              localization, legal issues, and anti-fraud activities to ensure{" "}
              <span className="hidden lg:inline">
                {" "}
                <br />{" "}
              </span>{" "}
              smooth market entry and growth for our merchants.
            </>
          }
        />
      </div>
      <div className="bg-[#F0F5FF] pt-[38px] md:pt-[189px] pb-[102px] md:pb-[264px]">
        <div className="mb-[49px] md:mb-[221px] mx-auto px-[20px]">
          <div className="w-full flex items-center justify-center lg:mb-[77px] mb-[28px]">
            <div className="flex w-[131px]  md:w-[335px] md:max-w-[380px]">
              <div className="flex-1 flex items-center  lg:items-baseline lg:flex-row  flex-col">
                <FortyEightTitle
                  title="50"
                  className="lg:pr-[10px] lg:text-left text-center text-[#000000]"
                />
                <div className="text-[12px] leading-[14px] md:text-[24px] md:leading-[36px] text-[#000000] text-center lg:text-left">
                  Payment Processors
                </div>
              </div>
            </div>
            <Image
              className="ml-[22px] mr-[4px] md:ml-[35px] md:mr-[65px]"
              radius="full"
              classNames={{
                img: "w-[29px] h-[29px] md:w-[58px] md:h-[58px]",
              }}
              alt="country"
              height="100%"
              src="/images/payins/5.png"
              width="100%"
            />
            <div className="text-[#000000] w-[149px] text-center md:text-left md:w-[659px] md:max-w-[659px] text-[12px] leading-[14px] md:text-[24px] md:leading-[36px]  ml-[4px] md:ml-[65px]">
              You will get the best price and the most stable channel
            </div>
          </div>
          <div className="w-full flex items-center justify-center">
            <div className="flex w-[131px]  md:w-[335px] md:max-w-[380px]">
              <div className="flex-1 flex items-center  lg:items-baseline lg:flex-row  flex-col">
                <FortyEightTitle
                  title="200"
                  className="lg:pr-[10px] lg:text-left text-center text-[#000000]"
                />
                <div className="text-[#000000] text-[12px] leading-[14px] md:text-[24px] md:leading-[36px]  text-center lg:text-left">
                  Payment Methods
                </div>
              </div>
            </div>
            <Image
              className="ml-[22px] mr-[4px] md:ml-[35px] md:mr-[65px]"
              radius="full"
              classNames={{
                img: "w-[29px] h-[29px] md:w-[58px] md:h-[58px]",
              }}
              alt="country"
              height="100%"
              src="/images/payins/5.png"
              width="100%"
            />
            <div className="w-[149px] text-center md:text-left md:w-[659px] md:max-w-[659px] text-[12px] leading-[14px] md:text-[24px] md:leading-[36px] text-[#000000] ml-[4px] md:ml-[65px]">
              Anyone can buy your product or service
            </div>
          </div>
        </div>
        <div className="  max-w-[1200px]  mx-auto px-[20px] md:px-[60px] box-content">
          <CardFour />
        </div>
      </div>

      <div className="mb-[34px] md:mb-[189px]">
        <BgText
          title={
            <>
              Your business
              <span className="inline md:hidden">
                <br />
              </span>
              growth engine
            </>
          }
          sub={
            <>
              Our cloud payment platform adopts financial-grade security
              architecture design, supports elastic expansion{" "}
              <span className="hidden lg:inline">
                {" "}
                <br />{" "}
              </span>{" "}
              and creates an industry-leading API ecosystem for merchants.
            </>
          }
        />
      </div>
      <div className="mb-[82px] md:mb-[252px]  max-w-[1200px]  mx-auto px-[20px] md:px-[60px] box-content">
        <CardOne />
      </div>

      <PageWrap>
        <div className=" mb-[46px] md:mb-[208px]">
          <BtnLink />
        </div>
      </PageWrap>
    </div>
  );
}
