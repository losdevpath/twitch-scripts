# stream-time-left
Progress bar (inverted) to let viewers know how much stream remains.

### First Step: Add directory to URL
Add the file to the URL of Browser Source in OBS.<br>
Example: C:\stream-time-left\src\app.html
<br><br>
**Note**: Don't use the file option, as it will not allow setting the parameters

### Second Step: Add params to config script
Add the parameters at the end of the URL after .html<br>
Example: C:\stream-time-left\src\app.html?percent=true&time=1

### Config params
**percent**: true or false<br>
**time**: number in minutes (0.5 = 30 seconds / 60 = 1 hour)