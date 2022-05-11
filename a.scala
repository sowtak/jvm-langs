class C[-A, +B] {
  def foo(param: A): B = ???
}

class Person(val name: String)
class Student(name: String, val university: String) extends Person(name)

val sample: C[Student, Person] = new C[Person, Student]

object Main {
  def main(args: Array[String]) =  {
    println(sample)
  }
}
