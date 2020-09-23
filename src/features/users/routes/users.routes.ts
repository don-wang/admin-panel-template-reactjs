import React from "react";
import { RouteItemDef } from "types/routeDef";
import { UserPathsEnum } from "../constants/users.paths";

const ProfileScreen = React.lazy(
  () => import("../screens/ProfileScreen/ProfileScreen")
);

const PROFILE_SCREEN: RouteItemDef = {
  path: UserPathsEnum.PROFILE,
  component: ProfileScreen,
  isPrivateRoute: true,
};

const USER_ROUTES = [PROFILE_SCREEN];

export default USER_ROUTES;