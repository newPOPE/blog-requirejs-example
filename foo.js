define(
  [],
  function() {
    var foo = {};
    foo.sayHello = function() {
      alert('Foo says hello');
    }

    return foo;
  }
);