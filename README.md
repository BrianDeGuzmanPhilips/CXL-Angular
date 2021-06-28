# CXL-Angular

## Software Prerequisites

### Check if you have Node installed

In the terminal, check if you have node installed by running `node --version`.

If there's an error, install node from this site: <https://nodejs.org/en/download/>

### Check if you have Angular CLI installed

In the terminal, check if you have node installed by running `ng --version`.

If there's an error, run `npm install -g @angular/cli` to install the Angular CLI.
This will allow you to run the Angular app through the command line.

## Run the Angular app

Navigate to the front-end folder called 'cxl-front-end' using `cd cxl-front-end` in the terminal.

Run `npm install` to install the dependencies.

Then run `ng serve` or `ng server --open` to start the front-end app.

When running the Angular app in 6th floor, run `ng serve --host 0.0.0.0`

## Run the socket server

Navigate to the server server folder called 'socket-server' using `cd socket-server` in the terminal.

Run `npm install` to install the dependencies.

Then run `node .` to start the socket server.

## Navigation

There are 7 pages in this app you can navigate to. Each one corresponding to a monitor in the experience lab.

You can use `http://localhost:4200/{page-number}`.


_look at the Troubleshooting for info about the 'localhost'_

### Page Numbers

`page1` = this is the biggest screen in the lab. 6 monitors linked together into one. You can't miss it.

`page2, page3, page4` = These corresponds to the top three screens on the right of the big screen. Unlike their siblings to the bottom these aren't touch screens.

`page5, page6, page7` = These corresponds to the bottom three monitors in the lab. These monitors are touch screen.

`tablet` = This is the tablet controller that is used to change the which media is shown on the media wall. 

## Troubleshooting

In the experience lab itself, _localhost_ is changed to the IP address of the terminal running the computer itself.

When running the Angular app in 6th floor, run `ng serve --host 0.0.0.0`

Make sure this is the same ip address being used on the **/cxl-front-end/src/app/services/socket-service.service.ts** file in the front-end and the **socket-server/index.js** file in the server.
