import scala.io.StdIn
import java.util.Scanner
//import scala.collection.mutable.


case class Plan(t: Int, x: Int, y: Int)

object Main {
  def main(args: Array[String]) = {
    val sc = new Scanner(System.in)
    val n = sc.nextInt()
    val l = List.fill(n) {
      val t,x,y = sc.nextInt()
      Plan(t,x,y)
    }
  }

  def solve(t: Int, x: Int, y: Int): Boolean = {
    return true
  }
}
