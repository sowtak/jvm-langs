import scala.io.StdIn
import java.util.Scanner
//import scala.collection.mutable.

object Main {
  def main(args: Array[String]) = {
    val sc = new Scanner(System.in)
    val n = sc.nextInt()
    val A = Seq.fill(n)(sc.nextInt())

    val ans = solve(A)
    println(ans)
  }

  def solve(list: Seq[Int]): Int = {
    val xs = Iterator
    .iterate(list) {_.map {_/2}}
    .takeWhile {_.forall {_%2==0}}
    
    xs.size
  }
}
