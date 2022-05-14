import scala.io.StdIn
import java.util.Scanner
import scala.collection.mutable.Map
//import scala.collection.mutable.

object Main {
  def main(args: Array[String]) = {
    val sc = new Scanner(System.in)
    val N, W = sc.nextInt()
    val A = List.fill(N)(sc.nextInt())

    var m = Map[Int, Boolean]()
    
    val l1 = A.filter(i => i <= W).map(i => i)
    l1.foreach { i => m += (i -> true) }

    val l2 = for {
      a <- A
      b <- A
      sum = a + b
      if (sum <= W && !m.getOrElse(a, false))
    } yield(sum)

    l2.foreach { i => m += (i -> true) }

    val l3 = for {
      a <- A
      b <- A
      c <- A
      sum = a + b + c
      if (sum <= W && !m.getOrElse(a, false))
    } yield(sum)


    println(l1.length + l2.length + l3.length)
  }
}
