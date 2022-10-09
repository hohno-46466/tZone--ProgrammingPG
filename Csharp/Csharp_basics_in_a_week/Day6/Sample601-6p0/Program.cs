// // See https://aka.ms/new-console-template for more information
// Console.WriteLine("Hello, World!");

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sample601_6p0
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World! 6.0 (Sample601_6p0 (using 5.0 style))");
	    //
	    List<int> a = new List<int>();
	    a.Add(3);
	    a.Add(3);
	    a.Add(3);
	    a.Insert(1, 4);
	    for (int i = 0; i < a.Count; i++)
	    {
		Console.WriteLine("a[{0}] = {1} ", i, a[i]);
	    }
	    
        }
    }
}

