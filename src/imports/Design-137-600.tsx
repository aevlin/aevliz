import svgPaths from "./svg-svv1xkybxr";
import imgCcbaa590D9F7482CA2E5988E50D72B201 from "figma:asset/ccf59f172c825956d10158454a58cb23f8511160.png";
import imgImage1 from "figma:asset/622a96253998bd36a6f46f45918b18dc172a39c6.png";
import imgLogo from "figma:asset/b9b8848d1054f27d3889ccf99224dc8fbb5fb99c.png";
import imgBg from "figma:asset/8075cb80e5be6a4e52021cbb4b109d4402fec1f8.png";
import imgGuitar from "figma:asset/0d210a632909628dd5a7d04859b32ccd9807e7ab.png";
import imgC586B2F63C1Fb9B24A76829B67E7A85D1 from "figma:asset/677f708f28cb590f0fb2d86ba9b1f5160c70c950.png";

function Time() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Time">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-[16px] pr-[6px] py-0 relative w-full">
          <p className="css-ew64yg font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] relative shrink-0 text-[17px] text-black text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
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
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.328 13">
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
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Levels">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[7px] items-center justify-center pl-[6px] pr-[16px] py-0 relative w-full">
          <div className="h-[12.226px] relative shrink-0 w-[19.2px]" data-name="Cellular Connection">
            <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2 12.2264">
                <path clipRule="evenodd" d={svgPaths.p1e09e400} fill="var(--fill-0, black)" fillRule="evenodd" id="Cellular Connection" />
              </svg>
            </div>
          </div>
          <div className="h-[12.328px] relative shrink-0 w-[17.142px]" data-name="Wifi">
            <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.1417 12.3283">
                <path clipRule="evenodd" d={svgPaths.p18b35300} fill="var(--fill-0, black)" fillRule="evenodd" id="Wifi" />
              </svg>
            </div>
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
    <div className="absolute bg-white content-stretch flex flex-col h-[50px] items-start left-0 pb-0 pt-[21px] px-0 top-0 w-[393px]" data-name="Status Bar - iPhone">
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

function Group5() {
  return (
    <div className="absolute contents right-[226px] top-[383px]">
      <div className="absolute font-['Gilroy-SemiBold:☞',sans-serif] h-[54px] leading-[24.905px] not-italic right-[226px] text-[#106172] text-[18px] text-right top-[383px] w-[136px]">
        <p className="css-4hzbpn mb-0">{`Learn your `}</p>
        <p className="css-4hzbpn">first chord</p>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[228px] top-[420px]">
      <p className="absolute css-4hzbpn font-['Gilroy-SemiBold:☞',sans-serif] h-[34px] leading-[20.208px] left-[228px] not-italic text-[#551b8f] text-[18.476px] top-[420px] w-[134.211px]">Play Your First Song</p>
    </div>
  );
}

function Group8() {
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

function Group9() {
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

function Group10() {
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

function Group11() {
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
          <path d={svgPaths.p371db000} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
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
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.4609 32.4609">
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
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.3789 31.3789">
        <g id="Home">
          <path d={svgPaths.p2ec7df80} id="Icon" stroke="var(--stroke-0, #353739)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.61491" />
        </g>
      </svg>
    </div>
  );
}

function Group7() {
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
      <Group7 />
      <StatusBarIPhone />
      <div className="absolute inset-[43.08%_58.52%_37.44%_8.65%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 129 166">
          <path d={svgPaths.p12059400} fill="var(--fill-0, #97E2EF)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bg-[#b8e8f0] h-[187px] left-[29px] opacity-42 rounded-[18.602px] top-[356px] w-[146px]" />
      <p className="absolute css-4hzbpn font-['Outfit:Medium',sans-serif] font-medium h-[46px] leading-[40.676px] left-[34px] text-[#353739] text-[32px] top-[133px] w-[302px]">Step by step</p>
      <ChevronLeft />
      <Group5 />
      <div className="absolute bg-[#bee0fd] h-[192px] left-[204px] opacity-42 rounded-[18.631px] top-[191px] w-[173px]" />
      <p className="absolute css-4hzbpn font-['Gilroy-SemiBold:☞',sans-serif] h-[75.053px] leading-[21.791px] not-italic right-[86px] text-[#115691] text-[19.923px] top-[208px] translate-x-[100%] w-[62px]">Hold your Guitar</p>
      <div className="absolute bg-[#ffe1c6] h-[139px] left-[29px] opacity-42 rounded-[18.602px] top-[191px] w-[146px]" />
      <div className="absolute bg-[#e3e3ff] h-[143px] left-[201px] opacity-42 rounded-[18.602px] top-[397px] w-[173px]" />
      <div className="absolute bg-[#ffe2c7] h-[186px] left-[29px] opacity-42 rounded-[18.602px] top-[562px] w-[345px]" />
      <p className="absolute css-4hzbpn font-['Gilroy-SemiBold:☞',sans-serif] h-[19.4px] leading-[20.306px] left-[59px] not-italic text-[#353739] text-[24.42px] top-[586px] w-[194px]">Song of the Day</p>
      <p className="absolute css-4hzbpn font-['Gilroy-SemiBold:☞',sans-serif] h-[33.091px] leading-[21.545px] left-[50.35px] not-italic text-[#854c1d] text-[19.699px] top-[213.18px] w-[92.985px]">Tune your guitar</p>
      <div className="absolute font-['Gilroy-SemiBold:☞',sans-serif] h-[71px] leading-[23.142px] left-[211px] not-italic text-[#353739] text-[18.323px] top-[632px] w-[145.435px]">
        <p className="css-4hzbpn mb-0">{`“Strum along to ‘Perfect’ in just `}</p>
        <p className="css-4hzbpn">2 chords</p>
      </div>
      <Group3 />
      <Group8 />
      <Group9 />
      <Group10 />
      <Group11 />
      <div className="absolute left-[52px] size-[50px] top-[264px]">
        <div className="absolute inset-[3.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46.7088 46.7088">
            <path d={svgPaths.pfdc5000} fill="var(--fill-0, #F58424)" fillOpacity="0.27" id="Star 1" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[22px] left-[102px] top-[257px] w-[26px]">
        <div className="absolute inset-[5.91%_7.93%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.875 19.3977">
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
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[15px] size-full" src={imgImage1} />
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
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Time">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-[16px] pr-[6px] py-0 relative w-full">
          <p className="css-ew64yg font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] relative shrink-0 text-[17px] text-black text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
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
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.328 13">
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
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Levels">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[7px] items-center justify-center pl-[6px] pr-[16px] py-0 relative w-full">
          <div className="h-[12.226px] relative shrink-0 w-[19.2px]" data-name="Cellular Connection">
            <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2 12.2264">
                <path clipRule="evenodd" d={svgPaths.p1e09e400} fill="var(--fill-0, black)" fillRule="evenodd" id="Cellular Connection" />
              </svg>
            </div>
          </div>
          <div className="h-[12.328px] relative shrink-0 w-[17.142px]" data-name="Wifi">
            <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.1417 12.3283">
                <path clipRule="evenodd" d={svgPaths.p18b35300} fill="var(--fill-0, black)" fillRule="evenodd" id="Wifi" />
              </svg>
            </div>
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
    <div className="absolute bg-white content-stretch flex flex-col h-[50px] items-start left-0 pb-0 pt-[21px] px-0 top-0 w-[393px]" data-name="Status Bar - iPhone">
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

function Group14() {
  return (
    <div className="absolute contents left-[40px] top-[236px]">
      <div className="absolute bg-[#d4b3f2] h-[102.311px] left-[40px] opacity-42 rounded-[18.602px] top-[236px] w-[312.513px]" />
      <p className="absolute css-4hzbpn font-['Gilroy-SemiBold:☞',sans-serif] h-[38.313px] leading-[33.879px] left-[114.41px] not-italic text-[#551b8f] text-[30.975px] top-[256.46px] w-[164.081px]">Elementary</p>
      <p className="absolute css-4hzbpn font-['Gilroy-Medium:☞',sans-serif] h-[15.812px] leading-[15.707px] left-[115.34px] not-italic text-[#551b8f] text-[14.361px] top-[301.11px] w-[162.767px]">I’ve never played before</p>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[40px] top-[359.31px]">
      <div className="absolute bg-[#bee0fd] h-[102.47px] left-[40px] opacity-42 rounded-[18.631px] top-[359.31px] w-[313px]" />
      <p className="absolute css-4hzbpn font-['Gilroy-SemiBold:☞',sans-serif] h-[38.193px] leading-[33.389px] left-[131.29px] not-italic text-[#115691] text-[30.527px] top-[377.01px] w-[131.348px]">Beginner</p>
      <p className="absolute css-4hzbpn font-['Gilroy-Medium:☞',sans-serif] h-[15.836px] leading-[15.732px] left-[134.09px] not-italic text-[#115691] text-[14.383px] top-[422.66px] w-[124.827px]">Know a few basics</p>
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute contents left-[40px] top-[482.78px]">
      <div className="absolute bg-[#b8e8f0] h-[102.311px] left-[40px] opacity-42 rounded-[18.602px] top-[482.78px] w-[312.513px]" />
      <p className="absolute css-4hzbpn font-['Gilroy-SemiBold:☞',sans-serif] h-[35.344px] leading-[31.253px] left-[107.9px] not-italic text-[#106172] text-[28.574px] top-[503.24px] w-[177.649px]">Intermediate</p>
      <p className="absolute css-4hzbpn font-['Gilroy-Medium:☞',sans-serif] h-[15.812px] leading-[15.707px] left-[122.78px] not-italic text-[#106172] text-[14.361px] top-[547.89px] w-[146.955px]">I can play a few songs</p>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-[40px] top-[606.09px]">
      <div className="absolute bg-[#ffe1c6] h-[102.311px] left-[40px] opacity-42 rounded-[18.602px] top-[606.09px] w-[312.513px]" />
      <p className="absolute css-4hzbpn font-['Gilroy-SemiBold:☞',sans-serif] h-[35.344px] leading-[31.253px] left-[125px] not-italic text-[#854c1d] text-[28.574px] top-[622.4px] w-[141.375px]">Advanced</p>
      <p className="absolute css-4hzbpn font-['Gilroy-Medium:☞',sans-serif] h-[15.812px] leading-[15.707px] left-[131px] not-italic text-[#854c1d] text-[14.361px] top-[667.4px] w-[119.052px]">Pro, but improving</p>
    </div>
  );
}

function Tool1() {
  return (
    <div className="absolute left-[235px] size-[30px] top-[798px]" data-name="Tool">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="Tool">
          <path d={svgPaths.p371db000} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
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
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.4609 32.4609">
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
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.3789 31.3789">
        <g id="Home">
          <path d={svgPaths.p2ec7df80} id="Icon" stroke="var(--stroke-0, #353739)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.61491" />
        </g>
      </svg>
    </div>
  );
}

function Group16() {
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
      <Group16 />
      <StatusBarIPhone1 />
      <p className="absolute css-4hzbpn font-['Outfit:Medium',sans-serif] font-medium h-[46px] leading-[40.676px] left-[28px] text-[#44275f] text-[37.189px] top-[128px] w-[302px]">Choose your level</p>
      <ChevronLeft1 />
      <p className="absolute css-4hzbpn font-['Gilroy-Regular:☞',sans-serif] h-[13.737px] leading-[19.957px] left-[31px] not-italic opacity-50 text-[18.246px] text-black top-[182.26px] w-[314px]">We will adapt the app to your level</p>
      <Group14 />
      <Group4 />
      <Group15 />
      <Group6 />
    </div>
  );
}

function Time2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Time">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-[16px] pr-[6px] py-0 relative w-full">
          <p className="css-ew64yg font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] relative shrink-0 text-[17px] text-black text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
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
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.328 13">
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
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Levels">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[7px] items-center justify-center pl-[6px] pr-[16px] py-0 relative w-full">
          <div className="h-[12.226px] relative shrink-0 w-[19.2px]" data-name="Cellular Connection">
            <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2 12.2264">
                <path clipRule="evenodd" d={svgPaths.p1e09e400} fill="var(--fill-0, black)" fillRule="evenodd" id="Cellular Connection" />
              </svg>
            </div>
          </div>
          <div className="h-[12.328px] relative shrink-0 w-[17.142px]" data-name="Wifi">
            <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.1417 12.3283">
                <path clipRule="evenodd" d={svgPaths.p18b35300} fill="var(--fill-0, black)" fillRule="evenodd" id="Wifi" />
              </svg>
            </div>
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
    <div className="absolute bg-white content-stretch flex flex-col h-[50px] items-start left-[-4px] pb-0 pt-[21px] px-0 top-0 w-[402px]" data-name="Status Bar - iPhone">
      <Frame3 />
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents left-[89px] top-[371px]">
      <p className="absolute css-4hzbpn font-['Gilroy-Bold:☞',sans-serif] h-[19px] leading-[normal] left-[105px] not-italic text-[#353739] text-[13px] top-[481px] tracking-[0.39px] w-[184px]">{`Learn  instruments your way`}</p>
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
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBg} />
      </div>
      <StatusBarIPhone2 />
      <Group13 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.82)] content-stretch flex items-center justify-center left-[240px] p-[10px] top-[93px]">
      <p className="css-ew64yg font-['Gilroy-SemiBold:☞',sans-serif] leading-[40.676px] not-italic relative shrink-0 text-[#353739] text-[64px]">Musical Instrument Learning App UI</p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents h-[394.292px] left-[calc(50%-471.12px)] top-[calc(50%+132.15px)] translate-x-[-50%] translate-y-[-50%] w-[292.761px]">
      <div className="absolute flex h-[394.292px] items-center justify-center left-[calc(50%-471.12px)] top-[calc(50%+132.15px)] translate-x-[-50%] translate-y-[-50%] w-[292.761px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[355.3deg]">
          <div className="h-[374px] relative w-[263px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 263 374">
              <path d={svgPaths.pa4c13f0} fill="var(--fill-0, white)" id="Rectangle 2" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[204.909px] items-center justify-center left-[calc(50%-468.58px)] top-[calc(50%+124.67px)] translate-x-[-50%] translate-y-[-50%] w-[186.406px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[355.3deg]">
          <div className="h-[191.518px] relative w-[171.29px]" data-name="guitar">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[307.01%] left-[-342.46%] max-w-none top-[-101.73%] w-[457.69%]" src={imgGuitar} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[67.465px] items-center justify-center left-[calc(50%-523.73px)] top-[calc(50%+232.18px)] w-[134.255px]" style={{ "--transform-inner-width": "44.09375", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[355.3deg]">
          <p className="css-4hzbpn font-['Gilroy-ExtraBold:☞',sans-serif] h-[57.003px] leading-[51.233px] not-italic relative text-[#353739] text-[40px] w-[130.021px]">Guitar</p>
        </div>
      </div>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents h-[380.41px] left-[calc(50%-159.4px)] top-[328px] translate-x-[-50%] w-[272.198px]">
      <div className="absolute flex h-[380.41px] items-center justify-center left-[calc(50%-159.4px)] top-[328px] translate-x-[-50%] w-[272.198px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[358.578deg]">
          <div className="h-[374px] relative w-[263px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 263 374">
              <path d={svgPaths.p3bafa00} fill="var(--fill-0, white)" id="Rectangle 1" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[209.061px] items-center justify-center left-[calc(50%-172.38px)] top-[383.99px] translate-x-[-50%] w-[211.516px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[358.578deg]">
          <div className="h-[204px] relative w-[206.519px]" data-name="piano">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[366.07%] left-[-353.45%] max-w-none top-[-19.34%] w-[482.14%]" src={imgGuitar} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[64.983px] items-center justify-center left-[calc(50%-217.38px)] top-[617.67px] w-[122.501px]" style={{ "--transform-inner-width": "40.171875", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[358.578deg]">
          <p className="css-4hzbpn font-['Gilroy-ExtraBold:☞',sans-serif] h-[62px] leading-[60.278px] not-italic relative text-[#1e1e1e] text-[40px] w-[121px]">Piano</p>
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents h-[394.292px] left-[calc(50%+158.88px)] top-[332px] translate-x-[-50%] w-[292.761px]">
      <div className="absolute flex h-[394.292px] items-center justify-center left-[calc(50%+158.88px)] top-[332px] translate-x-[-50%] w-[292.761px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[4.7deg]">
          <div className="h-[374px] relative w-[263px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 263 374">
              <path d={svgPaths.p3bafa00} fill="var(--fill-0, white)" id="Rectangle 1" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[223.472px] items-center justify-center left-[calc(50%+169.27px)] top-[415.25px] translate-x-[-50%] w-[213.745px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[4.7deg]">
          <div className="h-[208px] relative w-[197.366px]" data-name="drums">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[304.07%] left-[-19.51%] max-w-none top-[-12.17%] w-[430.19%]" src={imgGuitar} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[50.025px] items-center justify-center left-[calc(50%+91.28px)] top-[633.23px] w-[114.807px]" style={{ "--transform-inner-width": "39.71875", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[4.7deg]">
          <p className="css-4hzbpn font-['Gilroy-ExtraBold:☞',sans-serif] h-[41px] leading-[35px] not-italic relative text-[#353739] text-[40px] w-[111.824px]">Drum</p>
        </div>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents h-[404.248px] left-[calc(50%+477.59px)] top-[361px] translate-x-[-50%] w-[308.171px]">
      <div className="absolute flex h-[404.248px] items-center justify-center left-[calc(50%+477.59px)] top-[361px] translate-x-[-50%] w-[308.171px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[7.263deg]">
          <div className="h-[374px] relative w-[263px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 263 374">
              <path d={svgPaths.p3bafa00} fill="var(--fill-0, white)" id="Rectangle 1" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[54.808px] items-center justify-center left-[calc(50%+403.57px)] top-[664.23px] w-[116.11px]" style={{ "--transform-inner-width": "39.71875", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[7.263deg]">
          <p className="css-4hzbpn font-['Gilroy-ExtraBold:☞',sans-serif] h-[41px] leading-[35px] not-italic relative text-[#353739] text-[40px] w-[111.824px]">Vocal</p>
        </div>
      </div>
      <div className="absolute flex h-[186.221px] items-center justify-center left-[calc(50%+475.03px)] top-[448.52px] translate-x-[-50%] w-[190.104px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[7.263deg]">
          <div className="h-[166px] relative w-[170.486px]" data-name="vocals">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[336.94%] left-[-120.55%] max-w-none top-[-120.09%] w-[440.42%]" src={imgGuitar} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Time3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Time">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-[16px] pr-[6px] py-0 relative w-full">
          <p className="css-ew64yg font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] relative shrink-0 text-[17px] text-black text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
            9:41
          </p>
        </div>
      </div>
    </div>
  );
}

function DynamicIslandSpacer3() {
  return <div className="h-[10px] shrink-0 w-[124px]" data-name="Dynamic Island spacer" />;
}

function Battery3() {
  return (
    <div className="h-[13px] relative shrink-0 w-[27.328px]" data-name="Battery">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.328 13">
        <g id="Battery">
          <rect height="12" id="Border" opacity="0.35" rx="3.8" stroke="var(--stroke-0, black)" width="24" x="0.5" y="0.5" />
          <path d={svgPaths.p3bbd9700} fill="var(--fill-0, black)" id="Cap" opacity="0.4" />
          <rect fill="var(--fill-0, black)" height="9" id="Capacity" rx="2.5" width="21" x="2" y="2" />
        </g>
      </svg>
    </div>
  );
}

function Levels3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Levels">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[7px] items-center justify-center pl-[6px] pr-[16px] py-0 relative w-full">
          <div className="h-[12.226px] relative shrink-0 w-[19.2px]" data-name="Cellular Connection">
            <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2 12.2264">
                <path clipRule="evenodd" d={svgPaths.p1e09e400} fill="var(--fill-0, black)" fillRule="evenodd" id="Cellular Connection" />
              </svg>
            </div>
          </div>
          <div className="h-[12.328px] relative shrink-0 w-[17.142px]" data-name="Wifi">
            <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.1417 12.3283">
                <path clipRule="evenodd" d={svgPaths.p18b35300} fill="var(--fill-0, black)" fillRule="evenodd" id="Wifi" />
              </svg>
            </div>
          </div>
          <Battery3 />
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <Time3 />
      <DynamicIslandSpacer3 />
      <Levels3 />
    </div>
  );
}

function StatusBarIPhone3() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[50px] items-start left-0 pb-0 pt-[21px] px-0 top-0 w-[1347px]" data-name="Status Bar - iPhone">
      <Frame4 />
    </div>
  );
}

function Piano() {
  return (
    <div className="absolute bg-white h-[852px] left-[102px] overflow-x-auto overflow-y-clip rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[1278px] w-[1335px]" data-name="Piano">
      <div className="absolute font-['Gilroy-ExtraBold:☞',sans-serif] h-[86px] leading-[40.676px] left-[46px] not-italic text-[#353739] text-[37.189px] top-[85px] w-[302.162px]">
        <p className="css-4hzbpn mb-0">{`Hey Sandra 👋 `}</p>
        <p className="css-4hzbpn">Ready to jam?</p>
      </div>
      <div className="absolute h-[1106px] left-[-169px] top-[141px] w-[1682px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1682 1106">
          <ellipse cx="841" cy="553" fill="var(--fill-0, #C5DEFA)" id="Ellipse 1" opacity="0.88" rx="841" ry="553" />
        </svg>
      </div>
      <Group />
      <Group12 />
      <Group1 />
      <Group2 />
      <StatusBarIPhone3 />
    </div>
  );
}

export default function Design() {
  return (
    <div className="bg-[#e7feff] relative size-full" data-name="Design">
      <div className="absolute h-[2045px] left-0 top-0 w-[1483px]" data-name="c586b2f63c1fb9b24a76829b67e7a85d 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover opacity-20 pointer-events-none size-full" src={imgC586B2F63C1Fb9B24A76829B67E7A85D1} />
      </div>
      <Steps />
      <LevelChoose />
      <FrontPage />
      <Frame2 />
      <Piano />
    </div>
  );
}