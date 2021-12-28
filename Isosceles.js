
let number   =   8;
let string   =   "";
for(x=1; x<=number; ++x)
    {
        // Print spaces
        for(y=x; y<=number; ++y)
        {
           string+= " ";
        }
        // Print star/
        for(y =1; y<=((2*x)-1); ++y)
        {
            string+= "*";
        }
        // Print new line
        string+= "\n";
    }
console.log(string);