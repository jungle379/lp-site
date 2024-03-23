import { Text, Paper } from "@mantine/core";

export function PaperComp() {
  return (
    <Paper shadow="xl" withBorder p="xl">
      <Text>Paper is the most basic ui component</Text>
      <Text>
        Use it to create cards, dropdowns, modals and other components that
        require background with shadow
      </Text>
    </Paper>
  );
}
