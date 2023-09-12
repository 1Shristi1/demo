import React from "react";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export const ManageCard = () => {

    const sendMessageToFlutter = () => {
        window.myChannel.postMessage('Hello from JavaScript');
      };


    return (

        <div className="relative p-4 mt-5 h-40 bg-neutral-800 rounded-[16px] overflow-hidden">

            <div className="absolute h-[181px] w-[140px] top-[40px] right-[20px] items-center justify-center rounded-[16px] bg-gradient-to-r from-neutral-700 to-neutral-500">
                <div className="text-center ">
                    <div className="inline-flex gap-[2px]">
                        <div className=" w-[20px] h-[20px] bg-[#d9d9d9] rounded-[1px]" />
                        <img className=" w-[8px] h-[12px]" alt="Nfc" src="NFC.svg" />
                    </div>
                    <div className=" pt-2 [font-family:'Inter-SemiBold',_Helvetica] font-semibold text-[#a6a6a6] text-[16px] tracking-[0.24px] leading-[18px] whitespace-nowrap ">
                        XXXX
                    </div>
                </div>
            </div>

            <div className="inline-flex flex-col items-start gap-[20px] pt-2">
                <div className="inline-flex flex-col items-start justify-center gap-[4px]">
                    <div className="[font-family:'Inter-SemiBold',_Helvetica] text-[#f2f2f2] text-[20px] tracking-[0]  whitespace-nowrap">
                        Manage my card
                    </div>
                    <div className="[font-family:'Inter-Regular',_Helvetica] w-[128px] left-0 tracking-[0.24px] text-[16px] text-[#d8d8d8] font-normal  ">
                        Convert to EMI
                    </div>
                </div>

                <div className="[font-family:'Inter-Medium',_Helvetica] font-medium text-[#ffe3b6] text-[18px] text-right tracking-[0] leading-[22px] whitespace-nowrap ">
                    <button
                        className="text-[#ffe3b6] focus:outline-none"
                        onClick={sendMessageToFlutter}
                    >
                        Manage <ArrowRightAltIcon />
                    </button>
                </div>
            </div>


        </div>

        // <div className="flex flex-col items-start justify-center p-6 mt-5 relative bg-neutral-800 rounded-[16px] overflow-hidden">
        //     <div className="absolute w-[140px] h-[181px] top-[40px] right-[20px] rounded-[16px] bg-gradient-to-r from-neutral-700 to-neutral-500">
        //         <div className="inline-flex items-start gap-[2px] absolute top-[37px] left-[52px]">
        //             <div className="relative w-[20px] h-[20px] bg-[#d9d9d9] rounded-[1px]" />
        //             <img className="relative w-[8px] h-[12px]" alt="Nfc" src="NFC.svg" />
        //         </div>
        //         <div className="absolute top-[64px] right-[46px]  pt-2 [font-family:'Inter-SemiBold',_Helvetica] font-semibold text-[#a6a6a6] text-[16px] tracking-[0.24px] leading-[18px] whitespace-nowrap ">
        //             XXXX
        //         </div>
        //     </div>
        //     <div className="inline-flex flex-col items-start gap-[12px] relative flex-[0_0_auto]">
        //         <div className="inline-flex flex-col items-start justify-center gap-[4px] relative flex-[0_0_auto]">
        //             <div className="text-white relative w-fit mt-[-1.00px] [font-family:var(--body-large-high-emphasis-font-family)] font-[number:var(--body-large-high-emphasis-font-weight)] text-[color:var(--typeneutralmedium-emphasis)] text-[length:var(--body-large-high-emphasis-font-size)] tracking-[var(--body-large-high-emphasis-letter-spacing)] leading-[var(--body-large-high-emphasis-line-height)] whitespace-nowrap ">
        //                 Manage my card
        //             </div>
        //             <div className="text-white relative w-fit mt-[-1.00px] [font-family:var(--body-large-high-emphasis-font-family)] font-[number:var(--body-large-high-emphasis-font-weight)] text-[color:var(--typeneutralmedium-emphasis)] text-[length:var(--body-large-high-emphasis-font-size)] tracking-[var(--body-large-high-emphasis-letter-spacing)] leading-[var(--body-large-high-emphasis-line-height)] whitespace-nowrap ">
        //                Convert to EMI
        //             </div>
        //         </div>

        //         <div className="inline-flex items-center gap-[6px] relative flex-[0_0_auto]">
        //             <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',_Helvetica] font-medium text-[#ffe3b6] text-[18px] text-right tracking-[0] leading-[22px] whitespace-nowrap ">
        //                 Manage
        //             </div>
        //             {/* <ArrowRight className="!relative !w-[16px] !h-[16px]" color="#FFE3B6" /> */}
        //         </div>
        //     </div>
        // </div>
    );
};
