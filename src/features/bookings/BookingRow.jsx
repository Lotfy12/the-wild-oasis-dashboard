import React from "react";
import styled from "styled-components";
import Menus from "../../ui/Menus";
import { TbListDetails } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

const TableRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 1.6rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1.5fr 2fr 2.4fr 1.4fr 1fr 4rem;
    column-gap: 2.4rem;
    align-items: center;
    padding: 1.4rem 2.4rem;
  }
`;

const CellWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    display: contents; /* Flattens children into the grid */
  }
`;

const MobileLabel = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--color-grey-500);
  text-transform: uppercase;

  @media (min-width: 768px) {
    display: none;
  }
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  margin: 0;

  @media (min-width: 768px) {
    margin: 1rem 0;
  }
`;

const Stacked = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  text-align: right;

  @media (min-width: 768px) {
    margin: 1rem 0;
    text-align: left;
  }

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
  margin-top: 0;

  @media (min-width: 768px) {
    margin-top: 1rem;
  }
`;

const ActionWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.2rem;
  padding-top: 1.2rem;

  border-top: 1px solid var(--color-brand-600);

  @media (min-width: 768px) {
    margin-top: 0;
    padding-top: 0;
    justify-content: flex-start;
    border-top: none;
  }
`;

const ActionMenuToggle = styled(Menus.Toggle)`
  padding: 1rem;
  transform: none;
  text-align: center;
  @media (min-width: 768px) {
    padding: 0.4rem;
    transform: translateX(0.8rem);
  }
`;

function BookingRow({ booking }) {
  const {
    id,
    startDate,
    endDate,
    numNights,
    totalPrice,
    status,
    guests: { fullName, email },
    cabins: { name },
  } = booking;

  const navigate = useNavigate();

  return (
    <TableRow role="row">
      <CellWrapper>
        <MobileLabel>Cabin</MobileLabel>
        <Cabin>{name}</Cabin>
      </CellWrapper>

      <CellWrapper>
        <MobileLabel>Guest</MobileLabel>
        <Stacked>
          <span>{fullName}</span>
          <span>{email}</span>
        </Stacked>
      </CellWrapper>

      <CellWrapper>
        <MobileLabel>Dates</MobileLabel>
        <Stacked>
          <span>
            {startDate} <span>{numNights} nights &mdash; {endDate}</span>
          </span>
        </Stacked>
      </CellWrapper>

      <CellWrapper>
        <MobileLabel>Status</MobileLabel>
        <Stacked>{status}</Stacked>
      </CellWrapper>

      <CellWrapper>
        <MobileLabel>Amount</MobileLabel>
        <Amount>{totalPrice}</Amount>
      </CellWrapper>

      <ActionWrapper>
        <ActionMenuToggle onClick={() => navigate(`/booking/${id}`)}>
          <TbListDetails />
        </ActionMenuToggle>
      </ActionWrapper>
    </TableRow>
  );
}

export default BookingRow;
