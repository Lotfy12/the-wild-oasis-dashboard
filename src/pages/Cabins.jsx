import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import AddCabins from "../features/cabins/AddCabins";

function Cabins() {
  return (
    <>
      <Row type="vertical">
        <Row type="horizontal">
          <Heading as="h1">All cabins</Heading>
        </Row>
        <Row>
          <CabinTable />
          <AddCabins />
        </Row>
      </Row>
    </>
  );
}

export default Cabins;
