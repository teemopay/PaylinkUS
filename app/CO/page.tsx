import { PageWrap, CountryButton } from "@/components/PageWrap";
import {
  PrimaryTitle,
  MediumXlTitle,
  CountrySub,
  MinTitle,
  MinTwoTitle,
  MinFirstTitle,
} from "@/components/Text";
import { Image } from "@heroui/image";
import { BtnLink } from "@/components/BtnLink";
import countryObj from "@/config/country";
import { CountrySelect } from "@/components/ProgressBlock";
import { FadeIn } from "@/components/Animateitem";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { SecondSection } from "@/components/Country";

export default function COPage() {
  const currentObj = countryObj["CO"];
  return (
    <div>
      <div className="country-head-bg  min-h-[803px] md:min-h-[880px] md:mb-[152px] mb-[40px] pb-[30px] md:pb-0 bg-[url('/images/country/co.png')]">
        <PageWrap>
          <div className="pt-[30px] md:pt-[152px]">
            <div className="flex flex-col md:flex-row items-center md:items-end md:justify-between md:mb-[80px] mb-[30px] md:pl-[41px]">
              <PrimaryTitle className="md:text-left text-center mb-[26px] md:mb-0">
                <TypingAnimation className="min-h-[37px] md:min-h-[68px] font-semibold w-full text-[32px] leading-[37px]  md:text-6xl md:leading-[4.25rem]">
                  {currentObj.title}
                </TypingAnimation>
              </PrimaryTitle>
              <div className="w-[183px] md:min-w-[227px]">
                <CountrySelect country="Colombia" />
              </div>
            </div>
            <div className="country-bg grid grid-cols-1 md:grid-cols-2 gap-x-[20px] pl-[22px]   pt-[18px] md:pl-[46px] pr-[50px] pb-[46px] md:pt-[30px]  rounded-[20px]">
              <div>
                <div className="flex items-center justify-center flex-wrap md:block mb-[8px]  md:mb-[43px]">
                  <MinTwoTitle
                    className="md:mb-[8px] pr-[5px] md:pr-0"
                    title={currentObj.sub}
                  />
                  <div className="flex items-center ">
                    <MinFirstTitle
                      className="pr-[14px] md:pr-[30px]"
                      title={currentObj.country}
                    />
                    <Image
                      classNames={{
                        img: "max-w-[20px] md:max-w-[40px] max-h-[20px] md:max-h-[40px]  rounded-full",
                      }}
                      alt="country"
                      height="100%"
                      src="/images/country/co-icon.png"
                      width="100%"
                    />
                  </div>
                </div>
                <div className="md:pt-[32px]">
                  {currentObj.LeftList.map((i) => (
                    <div
                      className="mb-[25px] md:mb-[29px] text-center md:text-left"
                      key={i.id}
                    >
                      <CountryButton
                        className="md:mb-[10px] mb-[16px]  "
                        title={i.title}
                      />
                      <MinTitle title={i.sub} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:pt-[32px] ">
                {currentObj.countryList.map((i) => (
                  <div
                    className="mb-[25px] md:mb-[29px] text-center md:text-left"
                    key={i.id}
                  >
                    <CountryButton
                      className="mb-[10px] md:mb-[16px] "
                      title={i.title}
                    />
                    <MinTitle title={i.sub} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </PageWrap>
      </div>
      <PageWrap>
        <SecondSection
          sub={currentObj.second.sub}
          list={currentObj.second.list}
        />
        <FadeIn>
          <section id="pay-way" className=" mb-[107px] md:mb-[77px]">
            <div className="lg:flex items-center justify-between  rounded-3xl  bg-[#F0F5FF] p-[20px] md:pl-[37px] md:pr-[37px] md:py-[57]">
              <div className="lg:max-w-[597px] lg:min-w-[597px] md:mr-[40px]">
                <MediumXlTitle
                  className="mb-[20px] md:mb-[18px]"
                  title="Method of payment"
                />
                {currentObj.three.card.map((i) => (
                  <CountrySub key={i.id} title={i.title} sub={i.sub} />
                ))}
              </div>
              <div className="flex flex-1  items-center justify-center lg:max-w-[730px]  mb-[22px] lg:mb-0  mt-[30px] lg:mt-0 ">
                <Image
                  classNames={{
                    img: "max-w-[652px] max-h-[434px]",
                  }}
                  alt="country"
                  height="100%"
                  src="/images/country/pay.png"
                  width="100%"
                />
              </div>
            </div>
          </section>
        </FadeIn>
        <div className="mb-[71px] md:mb-[128px]">
          <BtnLink />
        </div>
      </PageWrap>
    </div>
  );
}
