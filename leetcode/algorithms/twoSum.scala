object Main {

  def twoSum(nums: Array[Int], target: Int): Array[Int] = {
    var hashmap = new scala.collection.mutable.HashMap[Int, Int]()
    var result: Array[Int] = Array(0,0)
    var i = 0

    while(result.sum == 0) {
      val diff = target - nums(i)

      if (hashmap.contains(diff)) {
        result(0) = i
        result(1) = hashmap(diff)
      } else {
        hashmap(nums(i)) = i
      }
      i += 1
    }
    result
  }

  def main(args: Array[String]) = {
    val nums: Array[Int] = Array(2,7,8)
    val target = 9
    println(twoSum(nums, target))
  }
}
