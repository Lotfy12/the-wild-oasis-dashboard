import { HiOutlineBanknotes } from "react-icons/hi2";
import { BsCalendar2DateFill } from "react-icons/bs";
import { FaChartBar } from "react-icons/fa";
import styled from "styled-components";
import Stat from "./Stat";
import SalesChart from "./SalesChart";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
  margin-top: 2rem;
`;

function DashboardLayout() {
  return (
    <div>
      <StyledDashboardLayout>
        <Stat color="blue" title="num-Nights" icon={<FaChartBar />} />

        <Stat color="green" title="num-Guests" icon={<HiOutlineBanknotes />} />

        <Stat
          color="indigo"
          title=" total-Price "
          icon={<BsCalendar2DateFill />}
        />

        <SalesChart />
      </StyledDashboardLayout>
    </div>
  );
}

export default DashboardLayout;
