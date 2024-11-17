/*
*  ESP32 WebServer (Station Mode) Example
*  Full Tutorial @ https://deepbluembedded.com/esp32-wifi-library-examples-tutorial-arduino/
*/
#include <WiFi.h>
#include <WebServer.h>
 
// Replace with your own network credentials
const char* ssid = "yourNetworkSSID";
const char* password = "yourNetworkPassword";
 
WebServer server(80);
 
const int led1Pin = 25;
const int led2Pin = 13;
int ledState = LOW;
int ledBrightness = 0;
 
const char html[] PROGMEM = R"rawliteral(
