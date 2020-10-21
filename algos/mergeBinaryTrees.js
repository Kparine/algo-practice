/**
 *
 * @param {TreeNode} val
 * @param {TreeNode} left
 * @param {TreeNode} right
 */

class TreeNode {
	constructor(val, left, right) {
		this.val = val === undefined ? 0 : val;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
	}
}

var mergeBinaryTrees = function (t1, t2) {
	if (!t1 && !t2) return null;
	if (!t1 || !t2) return t1 || t2;

	const root = new TreeNode(t1.val + t2.val);
	let right = mergeBinaryTrees(t1.right, t2.right);
	let left = mergeBinaryTrees(t2.left, t2.left);
	root.right = right;
	root.left = left;

	return root;
};
const tree1 = [1, 3, 2, 5];
const tree2 = [2, 1, 3, null, 4, null, 7];
const result = mergeBinaryTrees(tree1, tree2);
console.log("result ******------>>>>>>", result);
