import svgPaths from "./svg-1a5h607sgu";
import imgCcbaa590D9F7482CA2E5988E50D72B201 from "figma:asset/ccf59f172c825956d10158454a58cb23f8511160.png";
import imgImage1 from "figma:asset/622a96253998bd36a6f46f45918b18dc172a39c6.png";
import imgLogo from "figma:asset/b9b8848d1054f27d3889ccf99224dc8fbb5fb99c.png";
import imgBg from "figma:asset/8075cb80e5be6a4e52021cbb4b109d4402fec1f8.png";
import imgC586B2F63C1Fb9B24A76829B67E7A85D1 from "figma:asset/677f708f28cb590f0fb2d86ba9b1f5160c70c950.png";

function Time() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Time">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center pl-[16px] pr-[6px] py-0 relative w-full">
          <p className="font-['SF_Pro:Semibold',_sans-serif] font-[590] leading-[22px] relative shrink-0 text-[17px] text-black text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            9:41
          </p>
        </div>
      </div>
    </div>
  );
}

function DynamicIslandSpacer() {
  return <div className="h-[10px] shrink-0 w-[124px]" data-name="Dynamic Island spacer" />;
}

function Battery() {
  return (
    <div className="h-[13px] relative shrink-0 w-[27.328px]" data-name="Battery">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 13">
        <g id="Battery">
          <rect height="12" id="Border" opacity="0.35" rx="3.8" stroke="var(--stroke-0, black)" width="24" x="0.5" y="0.5" />
          <path d={svgPaths.p3bbd9700} fill="var(--fill-0, black)" id="Cap" opacity="0.4" />
          <rect fill="var(--fill-0, black)" height="9" id="Capacity" rx="2.5" width="21" x="2" y="2" />
        </g>
      </svg>
    </div>
  );
}

function Levels() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Levels">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[7px] items-center justify-center pl-[6px] pr-[16px] py-0 relative w-full">
          <div className="h-[12.226px] relative shrink-0 w-[19.2px]" data-name="Cellular Connection">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 13">
              <path clipRule="evenodd" d={svgPaths.p1e09e400} fill="var(--fill-0, black)" fillRule="evenodd" id="Cellular Connection" />
            </svg>
          </div>
          <div className="h-[12.328px] relative shrink-0 w-[17.142px]" data-name="Wifi">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 13">
              <path clipRule="evenodd" d={svgPaths.p18b35300} fill="var(--fill-0, black)" fillRule="evenodd" id="Wifi" />
            </svg>
          </div>
          <Battery />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <Time />
      <DynamicIslandSpacer />
      <Levels />
    </div>
  );
}

function StatusBarIPhone() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[50px] items-start left-0 pb-0 pt-[21px] px-0 top-0 w-[393px]" data-name="Status Bar - iPhone">
      <Frame />
    </div>
  );
}

function ChevronLeft() {
  return (
    <div className="absolute left-[10px] size-[48px] top-[65px]" data-name="Chevron left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Chevron left" opacity="0.5">
          <path d="M30 36L18 24L30 12" id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents right-[226px] top-[383px]">
      <div className="absolute font-['Gilroy-SemiBold:☞',_sans-serif] h-[54px] leading-[24.905px] not-italic right-[226px] text-[#106172] text-[18px] text-right top-[383px] w-[136px]">
        <p className="mb-0">{`Learn your `}</p>
        <p>first chord</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[228px] top-[420px]">
      <p className="absolute font-['Gilroy-SemiBold:☞',_sans-serif] h-[34px] leading-[20.208px] left-[228px] not-italic text-[#551b8f] text-[18.476px] top-[420px] w-[134.211px]">Play Your First Song</p>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute h-[32px] left-[130px] top-[287px] w-[33px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 32">
        <g id="Group 11">
          <rect fill="var(--fill-0, white)" height="32" id="Rectangle 20" rx="10" width="33" />
          <path d={svgPaths.p2242d00} fill="var(--fill-0, #BE702E)" id="Polygon 1" />
        </g>
      </svg>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute h-[32px] left-[329px] top-[335px] w-[33px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 32">
        <g id="Group 12">
          <rect fill="var(--fill-0, white)" height="32" id="Rectangle 20" rx="10" width="33" />
          <path d={svgPaths.p2242d00} fill="var(--fill-0, #2168A7)" id="Polygon 1" />
        </g>
      </svg>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute h-[32px] left-[128px] top-[501px] w-[33px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 32">
        <g id="Group 13">
          <rect fill="var(--fill-0, white)" height="32" id="Rectangle 20" rx="10" width="33" />
          <path d={svgPaths.p2242d00} fill="var(--fill-0, #106172)" id="Polygon 1" />
        </g>
      </svg>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute h-[32px] left-[329px] top-[501px] w-[33px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 32">
        <g id="Group 14">
          <rect fill="var(--fill-0, white)" height="32" id="Rectangle 20" rx="10" width="33" />
          <path d={svgPaths.p2242d00} fill="var(--fill-0, #44275F)" id="Polygon 1" />
        </g>
      </svg>
    </div>
  );
}

function Tool() {
  return (
    <div className="absolute left-[235px] size-[30px] top-[798px]" data-name="Tool">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="Tool">
          <path d={svgPaths.p1d5ec000} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
}

function Music() {
  return (
    <div className="absolute left-[142px] size-[32px] top-[794px]" data-name="Music">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Music">
          <path d={svgPaths.p3b30a900} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function User() {
  return (
    <div className="absolute left-[311px] size-[32.461px] top-[794px]" data-name="User">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 33">
        <g id="User">
          <path d={svgPaths.p10d95d00} id="Icon" stroke="var(--stroke-0, #353739)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.70508" />
        </g>
      </svg>
    </div>
  );
}

function Home() {
  return (
    <div className="absolute left-[50px] size-[31.379px] top-[794px]" data-name="Home">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Home">
          <path d={svgPaths.p2ec7df80} id="Icon" stroke="var(--stroke-0, #353739)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.61491" />
        </g>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-0 top-[770px]">
      <div className="absolute bg-white h-[82px] left-0 rounded-bl-[20px] rounded-br-[20px] top-[770px] w-[393px]" />
      <Tool />
      <Music />
      <User />
      <Home />
    </div>
  );
}

function Steps() {
  return (
    <div className="absolute bg-white h-[852px] left-[1032px] overflow-clip rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[219px] w-[393px]" data-name="Steps">
      <Group4 />
      <StatusBarIPhone />
      <div className="absolute inset-[43.08%_58.52%_37.44%_8.65%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 129 166">
          <path d={svgPaths.p12059400} fill="var(--fill-0, #97E2EF)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bg-[#b8e8f0] h-[187px] left-[29px] opacity-[0.42] rounded-[18.602px] top-[356px] w-[146px]" />
      <p className="absolute font-['Outfit:Medium',_sans-serif] font-medium h-[46px] leading-[40.676px] left-[34px] text-[#353739] text-[32px] top-[133px] w-[302px]">Step by step</p>
      <ChevronLeft />
      <Group2 />
      <div className="absolute bg-[#bee0fd] h-[192px] left-[204px] opacity-[0.42] rounded-[18.631px] top-[191px] w-[173px]" />
      <p className="absolute font-['Gilroy-SemiBold:☞',_sans-serif] h-[75.053px] leading-[21.791px] not-italic right-[86px] text-[#115691] text-[19.923px] top-[208px] translate-x-[100%] w-[62px]">Hold your Guitar</p>
      <div className="absolute bg-[#ffe1c6] h-[139px] left-[29px] opacity-[0.42] rounded-[18.602px] top-[191px] w-[146px]" />
      <div className="absolute bg-[#e3e3ff] h-[143px] left-[201px] opacity-[0.42] rounded-[18.602px] top-[397px] w-[173px]" />
      <div className="absolute bg-[#ffe2c7] h-[186px] left-[29px] opacity-[0.42] rounded-[18.602px] top-[562px] w-[345px]" />
      <p className="absolute font-['Gilroy-SemiBold:☞',_sans-serif] h-[19.4px] leading-[20.306px] left-[59px] not-italic text-[#353739] text-[24.42px] top-[586px] w-[194px]">Song of the Day</p>
      <p className="absolute font-['Gilroy-SemiBold:☞',_sans-serif] h-[33.091px] leading-[21.545px] left-[50.35px] not-italic text-[#854c1d] text-[19.699px] top-[213.18px] w-[92.985px]">Tune your guitar</p>
      <div className="absolute font-['Gilroy-SemiBold:☞',_sans-serif] h-[71px] leading-[23.142px] left-[211px] not-italic text-[#353739] text-[18.323px] top-[632px] w-[145.435px]">
        <p className="mb-0">{`“Strum along to ‘Perfect’ in just `}</p>
        <p>2 chords</p>
      </div>
      <Group />
      <Group5 />
      <Group6 />
      <Group7 />
      <Group8 />
      <div className="absolute left-[52px] size-[50px] top-[264px]">
        <div className="absolute inset-[3.291%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 47 47">
            <path d={svgPaths.pfdc5000} fill="var(--fill-0, #F58424)" fillOpacity="0.27" id="Star 1" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[22px] left-[102px] top-[257px] w-[26px]">
        <div className="absolute inset-[5.91%_7.93%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 20">
            <path d={svgPaths.p11fa8b00} fill="var(--fill-0, #FF8F31)" fillOpacity="0.29" id="Star 2" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[239px] left-[211px] top-[138px] w-[109.127px]" data-name="ccbaa590-d9f7-482c-a2e5-988e50d72b20 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[107.23%] left-[-68.32%] max-w-none top-[-4.25%] w-[234.85%]" src={imgCcbaa590D9F7482CA2E5988E50D72B201} />
        </div>
      </div>
      <div className="absolute left-[65px] rounded-[15px] size-[102px] top-[620px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[15px] size-full" src={imgImage1} />
      </div>
      <div className="absolute inset-[54.58%_20.1%_39.32%_66.67%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52 52">
          <path d={svgPaths.p280ae200} fill="var(--fill-0, #D4B3F2)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Time1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Time">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center pl-[16px] pr-[6px] py-0 relative w-full">
          <p className="font-['SF_Pro:Semibold',_sans-serif] font-[590] leading-[22px] relative shrink-0 text-[17px] text-black text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            9:41
          </p>
        </div>
      </div>
    </div>
  );
}

function DynamicIslandSpacer1() {
  return <div className="h-[10px] shrink-0 w-[124px]" data-name="Dynamic Island spacer" />;
}

function Battery1() {
  return (
    <div className="h-[13px] relative shrink-0 w-[27.328px]" data-name="Battery">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 13">
        <g id="Battery">
          <rect height="12" id="Border" opacity="0.35" rx="3.8" stroke="var(--stroke-0, black)" width="24" x="0.5" y="0.5" />
          <path d={svgPaths.p3bbd9700} fill="var(--fill-0, black)" id="Cap" opacity="0.4" />
          <rect fill="var(--fill-0, black)" height="9" id="Capacity" rx="2.5" width="21" x="2" y="2" />
        </g>
      </svg>
    </div>
  );
}

function Levels1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Levels">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[7px] items-center justify-center pl-[6px] pr-[16px] py-0 relative w-full">
          <div className="h-[12.226px] relative shrink-0 w-[19.2px]" data-name="Cellular Connection">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 13">
              <path clipRule="evenodd" d={svgPaths.p1e09e400} fill="var(--fill-0, black)" fillRule="evenodd" id="Cellular Connection" />
            </svg>
          </div>
          <div className="h-[12.328px] relative shrink-0 w-[17.142px]" data-name="Wifi">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 13">
              <path clipRule="evenodd" d={svgPaths.p18b35300} fill="var(--fill-0, black)" fillRule="evenodd" id="Wifi" />
            </svg>
          </div>
          <Battery1 />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <Time1 />
      <DynamicIslandSpacer1 />
      <Levels1 />
    </div>
  );
}

function StatusBarIPhone1() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[50px] items-start left-0 pb-0 pt-[21px] px-0 top-0 w-[393px]" data-name="Status Bar - iPhone">
      <Frame1 />
    </div>
  );
}

function ChevronLeft1() {
  return (
    <div className="absolute left-[10px] size-[48px] top-[65px]" data-name="Chevron left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Chevron left" opacity="0.5">
          <path d="M30 36L18 24L30 12" id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents left-[40px] top-[236px]">
      <div className="absolute bg-[#d4b3f2] h-[102.311px] left-[40px] opacity-[0.42] rounded-[18.602px] top-[236px] w-[312.513px]" />
      <p className="absolute font-['Gilroy-SemiBold:☞',_sans-serif] h-[38.313px] leading-[33.879px] left-[114.41px] not-italic text-[#551b8f] text-[30.975px] top-[256.46px] w-[164.081px]">Elementary</p>
      <p className="absolute font-['Gilroy-Medium:☞',_sans-serif] h-[15.812px] leading-[15.707px] left-[115.34px] not-italic text-[#551b8f] text-[14.361px] top-[301.11px] w-[162.767px]">I’ve never played before</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[40px] top-[359.31px]">
      <div className="absolute bg-[#bee0fd] h-[102.47px] left-[40px] opacity-[0.42] rounded-[18.631px] top-[359.31px] w-[313px]" />
      <p className="absolute font-['Gilroy-SemiBold:☞',_sans-serif] h-[38.194px] leading-[33.389px] left-[131.29px] not-italic text-[#115691] text-[30.527px] top-[377.01px] w-[131.348px]">Beginner</p>
      <p className="absolute font-['Gilroy-Medium:☞',_sans-serif] h-[15.836px] leading-[15.732px] left-[134.09px] not-italic text-[#115691] text-[14.383px] top-[422.66px] w-[124.827px]">Know a few basics</p>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents left-[40px] top-[482.78px]">
      <div className="absolute bg-[#b8e8f0] h-[102.311px] left-[40px] opacity-[0.42] rounded-[18.602px] top-[482.78px] w-[312.513px]" />
      <p className="absolute font-['Gilroy-SemiBold:☞',_sans-serif] h-[35.344px] leading-[31.253px] left-[107.9px] not-italic text-[#106172] text-[28.574px] top-[503.24px] w-[177.649px]">Intermediate</p>
      <p className="absolute font-['Gilroy-Medium:☞',_sans-serif] h-[15.812px] leading-[15.707px] left-[122.78px] not-italic text-[#106172] text-[14.361px] top-[547.89px] w-[146.955px]">I can play a few songs</p>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[40px] top-[606.09px]">
      <div className="absolute bg-[#ffe1c6] h-[102.311px] left-[40px] opacity-[0.42] rounded-[18.602px] top-[606.09px] w-[312.513px]" />
      <p className="absolute font-['Gilroy-SemiBold:☞',_sans-serif] h-[35.344px] leading-[31.253px] left-[125px] not-italic text-[#854c1d] text-[28.574px] top-[622.4px] w-[141.375px]">Advanced</p>
      <p className="absolute font-['Gilroy-Medium:☞',_sans-serif] h-[15.812px] leading-[15.707px] left-[131px] not-italic text-[#854c1d] text-[14.361px] top-[667.4px] w-[119.052px]">Pro, but improving</p>
    </div>
  );
}

function Tool1() {
  return (
    <div className="absolute left-[235px] size-[30px] top-[798px]" data-name="Tool">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="Tool">
          <path d={svgPaths.p231b55f0} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
}

function Music1() {
  return (
    <div className="absolute left-[142px] size-[32px] top-[794px]" data-name="Music">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Music">
          <path d={svgPaths.p3b30a900} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function User1() {
  return (
    <div className="absolute left-[311px] size-[32.461px] top-[794px]" data-name="User">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 33">
        <g id="User">
          <path d={svgPaths.p10d95d00} id="Icon" stroke="var(--stroke-0, #353739)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.70508" />
        </g>
      </svg>
    </div>
  );
}

function Home1() {
  return (
    <div className="absolute left-[50px] size-[31.379px] top-[794px]" data-name="Home">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Home">
          <path d={svgPaths.p2ec7df80} id="Icon" stroke="var(--stroke-0, #353739)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.61491" />
        </g>
      </svg>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents left-0 top-[770px]">
      <div className="absolute bg-white h-[82px] left-0 rounded-bl-[20px] rounded-br-[20px] top-[770px] w-[393px]" />
      <Tool1 />
      <Music1 />
      <User1 />
      <Home1 />
    </div>
  );
}

function LevelChoose() {
  return (
    <div className="absolute bg-white h-[852px] left-[613px] overflow-clip rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[213px] w-[393px]" data-name="Level Choose">
      <Group12 />
      <StatusBarIPhone1 />
      <p className="absolute font-['Outfit:Medium',_sans-serif] font-medium h-[46px] leading-[40.676px] left-[28px] text-[#44275f] text-[37.189px] top-[128px] w-[302px]">Choose your level</p>
      <ChevronLeft1 />
      <p className="absolute font-['Gilroy-Regular:☞',_sans-serif] h-[13.738px] leading-[19.957px] left-[31px] not-italic opacity-50 text-[18.246px] text-black top-[182.26px] w-[314px]">We will adapt the app to your level</p>
      <Group9 />
      <Group1 />
      <Group11 />
      <Group3 />
    </div>
  );
}

function Time2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Time">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center pl-[16px] pr-[6px] py-0 relative w-full">
          <p className="font-['SF_Pro:Semibold',_sans-serif] font-[590] leading-[22px] relative shrink-0 text-[17px] text-black text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            9:41
          </p>
        </div>
      </div>
    </div>
  );
}

function DynamicIslandSpacer2() {
  return <div className="h-[10px] shrink-0 w-[124px]" data-name="Dynamic Island spacer" />;
}

function Battery2() {
  return (
    <div className="h-[13px] relative shrink-0 w-[27.328px]" data-name="Battery">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 13">
        <g id="Battery">
          <rect height="12" id="Border" opacity="0.35" rx="3.8" stroke="var(--stroke-0, black)" width="24" x="0.5" y="0.5" />
          <path d={svgPaths.p3bbd9700} fill="var(--fill-0, black)" id="Cap" opacity="0.4" />
          <rect fill="var(--fill-0, black)" height="9" id="Capacity" rx="2.5" width="21" x="2" y="2" />
        </g>
      </svg>
    </div>
  );
}

function Levels2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Levels">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[7px] items-center justify-center pl-[6px] pr-[16px] py-0 relative w-full">
          <div className="h-[12.226px] relative shrink-0 w-[19.2px]" data-name="Cellular Connection">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 13">
              <path clipRule="evenodd" d={svgPaths.p1e09e400} fill="var(--fill-0, black)" fillRule="evenodd" id="Cellular Connection" />
            </svg>
          </div>
          <div className="h-[12.328px] relative shrink-0 w-[17.142px]" data-name="Wifi">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 13">
              <path clipRule="evenodd" d={svgPaths.p18b35300} fill="var(--fill-0, black)" fillRule="evenodd" id="Wifi" />
            </svg>
          </div>
          <Battery2 />
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <Time2 />
      <DynamicIslandSpacer2 />
      <Levels2 />
    </div>
  );
}

function StatusBarIPhone2() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[50px] items-start left-[-4px] pb-0 pt-[21px] px-0 top-0 w-[402px]" data-name="Status Bar - iPhone">
      <Frame3 />
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents left-[89px] top-[371px]">
      <p className="absolute font-['Gilroy-Bold:☞',_sans-serif] h-[19px] leading-[normal] left-[105px] not-italic text-[#353739] text-[13px] top-[481px] tracking-[0.39px] w-[184px] whitespace-pre-wrap">{`Learn  instruments your way`}</p>
      <div className="absolute h-[110px] left-[89px] top-[371px] w-[215px]" data-name="Logo">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[195.45%] left-0 max-w-none top-[-30.91%] w-full" src={imgLogo} />
        </div>
      </div>
    </div>
  );
}

function FrontPage() {
  return (
    <div className="absolute bg-white h-[852px] left-[194px] overflow-clip rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[219px] w-[393px]" data-name="Front Page">
      <div className="absolute h-[797px] left-[-27px] top-[50px] w-[448.312px]" data-name="bg">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBg} />
      </div>
      <StatusBarIPhone2 />
      <Group10 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.82)] box-border content-stretch flex gap-[10px] items-center justify-center left-[240px] p-[10px] top-[93px]">
      <p className="font-['Gilroy-SemiBold:☞',_sans-serif] leading-[40.676px] not-italic relative shrink-0 text-[#353739] text-[64px] text-nowrap whitespace-pre">Musical Instrument Learning App UI</p>
    </div>
  );
}

export default function Design() {
  return (
    <div className="bg-[#e7feff] relative size-full" data-name="Design">
      <div className="absolute h-[2045px] left-0 top-0 w-[1483px]" data-name="c586b2f63c1fb9b24a76829b67e7a85d 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover opacity-20 pointer-events-none size-full" src={imgC586B2F63C1Fb9B24A76829B67E7A85D1} />
      </div>
      <Steps />
      <LevelChoose />
      <FrontPage />
      <Frame2 />
    </div>
  );
}