# Generated from RawImage by @foxglove/message-schemas

# Timestamp of image
builtin_interfaces/Time timestamp

# Image width
uint32 width

# Image height
uint32 height

# Encoding of the raw image data
string encoding

# Byte length of a single row
uint32 step

# Raw image data
uint8[] data
