#!/bin/sh

# Redirecting stdout, one line at a time.
LOGFILE=script.log

echo "This statement is sent to the log file, \"$LOGFILE\"." 1>$LOGFILE
echo "This statement is appended to \"$LOGFILE\"." 1>>$LOGFILE
echo "This statement is also appended to \"$LOGFILE\"." 1>>$LOGFILE
echo "This statement is echoed to stdout, and will not appear in \"$LOGFILE\"."
# These redirection commands automatically "reset" after each line.



# Redirecting stderr, one line at a time.
ERRORFILE=script.errors

bad_command1 2>$ERRORFILE       #  Error message sent to $ERRORFILE.
bad_command2 2>>$ERRORFILE      #  Error message appended to $ERRORFILE.
bad_command3                    #  Error message echoed to stderr,
                                #+ and does not appear in $ERRORFILE.

# Pipe.
# General purpose process and command chaining tool.
# Similar to ">", but more general in effect.
# Useful for chaining commands, scripts, files, and programs together.
cat script.log script.errors | sort | uniq > sorted-unique.txt
# Sorts the output of all the .txt files and deletes duplicate lines,
# finally saves results to "sorted-unique.txt".

# We can redirect $stdin to grep
grep "line" < sorted-unique.txt
# Or pipe output of cat to grep which is the same
cat sorted-unique.txt | grep "line" | wc


