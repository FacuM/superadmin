# superadmin

This Chrome extension is based in the script presented in the root of this branch and is a fork of Gabitox's work.

Browse "unpacked" to see the extension's source.

Browse "packed" to get an already packed version.

## How it works?

1) Go to the group's membership requests page on FB. Example: http://facebook.com/groups/groupname/requests/<br>
2) Leave the tab open and do whatever else you'd like to do.<br>
3) Enjoy while the bot do your dirty job ;)

Installing:

- Unpacked:

Go to chrome://extensions and enable "Developer mode". Then, click in "Load unpacked extension" and pick the folder "unpacked".

- Packed:

Go to chrome://extensions and drag the .crx file you got anywhere on the page.

## Editing the source

- Please see definition for minTime "var minTime=15552000;" at the second line (line 2, just in case) of "test.js" to change the minimum account creation date. It is in seconds. The default, means 6 months.

- Edit the numeric part of "}, 60000);" (from the function setTimeout at the bottom of "test.js"). Example: change 60000 by 5000 to set at "every 5 seconds". Please take in mind that lower numbers mean more resources usage. This value is measured in milliseconds.

- Edit the numeric part of "}, 5000);" (from the last line of "test.js" ) to set the waiting time. This ensures that the site has been completely loaded before the bot starts.