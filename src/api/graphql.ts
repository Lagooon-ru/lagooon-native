import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AppEntity = {
  __typename?: 'AppEntity';
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['String'];
  image: MediaEntity;
  isActive: Scalars['Boolean'];
  isActual: Scalars['Boolean'];
  isArchived: Scalars['Boolean'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  version: Scalars['String'];
};

export type ChatEntity = {
  __typename?: 'ChatEntity';
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  isActive: Scalars['Boolean'];
  isArchived: Scalars['Boolean'];
  members: Array<UserEntity>;
  messages?: Maybe<Array<MessageEntity>>;
  title?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type CreateChatDto = {
  description: Scalars['String'];
  members: Array<Scalars['ID']>;
  title: Scalars['String'];
  type: Scalars['String'];
};

export type EmailConformActionDto = {
  token: Scalars['String'];
};

export type FeedAddCommentDto = {
  content: Scalars['String'];
  feedId: Scalars['String'];
  parentId?: InputMaybe<Scalars['String']>;
};

export type FeedCommentEntity = {
  __typename?: 'FeedCommentEntity';
  author: UserEntity;
  comment: Scalars['String'];
  createdAt: Scalars['DateTime'];
  feed: FeedEntity;
  id: Scalars['String'];
  isActive: Scalars['Boolean'];
  isArchived: Scalars['Boolean'];
  likes: Array<UserEntity>;
  parent: FeedCommentEntity;
  updatedAt: Scalars['DateTime'];
};

export type FeedCreateDto = {
  caption: Scalars['String'];
  photos: Array<Scalars['String']>;
};

export type FeedEntity = {
  __typename?: 'FeedEntity';
  author: UserEntity;
  caption?: Maybe<Scalars['String']>;
  comments: Array<FeedCommentEntity>;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  isActive: Scalars['Boolean'];
  isArchived: Scalars['Boolean'];
  likes: Array<UserEntity>;
  photos: Array<MediaEntity>;
  score: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
};

export type FeedGetCommentsDto = {
  feedId: Scalars['String'];
};

export type FeedLikeDto = {
  action: Scalars['Boolean'];
  id: Scalars['String'];
};

export type FeedsSearchDto = {
  author?: InputMaybe<Scalars['String']>;
  keyword?: InputMaybe<Scalars['String']>;
  pagination?: InputMaybe<PaginationDto>;
  sort?: InputMaybe<Scalars['String']>;
};

export type FollowDto = {
  follower: Scalars['String'];
  following: Scalars['Boolean'];
};

export type GetChatDto = {
  receiverId: Scalars['String'];
};

export type GetFormTildaDto = {
  pageId: Scalars['String'];
};

export type LoginDto = {
  password: Scalars['String'];
  user: Scalars['String'];
};

export type MediaEntity = {
  __typename?: 'MediaEntity';
  asset_id?: Maybe<Scalars['String']>;
  author?: Maybe<UserEntity>;
  createdAt: Scalars['DateTime'];
  format?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  isActive: Scalars['Boolean'];
  isArchived: Scalars['Boolean'];
  path: Scalars['String'];
  public_id?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  width?: Maybe<Scalars['String']>;
};

export type MediasDto = {
  __typename?: 'MediasDto';
  data: Array<MediaEntity>;
  pagination: TPagination;
};

export type MessageEntity = {
  __typename?: 'MessageEntity';
  chat: ChatEntity;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  isActive: Scalars['Boolean'];
  isArchived: Scalars['Boolean'];
  message: Scalars['String'];
  sender: UserEntity;
  updatedAt: Scalars['DateTime'];
};

export type Mutation = {
  __typename?: 'Mutation';
  allUsers: Array<UserEntity>;
  createChat: ChatEntity;
  createPost: PostEntity;
  deletePost: TDelete;
  emailConfirm: TForget;
  emailConfirmAction: TEmailConfirm;
  feedAddComment: FeedCommentEntity;
  feedCreate: FeedEntity;
  feedGetComments: Array<FeedCommentEntity>;
  feedLike: TFeedLike;
  feeds: TFeeds;
  follow: TFollow;
  forget: TForget;
  getChat: ChatEntity;
  getFromTilda: TildaEntity;
  login: TLogin;
  logout: TLogout;
  profileRetrieve: TLogin;
  profileUpdate: UserEntity;
  release: TVersion;
  resetPassword: UserEntity;
  signup: TLogin;
  stories: TStories;
  storyAddComment: StoryCommentEntity;
  storyCreate: StoryEntity;
  storyLike: TStoryLike;
  storyOfUser: Array<FeedEntity>;
  storyUpdate: StoryEntity;
  updatePost: PostEntity;
  upload: MediaEntity;
  user: UserEntity;
  users: TUsers;
};


export type MutationCreateChatArgs = {
  arg: CreateChatDto;
};


export type MutationCreatePostArgs = {
  post: PostDto;
};


export type MutationDeletePostArgs = {
  postId: Scalars['String'];
};


export type MutationEmailConfirmArgs = {
  email: Scalars['String'];
};


export type MutationEmailConfirmActionArgs = {
  arg: EmailConformActionDto;
};


export type MutationFeedAddCommentArgs = {
  feed: FeedAddCommentDto;
};


export type MutationFeedCreateArgs = {
  feed: FeedCreateDto;
};


export type MutationFeedGetCommentsArgs = {
  feed: FeedGetCommentsDto;
};


export type MutationFeedLikeArgs = {
  feed: FeedLikeDto;
};


export type MutationFeedsArgs = {
  search: FeedsSearchDto;
};


export type MutationFollowArgs = {
  follow: FollowDto;
};


export type MutationForgetArgs = {
  email: Scalars['String'];
};


export type MutationGetChatArgs = {
  arg: GetChatDto;
};


export type MutationGetFromTildaArgs = {
  arg: GetFormTildaDto;
};


export type MutationLoginArgs = {
  arg: LoginDto;
};


export type MutationProfileUpdateArgs = {
  arg: ProfileDto;
};


export type MutationReleaseArgs = {
  arg: ReleaseDto;
};


export type MutationResetPasswordArgs = {
  arg: ResetPassDto;
};


export type MutationSignupArgs = {
  arg: RegisterDto;
};


export type MutationStoriesArgs = {
  arg: StoriesDto;
};


export type MutationStoryAddCommentArgs = {
  arg: StoryAddCommentDto;
};


export type MutationStoryCreateArgs = {
  arg: StoryCreateDto;
};


export type MutationStoryLikeArgs = {
  arg: StoryLikeDto;
};


export type MutationStoryOfUserArgs = {
  arg: StoriesOfUserDto;
};


export type MutationStoryUpdateArgs = {
  arg: StoryUpdateDto;
};


export type MutationUpdatePostArgs = {
  input: UpdatePostDto;
  postId: Scalars['String'];
};


export type MutationUploadArgs = {
  file: Scalars['Upload'];
};


export type MutationUserArgs = {
  search: UserSearchDto;
};


export type MutationUsersArgs = {
  search: UsersSearchDto;
};

export type PaginationDto = {
  limit?: InputMaybe<Scalars['Float']>;
  page?: InputMaybe<Scalars['Float']>;
};

export type PostCommentEntity = {
  __typename?: 'PostCommentEntity';
  author: UserEntity;
  comment: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  isActive: Scalars['Boolean'];
  isArchived: Scalars['Boolean'];
  likes: Array<UserEntity>;
  parent: PostCommentEntity;
  updatedAt: Scalars['DateTime'];
};

export type PostDto = {
  description?: InputMaybe<Scalars['String']>;
  photos: Array<Scalars['String']>;
  title: Scalars['String'];
};

export type PostEntity = {
  __typename?: 'PostEntity';
  author: UserEntity;
  comments: Array<PostCommentEntity>;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['String'];
  isActive: Scalars['Boolean'];
  isArchived: Scalars['Boolean'];
  likes: Array<UserEntity>;
  photoIds: Array<Scalars['String']>;
  photos: Array<MediaEntity>;
  score?: Maybe<Scalars['Float']>;
  size: Scalars['String'];
  title: Scalars['String'];
  type: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type PostsDto = {
  __typename?: 'PostsDto';
  data: Array<PostEntity>;
  pagination: TPagination;
};

export type PostsSearchDto = {
  keyword?: InputMaybe<Scalars['String']>;
  pagination?: InputMaybe<PaginationDto>;
  sort?: InputMaybe<Scalars['String']>;
};

export type ProfileDto = {
  avatar?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  chats: Array<ChatEntity>;
  getFeeds: Array<PostEntity>;
  getOwnFeeds: Array<FeedEntity>;
  info: TVersion;
  medias: MediasDto;
  posts: PostsDto;
  profile: UserEntity;
  story: StoryEntity;
  storyGetComments: Array<StoryCommentEntity>;
  storyOfMe: Array<StoryEntity>;
  tildaPage: TildaEntity;
  tildaPages: Array<TildaEntity>;
  versions: Array<AppEntity>;
};


export type QueryGetFeedsArgs = {
  params: PaginationDto;
};


export type QueryGetOwnFeedsArgs = {
  params: PaginationDto;
};


export type QueryInfoArgs = {
  arg: VersionDto;
};


export type QueryPostsArgs = {
  search: PostsSearchDto;
};


export type QueryStoryArgs = {
  arg: StoryDto;
};


export type QueryStoryGetCommentsArgs = {
  arg: StoryGetCommentsDto;
};


export type QueryTildaPageArgs = {
  arg: TildaPageDto;
};

export type RegisterDto = {
  avatar?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  username?: InputMaybe<Scalars['String']>;
};

export type ReleaseDto = {
  description?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  version: Scalars['String'];
};

export type ResetPassDto = {
  password: Scalars['String'];
  token: Scalars['String'];
};

export type StoriesDto = {
  keyword?: InputMaybe<Scalars['String']>;
  pagination?: InputMaybe<PaginationDto>;
  sort?: InputMaybe<Scalars['String']>;
};

export type StoriesOfUserDto = {
  id: Scalars['String'];
};

export type StoryAddCommentDto = {
  content: Scalars['String'];
  parentId?: InputMaybe<Scalars['String']>;
  storyId: Scalars['String'];
};

export type StoryCommentEntity = {
  __typename?: 'StoryCommentEntity';
  author: UserEntity;
  comment: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  isActive: Scalars['Boolean'];
  isArchived: Scalars['Boolean'];
  likes: Array<UserEntity>;
  parent: StoryCommentEntity;
  story: StoryEntity;
  updatedAt: Scalars['DateTime'];
};

export type StoryCreateDto = {
  caption?: InputMaybe<Scalars['String']>;
  photo: Scalars['String'];
};

export type StoryDto = {
  id: Scalars['String'];
};

export type StoryEntity = {
  __typename?: 'StoryEntity';
  author: UserEntity;
  caption?: Maybe<Scalars['String']>;
  comments: Array<StoryCommentEntity>;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  isActive: Scalars['Boolean'];
  isArchived: Scalars['Boolean'];
  likes: Array<UserEntity>;
  photo: MediaEntity;
  score: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
};

export type StoryGetCommentsDto = {
  id: Scalars['String'];
};

export type StoryLikeDto = {
  action: Scalars['Boolean'];
  id: Scalars['String'];
};

export type StoryUpdateDto = {
  caption?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  photo?: InputMaybe<Scalars['String']>;
};

export type TDelete = {
  __typename?: 'TDelete';
  status: Scalars['Boolean'];
};

export type TEmailConfirm = {
  __typename?: 'TEmailConfirm';
  status: Scalars['Boolean'];
};

export type TFeedLike = {
  __typename?: 'TFeedLike';
  status: Scalars['Boolean'];
};

export type TFeeds = {
  __typename?: 'TFeeds';
  data: Array<FeedEntity>;
  pagination: TPagination;
};

export type TFollow = {
  __typename?: 'TFollow';
  status?: Maybe<Scalars['Boolean']>;
};

export type TForget = {
  __typename?: 'TForget';
  status: Scalars['Boolean'];
};

export type TLogin = {
  __typename?: 'TLogin';
  access_token: Scalars['String'];
  user: UserEntity;
};

export type TLogout = {
  __typename?: 'TLogout';
  status: Scalars['Boolean'];
};

export type TPagination = {
  __typename?: 'TPagination';
  limit: Scalars['Float'];
  page: Scalars['Float'];
  total: Scalars['Float'];
};

export type TStories = {
  __typename?: 'TStories';
  data: Array<StoryEntity>;
  pagination: TPagination;
};

export type TStoryLike = {
  __typename?: 'TStoryLike';
  status: Scalars['Boolean'];
};

export type TUsers = {
  __typename?: 'TUsers';
  data: Array<UserEntity>;
  pagination: TPagination;
};

export type TVersion = {
  __typename?: 'TVersion';
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['String'];
  image: MediaEntity;
  img: Scalars['String'];
  isActive: Scalars['Boolean'];
  isActual: Scalars['Boolean'];
  isArchived: Scalars['Boolean'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  version: Scalars['String'];
};

export type TildaEntity = {
  __typename?: 'TildaEntity';
  alias?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  date: Scalars['String'];
  descr?: Maybe<Scalars['String']>;
  fb_descr?: Maybe<Scalars['String']>;
  fb_img?: Maybe<Scalars['String']>;
  fb_title?: Maybe<Scalars['String']>;
  featureimg?: Maybe<Scalars['String']>;
  filename: Scalars['String'];
  html: Scalars['String'];
  id: Scalars['String'];
  img?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  isArchived: Scalars['Boolean'];
  projectid: Scalars['String'];
  published?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['String']>;
  tildaId: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type TildaPageDto = {
  id: Scalars['String'];
};

export type UpdatePostDto = {
  description?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type UserEntity = {
  __typename?: 'UserEntity';
  avatar?: Maybe<MediaEntity>;
  bio?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  emailConfirmed: Scalars['Boolean'];
  follow?: Maybe<Array<UserEntity>>;
  id: Scalars['String'];
  isActive: Scalars['Boolean'];
  isArchived: Scalars['Boolean'];
  isVerified: Scalars['Boolean'];
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  phoneConfirmed: Scalars['Boolean'];
  posts: Array<PostEntity>;
  role: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  username?: Maybe<Scalars['String']>;
};

export type UserSearchDto = {
  id: Scalars['String'];
};

export type UsersSearchDto = {
  keyword?: InputMaybe<Scalars['String']>;
  pagination?: InputMaybe<PaginationDto>;
  sort?: InputMaybe<Scalars['String']>;
};

export type VersionDto = {
  version: Scalars['String'];
};

export type ForgetMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ForgetMutation = { __typename?: 'Mutation', forget: { __typename?: 'TForget', status: boolean } };

export type LoginMutationVariables = Exact<{
  arg: LoginDto;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'TLogin', access_token: string, user: { __typename?: 'UserEntity', id: string, name?: string | null, username?: string | null, bio?: string | null, email: string, emailConfirmed: boolean, phone?: string | null, phoneConfirmed: boolean, isVerified: boolean, isActive: boolean, isArchived: boolean, follow?: Array<{ __typename?: 'UserEntity', id: string, username?: string | null, avatar?: { __typename?: 'MediaEntity', id: string, path: string, size?: string | null, height?: string | null, width?: string | null, format?: string | null } | null }> | null, avatar?: { __typename?: 'MediaEntity', id: string, path: string, size?: string | null, height?: string | null, width?: string | null, format?: string | null } | null } } };

export type ProfileRetrieveMutationVariables = Exact<{ [key: string]: never; }>;


export type ProfileRetrieveMutation = { __typename?: 'Mutation', profileRetrieve: { __typename?: 'TLogin', access_token: string, user: { __typename?: 'UserEntity', id: string, name?: string | null, username?: string | null, bio?: string | null, email: string, emailConfirmed: boolean, phone?: string | null, phoneConfirmed: boolean, isVerified: boolean, isActive: boolean, isArchived: boolean, follow?: Array<{ __typename?: 'UserEntity', id: string, username?: string | null, avatar?: { __typename?: 'MediaEntity', id: string, path: string, size?: string | null, height?: string | null, width?: string | null, format?: string | null } | null }> | null, avatar?: { __typename?: 'MediaEntity', id: string, path: string, size?: string | null, height?: string | null, width?: string | null, format?: string | null } | null } } };

export type ProfileUpdateMutationVariables = Exact<{
  arg: ProfileDto;
}>;


export type ProfileUpdateMutation = { __typename?: 'Mutation', profileUpdate: { __typename?: 'UserEntity', id: string, name?: string | null, username?: string | null, bio?: string | null, email: string, emailConfirmed: boolean, phone?: string | null, phoneConfirmed: boolean, isVerified: boolean, isActive: boolean, isArchived: boolean, avatar?: { __typename?: 'MediaEntity', id: string, path: string, size?: string | null, height?: string | null, width?: string | null, format?: string | null } | null } };

export type ResetPasswordMutationVariables = Exact<{
  arg: ResetPassDto;
}>;


export type ResetPasswordMutation = { __typename?: 'Mutation', resetPassword: { __typename?: 'UserEntity', id: string } };

export type SignupMutationVariables = Exact<{
  arg: RegisterDto;
}>;


export type SignupMutation = { __typename?: 'Mutation', signup: { __typename?: 'TLogin', access_token: string, user: { __typename?: 'UserEntity', id: string, name?: string | null, username?: string | null, bio?: string | null, email: string, emailConfirmed: boolean, phone?: string | null, phoneConfirmed: boolean, isVerified: boolean, isActive: boolean, isArchived: boolean, avatar?: { __typename?: 'MediaEntity', id: string, path: string, size?: string | null, height?: string | null, width?: string | null, format?: string | null } | null } } };

export type GetChatMutationVariables = Exact<{
  arg: GetChatDto;
}>;


export type GetChatMutation = { __typename?: 'Mutation', getChat: { __typename?: 'ChatEntity', id: string, members: Array<{ __typename?: 'UserEntity', id: string, username?: string | null, name?: string | null, avatar?: { __typename?: 'MediaEntity', id: string } | null }>, messages?: Array<{ __typename?: 'MessageEntity', id: string, message: string, createdAt: any, sender: { __typename?: 'UserEntity', id: string, username?: string | null, name?: string | null } }> | null } };

export type FeedAddCommentMutationVariables = Exact<{
  feed: FeedAddCommentDto;
}>;


export type FeedAddCommentMutation = { __typename?: 'Mutation', feedAddComment: { __typename?: 'FeedCommentEntity', id: string, createdAt: any } };

export type FeedCreateMutationVariables = Exact<{
  feed: FeedCreateDto;
}>;


export type FeedCreateMutation = { __typename?: 'Mutation', feedCreate: { __typename?: 'FeedEntity', id: string, caption?: string | null, isActive: boolean, photos: Array<{ __typename?: 'MediaEntity', id: string, path: string }> } };

export type FeedGetCommentsMutationVariables = Exact<{
  feed: FeedGetCommentsDto;
}>;


export type FeedGetCommentsMutation = { __typename?: 'Mutation', feedGetComments: Array<{ __typename?: 'FeedCommentEntity', id: string, createdAt: any, updatedAt: any, comment: string, author: { __typename?: 'UserEntity', id: string, name?: string | null, username?: string | null, avatar?: { __typename?: 'MediaEntity', id: string, path: string } | null } }> };

export type FeedLikeMutationVariables = Exact<{
  feed: FeedLikeDto;
}>;


export type FeedLikeMutation = { __typename?: 'Mutation', feedLike: { __typename?: 'TFeedLike', status: boolean } };

export type FeedsMutationVariables = Exact<{
  search: FeedsSearchDto;
}>;


export type FeedsMutation = { __typename?: 'Mutation', feeds: { __typename?: 'TFeeds', pagination: { __typename?: 'TPagination', total: number, page: number, limit: number }, data: Array<{ __typename?: 'FeedEntity', id: string, caption?: string | null, createdAt: any, updatedAt: any, photos: Array<{ __typename?: 'MediaEntity', id: string, path: string }>, likes: Array<{ __typename?: 'UserEntity', id: string, username?: string | null, name?: string | null }>, comments: Array<{ __typename?: 'FeedCommentEntity', id: string }>, author: { __typename?: 'UserEntity', id: string, username?: string | null, name?: string | null, avatar?: { __typename?: 'MediaEntity', id: string, path: string } | null } }> } };

export type StoriesMutationVariables = Exact<{
  arg: StoriesDto;
}>;


export type StoriesMutation = { __typename?: 'Mutation', stories: { __typename?: 'TStories', pagination: { __typename?: 'TPagination', total: number, page: number, limit: number }, data: Array<{ __typename?: 'StoryEntity', id: string, caption?: string | null, createdAt: any, updatedAt: any, photo: { __typename?: 'MediaEntity', id: string, path: string }, likes: Array<{ __typename?: 'UserEntity', id: string, username?: string | null, name?: string | null }>, comments: Array<{ __typename?: 'StoryCommentEntity', id: string }>, author: { __typename?: 'UserEntity', id: string, username?: string | null, name?: string | null, avatar?: { __typename?: 'MediaEntity', id: string, path: string } | null } }> } };

export type StoryOfUserMutationVariables = Exact<{
  arg: StoriesOfUserDto;
}>;


export type StoryOfUserMutation = { __typename?: 'Mutation', storyOfUser: Array<{ __typename?: 'FeedEntity', id: string, caption?: string | null, photos: Array<{ __typename?: 'MediaEntity', id: string, path: string }>, likes: Array<{ __typename?: 'UserEntity', id: string, username?: string | null, name?: string | null }>, comments: Array<{ __typename?: 'FeedCommentEntity', id: string }>, author: { __typename?: 'UserEntity', id: string, username?: string | null, name?: string | null, avatar?: { __typename?: 'MediaEntity', id: string, path: string } | null } }> };

export type FollowMutationVariables = Exact<{
  follow: FollowDto;
}>;


export type FollowMutation = { __typename?: 'Mutation', follow: { __typename?: 'TFollow', status?: boolean | null } };

export type UserMutationVariables = Exact<{
  search: UserSearchDto;
}>;


export type UserMutation = { __typename?: 'Mutation', user: { __typename?: 'UserEntity', id: string, name?: string | null, username?: string | null, bio?: string | null, email: string, phone?: string | null, isActive: boolean, isArchived: boolean, follow?: Array<{ __typename?: 'UserEntity', id: string, username?: string | null }> | null, avatar?: { __typename?: 'MediaEntity', id: string, path: string, size?: string | null, height?: string | null, width?: string | null, format?: string | null } | null } };

export type UsersMutationVariables = Exact<{
  search: UsersSearchDto;
}>;


export type UsersMutation = { __typename?: 'Mutation', users: { __typename?: 'TUsers', pagination: { __typename?: 'TPagination', total: number, page: number, limit: number }, data: Array<{ __typename?: 'UserEntity', id: string, name?: string | null, username?: string | null, avatar?: { __typename?: 'MediaEntity', id: string, path: string } | null }> } };

export type AllUsersMutationVariables = Exact<{ [key: string]: never; }>;


export type AllUsersMutation = { __typename?: 'Mutation', allUsers: Array<{ __typename?: 'UserEntity', id: string, name?: string | null, username?: string | null, avatar?: { __typename?: 'MediaEntity', id: string, path: string } | null, follow?: Array<{ __typename?: 'UserEntity', id: string, name?: string | null, username?: string | null }> | null }> };


export const ForgetDocument = gql`
    mutation forget($email: String!) {
  forget(email: $email) {
    status
  }
}
    `;
export type ForgetMutationFn = Apollo.MutationFunction<ForgetMutation, ForgetMutationVariables>;

/**
 * __useForgetMutation__
 *
 * To run a mutation, you first call `useForgetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgetMutation, { data, loading, error }] = useForgetMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useForgetMutation(baseOptions?: Apollo.MutationHookOptions<ForgetMutation, ForgetMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ForgetMutation, ForgetMutationVariables>(ForgetDocument, options);
      }
export type ForgetMutationHookResult = ReturnType<typeof useForgetMutation>;
export type ForgetMutationResult = Apollo.MutationResult<ForgetMutation>;
export type ForgetMutationOptions = Apollo.BaseMutationOptions<ForgetMutation, ForgetMutationVariables>;
export const LoginDocument = gql`
    mutation login($arg: LoginDto!) {
  login(arg: $arg) {
    access_token
    user {
      id
      name
      username
      bio
      email
      emailConfirmed
      phone
      phoneConfirmed
      isVerified
      follow {
        id
        username
        avatar {
          id
          path
          size
          height
          width
          format
        }
      }
      avatar {
        id
        path
        size
        height
        width
        format
      }
      isActive
      isArchived
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      arg: // value for 'arg'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const ProfileRetrieveDocument = gql`
    mutation profileRetrieve {
  profileRetrieve {
    access_token
    user {
      id
      name
      username
      bio
      email
      emailConfirmed
      phone
      phoneConfirmed
      isVerified
      follow {
        id
        username
        avatar {
          id
          path
          size
          height
          width
          format
        }
      }
      avatar {
        id
        path
        size
        height
        width
        format
      }
      isActive
      isArchived
    }
  }
}
    `;
export type ProfileRetrieveMutationFn = Apollo.MutationFunction<ProfileRetrieveMutation, ProfileRetrieveMutationVariables>;

/**
 * __useProfileRetrieveMutation__
 *
 * To run a mutation, you first call `useProfileRetrieveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useProfileRetrieveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [profileRetrieveMutation, { data, loading, error }] = useProfileRetrieveMutation({
 *   variables: {
 *   },
 * });
 */
export function useProfileRetrieveMutation(baseOptions?: Apollo.MutationHookOptions<ProfileRetrieveMutation, ProfileRetrieveMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ProfileRetrieveMutation, ProfileRetrieveMutationVariables>(ProfileRetrieveDocument, options);
      }
export type ProfileRetrieveMutationHookResult = ReturnType<typeof useProfileRetrieveMutation>;
export type ProfileRetrieveMutationResult = Apollo.MutationResult<ProfileRetrieveMutation>;
export type ProfileRetrieveMutationOptions = Apollo.BaseMutationOptions<ProfileRetrieveMutation, ProfileRetrieveMutationVariables>;
export const ProfileUpdateDocument = gql`
    mutation profileUpdate($arg: ProfileDto!) {
  profileUpdate(arg: $arg) {
    id
    name
    username
    bio
    email
    emailConfirmed
    phone
    phoneConfirmed
    isVerified
    avatar {
      id
      path
      size
      height
      width
      format
    }
    isActive
    isArchived
  }
}
    `;
export type ProfileUpdateMutationFn = Apollo.MutationFunction<ProfileUpdateMutation, ProfileUpdateMutationVariables>;

/**
 * __useProfileUpdateMutation__
 *
 * To run a mutation, you first call `useProfileUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useProfileUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [profileUpdateMutation, { data, loading, error }] = useProfileUpdateMutation({
 *   variables: {
 *      arg: // value for 'arg'
 *   },
 * });
 */
export function useProfileUpdateMutation(baseOptions?: Apollo.MutationHookOptions<ProfileUpdateMutation, ProfileUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ProfileUpdateMutation, ProfileUpdateMutationVariables>(ProfileUpdateDocument, options);
      }
export type ProfileUpdateMutationHookResult = ReturnType<typeof useProfileUpdateMutation>;
export type ProfileUpdateMutationResult = Apollo.MutationResult<ProfileUpdateMutation>;
export type ProfileUpdateMutationOptions = Apollo.BaseMutationOptions<ProfileUpdateMutation, ProfileUpdateMutationVariables>;
export const ResetPasswordDocument = gql`
    mutation resetPassword($arg: ResetPassDto!) {
  resetPassword(arg: $arg) {
    id
  }
}
    `;
export type ResetPasswordMutationFn = Apollo.MutationFunction<ResetPasswordMutation, ResetPasswordMutationVariables>;

/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation({
 *   variables: {
 *      arg: // value for 'arg'
 *   },
 * });
 */
export function useResetPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ResetPasswordMutation, ResetPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ResetPasswordMutation, ResetPasswordMutationVariables>(ResetPasswordDocument, options);
      }
export type ResetPasswordMutationHookResult = ReturnType<typeof useResetPasswordMutation>;
export type ResetPasswordMutationResult = Apollo.MutationResult<ResetPasswordMutation>;
export type ResetPasswordMutationOptions = Apollo.BaseMutationOptions<ResetPasswordMutation, ResetPasswordMutationVariables>;
export const SignupDocument = gql`
    mutation signup($arg: RegisterDto!) {
  signup(arg: $arg) {
    access_token
    user {
      id
      name
      username
      bio
      email
      emailConfirmed
      phone
      phoneConfirmed
      isVerified
      avatar {
        id
        path
        size
        height
        width
        format
      }
      isActive
      isArchived
    }
  }
}
    `;
export type SignupMutationFn = Apollo.MutationFunction<SignupMutation, SignupMutationVariables>;

/**
 * __useSignupMutation__
 *
 * To run a mutation, you first call `useSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutation, { data, loading, error }] = useSignupMutation({
 *   variables: {
 *      arg: // value for 'arg'
 *   },
 * });
 */
export function useSignupMutation(baseOptions?: Apollo.MutationHookOptions<SignupMutation, SignupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignupMutation, SignupMutationVariables>(SignupDocument, options);
      }
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = Apollo.MutationResult<SignupMutation>;
export type SignupMutationOptions = Apollo.BaseMutationOptions<SignupMutation, SignupMutationVariables>;
export const GetChatDocument = gql`
    mutation getChat($arg: GetChatDto!) {
  getChat(arg: $arg) {
    id
    members {
      id
      username
      name
      avatar {
        id
      }
    }
    messages {
      id
      message
      sender {
        id
        username
        name
      }
      createdAt
    }
  }
}
    `;
export type GetChatMutationFn = Apollo.MutationFunction<GetChatMutation, GetChatMutationVariables>;

/**
 * __useGetChatMutation__
 *
 * To run a mutation, you first call `useGetChatMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGetChatMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [getChatMutation, { data, loading, error }] = useGetChatMutation({
 *   variables: {
 *      arg: // value for 'arg'
 *   },
 * });
 */
export function useGetChatMutation(baseOptions?: Apollo.MutationHookOptions<GetChatMutation, GetChatMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GetChatMutation, GetChatMutationVariables>(GetChatDocument, options);
      }
export type GetChatMutationHookResult = ReturnType<typeof useGetChatMutation>;
export type GetChatMutationResult = Apollo.MutationResult<GetChatMutation>;
export type GetChatMutationOptions = Apollo.BaseMutationOptions<GetChatMutation, GetChatMutationVariables>;
export const FeedAddCommentDocument = gql`
    mutation feedAddComment($feed: FeedAddCommentDto!) {
  feedAddComment(feed: $feed) {
    id
    createdAt
  }
}
    `;
export type FeedAddCommentMutationFn = Apollo.MutationFunction<FeedAddCommentMutation, FeedAddCommentMutationVariables>;

/**
 * __useFeedAddCommentMutation__
 *
 * To run a mutation, you first call `useFeedAddCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFeedAddCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [feedAddCommentMutation, { data, loading, error }] = useFeedAddCommentMutation({
 *   variables: {
 *      feed: // value for 'feed'
 *   },
 * });
 */
export function useFeedAddCommentMutation(baseOptions?: Apollo.MutationHookOptions<FeedAddCommentMutation, FeedAddCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<FeedAddCommentMutation, FeedAddCommentMutationVariables>(FeedAddCommentDocument, options);
      }
export type FeedAddCommentMutationHookResult = ReturnType<typeof useFeedAddCommentMutation>;
export type FeedAddCommentMutationResult = Apollo.MutationResult<FeedAddCommentMutation>;
export type FeedAddCommentMutationOptions = Apollo.BaseMutationOptions<FeedAddCommentMutation, FeedAddCommentMutationVariables>;
export const FeedCreateDocument = gql`
    mutation feedCreate($feed: FeedCreateDto!) {
  feedCreate(feed: $feed) {
    id
    caption
    photos {
      id
      path
    }
    isActive
  }
}
    `;
export type FeedCreateMutationFn = Apollo.MutationFunction<FeedCreateMutation, FeedCreateMutationVariables>;

/**
 * __useFeedCreateMutation__
 *
 * To run a mutation, you first call `useFeedCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFeedCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [feedCreateMutation, { data, loading, error }] = useFeedCreateMutation({
 *   variables: {
 *      feed: // value for 'feed'
 *   },
 * });
 */
export function useFeedCreateMutation(baseOptions?: Apollo.MutationHookOptions<FeedCreateMutation, FeedCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<FeedCreateMutation, FeedCreateMutationVariables>(FeedCreateDocument, options);
      }
export type FeedCreateMutationHookResult = ReturnType<typeof useFeedCreateMutation>;
export type FeedCreateMutationResult = Apollo.MutationResult<FeedCreateMutation>;
export type FeedCreateMutationOptions = Apollo.BaseMutationOptions<FeedCreateMutation, FeedCreateMutationVariables>;
export const FeedGetCommentsDocument = gql`
    mutation feedGetComments($feed: FeedGetCommentsDto!) {
  feedGetComments(feed: $feed) {
    id
    createdAt
    updatedAt
    author {
      id
      name
      username
      avatar {
        id
        path
      }
    }
    comment
  }
}
    `;
export type FeedGetCommentsMutationFn = Apollo.MutationFunction<FeedGetCommentsMutation, FeedGetCommentsMutationVariables>;

/**
 * __useFeedGetCommentsMutation__
 *
 * To run a mutation, you first call `useFeedGetCommentsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFeedGetCommentsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [feedGetCommentsMutation, { data, loading, error }] = useFeedGetCommentsMutation({
 *   variables: {
 *      feed: // value for 'feed'
 *   },
 * });
 */
export function useFeedGetCommentsMutation(baseOptions?: Apollo.MutationHookOptions<FeedGetCommentsMutation, FeedGetCommentsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<FeedGetCommentsMutation, FeedGetCommentsMutationVariables>(FeedGetCommentsDocument, options);
      }
export type FeedGetCommentsMutationHookResult = ReturnType<typeof useFeedGetCommentsMutation>;
export type FeedGetCommentsMutationResult = Apollo.MutationResult<FeedGetCommentsMutation>;
export type FeedGetCommentsMutationOptions = Apollo.BaseMutationOptions<FeedGetCommentsMutation, FeedGetCommentsMutationVariables>;
export const FeedLikeDocument = gql`
    mutation feedLike($feed: FeedLikeDto!) {
  feedLike(feed: $feed) {
    status
  }
}
    `;
export type FeedLikeMutationFn = Apollo.MutationFunction<FeedLikeMutation, FeedLikeMutationVariables>;

/**
 * __useFeedLikeMutation__
 *
 * To run a mutation, you first call `useFeedLikeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFeedLikeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [feedLikeMutation, { data, loading, error }] = useFeedLikeMutation({
 *   variables: {
 *      feed: // value for 'feed'
 *   },
 * });
 */
export function useFeedLikeMutation(baseOptions?: Apollo.MutationHookOptions<FeedLikeMutation, FeedLikeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<FeedLikeMutation, FeedLikeMutationVariables>(FeedLikeDocument, options);
      }
export type FeedLikeMutationHookResult = ReturnType<typeof useFeedLikeMutation>;
export type FeedLikeMutationResult = Apollo.MutationResult<FeedLikeMutation>;
export type FeedLikeMutationOptions = Apollo.BaseMutationOptions<FeedLikeMutation, FeedLikeMutationVariables>;
export const FeedsDocument = gql`
    mutation feeds($search: FeedsSearchDto!) {
  feeds(search: $search) {
    pagination {
      total
      page
      limit
    }
    data {
      id
      caption
      createdAt
      updatedAt
      photos {
        id
        path
      }
      likes {
        id
        username
        name
      }
      comments {
        id
      }
      author {
        id
        username
        name
        avatar {
          id
          path
        }
      }
    }
  }
}
    `;
export type FeedsMutationFn = Apollo.MutationFunction<FeedsMutation, FeedsMutationVariables>;

/**
 * __useFeedsMutation__
 *
 * To run a mutation, you first call `useFeedsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFeedsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [feedsMutation, { data, loading, error }] = useFeedsMutation({
 *   variables: {
 *      search: // value for 'search'
 *   },
 * });
 */
export function useFeedsMutation(baseOptions?: Apollo.MutationHookOptions<FeedsMutation, FeedsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<FeedsMutation, FeedsMutationVariables>(FeedsDocument, options);
      }
export type FeedsMutationHookResult = ReturnType<typeof useFeedsMutation>;
export type FeedsMutationResult = Apollo.MutationResult<FeedsMutation>;
export type FeedsMutationOptions = Apollo.BaseMutationOptions<FeedsMutation, FeedsMutationVariables>;
export const StoriesDocument = gql`
    mutation stories($arg: StoriesDto!) {
  stories(arg: $arg) {
    pagination {
      total
      page
      limit
    }
    data {
      id
      caption
      createdAt
      updatedAt
      photo {
        id
        path
      }
      likes {
        id
        username
        name
      }
      comments {
        id
      }
      author {
        id
        username
        name
        avatar {
          id
          path
        }
      }
    }
  }
}
    `;
export type StoriesMutationFn = Apollo.MutationFunction<StoriesMutation, StoriesMutationVariables>;

/**
 * __useStoriesMutation__
 *
 * To run a mutation, you first call `useStoriesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStoriesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [storiesMutation, { data, loading, error }] = useStoriesMutation({
 *   variables: {
 *      arg: // value for 'arg'
 *   },
 * });
 */
export function useStoriesMutation(baseOptions?: Apollo.MutationHookOptions<StoriesMutation, StoriesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<StoriesMutation, StoriesMutationVariables>(StoriesDocument, options);
      }
export type StoriesMutationHookResult = ReturnType<typeof useStoriesMutation>;
export type StoriesMutationResult = Apollo.MutationResult<StoriesMutation>;
export type StoriesMutationOptions = Apollo.BaseMutationOptions<StoriesMutation, StoriesMutationVariables>;
export const StoryOfUserDocument = gql`
    mutation storyOfUser($arg: StoriesOfUserDto!) {
  storyOfUser(arg: $arg) {
    id
    caption
    photos {
      id
      path
    }
    likes {
      id
      username
      name
    }
    comments {
      id
    }
    author {
      id
      username
      name
      avatar {
        id
        path
      }
    }
  }
}
    `;
export type StoryOfUserMutationFn = Apollo.MutationFunction<StoryOfUserMutation, StoryOfUserMutationVariables>;

/**
 * __useStoryOfUserMutation__
 *
 * To run a mutation, you first call `useStoryOfUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStoryOfUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [storyOfUserMutation, { data, loading, error }] = useStoryOfUserMutation({
 *   variables: {
 *      arg: // value for 'arg'
 *   },
 * });
 */
export function useStoryOfUserMutation(baseOptions?: Apollo.MutationHookOptions<StoryOfUserMutation, StoryOfUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<StoryOfUserMutation, StoryOfUserMutationVariables>(StoryOfUserDocument, options);
      }
export type StoryOfUserMutationHookResult = ReturnType<typeof useStoryOfUserMutation>;
export type StoryOfUserMutationResult = Apollo.MutationResult<StoryOfUserMutation>;
export type StoryOfUserMutationOptions = Apollo.BaseMutationOptions<StoryOfUserMutation, StoryOfUserMutationVariables>;
export const FollowDocument = gql`
    mutation follow($follow: FollowDto!) {
  follow(follow: $follow) {
    status
  }
}
    `;
export type FollowMutationFn = Apollo.MutationFunction<FollowMutation, FollowMutationVariables>;

/**
 * __useFollowMutation__
 *
 * To run a mutation, you first call `useFollowMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFollowMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [followMutation, { data, loading, error }] = useFollowMutation({
 *   variables: {
 *      follow: // value for 'follow'
 *   },
 * });
 */
export function useFollowMutation(baseOptions?: Apollo.MutationHookOptions<FollowMutation, FollowMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<FollowMutation, FollowMutationVariables>(FollowDocument, options);
      }
export type FollowMutationHookResult = ReturnType<typeof useFollowMutation>;
export type FollowMutationResult = Apollo.MutationResult<FollowMutation>;
export type FollowMutationOptions = Apollo.BaseMutationOptions<FollowMutation, FollowMutationVariables>;
export const UserDocument = gql`
    mutation user($search: UserSearchDto!) {
  user(search: $search) {
    id
    name
    username
    bio
    email
    phone
    follow {
      id
      username
    }
    avatar {
      id
      path
      size
      height
      width
      format
    }
    isActive
    isArchived
  }
}
    `;
export type UserMutationFn = Apollo.MutationFunction<UserMutation, UserMutationVariables>;

/**
 * __useUserMutation__
 *
 * To run a mutation, you first call `useUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userMutation, { data, loading, error }] = useUserMutation({
 *   variables: {
 *      search: // value for 'search'
 *   },
 * });
 */
export function useUserMutation(baseOptions?: Apollo.MutationHookOptions<UserMutation, UserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UserMutation, UserMutationVariables>(UserDocument, options);
      }
export type UserMutationHookResult = ReturnType<typeof useUserMutation>;
export type UserMutationResult = Apollo.MutationResult<UserMutation>;
export type UserMutationOptions = Apollo.BaseMutationOptions<UserMutation, UserMutationVariables>;
export const UsersDocument = gql`
    mutation users($search: UsersSearchDto!) {
  users(search: $search) {
    pagination {
      total
      page
      limit
    }
    data {
      id
      name
      username
      avatar {
        id
        path
      }
    }
  }
}
    `;
export type UsersMutationFn = Apollo.MutationFunction<UsersMutation, UsersMutationVariables>;

/**
 * __useUsersMutation__
 *
 * To run a mutation, you first call `useUsersMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUsersMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [usersMutation, { data, loading, error }] = useUsersMutation({
 *   variables: {
 *      search: // value for 'search'
 *   },
 * });
 */
export function useUsersMutation(baseOptions?: Apollo.MutationHookOptions<UsersMutation, UsersMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UsersMutation, UsersMutationVariables>(UsersDocument, options);
      }
export type UsersMutationHookResult = ReturnType<typeof useUsersMutation>;
export type UsersMutationResult = Apollo.MutationResult<UsersMutation>;
export type UsersMutationOptions = Apollo.BaseMutationOptions<UsersMutation, UsersMutationVariables>;
export const AllUsersDocument = gql`
    mutation allUsers {
  allUsers {
    id
    name
    username
    avatar {
      id
      path
    }
    follow {
      id
      name
      username
    }
  }
}
    `;
export type AllUsersMutationFn = Apollo.MutationFunction<AllUsersMutation, AllUsersMutationVariables>;

/**
 * __useAllUsersMutation__
 *
 * To run a mutation, you first call `useAllUsersMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAllUsersMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [allUsersMutation, { data, loading, error }] = useAllUsersMutation({
 *   variables: {
 *   },
 * });
 */
export function useAllUsersMutation(baseOptions?: Apollo.MutationHookOptions<AllUsersMutation, AllUsersMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AllUsersMutation, AllUsersMutationVariables>(AllUsersDocument, options);
      }
export type AllUsersMutationHookResult = ReturnType<typeof useAllUsersMutation>;
export type AllUsersMutationResult = Apollo.MutationResult<AllUsersMutation>;
export type AllUsersMutationOptions = Apollo.BaseMutationOptions<AllUsersMutation, AllUsersMutationVariables>;