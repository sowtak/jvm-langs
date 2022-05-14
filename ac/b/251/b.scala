import scala.io.StdIn
import java.util.Scanner
import scala.collection.mutable.Map
import scala.collection.mutable.ArrayBuffer
//import scala.collection.mutable.

object Main {
  def main(args: Array[String]) = {
    val sc = new Scanner(System.in)
    val N, W = sc.nextInt()
    val A = List.fill(N)(sc.nextInt())
    var ab = ArrayBuffer.fill(W+1)(0)
    
    var i = 0
    var j = 0
    var k = 0
    while (i<N) {
      if (A(i)<=W) 
        ab(A(i)) = 1
      i+=1
    }

    println()
   
    i=0
    j=1
    while(i<N) {
      while(j<N) {
        val sum = A(i) + A(j)
        if (sum <= W)
          ab(sum)=1
        j+=1
      }
      i+=1
      j=i+1
    }

    println()

    i=0
    j=1
    k=2
    while(i<N) {
      while(j<N) {
        while(k<N) {
          val sum = A(i)+A(j)+A(k)
          if (sum <= W)
            ab(sum)=1
          k+=1
        }
        j+=1
        k=j+1
      }
      i+=1
      j=i+1
      k=j+1
    }
    println(ab.count(i => i==1))
  }
}
