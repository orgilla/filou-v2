Menu: <Menu color="dark" inverted>
  <Menu.Header>
    <FaHeading />
    Header & Logo
  </Menu.Header>
  <Menu.Header color>
    <Menu.Item icon={FaStar} size="large" extra="yeah">
      Item as Header
    </Menu.Item>
  </Menu.Header>
  <Menu.List title="List with title">
    <Menu.Item icon={FaCube} color inverted={false}>
      Item #1
    </Menu.Item>
    <Menu.Item icon={FaCube} color inverted={false}>
      Item #2
    </Menu.Item>
  </Menu.List>
  <Menu.List title="List with title and extra" extra={FaStar}>
    <Menu.Item icon={FaCube} color inverted={false}>
      Item #3
    </Menu.Item>
    <Menu.Item icon={FaCube} color inverted={false}>
      Item #4
    </Menu.Item>
  </Menu.List>
  <Menu.Divider />
  <Menu.Item color="light4">The begining...</Menu.Item>
  <Menu.Space />
  <Menu.Input />
  <Menu.Space />
  <Menu.Item color="light4">...the end!</Menu.Item>
</Menu>;

MenuItem: <Menu>
  <Menu.List title="Content">
    <Menu.Item>Item</Menu.Item>
    <Menu.Item subtitle="subtitle">Item with subtitle</Menu.Item>
    <Menu.Item icon={FaCube}>Item with Icon</Menu.Item>
    <Menu.Item extra="extra">Item with extra</Menu.Item>
    <Menu.Item extra={<FaStar />}>Item with extra Icon</Menu.Item>
    <Menu.Item>
      Item with clickable extra
      <Menu.Extra onClick={() => {}}>click</Menu.Extra>
    </Menu.Item>
    <Menu.Item>
      Item with clickable extra Icon
      <Menu.Extra onClick={() => {}}>
        <FaCube />
      </Menu.Extra>
    </Menu.Item>
  </Menu.List>

  <Menu.List title="Colors">
    <Menu.Item icon={FaCube}>Item</Menu.Item>
    <Menu.Item icon={FaCube} color>
      Theme colored Icon
    </Menu.Item>
    <Menu.Item icon={FaCube} color="dark3">
      Other theme colors
    </Menu.Item>
    <Menu.Item icon={FaCube} color={5} palette={4}>
      MaterialUI colors
    </Menu.Item>
    <Menu.Item icon={FaCube} color="pink">
      CSS colors
    </Menu.Item>
    <Menu.Item icon={FaCube} color={5} palette={9} inverted>
      Inverted
    </Menu.Item>
  </Menu.List>

  <Menu.List title="Icons/Images">
    <Menu.Item icon={FaCube} color>
      Item with Icon
    </Menu.Item>
    <Menu.Item
      icon={
        <img src="https://avatars2.githubusercontent.com/u/12184856?s=400&u=d70035b4ffbc2ff21b8c50e3ec964f43529128cf&v=4" />
      }
      color
    >
      Item with Image
    </Menu.Item>
    <Menu.Item color>
      <Menu.Icon size="small">
        <FaCube />
      </Menu.Icon>
      Item with small Icon
    </Menu.Item>
    <Menu.Item color>
      <Menu.Icon size={36}>
        <FaCube />
      </Menu.Icon>
      Item with custom Icon size
    </Menu.Item>
  </Menu.List>

  <Menu.List title="Sizes">
    <Menu.Item icon={FaCube} subtitle="subtitle" color size="small">
      Small Item
    </Menu.Item>
    <Menu.Item icon={FaCube} subtitle="subtitle" color>
      Medium Item
    </Menu.Item>
    <Menu.Item icon={FaCube} subtitle="subtitle" color size="large">
      Large Item
    </Menu.Item>
  </Menu.List>

  <Menu.List title="States">
    <Menu.Item icon={FaCube} color>
      Item
    </Menu.Item>
    <Menu.Item icon={FaCube} color active>
      Active Item
    </Menu.Item>
    <Menu.Item icon={FaCube} color disabled>
      Disabled Item
    </Menu.Item>
    <Menu.Item icon={FaCube} color loading>
      Loading Item
    </Menu.Item>
  </Menu.List>
</Menu>;
