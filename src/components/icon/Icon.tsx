import React, { FC } from 'react';
import IconProps from "components/icon/icon.type";
import IconCheck from "components/icon/IconCheck";
import LoadingIcon from "components/icon/IconLoading";
import IconGrid from "components/icon/IconGrid";
import IconShooter from "components/icon/IconShooter";
import IconChevronLeft from "components/icon/IconChevronLeft";
import IconHome from "components/icon/IconHome/IconHome";
import IconAdd from "components/icon/IconAdd";
import IconEdit from "components/icon/IconEdit";
import IconVideo from "components/icon/IconVideo";
import IconStory from "components/icon/IconStory";
import IconFrame from "components/icon/IconFrame";
import IconClose from "components/icon/IconClose";
import IconChangeCamera from "components/icon/IconChangeCamera";
import IconUnlock from "components/icon/IconUnlock";
import IconLike from "components/icon/IconLike";
import IconComment from "components/icon/IconComment";
import IconSend from "components/icon/IconSend";
import IconLogout from "components/icon/IconLogout";
import IconSearch from "components/icon/IconSearch";
import IconChevronDown from "components/icon/IconChevronDown";

const Icon: FC<IconProps> = (props) => {
  const {name = 'check'} = props;
  return {
    'check': <IconCheck {...props}/>,
    'loading': <LoadingIcon {...props}/>,
    'shooter': <IconShooter {...props}/>,
    'grid': <IconGrid {...props}/>,
    'chevron-left': <IconChevronLeft {...props}/>,
    'chevron-down': <IconChevronDown {...props}/>,
    'home': <IconHome {...props}/>,
    'add': <IconAdd {...props}/>,
    'edit': <IconEdit {...props}/>,
    'story': <IconStory {...props}/>,
    'frame': <IconFrame {...props}/>,
    'close': <IconClose {...props}/>,
    'change-camera': <IconChangeCamera {...props}/>,
    'unlock': <IconUnlock {...props}/>,
    'video': <IconVideo {...props}/>,
    'comment': <IconComment {...props}/>,
    'send': <IconSend {...props}/>,
    'logout': <IconLogout {...props}/>,
    'search': <IconSearch {...props}/>,
    'like': <IconLike {...props}/>
  }[name];
};

export default Icon;