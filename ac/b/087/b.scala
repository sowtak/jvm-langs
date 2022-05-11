import scala.io.StdIn
import java.util.Scanner
//import scala.collection.mutable.

object Main {
  def main(args: Array[String]) = {
    val sc = new Scanner(System.in)
    val a,b,c,x=sc.nextInt()

    val ans = solve(a,b,c,x)
    println(ans)
  }

  def solve(a: Int, b: Int, c: Int, x: Int): Int = {
    val xs = for {
      aa <- 0 to a
      bb <- 0 to b
      cc <- 0 to c
      total = 500*aa+100*bb+50*cc
      if total == x
    } yield (aa,bb,cc)
    xs.size
  }
}
