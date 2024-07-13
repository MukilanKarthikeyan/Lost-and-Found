Project K9 dev log

2024.05.05
Today I spent a lot of time looking through servo options. I need 12 servos so I trying to find a good deal on them
I need a minimum stall torque of 10kg*cm in order to be able to build a reasonable size bot. Looking at a leg design that is 10cm long which gives us 1kg on each servo and becuase when the bot walks we will always have two legs touching the ground we can have a weigth around 2kg

Looking at a miuzei servo, at 5 dollars a pop and looks like the stall torque is a solid 13.5kgcm at 4.8 volts

for a servo controller: SparkFun Servo pHAT for Raspberry Pi
https://www.sparkfun.com/products/15316
allows for control of 16 servos and cost appox $12 which is a steal considering how the other ones i've looked at cost 50 and require soldering



2024.05.05
 again pain of how to power servos 
Each sevo is demanding doubly 2Amps and I have 12 of them probably need to run raspberry pi separable as that can go up to 1.2A in theory and if I want to use a 25A converter then I should be able to plug the pi into an external source with the servo phats I’m planning on using. 

Need a lipo that discharges from 10-20 volts with enough Amps



This is more tedious than I expected I was hoping I can use two different 10A chips like James Brunson but unlike him I am using a raspberry pi and a servo hat controlling all 12 instead of each Indian leg module building isolated and controlled by a tnsy board. 

I wonder how dingo and kangak managed their power distribution, most Internet forums do not seem to have explanations if power distribution

2024.05.06
Figured out that stuff is much cheaper on Ali express (getting servos for half the price)
I have switched the type of board I’m using now to the PCA9685 board 
This means that I actually have terminal screw down connectors to supply power instead of having to worry about cable capacity: was trying to use a xt60 to usbc converter but they are only rated for 100w and I need  nearly 24A 5v

2024.05.31
first working servo test

=========================================

ORGANIZE the following: 
servos arrived sometime here










finalized bill of materials
joined build space

week1: brainstormming leg linakesgs and reserach
week2: designed CAD of leg and started on body
week3: launched on socials and servo testing


things since last dev log:
decided to use gobilda servo power distribution board: supports 30A current and is tileable perfect for my application (get two boards and around 30A of current)


- got a lipo charging dapter, voltage checker+ alarm,  and switch for safety (not an estop unforuntatly due to cost)

===================================================================
tanget on lipos
wth is lipo C rating? its for discharge
a 5200mamphour batter is 5.2 amp-hours
to get total battery time devide 60 (number of minutes) by C-rating
so 1C would be 60 minutes to depelete battery
30C would be 2 minutes of run time

SO currently on the project i have a 5200mAh battery 
running 2.1A on 12 servos needs 25.2A -> discharge rate
calculated C-rating: 25.2/5.2 = 4.375C
60/4.375 = 13.714 minutes of approx runtime

====================================================================

2024.07.04
It arrived! the xt60 -> xt30 converter arrived!i finally ahve all the piecies shipped!

2024.07.05
today we are working servo code

adafurit servo + pca9685 
dsservo: 
    angle of acutation 270 deg
    pulse width range: 500-2500 microseconds

refer to docs: https://learn.adafruit.com/circuitpython-on-raspberrypi-linux/installing-circuitpython-on-raspberry-pi

if you're following along well there's going to be a bit more reading. start here: https://learn.adafruit.com/adafruit-16-channel-servo-driver-with-raspberry-pi/hooking-it-up
