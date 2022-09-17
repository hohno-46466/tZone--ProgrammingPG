using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sample207_5p0
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, Sample207_5p0!");

	    Console.Write("整数値を入力：");
	    int a = int.Parse(Console.ReadLine());
	    Console.WriteLine("a=" + a);
	    if (a > 0) {
		Console.WriteLine("aは正の数です。");
		}
        }
    }
}
