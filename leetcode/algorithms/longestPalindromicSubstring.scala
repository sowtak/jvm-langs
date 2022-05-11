object Solution {
  def main(args: Array[String]) = {
    println("")
  }


  def longestPalindrome(s: String): String  = {
    var sa: Array[String] = new Array()
    val n = s.length
    var m = 0
    var pre = 0
    for (i <- 1..n, j <- 1..n) {
      val slc = s slice(i,j)
      var m = slc.length
      if (isPalindrome(slc)) {
        if (m>pre)
          ret = m
      }
    }
    
    def isPalindrome(ss: String): Boolean = {
      val ret = ss == ss.reverse
      ret
    }
  }

}
