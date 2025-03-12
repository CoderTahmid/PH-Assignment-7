import bgShadow from "../../assets/bg-shadow.png";
import footerLogo from "../../assets/logo-footer.png"

const Footer = () => {
    return (
        <>
            <div>
                <div
                    className="w-full"
                    style={{
                        background: "linear-gradient(to bottom, white 50%, #06091A 50%)",
                    }}>
                    <div
                        className="rounded-3xl w-[80%] mx-auto bg-opacity-50% p-4 border border-white"
                        style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
                        <div
                            className="rounded-3xl text-white py-[68px] bg-cover bg-white flex justify-center items-center flex-col"
                            style={{ backgroundImage: `url(${bgShadow})` }}>
                            <h1 className="font-bold text-black text-[32px] mb-4">Subscribe to our Newsletter</h1>
                            <p className="font-medium text-[20px] mb-6" style={{ color: "rgba(19, 19, 19, 0.7)" }}>Get the latest updates and news right in your inbox!</p>
                            <div className="grid grid-cols-3 w-[60%]">
                                <input type="text" className="border col-span-2 border-gray-200 rounded-xl text-gray-400 py-[18px] pl-[30px] mr-4" placeholder="Enter your email" />
                                <button className="border border-red-100 text-black py-[18px] px-[30px] rounded-xl bg-[#E7FE29] hover:cursor-pointer">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#06091A] z-0 pt-[35px]">
                    <div className="justify-center flex items-center flex-col w-full">
                        <img src={footerLogo} alt="" className="mb-[64px]" />
                        <div className="flex justify-between mb-[72px]">
                            <div className="w-[70%]">
                                <h1 className="text-white">About Us</h1>
                                <p className="text-[#FFFFFF99]">We are a passionate team dedicated to providing the best services to our customers.</p>
                            </div>
                            <div className="w-full ml-[100px]">
                                <h1 className="text-white">Quick Link</h1>
                                <ul className="text-[#FFFFFF99] list-disc ml-6 inline-block ">
                                    <li className="">Home</li>
                                    <li className="">Services</li>
                                    <li className="">About</li>
                                    <li className="">Contact</li>
                                </ul>
                            </div>
                            <div className="space-y-[20px] w-full">
                                <h1 className="text-white text-[18px] font-semibold">Subscribe</h1>
                                <p className="text-[#FFFFFF99] ">Subscribe to our newsletter for the latest updates.</p>
                                <div className="">
                                    <input type="text" placeholder="Enter your email" className="text-[#13131366] py-[14px] bg-white rounded-tl-2xl rounded-bl-2xl pl-[30px] border-none" />
                                    <button className="text-black py-[14px] px-[30px] bg-[#E7FE29] rounded-tr-2xl rounded-br-2xl">Subscribe</button>
                                </div>
                            </div>
                        </div>
                        <div className='border-t border-t-[#FFFFFF26] h-0.5 mb-[32px] w-full'></div>
                        <p className="text-[#FFFFFF99] mb-[32px]">@2024 Your Company All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;