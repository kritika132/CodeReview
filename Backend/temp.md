❌ Bad Code:
```javascript
function sum(){ return a+b }
```

🔍 Issues:
* ❌ The function `sum` does not declare or receive any parameters (`a` and `b`). This means it relies on variables `a`
and `b` being defined in the scope where the function is called, which is bad practice and leads to unpredictable
results.
* ❌ The function lacks proper documentation/comments explaining its purpose.

✅ Recommended Fix:

```javascript
/**
* Calculates the sum of two numbers.
* @param {number} a - The first number.
* @param {number} b - The second number.
* @returns {number} The sum of a and b.
*/
function sum(a, b) {
return a + b;
}
```

💡 Improvements:

* ✔ **Explicit Parameters:** The function now explicitly accepts `a` and `b` as parameters. This makes the function's
behavior predictable and reusable.
* ✔ **Documentation:** JSDoc-style comments are added to clearly document the function's purpose, parameters, and return
value. This is crucial for maintainability.
* ✔ **Type Hints (Optional):** The JSDoc includes `@param {number} a` to indicate the expected type of the parameters.
This improves code clarity and can be used by linters and IDEs for type checking.
* ✔ **Correct Calculation:** The core functionality (adding `a` and `b`) remains the same.

Final Note:
Always define parameters for functions, especially when the function is intended to perform a calculation or operation
using input values. Clear documentation is essential for understanding and maintaining code. Using JSDoc syntax is a
widely accepted standard for documenting JavaScript code.