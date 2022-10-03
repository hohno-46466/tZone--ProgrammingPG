// // See https://aka.ms/new-console-template for more information
// Console.WriteLine("Hello, World!");

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sample402
{
    class Program
    {
	static void Main(string[] args)
	{
	    Console.WriteLine("Hello, World! (Sample402-6p0)");
	    Calc calc = new Calc();
	    int a = 1, b = 2, c = 3;
	    int ans1 = calc.Add(a,b);
	    int ans2 = calc.Add(a,b,c);
	    Console.WriteLine("{0} + {1} = {2}", a, b, ans1);
	    Console.WriteLine("{0} + {1} + {2} = {3}", a, b, c, ans2);
	}
    }
}
