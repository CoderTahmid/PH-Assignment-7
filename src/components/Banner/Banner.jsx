import bgShadow from "../../assets/bg-shadow.png";
import bannerMain from "../../assets/banner-main.png";
import PropTypes from 'prop-types';

const Banner = ({ claimingFreeMoney }) => {

    return (
        <div className="w-[97%] bg-black mx-auto mt-6 rounded-3xl">
            <div className="h-full w-full rounded-3xl bg-cover" style={{ backgroundImage: `url(${bgShadow})` }}>
                <div className="py-16 px-[10px] flex justify-center items-center flex-col space-y-6">
                    <img src={bannerMain} alt="" />
                    <h1 className="text-white font-bold text-[40px]">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                    <p className="font-medium text-2xl text-[#FFFFFFB2] inter-font">Beyond Boundaries Beyond Limits</p>
                    <div className="border-2 border-[#E7FE29] p-2 rounded-2xl">
                        <button onClick={claimingFreeMoney} className="bg-[#E7FE29] py-[14px] px-5 rounded-[12px] hover:cursor-pointer">Claim Free Credit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Banner.propTypes = {
    claimingFreeMoney: PropTypes.func.isRequired
};

export default Banner;