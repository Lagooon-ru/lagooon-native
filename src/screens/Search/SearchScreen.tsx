import React, {FC, useState} from 'react';
import {SceneMap, TabView} from "react-native-tab-view";
import SafeArea from "components/shared/paper/SafeArea";
import Colors from "utils/helper/style/color";
import Wrap from "components/shared/paper/Wrap";
import Input from "components/shared/input/Input";
import Container from "components/shared/paper/Container";
import IconButton from "components/shared/input/iconButton";
import FeedsGrid from "components/screen/feed/FeedsGrid";
import UsersList from "components/screen/user/UsersList";
import Icon from "components/icon";
import {fullWidth, px} from "utils/helper/style/mixins";
import Box from 'components/shared/paper/Box';
import Button from 'components/shared/input/button';
import {keywordEvent} from 'models/search/event';


const SearchScreen: FC = () => {
  const [index, setIndex] = useState(0);

  const [routes] = React.useState([
    {key: 'users', title: 'Аккаунты'},
    {key: 'feeds', title: 'Теги'},
  ]);

  const renderScene = SceneMap({
    feeds: FeedsGrid,
    users: UsersList,
  });

  return (
    <SafeArea
      bg={Colors.white}
    >
      <Wrap>
        <Container>
          <Box
            mb={px(10)}
          >
            <Input
              autoCapitalize='none'
              autoCorrect={false}
              onChangeText={keywordEvent}
              placeholder='Поиск'
              prefix={
                <IconButton
                  size={px(32)}
                >
                  <Icon
                    name='search'
                    width={px(32)}
                    height={px(32)}
                  />
                </IconButton>
              }
            />
          </Box>
        </Container>
        <Box flex={1}>
          <TabView
            navigationState={{index, routes}}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{width: fullWidth()}}
            renderTabBar={(props) => {
              return (
                <Box
                  ph={px(16)}
                  pt={px(4)}
                  pb={px(6)}
                  direction='row'
                  align='center'
                  justify='flex-start'
                >
                  {
                    props.navigationState.routes.map((r, index) =>
                      (
                        <Box
                          key={r.key}
                          mr={px(4)}
                        >
                          <Button
                            theme={index === props.navigationState.index ? 'black' : 'white'}
                            text={r.title}
                            size="sm"
                            onPress={() => {
                              props.jumpTo(r.key)
                            }}
                          />
                        </Box>
                      )
                    )
                  }
                </Box>
              )
            }}
          />
        </Box>
      </Wrap>
    </SafeArea>
  );
};

export default SearchScreen;