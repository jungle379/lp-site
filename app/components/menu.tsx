import { Menu, Button } from "@mantine/core";

export function MenuComp() {
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Button>仕事のご依頼</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>お仕事のご依頼</Menu.Label>
        <Menu.Item rightSection>
          お仕事のご依頼はインスタのDMでお願いします!!
          <br />
          インスタ:
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
