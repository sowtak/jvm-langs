import java.io.PrintWriter
import java.util.*
import kotlin.math.*

fun PrintWriter.solve() {
    val n = nextInt()
    val m = nextInt()
    val adj = Array(n) { mutableListOf<Int>() }
    for (i in 0 until m) {
        val v1 = nextInt() - 1
        val v2 = nextInt() - 1
        adj[v1].add(v2)
        adj[v2].add(v1)
    }
    val lst = mutableListOf<Pair<Int, Int>>()
    val visited = BooleanArray(n) { false }
    fun dfs(v: Int, par: Int) {
        visited[v] = true
        for (w in adj[v]) {
            if (!visited[w]) {
                dfs(w, v)
                lst.add(w to v)
            }
        }
    }
    dfs(0, -1)
    val que: Queue<Int> = ArrayDeque()
    que.add(0)
    visited.fill(false)
    visited[0] = true
    while (que.isNotEmpty()) {
        val v = que.poll()
        for (w in adj[v]) {
            if (!visited[w]) {
                visited[w] = true
                que.add(w)
                lst.add(v to w)
            }
        }
    }
    for ((v, w) in lst) {
        println("${v + 1} ${w + 1}")
    }
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
