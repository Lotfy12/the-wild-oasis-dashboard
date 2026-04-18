import { HiSquare2Stack } from "react-icons/hi2";
import { HiTrash } from "react-icons/hi";
import styled from "styled-components";
import { useState } from "react";
import CreateCabinForm from "./CreateCabinForm";
import useDeleteCabin from "./UseDeleteCabin";
import Button from "../../ui/Button";

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
    grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
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

const ImgPlaceholder = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

const ActionWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1.2rem;
  margin-top: 1.2rem;
  padding-top: 1.2rem;
  border-top: 1px solid var(--color-grey-100);

  @media (min-width: 768px) {
    margin-top: 0;
    padding-top: 0;
    border-top: none;
  }
`;

function CabinRow({ cabin }) {
  const [showForm, setShowForm] = useState(false);

  const { id, name, maxCapacity, regularPrice, discond } = cabin;

  const { deleteCabin } = useDeleteCabin();
  return (
    <>
      <TableRow role="row">
        <ImgPlaceholder />

        <CellWrapper>
          <MobileLabel>Cabin</MobileLabel>
          <Cabin>{name}</Cabin>
        </CellWrapper>

        <CellWrapper>
          <MobileLabel>Capacity</MobileLabel>
          <div>fits up to max {maxCapacity}</div>
        </CellWrapper>

        <CellWrapper>
          <MobileLabel>Price</MobileLabel>
          <Price>${regularPrice}</Price>
        </CellWrapper>

        <CellWrapper>
          <MobileLabel>Discount</MobileLabel>
          <Discount>
            {discond > 0 ? ` $${discond}` : <span> &mdash; </span>}
          </Discount>
        </CellWrapper>

        <ActionWrapper>
          <Button onClick={() => setShowForm((show) => !show)}>
            <HiSquare2Stack />
          </Button>
          <Button onClick={() => deleteCabin(id)}>
            <HiTrash />
          </Button>
        </ActionWrapper>
      </TableRow>
      {showForm && <CreateCabinForm cabinToEdit={cabin} />}
    </>
  );
}

export default CabinRow;
