import navbarLogo from "../../assets/logo.png"
import PropTypes from 'prop-types';

const Navbar = ({ freeCoin }) => {
    return (
        <div
            className="flex justify-between p-3 h-[72px] sticky backdrop-blur-sm bg-opacity-50 top-0"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
            <img src={navbarLogo} alt="" className="" />
            <div className="font-sora flex justify-between w-[50%] items-center">
                <p className="text-[#131313B3]">Home</p>
                <p className="text-[#131313B3]">Fixture</p>
                <p className="text-[#131313B3]">Teams</p>
                <p className="text-[#131313B3]">Schedules</p>
                <div className="border-[#1313131A] border-2 justify-center items-center px-5 py-2 rounded-xl flex gap-[10px]">
                    <p>{freeCoin} Coin</p>
                    <i className="fa-solid fa-sack-dollar"></i>
                </div>
            </div>
        </div>
    );
};

Navbar.propTypes = {
    freeCoin: PropTypes.number.isRequired
};

export default Navbar;