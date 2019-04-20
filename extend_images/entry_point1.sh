#! /bin/sh
echo "??"
export entry_point_one="true"
echo $entry_point_one
touch parent_file
tail -F /dev/null
