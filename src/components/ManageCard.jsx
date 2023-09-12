import React from "react";
import EastIcon from '@mui/icons-material/East';
import SouthIcon from '@mui/icons-material/South';


export const ManageCard = () => {

    const sendMessageToFlutter = () => {
        window.myChannel.postMessage('Hello from JavaScript');
    };


    return (
        <div className="inline-flex flex-col gap-[12px] w-full">
            <div className="relative p-[16px] mt-5 h-[112px] bg-[#262626] rounded-[16px] overflow-hidden">

                <div className="absolute top-[-22px] right-[16px] ">
                    <img src="images/card.svg" className="h-[181px] w-[126px] rounded-[16px]" alt="card image" />
                </div>

                <div className="inline-flex flex-col items-start gap-[12px] pt-2">
                    <div className="inline-flex flex-col items-start justify-center gap-[4px]">
                        <div className="text-type-neutral-medium-emphasis font-inter font-semibold text-[16px] tracking-[0.4px] text-[#F2F2F2] leading-24">
                            Manage my card
                        </div>
                        <div className="[font-family:'Inter-Regular',_Helvetica] tracking-[0.4px] text-[12px] text-[#d8d8d8] font-normal leading-24">
                            Convert to EMI
                        </div>
                    </div>
                    <div className="[font-family:'Inter-Medium',_Helvetica] font-medium text-[#ffe3b6] text-[14px] text-right tracking-[0.4px] leading-24 ">
                        <button
                            className="text-[#ffe3b6] focus:outline-none"
                            onClick={sendMessageToFlutter}
                        >
                            Manage <EastIcon />
                        </button>
                    </div>
                </div>
            </div>


            <div className="grid grid-cols-2  gap-4">

                <button onClick="" className="bg-[#262626] py-[12px] px-[16px] items-center rounded-[16px] h-[72px] focus:outline-none">

                    <div className="flex flex-wrap gap-[8px] items-center justify-center">
                        <img src="images/gold-jewels-outline.svg" alt="gold jewel image" className="h-[48px] w-[48px] p-3 rounded-full text-black bg-[#FFE3B6]" />
                        <div className="font-inter text-white text-base text-left leading-[22px] whitespace-normal">View <br />  Jewels</div>
                    </div>

                </button>
                <button onClick="" className="bg-[#262626] py-[12px] px-[16px] items-center rounded-[16px] h-[72px] focus:outline-none">

                    <div className="flex flex-wrap gap-[7px] items-center justify-center">
                        <div className="h-[48px] w-[48px] p-3 rounded-full text-black bg-[#FFE3B6]"><SouthIcon /></div>
                        <div className="font-inter text-white text-base text-left leading-[22px] whitespace-normal">Withdraw</div>
                    </div>

                </button>

            </div>
        </div>
    );
};
