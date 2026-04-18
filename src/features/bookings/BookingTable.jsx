import React from "react";
import BookingRow from "./BookingRow";
import Spinner from "../../ui/Spinner";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";

const TableContainer = styled.div`
  border: 1px solid var(--color-grey-200);
  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;

const TableHeader = styled.header`
  display: none; // Hide on mobile

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1.5fr 2fr 2.4fr 1.4fr 1fr 4rem;
    column-gap: 2.4rem;
    align-items: center;

    background-color: var(--color-grey-50);
    border-bottom: 1px solid var(--color-grey-100);
    text-transform: uppercase;
    letter-spacing: 0.4px;
    font-weight: 600;
    color: var(--color-grey-600);
    padding: 1.6rem 2.4rem;
  }
`;

const StyledBody = styled.section`
  display: flex;
  flex-direction: column;
`;

function BookingTable() {
  const { data, isLoading } = useQuery({
    queryKey: ["bookings"],
    queryFn: getBookings,
  });

  if (isLoading) return <Spinner />;

  if (!data) {
    return <div>There is no data...</div>;
  }
  return (
    <TableContainer>
      <TableHeader>
        <div>Cabin</div>
        <div>Guest</div>
        <div>Dates</div>
        <div>Status</div>
        <div>Amount</div>
        <div></div>
      </TableHeader>

      <StyledBody>
        {data.map((booking) => (
          <BookingRow key={booking.id} booking={booking} />
        ))}
      </StyledBody>
    </TableContainer>
  );
}

export default BookingTable;
