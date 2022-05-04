import React, {FC} from 'react';
import {useStore} from "effector-react";
import {useFonts} from "expo-font";
import SignedNavigation from 'navigations/Signed';
import UnSignedNavigation from "navigations/Unsigned";
import Splash from "components/shared/splash";
import {$auth} from "models/auth/state";
import {$app} from 'models/app/state';

const AuthNavigation: FC = () => {
  const auth = useStore($auth);
  const app = useStore($app);
  console.log(app.version)

  const [fontLoaded] = useFonts({
    "SF Pro Display 700": require("/assets/fonts/SFPRODISPLAYBOLD.otf"),
    "SF Pro Display 500": require("/assets/fonts/SFPRODISPLAYMEDIUM.otf"),
    "SF Pro Display 400": require("/assets/fonts/SFPRODISPLAYREGULAR.otf"),
    "SF Pro Text": require("/assets/fonts/SFPROTEXTREGULAR.ttf")
  })

  return !fontLoaded ?
    <Splash/> :
    !auth.isAuth ?
      <UnSignedNavigation/> :
      <SignedNavigation/>;
};

export default AuthNavigation;