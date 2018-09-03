// The Singleton Pattern limits the number of instances of a particular object to just one. This single instance is called the singleton.

Singletons are useful in situations where system-wide actions need to be coordinated from a single central place. An example is a database connection pool. The pool manages the creation, destruction, and lifetime of all database connections for the entire application ensuring that no connections are 'lost'.

Singletons reduce the need for global variables which is particularly important in JavaScript because it limits namespace pollution and associated risk of name collisions. The Module pattern (see our JavaScript + jQuery Design Pattern Framework) is JavaScript's manifestation of the Singleton pattern.

Several other patterns, such as, Factory, Prototype, and Façade are frequently implemented as Singletons when only one instance is needed.


// The Singleton object is implemented as an immediate anonymous function. The function executes immediately by wrapping it in brackets followed by two additional brackets. It is called anonymous because it doesn't have a name.

The getInstance method is Singleton's gatekeeper. It returns the one and only instance of the object while maintaining a private reference to it which is not accessible to the outside world.

The getInstance method demonstates another design pattern called Lazy Load. Lazy Load checks if an instance has already been created; if not, it creates one and stores it for future reference. All subsequent calls will receive the stored instance. Lazy loading is a CPU and memory saving technique by creating objects only when absolutely necessary.

Singleton is a manifestation of a common JavaScript pattern: the Module pattern. Module is the basis to all popular JavaScript libraries and frameworks (jQuery, Backbone, Ember, etc.). To learn how to benefit from Module, Lazy Load and many other JavaScript patterns in your own projects, check out our unique JavaScript + jQuery Design Pattern Framework.

The Bridge pattern allows two components, a client and a service, to work together with each component having its own interface. Bridge is a high-level architectural pattern and its main goal is to write better code through two levels of abstraction. It facilitates very loose coupling of objects. It is sometimes referred to as a double Adapter pattern.

An example of the Bridge pattern is an application (the client) and a database driver (the service). The application writes to a well-defined database API, for example ODBC, but behind this API you will find that each driver's implementation is totally different for each database vendor (SQL Server, MySQL, Oracle, etc.).

The Bridge pattern is a great pattern for driver development but it is rarely seen in JavaScript.

// input devices
 
var Gestures = function (output) {
    this.output = output;
 
    this.tap = function () { this.output.click(); }
    this.swipe = function () { this.output.move(); }
    this.pan = function () { this.output.drag(); }
    this.pinch = function () { this.output.zoom(); }
};
 
var Mouse = function (output) {
    this.output = output;
 
    this.click = function () { this.output.click(); }
    this.move = function () { this.output.move(); }
    this.down = function () { this.output.drag(); }
    this.wheel = function () { this.output.zoom(); }
};
 
// output devices
 
var Screen = function () {
    this.click = function () { log.add("Screen select"); }
    this.move = function () { log.add("Screen move"); }
    this.drag = function () { log.add("Screen drag"); }
    this.zoom = function () { log.add("Screen zoom in"); }
};
 
var Audio = function () {
    this.click = function () { log.add("Sound oink"); }
    this.move = function () { log.add("Sound waves"); }
    this.drag = function () { log.add("Sound screetch"); }
    this.zoom = function () { log.add("Sound volume up"); }
};
 
// logging helper
 
var log = (function () {
    var log = "";
 
    return {
        add: function (msg) { log += msg + "\n"; },
        show: function () { alert(log); log = ""; }
    }
})();
 
function run() {
 
    var screen = new Screen();
    var audio = new Audio();
 
    var hand = new Gestures(screen);
    var mouse = new Mouse(audio);
 
    hand.tap();
    hand.swipe();
    hand.pinch();
 
    mouse.click();
    mouse.move();
    mouse.wheel();
 
    log.show();
}
