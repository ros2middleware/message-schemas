// Generated from CircleAnnotation by @foxglove/message-schemas

import { Color } from "./Color";
import { Point2 } from "./Point2";
import { Time } from "./Time";

/** A circle annotation */
export type CircleAnnotation = {
  /** Timestamp of circle */
  timestamp: Time;

  /** Center of the circle in 2D image coordinates */
  position: Point2;

  /** Circle diameter */
  diameter: number;

  /** Line thickness */
  thickness: number;

  /** Fill color */
  fill_color: Color;

  /** Outline color */
  outline_color: Color;
};
