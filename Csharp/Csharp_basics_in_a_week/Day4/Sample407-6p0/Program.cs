// // See https://aka.ms/new-console-template for more information
// Console.WriteLine("Hello, World!");

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sample407
{
    class Program
    {
	static void Main(string[] args)
	{
	    Console.WriteLine("Hello, World! (Sample407-6p0)");
	    //
	    // String[]? a = new String[10000];
	    String[] a = new String[10000];
	    for (int i = 0; i < 10000; i++)
	    {
		a[i] = new String('M', 10000);
	    }
	    Console.WriteLine("メモリ使用量(CG発動前): " + GC.GetTotalMemory(false));
	    a = null;
	    Console.WriteLine("メモリ使用量(参照解除後): " + GC.GetTotalMemory(false));
	    GC.Collect();
	    Console.WriteLine("メモリ使用量(CG発動後): " + GC.GetTotalMemory(false));	    
	}
    }
}
