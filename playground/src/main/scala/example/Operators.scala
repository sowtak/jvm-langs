trait Category [~>[_,_]] {
  def compose[A,B,C]
  (f: B~>C)
  (g: A~>B)
  : A~>C
}

object Main {
  def main(args: [String]) = {
    println("CC")
  }
}
