import { HiSquare2Stack } from "react-icons/hi2";
import { HiTrash } from "react-icons/hi";
import styled from "styled-components";

import { useState } from "react";
import CreateCabinForm from "./CreateCabinForm";
import useDeleteCabin from "./UseDeleteCabin";
import Button from "../../ui/Button";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
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

function CabinRow({ cabin }) {
  const [showForm, setShowForm] = useState(false);

  const { id, name, maxCapacity, regularPrice, discond } = cabin;

  const { deleteCabin } = useDeleteCabin();
  return (
    <>
      <TableRow role="row">
        <div></div>
        <Cabin>{name}</Cabin>
        <div>fits up to max {maxCapacity}</div>
        <Price>${regularPrice}</Price>
        <Discount>
          {discond > 0 ? ` $${discond}` : <span> &mdash; </span>}
        </Discount>
        <div>
          <Button onClick={() => setShowForm((show) => !show)}>
            <HiSquare2Stack />
          </Button>
          <Button onClick={() => deleteCabin(id)}>
            <HiTrash />
          </Button>
        </div>
      </TableRow>
      {showForm && <CreateCabinForm cabinToEdit={cabin} />}
    </>
  );
}

export default CabinRow;
