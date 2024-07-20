import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DashboardBox from "./DashboardBox";
import Heading from "../../ui/Heading";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { allBookings } from "../../services/apiBookings";

const StyledSalesChart = styled(DashboardBox)`
  grid-column: 1 / -1;

  & .recharts-cartesian-grid-horizontal line,
  & .recharts-cartesian-grid-vertical line {
    stroke: var(--color-grey-300);
  }
`;

const colors = {
  totalPrice: { stroke: "#4f46e5", fill: "#4f46e5" },
  numGuests: { stroke: "#22c55e", fill: "#22c55e" },
  numNights: { stroke: "#70d6ff", fill: "#70d6ff" },

  text: "#e5e7eb",
  background: "#18212f",
};

function SalesChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchBookings() {
      try {
        const bookings = await allBookings();
        if (bookings && bookings.length > 0) {
          const formattedData = bookings.map((booking) => ({
            label: new Date(booking.created_at).toLocaleDateString("en-US", {
              day: "2-digit",
              month: "short",
            }),
            totalPrice: booking.totalPrice,
            numGuests: booking.numGuests,
            numNights: booking.numNights,
          }));
          setData(formattedData);
        } else {
          console.log("No bookings found");
        }
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    }
    fetchBookings();
  }, []);

  return (
    <StyledSalesChart>
      <Heading as="h2">Sales</Heading>

      <ResponsiveContainer width="100%" height={250}>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="totalPrice"
            stroke={colors.totalPrice.stroke}
            fill={colors.totalPrice.fill}
          />
          <Area
            type="monotone"
            dataKey="numGuests"
            stroke={colors.numGuests.stroke}
            fill={colors.numGuests.fill}
          />

          <Area
            type="monotone"
            dataKey="numNights"
            stroke={colors.numNights.stroke}
            fill={colors.numNights.fill}
          />
        </AreaChart>
      </ResponsiveContainer>
    </StyledSalesChart>
  );
}

export default SalesChart;
