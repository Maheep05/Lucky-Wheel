import { memo, useState } from "react";
import LuckyWheel from "../Components/LuckyWheel";
import { PaytmIcon, SpeakerOff, SpeakerOn } from "../Components/Icons";
import spin from "../../src/assets/spin.png";
import flower from "../assets/Flowers.png";
import luckyWheelFont from "../assets/Lucky-Wheel-Font.png";
import gift1 from "../assets/gift1.png";
import gift2 from "../assets/gift2.png";
import gift3 from "../assets/gift3.png";

const SpinWheel = memo(() => {
  const [speakerOff, setSpeakerOff] = useState<boolean>(false);
  const [spins, setSpins] = useState<number>(3);

  const toggleSpeaker = () => {
    setSpeakerOff(!speakerOff);
  };

  const handleSpin = () => {
    if (spins > 0) {
      setSpins(spins - 1);
    }
  };

  const renderImages = () => {
    return Array.from({ length: spins }, (_, index) => (
      <img
        key={index}
        src={spin}
        alt={`Spin ${index + 1}`}
        className="h-12 md:h-14"
      />
    ));
  };

  return (
    <div className="relative overflow-hidden bg-[#4c0e30] min-h-screen flex flex-col items-center  md:px-8">
      <div
        className="absolute p-2 top-4 z-50 right-4 md:top-6 md:right-6 cursor-pointer"
        onClick={toggleSpeaker}
      >
        {speakerOff ? <SpeakerOff /> : <SpeakerOn />}
      </div>

      <div className="relative w-full flex flex-col items-center">
        <img src={flower} alt="" className="h-[10rem] w-[30rem] md:h-[10rem]" />
        <div className="bg-white w-28 md:w-36 flex justify-center items-center md:h-14 h-10 rounded-lg absolute md:top-8 top-8 border-4 border-[#ffde41]">
          <PaytmIcon />
        </div>
      </div>
      <img
        src={luckyWheelFont}
        alt="luckWheelFont"
        className="w-72 absolute top-28 my-2"
      />

      <LuckyWheel
        onSpin={handleSpin}
        remainingSpins={spins}
        speakerOff={speakerOff}
      />

      <div className="text-base md:text-xl bg-[#002a74] p-3 md:p-4 rounded-lg w-80 md:w-96  flex flex-col items-center gap-4 font-semibold z-50 text-white mb-2 relative">
        {spins > 0 ? `${spins} Lucky Spins Available` : "No Spins Available"}
        <span className="flex flex-row items-center">{renderImages()}</span>
      </div>
      <div className="absolute flex flex-row gap-10 md:gap-40 bottom-0 z-40 opacity-60">
        <img src={gift1} alt="" className="md:h-40 h-20" />
        <img src={gift2} alt="" className="md:h-40 h-20" />
        <img src={gift3} alt="" className="md:h-40 h-20" />
      </div>
      <div className="text-base md:text-xl z-50 p-3 md:p-4 rounded-lg max-w-md flex flex-col items-center gap-4 font-semibold bg-[#ffde41] text-[#002a74] mt-6 mb-4">
        FREE SPINS EVERYDAY
      </div>
      <div className="w-full overflow-hidden absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 320"
          className="w-full  fill-current text-[#5a3047]"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,160L48,144C96,128,192,96,288,112C384,128,480,192,576,197.3C672,203,768,149,864,138.7C960,128,1056,160,1152,181.3C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
});

export default SpinWheel;
