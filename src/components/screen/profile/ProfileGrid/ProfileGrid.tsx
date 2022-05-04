import React, {FC, useEffect, useState} from 'react';
import ProfileGridHeader from "components/screen/profile/ProfileGridHeader";
import ProfileGridContent from '../ProfileGridContent';
import {useFeedsMutation, useStoryOfUserMutation} from "api/graphql";
import Box from "components/shared/paper/Box";

interface Props {
  profile?: any;
}

const ProfileGrid: FC<Props> = (props) => {
  const {profile} = props;
  const [storyOfUserMutation] = useStoryOfUserMutation()
  const [feedsMutation] = useFeedsMutation()
  const [loading, setLoading] = useState<boolean>(true);
  const [stories, setStories] = useState<any[]>([]);
  const [feeds, setFeeds] = useState<any[]>([]);
  const [tab, setTab] = useState<0 | 1>(0);

  const tabChangeHandler = (t) => {
    setTab(t);
  }

  useEffect(() => {
    if (!!profile.id) {
      setLoading(true)
      const options = {
        variables: {
          arg: {
            id: profile.id
          }
        }
      }
      storyOfUserMutation(options)
        .then(({data}) => {
          setStories(data.storyOfUser)
        })
        .catch((err) => {
          console.log(err, 'GETTING STORIES')
        })
        .finally(() => setLoading(false))

      const feedOptions = {
        variables: {
          search: {
            pagination: {limit: 100},
            author: profile.id
          },
        },
      }
      feedsMutation(feedOptions)
        .then(({data}) => {
          setFeeds(data.feeds.data)
        })
        .catch((err) => {
          console.log(err, 'GETTING STORIES')
        })
        .finally(() => setLoading(false))
    }
  }, [profile])

  return (
    <Box flex={1}>
      <Box>
        <ProfileGridHeader
          onTabChange={tabChangeHandler}
        />
        <ProfileGridContent
          loading={loading}
          data={feeds}
          mode={tab}
        />
      </Box>
    </Box>
  );
};

export default ProfileGrid;