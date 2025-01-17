// Generated from Pose by @foxglove/message-schemas

import { Quaternion } from "./Quaternion";
import { Vector3 } from "./Vector3";

/** The position and orientation of an object or reference frame in 3D space */
export type Pose = {
  /** Point denoting position in 3D space */
  position: Vector3;

  /** Quaternion denoting orientation in 3D space */
  orientation: Quaternion;
};
