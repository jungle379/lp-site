import { Box, Loader } from "@mantine/core";

export default function Loading() {
  return (
    <>
      <Box className="min-h-screen flex justify-center items-center">
        <Loader size={50} />
      </Box>
    </>
  );
}
