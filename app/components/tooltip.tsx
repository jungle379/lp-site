import { Tooltip, Button } from "@mantine/core";

export function TooltipComp() {
  return (
    <Tooltip label="Tooltip">
      <Button>Button with tooltip</Button>
    </Tooltip>
  );
}
