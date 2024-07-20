import React from "react";
import BookingRow from "./BookingRow";
import Table from "../../ui/Table";
import Spinner from "../../ui/Spinner";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 2.4fr 1.4fr 1fr 1.2rem;
`;

const StyledBody = styled.section`
  margin: 0.9rem 0.4rem 0 0;
  grid-template-columns: 1fr 2fr 2.4fr 1.4fr 1fr 0.2fr;
  display: grid;
`;

function BookingTable() {
  const { data, isLoading } = useQuery({
    queryKey: ["booking key"],
    queryFn: getBookings,
  });

  if (!data) {
    return <div>There is no data...</div>;
  }

  if (isLoading) return <Spinner />;
  return (
    <>
      <Table>
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
      </Table>
    </>
  );
}

export default BookingTable;
