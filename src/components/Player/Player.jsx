import PropTypes from 'prop-types';

const Player = ({ player, countSelectedPlayers }) => {

    const { image, name, country, position, batting_position, balling_type, price, id } = player;

    return (
        <div className="p-6 border border-[#1313131A] rounded-2xl  space-y-6">
            <div className='rounded-2xl h-[240px] bg-cover bg-center' style={{ backgroundImage: `url(${image})` }}></div>
            <div className='space-y-4'>
                <div className='space-y-4'>
                    <div className='flex items-center gap-4'>
                        <i className="fa-solid fa-user"></i>
                        <p className='font-semibold text-[20px]'>{name}</p>
                    </div>
                    <div className='flex justify-between'>
                        <span className='text-[#13131380] items-center flex space-x-3'>
                            <i className="fa-solid fa-flag"></i>
                            <p>{country}</p>
                        </span>
                        <div className='px-4 py-[9px] rounded-[8px] bg-[#1313130D]'>{position}</div>
                    </div>
                </div>
                <div className='border-t border-t-[#1313131A] h-0.5'></div>
                <div className='space-y-3'>
                    <p className='font-bold'>Rating</p>
                    <div className='flex justify-between'>
                        <p className='font-semibold'>{batting_position}</p>
                        <p className='text-[#131313B3]'>{balling_type}</p>
                    </div>
                    <div className='flex justify-between'>
                        <p className='text-[#131313] font-semibold'>Price: ${price}</p>
                        <button
                            className='hover:cursor-pointer text-[14px] px-4 py-[9px] border border-[#1313131A] rounded-[8px] hover:bg-[#E7FE29]'
                            onClick={() => countSelectedPlayers(price, image, name, country, position, id)}>
                            Choose Player
                        </button>
                        <div className='hidden'>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Player.propTypes = {
    player: PropTypes.object.isRequired,
    countSelectedPlayers: PropTypes.func.isRequired
};

export default Player;