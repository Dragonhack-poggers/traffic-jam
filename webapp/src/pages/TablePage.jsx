import React from "react";
import Dashboard from "./Dashboard";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer,
  Box,
  HStack,
  Button,
  Text,
  Heading,
} from "@chakra-ui/react";
import { useDashboardContext } from "../lib/DashboardContext";
import { usePagination } from "react-use-pagination";
import { format } from "date-fns";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const DATE_FORMAT = "d.M.yyyy 'at' hh:mm";

const TablePage = () => {
  const { events } = useDashboardContext();

  return <Dashboard>{!!events && <TableContent events={events} />}</Dashboard>;
};
const TableContent = ({ events }) => {
  const navigate = useNavigate();

  const handleRedirectToMap = ({ long, lat }) => {
    navigate({
      pathname: "/dashboard/map",
      search: `long=${long}&lat=${lat}`,
    });
  };
  const {
    currentPage,
    totalPages,
    setNextPage,
    setPreviousPage,
    nextEnabled,
    previousEnabled,
    startIndex,
    endIndex,
  } = usePagination({ totalItems: events?.length || 0, initialPageSize: 10 });
  const items = events.slice(startIndex, endIndex);
  return (
    <Box p={8}>
      <Heading>Traffic jams report</Heading>
      <TableContainer>
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th>Traffic event on</Th>
              <Th isNumeric>Location</Th>
            </Tr>
          </Thead>
          <Tbody>
            {items
              .sort((a, b) =>
                new Date(a.created_at) >= new Date(b.created_at) ? -1 : 1
              )
              .map((item) => {
                return (
                  <Tr key={item.id}>
                    <Th>{format(new Date(item.created_at), DATE_FORMAT)}</Th>
                    <Th isNumeric>{`${item.long} , ${item.lat}`}</Th>
                    <Th>
                      <FaEye
                        fontSize={"1.5rem"}
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          handleRedirectToMap({
                            long: item.long,
                            lat: item.lat,
                          })
                        }
                      />
                    </Th>
                  </Tr>
                );
              })}
          </Tbody>
        </Table>
      </TableContainer>
      <HStack gap={4} justifyContent='center' my={8}>
        <Button onClick={setPreviousPage} disabled={!previousEnabled}>
          Previous
        </Button>
        <Text>
          {currentPage} out of {totalPages}
        </Text>
        <Button onClick={setNextPage} disabled={!nextEnabled}>
          Next
        </Button>
      </HStack>
    </Box>
  );
};

export default TablePage;
