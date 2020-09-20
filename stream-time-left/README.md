# stream-time-left
Progress bar (inverted) to let viewers know how much stream remains.

### First Step: Add directory to URL
Add the file to the URL of Browser Source in OBS.<br>
Example: C:\stream-time-left\default.html

### Second Step: Add params to config script
Add the parameters at the end of the URL after .html<br>
Example: C:\stream-time-left\default.html?percent=true&time=1

### Config params
**percent**: true or false<br>
**time**: number in hours (min 1 hour)