// Specify the kind of objects to create using a prototypical instance, and create new objects by copying this prototype.


The objective of the example is to show that with the Bridge pattern input and output devices can vary independently (without changes to the code); the devices are loosely coupled by two levels of abstraction.

JavaScript does not support abstract classes therefore Abstraction and Implementor are not included. However, their interfaces (properties and methods) are consistently implemented in RefinedAbstraction and ConcreteImplementor. In our example code the Abstraction represents Input devices and the Implementor represents Output devices.

Gestures (finger movements) and the Mouse are very different input devices, but their actions map to a common set of output instructions: click, move, drag, etc. Screen and Audio are very different output devices, but they respond to the same set of instructions. Of course, the effects are totally different, that is, video updates vs. sound effects. The Bridge pattern allows any input device to work with any output device.

The log function is a helper which collects and displays results.
