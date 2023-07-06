import React, { useState } from "react";
import "../Header/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendar,
  faPerson,
  faTaxi,
  faCar,
  faPlane,
} from "@fortawesome/free-solid-svg-icons";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; //
import { DateRange } from "react-date-range";
import { format } from "date-fns";

export const Header = () => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

    const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rental</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attraction</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>
        <h1 className="headerTitle">A lifetime of discounts? Its Genius</h1>
        <p className="headerDiscription">
          Get rewarded for your travels unlock instats savings of 10% more with
          bookMyHotel account
        </p>
        <button className="headerBtn">Register/Login</button>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faTaxi} className="headerIcon" />
            <input
              type="text"
              placeholder="Where are you going?"
              className="headerSearchInput"
            />
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendar} className="headerIcon" />
            <span
              onClick={() => setOpenDate(!openDate)}
              className="headerSearchText"
            >{`${format(date[0].startDate, "mm/dd/yyyy")} TO ${format(
              date[0].endDate,
              "mm/dd/yyyy"
            )}`}</span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
              />
            )}
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
            <span onClick={() => setOpenOptions(!openOptions)} className="headerSearchText">{`${options.adult}adult - ${options.childrens} childrens -${options.room} room`}</span>
            {openOptions && <div className="options" >
              <div className="optionItem">
                <span className="optionText">Adult</span>
                <div className="optionCounter">
                  <button disabled={options.adult<=1} className="optionCounterBtn" onClick={()=>handleOption("adult","d")}>-</button>
                  <span className="optionCounterNumber">{options.adult}</span>
                  <button className="optionCounterBtn" onClick={()=>handleOption("adult","i")}>+</button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">Children</span>
                <div className="optionCounter">
                  <button   disabled={options.children <= 0} className="optionCounterBtn"  onClick={()=>handleOption("children","d")}>-</button>
                  <span className="optionCounterNumber">{options.children}</span>
                  <button className="optionCounterBtn"  onClick={()=>handleOption("children","i")}>+</button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">Room</span>
                <div className="optionCounter">
                  <button disabled={options.room <= 1} className="optionCounterBtn"  onClick={()=>handleOption("room","d")}>-</button>
                  <span className="optionCounterNumber">{options.room}</span>
                  <button className="optionCounterBtn"  onClick={()=>handleOption("room","i")}>+</button>
                </div>
              </div>
            </div>}
          </div>
          <div className="headerSearchItem">
            <button className="headerBtn">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};
