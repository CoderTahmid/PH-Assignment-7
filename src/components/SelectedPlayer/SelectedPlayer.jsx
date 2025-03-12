import PropTypes from 'prop-types';


const SelectedPlayer = ({ selectedPlayer, deleteBtnFunction }) => {
    const { name, price, position, image, id } = selectedPlayer;
    // const deleteBtn = document.getElementById("delete-btn");

    // if (deleteBtn) {
    //     deleteBtn.addEventListener("click", () => {
    //         console.log("delete btn");
    //     });
    // } else {
    //     console.log("not found delete btn");
    // };

    return (
        <div
            className='border border-[#13131319] p-6 rounded-2xl flex justify-between'
            id='selected-player'>
            <div className='flex space-x-6'>
                <div
                    className='h-20 w-20 rounded-2xl bg-cover bg-center'
                    style={{ backgroundImage: `url(${image})` }}>
                </div>
                <div className='justify-evenly flex flex-col h-full my-auto'>
                    <p className='font-semibold text-2xl'>{name}</p>
                    <div className='flex'>
                        <p className='text-[#13131399] mr-[14px]'>{position}</p>
                        <p className='text-[#13131399]'>${price}</p>
                    </div>
                </div>
            </div>
            <button
                id='delete-btn'
                onClick={() => deleteBtnFunction(id)}
                className='my-auto hover:cursor-pointer p-4 border border-[#13131319] rounded-xl hover:bg-[#13131319]'>
                <i className="fa-solid fa-trash-can text-red-500"></i>
            </button>
        </div>
    );
};

SelectedPlayer.propTypes = {
    selectedPlayer: PropTypes.object.isRequired,
    deleteBtnFunction: PropTypes.func.isRequired
};

export default SelectedPlayer;