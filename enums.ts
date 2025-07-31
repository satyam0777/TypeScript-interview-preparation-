enum Direction {
  Up,
  Down,
  Left,
  Right,
}

let move: Direction = Direction.Up;

// String enums
enum Status {
  Success = "SUCCESS",
  Failure = "FAILURE",
}

function printStatus(status: Status) {
  console.log(status);
}