import scala.io.StdIn
import java.util.Scanner
//import scala.collection.mutable.

object Main {
  def main(args: Array[String]) = {
    val sc = new Scanner(System.in)
    var S = sc.next()
    
    if (S.length == 1)
      S=S++S++S++S++S++S
    else if (S.length == 2)
      S=S++S++S
    else
      S=S++S

    println(S)
  }
}
