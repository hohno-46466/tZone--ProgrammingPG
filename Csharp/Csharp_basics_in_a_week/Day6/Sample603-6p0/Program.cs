// // See https://aka.ms/new-console-template for more information
// Console.WriteLine("Hello, World!");

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sample603_6p0
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World! 6.0 (Sample603_6p0 (using 5.0 style))");
	    //
	    Dictionary<String, String> capital = new Dictionary<String, String>();
	    capital["日本"] = "東京";
	    capital["イギリス"] = "ロンドン";
	    capital["フランス"] = "パリ";
	    capital["中国"] = "北京";
	    Console.WriteLine("世界の首都");
	    foreach (String s in capital.Keys)
	    {
		Console.WriteLine("{0}の首都は{1}です。", s, capital[s]);
	    }
	    
        }
    }
}
