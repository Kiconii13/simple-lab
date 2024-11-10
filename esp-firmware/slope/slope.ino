#include <TFT_eSPI.h>                     // Include the TFT_eSPI library

// Pins for analog sensors
const int analogPin1 = 26;               // Analog input pin for sensor 1
const int analogPin2 = 25;               // Analog input pin for sensor 2
const int analogPin3 = 36;               // Analog input pin for sensor 3
const int threshold = 50;                // Threshold for sudden change detection

int prevADCValue1 = 0;                   // Previous ADC value for sensor 1
int prevADCValue2 = 0;                   // Previous ADC value for sensor 2
int prevADCValue3 = 0;                   // Previous ADC value for sensor 3

bool inBreak1to3 = false;                // Flag for break between sensor 1 and sensor 3
bool inBreak2to3 = false;                // Flag for break between sensor 2 and sensor 3
unsigned long breakStartTime1to3 = 0;    // Start time of break between sensor 1 and sensor 3
unsigned long breakStartTime2to3 = 0;    // Start time of break between sensor 2 and sensor 3

TFT_eSPI tft = TFT_eSPI();               // Create an instance of the TFT display object
int colorCycleIndex = 0;                 // Index to cycle between colors

void setup() {
  Serial.begin(9600);                    // Initialize serial communication
  tft.init();                            // Initialize the TFT display
  tft.setRotation(1);                    // Set rotation to landscape mode
  tft.fillScreen(TFT_BLACK);             // Clear the screen with black background
  tft.setTextSize(3);                    // Set larger text size for readability
}

void loop() {
  unsigned long currentTime = micros();  // Current time in microseconds

  // Read current ADC values for all sensors
  int currentADCValue1 = analogRead(analogPin1);
  int currentADCValue2 = analogRead(analogPin2);
  int currentADCValue3 = analogRead(analogPin3);

  int change1 = abs(currentADCValue1 - prevADCValue1); // Change in sensor 1
  int change2 = abs(currentADCValue2 - prevADCValue2); // Change in sensor 2
  int change3 = abs(currentADCValue3 - prevADCValue3); // Change in sensor 3

  // Detect sudden changes for break between sensor 1 and sensor 3
  if (change1 > threshold && !inBreak1to3) {
    inBreak1to3 = true;
    breakStartTime1to3 = currentTime;
  }

  // Detect sudden changes for break between sensor 2 and sensor 3
  if (change2 > threshold && !inBreak2to3) {
    inBreak2to3 = true;
    breakStartTime2to3 = currentTime;
  }

  // End break between sensor 1 and sensor 3
  if (inBreak1to3 && change3 > threshold) {
    unsigned long breakDuration1to3 = currentTime - breakStartTime1to3;
    Serial.print("dur1: ");
    Serial.print(breakDuration1to3);
    Serial.println(" us");
    
    // Update color for display
    uint16_t color = getNextColor();     // Get the next color in the cycle
    
    // Display dur1 on TFT
    tft.fillRect(0, 30, 240, 30, TFT_BLACK); // Clear previous dur1 line
    tft.setTextColor(color, TFT_BLACK);   // Set the color for dur1 text
    tft.drawString("dur1: " + String(breakDuration1to3) + "us", 10, 30);
    
    inBreak1to3 = false;
  }

  // End break between sensor 2 and sensor 3
  if (inBreak2to3 && change3 > threshold) {
    unsigned long breakDuration2to3 = currentTime - breakStartTime2to3;
    Serial.print("dur2: ");
    Serial.print(breakDuration2to3);
    Serial.println(" us");
    
    // Update color for display
    uint16_t color = getNextColor();     // Get the next color in the cycle

    // Display dur2 on TFT
    tft.fillRect(0, 70, 240, 30, TFT_BLACK); // Clear previous dur2 line
    tft.setTextColor(color, TFT_BLACK);   // Set the color for dur2 text
    tft.drawString("dur2: " + String(breakDuration2to3) + "us", 10, 70);
    
    inBreak2to3 = false;
  }

  // Update previous ADC values
  prevADCValue1 = currentADCValue1;
  prevADCValue2 = currentADCValue2;
  prevADCValue3 = currentADCValue3;
}

// Function to get the next color in a red-blue-white cycle
uint16_t getNextColor() {
  uint16_t color;
  if (colorCycleIndex == 0) {
    color = TFT_RED;
  } else if (colorCycleIndex == 1) {
    color = TFT_BLUE;
  } else {
    color = TFT_WHITE;
  }
  
  colorCycleIndex = (colorCycleIndex + 1) % 3;  // Cycle through 0, 1, 2
  return color;
}
