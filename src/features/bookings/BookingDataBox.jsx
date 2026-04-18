import styled from "styled-components";
import {
  HiOutlineChatBubbleBottomCenterText,
  HiOutlineCheckCircle,
  HiOutlineCurrencyDollar,
  HiOutlineHomeModern,
} from "react-icons/hi2";

import DataItem from "../../ui/DataItem";

const StyledBookingDataBox = styled.section`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  overflow: hidden;
`;

const Header = styled.header`
  background-color: var(--color-brand-500);
  padding: 2rem 1.6rem;
  color: #e0e7ff;
  font-size: 1.8rem;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.2rem;

  @media (min-width: 768px) {
    padding: 2rem 4rem;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 0;
  }

  svg {
    height: 3.2rem;
    width: 3.2rem;
    flex-shrink: 0;
  }

  & div:first-child {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    font-weight: 600;
    font-size: 1.8rem;
    flex-wrap: wrap;
  }

  & span {
    font-family: "Sono";
    font-size: 2rem;
    margin-left: 4px;
  }
`;

const Section = styled.section`
  padding: 2.4rem 1.6rem 1.2rem;

  @media (min-width: 768px) {
    padding: 3.2rem 4rem 1.2rem;
  }
`;

const Guest = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 1.6rem;
  color: var(--color-grey-500);

  & p:first-of-type {
    font-weight: 500;
    color: var(--color-grey-700);
  }
`;

const Price = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.6rem;
  padding: 1.6rem;
  border-radius: var(--border-radius-sm);
  margin-top: 2.4rem;

  background-color: ${(props) =>
    props.isPaid ? "var(--color-green-100)" : "var(--color-yellow-100)"};
  color: ${(props) =>
    props.isPaid ? "var(--color-green-700)" : "var(--color-yellow-700)"};

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 1.6rem 3.2rem;
    gap: 0;
  }

  & p:last-child {
    text-transform: uppercase;
    font-size: 1.4rem;
    font-weight: 600;
  }

  svg {
    height: 2.4rem;
    width: 2.4rem;
    color: currentColor !important;
    flex-shrink: 0;
  }
`;

const Footer = styled.footer`
  padding: 1.6rem;
  font-size: 1.2rem;
  color: var(--color-grey-500);
  text-align: left;

  @media (min-width: 768px) {
    padding: 1.6rem 4rem;
    text-align: right;
  }
`;

// A purely presentational component
function BookingDataBox({ bookings }) {
  const {
    created_at,
    startDate,
    endDate,
    cabinsPrice,
    extrasPrice,
    totalPrice,
    hasBreakfast,
    isPaid,
    observations,
    numNights,
    numGuests,
    guests: { email, fullName, nationalId, countryFlag },
    cabins: { name },
  } = bookings;
  console.log(bookings);

  return (
    <StyledBookingDataBox>
      <Header>
        <div>
          <HiOutlineHomeModern />
          <p>
            {numNights} nights in Cabin <span>{name}</span>
          </p>
        </div>
        <p>
          {startDate} &mdash;
          {endDate}
        </p>
      </Header>

      <Section>
        <Guest>
          {countryFlag && <p>{countryFlag}</p>}
          <p>
            {fullName} {numGuests > 1 ? `+ ${numGuests - 1} guests` : ""}
          </p>
          <span>&bull;</span>
          <p>{email}</p>
          <span>&bull;</span>
          <p>National ID {nationalId}</p>
        </Guest>

        {observations && (
          <DataItem
            icon={<HiOutlineChatBubbleBottomCenterText />}
            label="Observations"
          >
            {observations}
          </DataItem>
        )}

        <DataItem icon={<HiOutlineCheckCircle />} label="Breakfast included?">
          {hasBreakfast ? "Yes" : "No"}
        </DataItem>

        <Price isPaid={isPaid}>
          <DataItem icon={<HiOutlineCurrencyDollar />} label={`Total price`}>
            {totalPrice}

            {hasBreakfast &&
              ` (${cabinsPrice} cabin + ${extrasPrice} breakfast)`}
          </DataItem>

          <p>{isPaid ? "Paid" : "Will pay at property"}</p>
        </Price>
      </Section>

      <Footer>
        <p>Booked created {created_at}</p>
      </Footer>
    </StyledBookingDataBox>
  );
}

export default BookingDataBox;
