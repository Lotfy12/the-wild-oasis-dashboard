import React from "react";
import styled from "styled-components";
import Menus from "../../ui/Menus";
import { TbListDetails } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  margin: 1rem 0;
`;

const Stacked = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin: 1rem 0;

  & span:first-child {
    font-weight: 500;
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-size: 1.2rem;
  }
`;

const Amount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  font-size: 1.8rem;
  margin-top: 1rem;
`;

function BookingRow({ booking }) {
  const {
    startDate,
    endDate,
    id,
    totalPrice,
    status,
    numNights,
    cabins: { name },
    guests: { fullName, email },
  } = booking;

  const navigate = useNavigate();
  return (
    <>
      <Cabin>{name}</Cabin>
      <Stacked>
        <span>{fullName}</span>
        <span>{email}</span>
      </Stacked>
      <Stacked>
        <span>
          {startDate}
          <span>
            {numNights} &mdash; {endDate}
          </span>
        </span>
      </Stacked>
      <Stacked>{status}</Stacked>
      <Amount>{totalPrice}</Amount>
      <>
        <Menus.Toggle onClick={() => navigate(`/booking/${id}`)}>
          <TbListDetails />
        </Menus.Toggle>
      </>
    </>
  );
}

export default BookingRow;
