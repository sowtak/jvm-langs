//import scala.io.StdIn
import java.util.Scanner
import scala.collection.mutable.Map

object Main {
  def main(args: Array[String]) = {
    val sc = new Scanner(System.in)
    val N = sc.nextInt()
    var max = 0
    var m = Map[String, Boolean]()
    
    var i = N
    while(i>0) {
      i -= 1
      val s, t = sc.next()
      val k = m.getOrElse(s, false)
      m += (s -> true)
      if (max < t.toInt())
        max = t.toInt()
    }
  }
}
