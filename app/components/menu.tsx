import { Menu, Button } from "@mantine/core";

export function MenuComp() {
  return (
    <Menu shadow="md" width={200} position="top">
      <Menu.Target>
        <Button variant="transparent" color="black">
          仕事のご依頼
        </Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>お仕事のご依頼</Menu.Label>
        <Menu.Item leftSection>
          お仕事のご依頼はインスタのDMでお願いします!!
          <br />
          インスタ:
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
