/**
 * The Open-Closed Principle requires that classes should be open for extension and closed to modification.
 *
 */


// Below class does not follow OCP, so whenever we need to implement any new operation function we have to modify Opertation class.
enum OperatorType {
  Add,
  Sub,
  Multiply,
}

class Operation {
  public calculate(op: OperatorType, a: number, b: number): number {
    let answer: number;
    switch (op) {
      case OperatorType.Add:
        answer = a + b;
        break;

      case OperatorType.Sub:
        answer = Math.abs(a - b);
        break;

      // new operation will come here...
      default:
        answer = 0;
        break;
    }

    return answer;
  }
}



// Below operation interface and Add, Sub class together acheive OCP.
// Now whenever we need new operation we have to create a new class by implementing our interface
interface OperationInterface {
  caculate(a: number, b: number): number;
}

class AddOperation implements OperationInterface{
    public caculate(a: number, b: number): number {
        return a + b;
    }
}

class SubtractOperation implements OperationInterface{
    caculate(a: number, b: number): number {
        return Math.abs(a-b)
    }
}

// new operation classes will come here

(function () {
  const calculator = new Operation();

  console.log('__ Without OCP __');
  
  console.log(calculator.calculate(OperatorType.Add, 10, 20));
  console.log(calculator.calculate(OperatorType.Sub, 10, 20));


  console.log('__ With OCP __');
  const add = new AddOperation();
  console.log(add.caculate(10,20));

  const sub = new SubtractOperation();
  console.log(sub.caculate(10,20));
  
  
})();
