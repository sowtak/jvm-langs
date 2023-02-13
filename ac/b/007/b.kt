import java.io.PrintWriter
import java.util.*
import kotlin.math.*

fun PrintWriter.solve() {
  val (H,W)=readLine()!!.split(' ').map{it.toInt()}
  val (sy,sx)=readLine()!!.split(' ').map{it.toInt()}
  val (gy,gx)=readLine()!!.split(' ').map{it.toInt()}
  
}

fun main() {
    Thread(null, {
        val writer = PrintWriter(System.out, false)
        writer.solve()
        writer.flush()
    }, "solve", abs(1L.shl(26)))
        .apply { setUncaughtExceptionHandler { _, e -> e.printStackTrace(); kotlin.system.exitProcess(1) } }
        .apply { start() }.join()
}

// region Scanner
private var st = StringTokenizer("")
private val br = System.`in`.bufferedReader()

fun next(): String {
    while (!st.hasMoreTokens()) st = StringTokenizer(br.readLine())
    return st.nextToken()
}

fun nextInt() = next().toInt()
fun nextLong() = next().toLong()
fun nextLine() = br.readLine()
fun nextDouble() = next().toDouble()
// endregion
