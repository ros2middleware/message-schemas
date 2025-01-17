// Generated from RawImage by @foxglove/message-schemas

import { Time } from "./Time";

/** A compressed image */
export type RawImage = {
  /** Timestamp of image */
  timestamp: Time;

  /** Image width */
  width: number;

  /** Image height */
  height: number;

  /** Encoding of the raw image data */
  encoding: string;

  /** Byte length of a single row */
  step: number;

  /** Raw image data */
  data: Uint8Array;
};
