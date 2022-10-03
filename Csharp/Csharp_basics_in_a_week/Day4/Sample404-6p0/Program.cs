// // See https://aka.ms/new-console-template for more information
// Console.WriteLine("Hello, World!");

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sample404
{
    class Program
    {
	static void Main(string[] args)
	{
	    Console.WriteLine("Hello, World! (Sample404-6p0)");
	    Access a = new Access();
	    // a.Data1 = 2;
	    a.Data2 = 2;
	    a.ShowData();
	    Console.WriteLine("a.data1 = {0}", a.Data1);
	    // Console.WRiteLine("a.data2 = {0}", a.Data2);
	}
    }
}
