import { useEffect, useState } from "react";
import Player from "../Player/Player";
import PropTypes from 'prop-types';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SelectedPlayer from "../SelectedPlayer/SelectedPlayer";

const Players = ({ freeCoin, setFreeCoin }) => {

    const [allPlayers, setAllPlayers] = useState([]);
    const [selectedPlayersData, setSelectedPlayersData] = useState([]);

    useEffect(() => {
        fetch("Players.json")
            .then(res => res.json())
            .then(data => setAllPlayers(data));
    }, []);

    const negativeNotification = (msg) => {
        toast.error(msg, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
        });
    };

    const positiveNotification = (msg) => {
        toast.success(msg, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            theme: "colored",
        });
    };

    const warningNotification = (msg) => {
        toast.warning(msg, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            theme: "colored",
        });
    };

    const countSelectedPlayers = (price, image, name, country, position, id) => {
        if (selectedPlayersData.length === 6) {
            negativeNotification("You can't add more players");
        } else {
            if (price > freeCoin) {
                negativeNotification("You don't have enough money");
            } else {
                setSelectedPlayersData((prevDatas) => {
                    const isPlayerAlreadySelected = prevDatas.some((prevData) => {
                        return prevData.id === id;
                    });

                    if (isPlayerAlreadySelected) {
                        randFunc();
                        return prevDatas;
                    } else {
                        return [...prevDatas, { name, price, position, image, id }];
                    };
                });

                const randFunc = () => {
                    console.log("KIng");
                    warningNotification("fdf");
                };

                setFreeCoin(freeCoin - price);
                positiveNotification("Player selected!");
            };
        };

    };

    const deleteBtnFunction = (playerId) => {
        setSelectedPlayersData((prevData) =>
            prevData.filter((player) =>
                player.id !== playerId
            )
        );
    };

    const availableBtn = document.getElementById("available-btn");
    const selectedBtn = document.getElementById("selected-btn");
    const playersCardContainer = document.getElementById("player-cards-container");
    const sectionStatusAvailable = document.getElementById("section-status-available");
    const sectionStatusSelected = document.getElementById("section-status-selected");
    const selectedCardsContainer = document.getElementById("selected-cards-container");
    const addMoreBtn = document.getElementById("add-more-btn");

    const handleAvailableBtn = () => {
        selectedBtn.classList.remove("bg-[#E7FE29]", "font-bold");
        selectedBtn.classList.add("text-[#13131399]");
        availableBtn.classList.add("bg-[#E7FE29]", "font-bold");
        availableBtn.classList.remove("text-[#13131399]");
        playersCardContainer.classList.remove("hidden");
        sectionStatusSelected.classList.add("hidden");
        sectionStatusAvailable.classList.remove("hidden");
        selectedCardsContainer.classList.add("hidden");
        addMoreBtn.classList.add("hidden");
        addMoreBtn.classList.remove("inline-block");
    };

    const handleSelectedBtn = () => {
        availableBtn.classList.remove("bg-[#E7FE29]", "font-bold");
        availableBtn.classList.add("text-[#13131399]");
        selectedBtn.classList.remove("text-[#13131399]");
        selectedBtn.classList.add("bg-[#E7FE29]", "font-bold");
        playersCardContainer.classList.add("hidden");
        selectedCardsContainer.classList.remove("hidden");
        sectionStatusSelected.classList.remove("hidden");
        sectionStatusAvailable.classList.add("hidden");
        addMoreBtn.classList.remove("hidden");
        addMoreBtn.classList.add("inline-block");
    };
    return (
        <>
            <div className="mt-[88px] w-[93%] mx-auto mb-[200px]">
                <div>
                    <div className="flex justify-between h-[48px] items-center mb-8">
                        <p id="section-status-available" className="font-bold text-[28px]">Available Players</p>
                        <p id="section-status-selected" className="font-bold text-[28px] hidden">Selected Players({selectedPlayersData.length}/6)</p>
                        <div className="">
                            <button
                                className="bg-[#E7FE29] border hover:cursor-pointer py-[14px] border-[#13131319] px-[30px] rounded-bl-xl rounded-tl-xl font-bold"
                                id="available-btn"
                                onClick={handleAvailableBtn}>
                                Available
                            </button>
                            <button
                                id="selected-btn"
                                className="py-[14px] px-[30px] border hover:cursor-pointer border-[#13131319] rounded-tr-xl rounded-br-xl text-[#13131399]"
                                onClick={handleSelectedBtn}>
                                Selected ({selectedPlayersData.length})
                            </button>
                        </div>
                    </div>
                    <div id="player-cards-container" className="grid grid-cols-3 gap-6">
                        {
                            allPlayers.map((player, idx) =>
                                <Player
                                    freeCoin={freeCoin}
                                    countSelectedPlayers={countSelectedPlayers}
                                    player={player}
                                    key={idx}>
                                </Player>
                            )
                        }
                    </div>
                </div>
                <div id="selected-cards-container" className="hidden space-y-6">
                    {
                        selectedPlayersData.map((selectedPlayer, idx) =>
                            <SelectedPlayer
                                selectedPlayer={selectedPlayer}
                                key={idx}
                                deleteBtnFunction={deleteBtnFunction}>
                            </SelectedPlayer>
                        )
                    }
                </div>
                <span id="add-more-btn" className="border-2 border-[#E7FE29] p-2 rounded-2xl mt-6 hidden">
                    <button onClick={handleAvailableBtn} className="bg-[#E7FE29] py-[14px] px-5 rounded-[12px] hover:cursor-pointer font-bold">Add More Player</button>
                </span>
            </div>
        </>
    );
};

Players.propTypes = {
    freeCoin: PropTypes.number.isRequired,
    setFreeCoin: PropTypes.func.isRequired,
};

export default Players;

