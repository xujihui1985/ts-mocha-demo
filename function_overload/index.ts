// function overload

/**
 * reverse the string
 * @param str the string to reverse
 */
function reverse(str: string): string;

/**
 * reverse the array
 * @param array the array to reverse
 */
function reverse<T>(array: T[]): T[];
function reverse(stringOrArray: string | any[]): string | any[] {
  return typeof stringOrArray === "string"
    ? [...stringOrArray].reverse().join("")
    : stringOrArray.reverse().join();
}

const res = reverse([123]);
const res2 = reverse("aaaaaaaasfdsf");