module.exports = function solveSudoku(matrix) {
  // your solution
var arrIndices = [];
function getZeroIndices()
{
    for (var i = 0; i < 9; i++)
    {
        for (var j = 0; j < 9; j++)
        {
            if(matrix[i][j]===0)
            {
                arrIndices.push(i);
                arrIndices.push(j);
            }
        }
    }
}
function ease()
{ 
    getZeroIndices();  
    var l=arrIndices.length
    var arr = [];
    for (var i = 0; i < l; i+=2)
    {
      arr.length = 0;
      for(var h = 1; h < 10; h++)
      {
        if(!checkRow(arrIndices[i],h)&&!checkCol(arrIndices[i+1],h)&&!checkSquare(arrIndices[i],arrIndices[i+1],h))
        arr.push(h);
      }
      if(arr.length == 1) matrix[arrIndices[i]][arrIndices[i+1]] = arr[0]; 
    }
    arrIndices.length = 0;
    getZeroIndices();
}


function checkRow(a,number)
{
    for (var i = 0; i < 9; i++)
    {
        if(matrix[a][i] === number)
        {return true};
    }
    return false;
}

function checkCol(a,number)
{
    for (var i = 0; i < 9; i++)
    {
        if(matrix[i][a] === number)
        {return true};
    }
    return false;
}
function checkSquare(a,b,number)
{
    var s = (Math.floor(a/3))*3;
    var t = (Math.floor(b/3))*3;
    for (var i = s; i < s + 3; i++)
    {
        for(var j = t; j < t + 3; j++)
        {
            if(matrix[i][j] === number)
            {return true};
        }      
     }
     return false;
}

function solve()
{ 
   if(arrIndices.length === 0) return true;
    for (var i = 0; i < 9; i++)
    {
        for (var j = 0; j < 9; j++)
        {
          if(matrix[i][j] === 0)
          {
            for(var h = 1; h < 10; h++)
            {
              if(!checkRow(i,h) && !checkCol(j,h) && !checkSquare(i,j,h))
              {
                matrix[i][j] = h;
                if (solve())
                return true;

                matrix[i][j] = 0;
              }
            }
            return false;
          }  
        }      
    }
  return true;    
}

ease();
solve();
return matrix;
}

