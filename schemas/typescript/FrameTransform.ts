// Generated from FrameTransform by @foxglove/message-schemas

import { Time } from "./Time";
import { Transform } from "./Transform";

/** A transform between two named coordinate frames in 3D space */
export type FrameTransform = {
  /** Timestamp of transform */
  timestamp: Time;

  /** Name of the parent frame */
  parent_frame_id: string;

  /** Name of the child frame */
  child_frame_id: string;

  /** Transform from parent frame to child frame */
  transform: Transform;
};
